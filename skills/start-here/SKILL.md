---
name: start-here
description: Use first in any job search, or when the person shares a resume and wants help finding or applying to jobs. Reads the resume once and writes the profile file every other Dreamwork skill reads, including the facts application forms demand that resumes leave out.
---

# Start here

Build `.jobsearch/profile.md` from the person's resume. Every other skill in
this set reads that file, so nobody retypes a fact twice.

Most applications that stall do so on a question the resume cannot answer:
work authorization, sponsorship, pay, notice period, a full street address.
This skill collects those up front, in one batch, before the first application.

## Steps

1. Read the resume (PDF, DOCX or text). If there are several, ask which is the
   main one.
2. Create `.jobsearch/` in the working directory and write `profile.md` using
   the layout below. Copy the work history word for word. Do not improve it
   here.
3. Mark every field the resume does not answer as `ASK`.
4. Ask for all `ASK` fields in a single message, grouped by section. Say why
   each group matters in one line. Accept "skip" for any of them.
5. Write the answers into the file and show the person the finished profile.

## Profile layout

```markdown
# Profile

## Identity and contact
Legal name / preferred name / email / phone
Street address / city / state (two-letter code and full name) / ZIP / country
LinkedIn / GitHub or portfolio / personal site

## Work authorization
Countries where authorized to work without sponsorship
Needs sponsorship now? In the future?
Visa type and expiry, if any

## Targets
Functions and titles / seniority / locations / remote, hybrid or onsite
Willing to relocate? / pay floor with currency / earliest start or notice period

## Work history (as written)
The resume's own sections, headings, order and wording.

## Evidence not on the resume
Metrics, projects, tools and results the person tells you about.
Each line ends with its source: "(told me, 2026-01-15)".

## Standard answers
Years of experience by skill / highest degree / clearance / travel
Salary expectation / how they heard about roles / references available?

## Voluntary disclosures
Gender, ethnicity, veteran and disability questions.
Default: "Decline to self-identify" until the person says otherwise.

## Off limits
Current employer, companies to exclude, industries to skip.
```

## Rules

- Never guess a fact about a person. An unknown stays `ASK`.
- Store the state as both "CA" and "California". Forms reject one or the other.
- Keep the legal name and preferred name separate. Forms ask for each.
- Record where every fact in "Evidence" came from. `tailor-resume` and
  `cover-letter` may only use claims that trace to this file or the resume.
- Update this file whenever another skill learns a new fact.

## With Dreamwork

With the Dreamwork MCP connected and a key set, read `get_career_record` and
`get_preferences` first and fill the profile from them, then push new answers
with `save_application_answers` and `update_preferences`. Tool names can differ
by server version, so match on the tool descriptions.
