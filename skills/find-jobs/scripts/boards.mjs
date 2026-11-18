#!/usr/bin/env node
// Reads open roles from the public job board APIs of Greenhouse, Lever and Ashby.
// No account, no key, no dependencies. Requires Node 18 or later.
//
//   node boards.mjs --company stripe --company ramp --match engineer --location remote --since 30
//   node boards.mjs --greenhouse stripe --lever palantir --ashby ramp --json
//
// --company <slug>   try all three systems for this board slug (repeatable)
// --greenhouse|--lever|--ashby <slug>   read one system directly (repeatable)
// --match <text>     keep titles containing this text (repeatable, any match)
// --location <text>  keep locations containing this text (repeatable, any match)
// --since <days>     keep roles posted or updated within this many days
// --json             print JSON instead of a table

const args = process.argv.slice(2);
const opts = { company: [], greenhouse: [], lever: [], ashby: [], match: [], location: [], since: null, json: false };
for (let i = 0; i < args.length; i++) {
  const key = args[i].replace(/^--/, "");
  if (key === "json") opts.json = true;
  else if (key === "since") opts.since = Number(args[++i]);
  else if (key in opts) opts[key].push(args[++i]);
  else {
    console.error(`Unknown option: ${args[i]}`);
    process.exit(2);
  }
}

async function getJson(url) {
  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (!res.ok) return null;
  try {
    return await res.json();
  } catch {
    return null;
  }
}

const iso = (value) => {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString().slice(0, 10);
};

const readers = {
  async greenhouse(slug) {
    const data = await getJson(`https://boards-api.greenhouse.io/v1/boards/${slug}/jobs`);
    if (!data?.jobs) return null;
    return data.jobs.map((job) => ({
      ats: "greenhouse",
      company: job.company_name || slug,
      title: job.title?.trim(),
      location: job.location?.name || "",
      firstPosted: iso(job.first_published),
      updated: iso(job.updated_at),
      url: job.absolute_url,
    }));
  },
  async lever(slug) {
    const data = await getJson(`https://api.lever.co/v0/postings/${slug}?mode=json`);
    if (!Array.isArray(data)) return null;
    return data.map((job) => ({
      ats: "lever",
      company: slug,
      title: job.text?.trim(),
      location: job.categories?.location || "",
      firstPosted: iso(job.createdAt),
      updated: iso(job.createdAt),
      url: job.hostedUrl,
    }));
  },
  async ashby(slug) {
    const data = await getJson(`https://api.ashbyhq.com/posting-api/job-board/${slug}?includeCompensation=true`);
    if (!data?.jobs) return null;
    return data.jobs
      .filter((job) => job.isListed !== false)
      .map((job) => ({
        ats: "ashby",
        company: slug,
        title: job.title?.trim(),
        location: [job.location, ...(job.secondaryLocations || []).map((l) => l.location)].filter(Boolean).join("; "),
        firstPosted: iso(job.publishedAt),
        updated: iso(job.publishedAt),
        pay: job.compensation?.compensationTierSummary || undefined,
        url: job.jobUrl,
      }));
  },
};

const tasks = [];
for (const system of Object.keys(readers)) {
  for (const slug of opts[system]) tasks.push({ slug, systems: [system] });
}
for (const slug of opts.company) tasks.push({ slug, systems: Object.keys(readers) });

if (tasks.length === 0) {
  console.error("Give at least one --company, --greenhouse, --lever or --ashby slug.");
  process.exit(2);
}

const jobs = [];
const notFound = [];
await Promise.all(
  tasks.map(async ({ slug, systems }) => {
    const results = await Promise.all(systems.map((system) => readers[system](slug).catch(() => null)));
    const found = results.filter(Boolean);
    if (found.length === 0) notFound.push(slug);
    for (const list of found) jobs.push(...list);
  }),
);

const includesAny = (text, needles) =>
  needles.length === 0 || needles.some((needle) => (text || "").toLowerCase().includes(needle.toLowerCase()));
const cutoff = opts.since ? Date.now() - opts.since * 86400000 : null;

const kept = jobs
  .filter((job) => includesAny(job.title, opts.match))
  .filter((job) => includesAny(job.location, opts.location))
  .filter((job) => !cutoff || !job.updated || new Date(job.updated).getTime() >= cutoff)
  .sort((a, b) => (b.updated || "").localeCompare(a.updated || ""));

if (opts.json) {
  console.log(JSON.stringify({ jobs: kept, notFound }, null, 2));
} else {
  console.log("| Company | Title | Location | First posted | Updated | System | Link |");
  console.log("| --- | --- | --- | --- | --- | --- | --- |");
  for (const job of kept) {
    console.log(
      `| ${job.company} | ${job.title} | ${job.location} | ${job.firstPosted || ""} | ${job.updated || ""} | ${job.ats} | ${job.url} |`,
    );
  }
  console.log(`\n${kept.length} roles from ${tasks.length - notFound.length} boards.`);
  if (notFound.length) console.log(`No public board found for: ${notFound.join(", ")}`);
}
