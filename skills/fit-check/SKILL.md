---
name: fit-check
description: Use when the person asks whether they should apply to a job, how well they match a posting, or which of several roles to prioritize. Checks the screened-out requirements first, then returns Apply, Stretch or Skip with the evidence for each.
---

# Fit check

Decide whether one role is worth an application, before any time goes into
materials.

Employers screen in a fixed order. Form answers remove people first, on
location, authorization and required years. A recruiter then reads for level
and function. Skills come last. Most fit tools score skills first. This skill
follows the employer's order.

## Inputs

- `.jobsearch/profile.md` or the resume.
- The full posting, as text or a URL. Read all of it.

## Steps

1. **Knockouts.** Check each against the profile. One clear miss means Skip,
   whatever else matches.
   - Location and work mode, including "remote" limited to a country or state
   - Work authorization and sponsorship
   - Clearance, licenses, required degree
   - Required years, when stated as a minimum
   - Anything on the person's off-limits list
2. **Level.** Compare the role's scope to the person's last two roles: team
   size, ownership, title ladder. Two levels up or down is a mismatch even
   when every skill lines up.
3. **Function.** Is this the work the person does, or an adjacent job that
   shares its vocabulary? A data engineer is not a data analyst.
4. **Requirements.** List each stated requirement as met, partly met, not met
   or unknown, with the resume line that supports it. Separate "required" from
   "nice to have". Unknown means ask the person, not assume.
5. **Verdict.**
   - **Apply.** No knockouts, right level and function, most requirements met.
   - **Stretch.** No knockouts, one level off or a core requirement partly met.
   - **Skip.** A knockout, the wrong function, or two levels off.

## Output

A short report: verdict, the knockout table, the requirements table, then the
three facts to lead with if they apply. Save it as `fit.md` in the
application's folder.

## Rules

- Do not inflate. A Skip saves the person an hour.
- Do not count a keyword as met without a line of evidence.
- A strong fit does not protect an application from silence. Whether an
  employer replies depends far more on the listing than on the applicant, so
  run `ghost-check` on anything rated Apply or Stretch.
- When comparing several roles, rank by verdict, then by how recent the
  posting is.

## With Dreamwork

With a key, `list_matches` ranks every live role in Dreamwork's corpus against
the person's resume and preferences, and `get_job` returns one role with their
match score. Use it to answer "is there a better version of this job open
right now?"
