---
name: ghost-check
description: Use before applying to a job, or when the person asks whether a listing is real, still open, a ghost job, or worth the time. Tests one posting against the signals of a dead or evergreen listing and returns Live, Unclear or Likely dead with the evidence.
---

# Ghost check

Check that a job exists before writing anything for it.

Dreamwork tracks which applications get an answer, across thousands of roles
and employers, and publishes the results as the Ghosting Index. Two findings
shape this skill. Most applications get no reply. And silence tracks the
listing and the employer far more than it tracks the applicant's fit, so a
better resume does not rescue a dead listing. The cheapest improvement to a job
search is to stop applying to those.

## Signals

Check each and note the evidence.

1. **Is it on the employer's own board?** This is the strongest test. If the
   role appears on an aggregator and is gone from the company's careers page,
   it is closed. For Greenhouse, Lever and Ashby boards, run
   `find-jobs/scripts/boards.mjs --company <slug> --match "<title>"`.
2. **Age.** First posted more than 45 days ago and still open. Senior and
   specialist roles run longer, so weigh this with the others.
3. **Reposting.** The same title and text with a fresh date. On Greenhouse the
   script shows both the first-posted and updated dates. A wide gap with no
   change in text means a refresh.
4. **Evergreen wording.** "Always looking", "talent community", "future
   openings", "general application", "pipeline role".
5. **Cloned listings.** One posting copied across many cities or many near
   identical titles.
6. **No specifics.** No team, no manager, no projects, no pay range where the
   law requires one.
7. **The apply link.** It lands on a generic careers page, a login wall with
   no role attached, or an error.
8. **Company news.** A layoff, a hiring freeze or an acquisition since the
   posting date. Search the news for the last 90 days.

## Verdict

- **Live.** On the employer's board, posted or changed in the last 30 days,
  specific about the work.
- **Unclear.** One or two weak signals. Apply only if the fit is strong, and
  do not write custom materials first.
- **Likely dead.** Gone from the employer's board, or three or more signals.
  Skip it. Tell the person why in two lines.

## Rules

- Report evidence, not a feeling. Quote the date, the phrase or the link.
- A recruiter's direct message about a role outranks every signal here.
- Do not name an employer as a "ghoster" from one listing. This skill judges
  listings.

Save the verdict to `ghost.md` in the application's folder and record it in
`.jobsearch/pipeline.md`.

## With Dreamwork

The [Ghosting Index](https://www.dreamworkhq.com/ghosting-index?utm_source=github_readme&utm_medium=skills_repo&utm_campaign=dreamwork_skills)
grades employers on how often they answer applicants. With a key, `get_job`
returns a listing's posted date and status from Dreamwork's own crawl of the
employer's board.
