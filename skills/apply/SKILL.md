---
name: apply
description: Use when the person says to apply to a job, submit an application, or send their materials to an employer. Submits through Dreamwork's apply agent when a Dreamwork key is connected, with a confirmation step before anything is sent. Without a key, assembles a submission packet in the form's order for the person to paste.
---

# Apply

Send one application, in the person's name, only after they say yes to that
role.

Dreamwork runs a browser agent that fills and submits real employer forms on
Greenhouse, Lever, Ashby and other applicant systems. This skill drives it
through the Dreamwork MCP. That agent, the form knowledge behind it and the
receipts it writes are the part of Dreamwork that is not in this repository.

## Rules that hold on both paths

- One explicit yes per role. "Apply to these five" covers those five and
  nothing else.
- Never apply to a company on the profile's off-limits list.
- Show what will be sent before sending: resume version, letter, every answer.
- Never state that an application was submitted without a receipt or the
  person's word.

## With a Dreamwork key

1. `get_application_readiness`. If something is missing, collect it with
   `screening-answers` and store it with `save_application_answers`.
2. Put the role in the pipeline: `save_job` for a Dreamwork listing,
   `import_job` for a posting from anywhere on the web.
3. Prepare materials. `generate_pack` writes them. To send what you wrote with
   `tailor-resume` and `cover-letter` instead, use
   `replace_application_document`.
4. Show the person the materials from `get_application_documents`.
5. Call `apply`. The first call answers `held` with a summary and a token.
   Read the summary to the person. Call again with the token only on a clear
   yes.
6. `get_application_status` returns what happened. If it is waiting on a
   question, read `get_application_questions`, get the person's answers, and
   send them with `answer_application_questions`.
7. `cancel_apply` stops an application that is queued or in progress.

For several roles, `prepare_applications` readies up to 10 in one call. Each
still needs its own `apply` and its own yes.

Tool names can differ by server version. Match on the tool descriptions.

### Connect

```bash
claude mcp add --transport http dreamwork https://mcp.dreamworkhq.com/mcp \
  --header "Authorization: Bearer sk_..."
```

Or run `npx -y @dreamworkhq/mcp` with `DREAMWORK_API_KEY` set. Any Dreamwork
account can create a key at
[dreamworkhq.com](https://www.dreamworkhq.com/?utm_source=github_readme&utm_medium=skills_repo&utm_campaign=dreamwork_skills)
under Profile, then MCP. The key carries its own scopes, and applying is one
the person can leave off.

## Without a key

Build a submission packet in the application's folder:

1. The apply link and the system behind it (see the table in `find-jobs`).
2. The resume and letter files to upload.
3. `answers.md` in the order the form asks, from `screening-answers`.
4. Anything the form will demand that is still missing.

Hand it to the person to submit. When they confirm, log it with
`track-pipeline`.
