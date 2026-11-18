# Dreamwork skills

Ten job-search skills for AI agents, built from what [Dreamwork](https://www.dreamworkhq.com/?utm_source=github_readme&utm_medium=skills_repo&utm_campaign=dreamwork_skills) learned sending real applications to real employers.

Dreamwork runs an agent that applies to jobs for people. It reads over a million live listings, writes the resume and letter for each role, fills the employer's form, and watches the inbox for what comes back. These skills carry the rules that work taught us. They run in Claude Code, Codex, Cursor, OpenClaw and any agent that reads `SKILL.md` files. No account is needed.

```bash
npx skills add cojo-eth/dreamwork-skills
```

## The skills

### Start

| Skill | What it does |
| --- | --- |
| [`start-here`](skills/start-here/SKILL.md) | Reads your resume once and writes the profile every other skill uses. It asks up front for the facts that stall applications and that resumes leave out: work authorization, sponsorship, pay, notice period, full address. |
| [`resume-audit`](skills/resume-audit/SKILL.md) | Shows you what an applicant tracking system reads from your file, beside what you meant. Ranks the fixes with parsing blockers first, using the layouts our parser has seen fail. |

### Choose

| Skill | What it does |
| --- | --- |
| [`find-jobs`](skills/find-jobs/SKILL.md) | Reads employers' own Greenhouse, Lever and Ashby boards through their public APIs with a bundled script. Every result is open now and links to the real form. Tells you which application systems take one page and which need an account and several. |
| [`fit-check`](skills/fit-check/SKILL.md) | Returns Apply, Stretch or Skip with evidence. Checks requirements in the order employers screen: knockouts, then level, then function, then skills. |
| [`ghost-check`](skills/ghost-check/SKILL.md) | Tests a listing against eight signals of a dead or evergreen posting, starting with whether it is still on the employer's own board. Built on the data behind our Ghosting Index. |

### Write

| Skill | What it does |
| --- | --- |
| [`tailor-resume`](skills/tailor-resume/SKILL.md) | Tailors wording to one posting and keeps your structure. Then it audits its own output by diff, so no fact is dropped, no date moves and no tool is invented. Rules tested on 210 real resume and job pairs. |
| [`cover-letter`](skills/cover-letter/SKILL.md) | Writes 80 to 120 words on two or three cited facts, in your register. The eleventh version of the letter we send, with checks for the openers, closers and salutations that mark a letter as machine-written. |
| [`screening-answers`](skills/screening-answers/SKILL.md) | Answers form questions with a five-rung ladder: on file, derived, estimated, declined, ask once. A stop list covers what an agent must never guess. Every answer is saved, so the second application asks nothing. |

### Send and track

| Skill | What it does |
| --- | --- |
| [`track-pipeline`](skills/track-pipeline/SKILL.md) | Keeps one pipeline file and sorts employer mail into codes, confirmations, assessments, interview requests and rejections. Matches each message to its application by company and role, because an employer's reply arrives as a new thread with an unrelated subject. |
| [`apply`](skills/apply/SKILL.md) | Submits the application through Dreamwork's apply agent, with a confirmation step and a receipt. Without a Dreamwork key it builds a submission packet in the form's order for you to paste. |

## Why these are different

A prompt can ask a model to "tailor this resume". We graded what models produce when asked, and read the forms that output has to pass. Each skill carries the failures we found as checks it runs on itself.

- **They check their own work.** `tailor-resume` and `cover-letter` compare their output to the source and fix what the comparison finds. The model's own account of what it changed is often wrong, so the skills do not trust it.
- **Form knowledge.** `screening-answers`, `start-here` and `find-jobs` come from the questions and systems that stopped real applications.
- **Live sources.** `find-jobs` and `ghost-check` read the employer's board, not a copy.
- **One shared record.** Every skill reads and writes `.jobsearch/` in your working directory. A fact you give once is never asked again.

```text
.jobsearch/
  profile.md          who you are and what forms will ask
  answers.md          every screening answer, saved by question
  pipeline.md         every role and where it stands
  applications/
    acme-staff-engineer/
      fit.md  ghost.md  resume.md  ledger.md  letter.md  answers.md
```

## With Dreamwork

The skills do the work for one role at a time. Dreamwork does it every day, across the whole market, and sends the application.

Connect the Dreamwork MCP server and the same skills call it:

```bash
# Free guest mode: search and read over a million live listings
npx -y @dreamworkhq/mcp

# With a key: ranked matches, materials, pipeline, inbox, applying
claude mcp add --transport http dreamwork https://mcp.dreamworkhq.com/mcp \
  --header "Authorization: Bearer sk_..."
```

| On your own | With Dreamwork |
| --- | --- |
| Boards of companies you name | Every live listing, ranked against your resume |
| Materials for one role | Resume, letter and answers for up to 10 roles in one call |
| A packet you paste into the form | An agent that fills and submits the form, with a receipt |
| Mail you paste in | An inbox that matches employer replies to applications |

Any Dreamwork account can create a key, including the free plan. Each key carries its own scopes: read, write, apply, send mail. [Get a key](https://www.dreamworkhq.com/?utm_source=github_readme&utm_medium=skills_repo&utm_campaign=dreamwork_skills).

## Install by hand

Copy any folder under `skills/` into your agent's skills directory, such as `~/.claude/skills/` for Claude Code. `find-jobs` needs Node 18 or later for its script. Nothing else has dependencies.

## Contributing

Issues and pull requests are welcome, most of all a case where a skill produced something untrue or missed a form question. Remove personal details before you post an example.

## License

MIT. See [LICENSE](LICENSE).
