# محمد أديب طويل & رزان — دعوة الزفاف

Arabic-first, RTL wedding invitation built with semantic HTML, CSS, and vanilla JavaScript. The static site is designed for GitHub Project Pages at `/<repository>/` and deploys automatically from `main` using GitHub Actions.

## Personalize the invitation

Edit [`assets/js/wedding-config.js`](assets/js/wedding-config.js) to add the wedding date/time, IANA time zone, venue/address/maps link, RSVP WhatsApp contact, final wording, and media paths. Optional sections stay hidden when their configuration is empty. Do not put private information into this public repository unless it is intended for guests.

Place the original video at `assets/video/invitation.mp4` and set `invitationVideo` to that relative path. Optionally set `invitationPoster` to a relative poster path. The player uses `playsinline`, waits for the invitation tap before loading, and reveals the details when playback ends. If no video is configured, a typographic CSS placeholder lets guests proceed through the opening experience. Replace `assets/images/social-preview.png` when the invitation design is available. Its current typographic preview is generated from `assets/images/social-preview.svg`; update the static Open Graph and Twitter image URLs in `index.html` alongside the preview path so social crawlers see the replacement.

## Local preview

Serve the repository root with any static HTTP server (ES modules need HTTP):

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

## Deployment

The `Deploy wedding invitation to GitHub Pages` workflow publishes the repository root after every push to `main`. In repository settings, select **Pages → Build and deployment → GitHub Actions**. For a user/org Pages repository root path, update canonical and Open Graph URLs in `index.html` after the username is known. All local site asset paths are relative so they work under a project path such as `/wedding/`.
