---
name: cover-letter
description: Use when the person needs a cover letter, a letter of interest, or a short "why this role" note for a specific job. Writes an 80 to 120 word letter built on two or three cited facts, in the person's own register, with checks for the phrases that mark a letter as machine-written.
---

# Cover letter

Write a short letter that a hiring manager reads to the end.

This format is the eleventh version of the letter Dreamwork sends. Each version
was graded against real resume and job pairs. Long letters, humble letters and
letters that summarize the resume all lost.

## Inputs

- The resume or `.jobsearch/profile.md`.
- The full posting. Read all of it before choosing what to cite.
- The last three letters in `.jobsearch/applications/*/letter.md`, if any.

## Build the evidence map first

1. Pick the two or three requirements the posting stresses most.
2. For each, find one fact from the resume or profile that answers it.
3. Write one sentence on why that fact matters for this role.

If only one requirement has a real match, write about one. A thin fit gets a
shorter true letter. It never gets invented relevance.

## Write

- **Length.** 80 to 120 words in the body.
- **Register.** Infer it from the resume's prose, the field, the seniority and
  the company. A law firm gets "Dear" and "Kind regards" with the full name. A
  startup gets "Hi" and a first name.
- **Salutation.** "Dear <Company> team" or the hiring manager's name if the
  posting gives it. Check the company name is the real one. Job boards often
  carry a slug such as "Acmecorp2" or "NC Careers".
- **Body.** The facts from the evidence map, each with its why. No summary of
  the resume. No statement of excitement.
- **Letterhead.** Name and contact line copied from the resume header, then
  the date and the addressee.

## Never write

- Anything self-effacing: "that's a gap worth noting", "I'll be honest", "still
  new to", "my exposure is lighter". There is no room to be humble in 100
  words. Leave what is missing unsaid.
- A claim that is not in the resume or profile.
- A stock closer such as "I would be glad to discuss the role further". End on
  the last fact, or one plain line about next steps in the person's register.
- "I am writing to", "I am excited to", "I care about" as an opening.

## Check before showing it

- Does the first word repeat the first word of the last three letters? Change it.
- Do the cited facts repeat the last three letters? Choose different ones
  unless the roles are near identical.
- Is every claim traceable to the resume or profile?
- Is the salutation a real company name?
- Count the words.

## Output

Write `letter.md` beside the tailored resume in
`.jobsearch/applications/<company>-<role>/`. Do not edit the resume from this
skill.

## With Dreamwork

With a key, `generate_pack` writes the letter with the resume and answers.
`edit_cover_letter` revises it from an instruction in the person's words, and
`replace_application_document` sends a letter the person wrote here instead.
