---
name: track-pipeline
description: Use when the person wants to track job applications, log an application, check what they have heard back on, sort employer emails, or decide what to follow up on. Keeps one pipeline file and classifies employer mail into confirmations, codes, rejections, assessments and interview requests.
---

# Track pipeline

Keep one file that says where every application stands, and keep it current
from the person's inbox.

Employer mail is hard to track for a specific reason Dreamwork learned running
an inbox for every applicant. A reply to a web-form application is a new email
thread, from an applicant-system address, with a subject that names neither
the job title nor anything the applicant sent. Matching by thread or subject
finds nothing. This skill matches on company and role.

## The file

`.jobsearch/pipeline.md`, one row per role:

```markdown
| Company | Role | Link | System | Stage | Applied | Last event | Next step |
```

Stages: Saved, Applied, Confirmed, Assessment, Interview, Offer, Rejected,
No reply, Withdrawn.

## Classify employer mail

When the person pastes mail or you have a mail tool, sort each message.

| Type | Tells | Action |
| --- | --- | --- |
| Verification code | A 4 to 8 digit code or "verify your email", often from a Workday or account address | Tell the person now. Codes expire in minutes. |
| Confirmation | "Thanks for applying", "we received your application" | Stage to Confirmed. |
| Assessment | A link to HackerRank, CodeSignal, Codility, a take-home, a questionnaire | Stage to Assessment. Record the deadline. |
| Interview request | "Availability", "schedule a call", a Calendly or GoodTime link, a named recruiter | Stage to Interview. Draft a reply for the person to send. |
| Rejection | "Unfortunately", "other candidates", "not moving forward", "position has been filled" | Stage to Rejected. |
| Recruiter outreach | A person at the company's own domain, about a role not yet applied to | Add as Saved and flag it. |
| Marketing | Talent newsletters, "jobs you may like" | Ignore. |

Senders worth knowing: `greenhouse-mail.io`, `ashbyhq.com`, `hire.lever.co`,
`myworkday.com`, `smartrecruiters.com`, `icims.com`. The display name usually
carries the company.

## Match mail to a row

1. Take the company from the display name, the signature or the body.
2. Take the role title from the body. Confirmations usually repeat it.
3. Match against rows for that company. One candidate is a match. Several
   candidates with no title in the mail means ask the person.
4. Mail that matches no row still gets logged under "Unmatched" with the date.
   Never drop it.

## Follow-up rules

- 14 days after applying with no confirmation or reply: stage to No reply.
- Do not reapply to a role in No reply. A repost of the same role is a signal
  for `ghost-check`.
- An interview request is answered the same day.
- After a rejection, note any role at the same company posted since.

## Report

On request, give a five-line status: counts by stage, what needs an answer
today, deadlines this week, roles that moved since the last report.

## With Dreamwork

With a key, `get_pipeline` returns the board, `get_inbox` lists recruiter
conversations already matched to their roles, and `get_updates_since` reports
everything new for a scheduled morning check-in. `move_pipeline` and
`mark_applied_offsite` keep Dreamwork in step with applications made
elsewhere.
