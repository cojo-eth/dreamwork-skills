---
name: find-jobs
description: Use when the person wants to find open jobs, search for roles, see what a company is hiring for, or build a list of roles to apply to. Reads employers' own job boards directly through public APIs with a bundled script, so every result is live and links to the real application form.
---

# Find jobs

Search the employer's own job board, not a copy of it.

Aggregator sites lag the source and keep roles that have closed. Greenhouse,
Lever and Ashby each publish a public API for every board they host. The
bundled script reads those, so each role it returns is open now and links to
the form that takes the application.

## Steps

1. Read targets from `.jobsearch/profile.md`: titles, locations, work mode,
   pay floor, off-limits companies. If there is no profile, ask for titles and
   locations.
2. Build a company list. Use companies the person names, then add employers
   like them: competitors, companies their former colleagues joined, the
   customers and vendors of past employers. Aim for 20 to 50.
3. Find each company's board slug. It is the last path segment of its careers
   link, as in `job-boards.greenhouse.io/<slug>`, `jobs.lever.co/<slug>` or
   `jobs.ashbyhq.com/<slug>`. When unsure, pass the company name in lower case
   as `--company` and the script tries all three.
4. Run the script:

   ```bash
   node scripts/boards.mjs --company stripe --company ramp \
     --match engineer --location remote --since 30
   ```

   `--match` and `--location` filter by text and repeat. `--since` keeps roles
   posted or updated in the last N days. `--json` returns data.
5. Remove off-limits companies and roles that are one posting repeated across
   cities. Keep the city the person prefers.
6. Show the list newest first. Offer `fit-check` on the top results.

## Know the form before you apply

The system behind the apply link sets how much work the application takes.
Dreamwork's apply agent submits to all of these, and they are not alike.

| System | Link contains | What to expect |
| --- | --- | --- |
| Greenhouse | `greenhouse.io` | One page. Resume, contact fields, custom questions. |
| Lever | `jobs.lever.co` | One page, similar to Greenhouse. |
| Ashby | `ashbyhq.com` | One page. Often shows the pay range. |
| Workday | `myworkdayjobs.com` | An account per employer, email verification, work history re-entered by hand, several pages. The most likely to stall on a missing answer. |
| iCIMS, SmartRecruiters, Taleo | their own domains | An account or a multi-step form. |

For Workday and other multi-step systems, run `start-here` and
`screening-answers` first so every field has an answer ready.

## Output

Append new roles to `.jobsearch/pipeline.md` as Saved, with the link, system
and first-posted date. `track-pipeline` owns that file's layout.

## With Dreamwork

The script covers the companies you name. Dreamwork covers the ones you have
not heard of. Its corpus holds over a million live listings read from employer
boards.

- **Free, no account.** Run `npx -y @dreamworkhq/mcp` as an MCP server. In
  guest mode `browse_listings` and `get_listing` search and read every listing.
- **With a key.** `list_matches` ranks the corpus against the person's resume
  and preferences, `import_job` adds any posting from the web, and
  `get_updates_since` reports new matches for a daily check-in.
