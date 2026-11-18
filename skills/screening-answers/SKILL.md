---
name: screening-answers
description: Use when a job application asks screening or custom questions, such as work authorization, sponsorship, salary, years of experience, or "why do you want to work here", or when filling any application form. Answers each question from the person's record with a fixed ladder, and stops to ask on the questions an agent must never guess.
---

# Screening answers

Answer an application form's questions the way a careful person would: from
the record where it exists, by asking where it matters, and never with a
placeholder.

Dreamwork's apply agent fills thousands of real employer forms. This ladder
comes from studying the questions that stopped those applications, across more
than a thousand distinct wordings.

## Inputs

- `.jobsearch/profile.md` and `.jobsearch/answers.md` (create the second if
  missing).
- The form's questions, with field type and options for each.

## The ladder

Take each question down the ladder and stop at the first rung that answers it.

1. **On file.** The profile or `answers.md` has it. Match on meaning, since
   employers word the same question many ways.
2. **Derived.** Compute it from the record. Years with a skill come from role
   dates. "Do you have a degree?" comes from education.
3. **Estimated.** For low-stakes questions only, give a reasonable answer the
   record supports and log it as an estimate. Examples: rounding years of
   experience, "how did you hear about us", preferred interview times.
4. **Declined.** Voluntary demographic questions get "Decline to
   self-identify" unless the profile says otherwise.
5. **Ask once.** Ask the person, then save the answer so no form asks twice.

## Stop list: never estimate these

Always answer from the record or ask.

- Work authorization and sponsorship
- Salary expectation and current pay
- Start date, notice period, relocation
- Criminal history, background checks, drug tests
- Security clearance
- Non-compete and other legal attestations
- References and permission to contact a current employer
- Any "I certify that" checkbox

## Field rules

- Never type "N/A", "None" or a dash into a required field for a name, an
  address, a ZIP code or an employer. If the fact is missing, ask.
- For a dropdown or radio group, return one of the listed options exactly.
- Numeric fields take digits only. "5", not "5+ years".
- Give the state in the form the field accepts, code or full name.
- Dates follow the field's own format.

## Long answers

For "why this company" and similar questions, write 50 to 150 words from the
evidence in the profile and the posting. The same truth rule as the resume
applies: no claim that the record does not support.

## Save what you learn

After each form, append new question and answer pairs to
`.jobsearch/answers.md` with the date, the rung used, and the employer's
wording. Group variants of one question together. Half the value of this skill
is the second application, when nothing needs asking.

Write the form's answers to `answers.md` in the application's folder and show
the person every estimated answer before it is sent.

## With Dreamwork

With a key, `get_application_readiness` says what Dreamwork still needs before
it can apply. `get_application_questions` reads the questions a live
application is waiting on, and `answer_application_questions` sends the
person's answers. `save_application_answers` stores them for every later
application.
