---
name: resume-audit
description: Use when the person asks for resume feedback, a resume review, an ATS check, or why their resume is not getting responses. Shows what an applicant tracking system reads from the file and ranks the fixes, parsing blockers first.
---

# Resume audit

A resume is read twice: by a parser that fills the employer's form, then by a
person. This skill checks the parser's reading first, because a fact the parser
misses never reaches the person.

The parse checks come from Dreamwork's resume parser and the layouts it has
seen fail across a large volume of real resumes.

## Steps

1. Extract the file's text the way a parser does: plain text, reading order as
   stored in the file. For a PDF use `pdftotext -layout` if available.
2. Show the person the extracted text beside what they meant. Point at every
   line that came out wrong, out of order or missing.
3. Run the checks below.
4. Report fixes in three groups: **blocks parsing**, **weakens the case**,
   **polish**. One line per fix, with the exact line it applies to.
5. Do not rewrite the resume unless asked. `tailor-resume` does that per role.

## Parse checks

- **One column.** Two-column layouts interleave lines from both columns.
- **No tables, text boxes or tab-aligned dates.** Dates in a right-hand tab
  stop often detach from their role.
- **Contact details in the body, not the page header or footer.** Many parsers
  skip header and footer regions.
- **Name, email, phone and city on their own lines at the top.** A lone
  "City, ST" line reads as a location. The same text inside a tagline does not.
- **Links written as plain URLs.** A hyperlinked word loses its target.
- **Plain section headings on their own line.** Experience, Education, Skills,
  or the person's own names for them. Avoid headings set as images or icons.
- **One role header shape throughout.** For example "Company | City | 2021 to
  2024" then the title. Mixed shapes make the parser merge or split roles.
- **Several titles at one employer** shown as one employer line with each title
  and its dates under it.
- **One date format throughout**, with month and year. A bare year hides gaps
  and breaks tenure math.
- **A text PDF or DOCX, not a scan.** If extraction returns nothing, the file
  is an image.

## Content checks

- Each bullet says what the person did and what changed because of it.
- Numbers where the person has them. Ask, do not invent.
- The summary names the function, level and two or three strengths. It is not
  an objective statement.
- The facts employers screen on are visible: location, work authorization if
  it helps, degree, clearance, the tools named in target postings.
- Nothing is in the resume only as an image, a chart or a skill bar.

## Output

Write the report to `.jobsearch/resume-audit.md`. End with the three fixes that
matter most. If `.jobsearch/profile.md` exists, note any fact that differs
between the resume and the profile.

## With Dreamwork

With a key, `get_resume_work_history` returns how Dreamwork's parser read the
person's resume role by role. Compare it to the file and report the
differences. That is the reading their applications are sent with.
