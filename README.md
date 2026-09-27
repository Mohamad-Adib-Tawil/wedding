# محمد أديب طويل & رزان — دعوة الزفاف

Arabic-first, RTL wedding invitation built with semantic HTML, CSS, and vanilla JavaScript. This `codex/video-reference-redesign` branch is an isolated preview based on the supplied portrait invitation video. The current `main` branch and published site remain unchanged. GitHub Pages deploys automatically only after changes reach `main`.

## Personalize the invitation

Edit [`assets/js/wedding-config.js`](assets/js/wedding-config.js) to add the wedding date/time, IANA time zone, venue/address/maps link, RSVP WhatsApp contact, final wording, and media paths. Optional sections stay hidden when their configuration is empty. Do not put private information into this public repository unless it is intended for guests.

The invitation opens with two generated, text-free image layers: `assets/images/reference/ceremonial-doors.jpg` and `assets/images/reference/floral-arch.jpg`. All names and wording are live HTML rendered from `wedding-config.js`. The reference video's sample names, date, and watermark are never used. The opening can be skipped or replayed. With no event details configured, its date/venue chapter and the corresponding site sections remain hidden.

An optional original video can still be placed at `assets/video/invitation.mp4` and configured through `invitationVideo`; the player waits for the opening tap, plays inline, and has a sound toggle and a fallback if loading fails. Do not configure the sample reference video, which contains another couple's personal information and a designer watermark.

The palette and font stacks are grouped as tokens near the top of `assets/css/styles.css`. Aref Ruqaa, Amiri, and Cormorant Garamond are visually selected alternatives; exact font identification is impossible from the compressed video alone without source font files. The landscape social preview is `assets/images/social-preview.jpg`, with static crawler metadata in `index.html` and a generic manifest title to avoid stale personal names after configuration changes. See [reference analysis](docs/reference-analysis.md) for timing, asset prompts, and known limits.

## Local preview

Serve the repository root with any static HTTP server (ES modules need HTTP):

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

## Deployment

The `Deploy wedding invitation to GitHub Pages` workflow publishes the repository root after every push to `main`. This preview branch does not change the live site. All local asset paths are relative so they work under `/wedding/` after review and merge.
