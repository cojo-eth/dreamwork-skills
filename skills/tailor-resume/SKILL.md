---
name: tailor-resume
description: Use when the person wants their resume tailored, targeted or optimized for a specific job posting. Rewrites wording for one role, keeps the person's own structure, and audits its own output line by line so nothing is invented, dropped or re-dated.
---

# Tailor resume

Tailor one resume to one posting, then prove the result is still true.

Language models tailor resumes in a predictable way. They reorganize sections
the person chose on purpose, drop facts without saying so, and add tools the
posting mentions. Dreamwork measured these failures on 210 real resume and job
pairs and by hand-grading production output. The rules and the audit below are
what fixed them.

## Inputs

- The resume, and `.jobsearch/profile.md` if it exists.
- The full posting. Read all of it. Requirements usually sit below the company
  introduction, well past the first screen.

## What tailoring may change

- Wording inside a bullet.
- The summary.
- The order of bullets within one role.
- Which true skills are named, using the posting's term when the resume
  supports it ("k8s" to "Kubernetes").

## What tailoring may not change

- **Structure.** Keep every section the person wrote, under their heading, in
  their order, with entries in their order. Do not merge custom sections into
  "Projects". Do not split or regroup roles.
- **Facts.** Employers, titles, dates, degrees, numbers and tools stay exactly
  as written.
- **Scope.** "Contributed to" does not become "led". A team result does not
  become a personal one.

## Keywords

For each requirement in the posting, find the line in the resume or profile
that supports it. If one exists, use the posting's wording there. If none
exists, do not add it. List it under "Gaps" in the ledger so the person can
tell you about real experience you did not know of.

## Audit the output

Do this by comparing the two texts. Do not write it from memory of what you
changed, because that account is often wrong.

1. **Dropped lines.** List every source line with no counterpart in the output.
   Restore clearance, citizenship, work authorization, legal-name notes,
   certifications and every metric unless the person asked to cut them.
2. **Numbers and dates.** Every number and date in the output must appear in
   the source with the same value, attached to the same role.
3. **New proper nouns.** Any tool, company, product or credential in the
   output that is absent from the resume and profile is invented. Remove it.
4. **Structure.** Same sections, same order, same count of roles.
5. **Ledger.** Build the "what changed" list from this comparison.

## Output

Write to `.jobsearch/applications/<company>-<role>/`:

- `resume.md`, the tailored resume
- `ledger.md`, with Changed, Kept as is, and Gaps

Show the ledger to the person before anything is sent.

## With Dreamwork

With a key, `generate_pack` writes the tailored resume, letter and form answers
for a saved role in one call, and `get_application_documents` returns the
resume as PDF and DOCX. `edit_resume` revises it against an instruction, and
`restore_material` undoes an edit.
