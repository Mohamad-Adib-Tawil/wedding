# Video reference analysis

Reference: `/Users/abo_alhuda/Desktop/Untitled.mp4` (about 35 seconds, portrait 410 × 726). The sample couple's names, date, venue, social handles, and watermark in the video are reference content only; none are copied into this project.

## Visual sequence

| Approximate video time | Reference observation | Website treatment |
| --- | --- | --- |
| 0–4 s | Closed ivory embossed double doors, gold handles, white floral canopy; doors open outward. | One text-free generated door image is split into two CSS panels with perspective transforms. |
| 4–7 s | Bright floral arch, gold rim, candlelight, stylized monogram, spaced English names and date. | Generated arch backdrop with live monogram and English names. Date appears only when configured. |
| 7–22 s | Arabic calligraphy and invitation wording enter in stages; family and couple names appear. | Live Arabic text chapter. Family names render only when provided. No religious quotation is invented. |
| 23–33 s | Date, place and time details appear in the lower text area. | Live details chapter appears only if date or venue is configured. |
| 33–35 s | Scene darkens and ends. | The opening transitions to the full website automatically; skip and continue controls are available earlier. |

The recreated motion follows the video's order. The shorter default duration when details are unavailable avoids holding guests on an empty details chapter. The browser's reduced-motion preference shows the message immediately.

## Assets and generation prompts

The following assets were made with the built-in image generation tool. Text is deliberately absent from all raster assets so the user can change copy in `assets/js/wedding-config.js`.

### `assets/images/reference/floral-arch.jpg`

Reference: a frame extracted at about 12 seconds. Prompt:

> Generate a new original portrait 9:16 premium wedding invitation background matching the reference composition: warm ivory and champagne-gold garden alcove, delicate gilded arch high in frame, dense white orchid and blossom canopy at top and sides, white flower beds and cream candles near the lower edges, soft diffused golden rays and floating dust. Keep the central vertical text area calm and readable. No people, letters, names, numbers, symbols, logos, or watermarks.

### `assets/images/reference/ceremonial-doors.jpg`

Reference: the opening frame. Prompt:

> Generate a new original straight-on symmetrical pair of closed ivory-white ceremonial double doors meeting at the exact image midpoint, with raised floral plaster relief, moulded panels, slim champagne-gold handles near the seam and white floral garlands around the handles. Dense ivory blossom canopy along the top edge. The halves must align when one image is split into left and right CSS door panels. No text, logo, watermark, people, or visible opening gap.

### `assets/images/social-preview.jpg`

Reference: the generated floral arch asset. Prompt:

> Generate a new original 1.91:1 landscape social sharing background in the same ivory, cream and champagne palette: fine gold floral arch, lush white flowers framing the top and outer edges, candle glow at lower corners, calm luminous center. No letters, numbers, monograms, logos, UI, watermarks, or people.

The generated PNGs were converted to JPEG for web delivery. The social preview is 1200 × 630. The two portrait assets are 941 × 1672 and together use less than 900 KB.

## Typography

The compressed video does not expose font names or source files, so the exact typefaces cannot be verified. The preview uses [Aref Ruqaa](https://github.com/aliftype/aref-ruqaa) for expressive Arabic names, [Amiri](https://github.com/aliftype/amiri) for longer Arabic lines, and [Cormorant Garamond](https://github.com/google/fonts/tree/main/ofl/cormorantgaramond) for the widely spaced English line. All are loaded through Google Fonts. Replace them only after comparing actual source fonts or receiving the font files used to make the original invitation.

## Editing and review

- Edit personal content in `assets/js/wedding-config.js`. Empty event fields hide their visual chapters and website sections.
- Edit visual colors and font choices in the token layer of `assets/css/styles.css`.
- Edit opening timings in `assets/js/invitation-experience.js`.
- This branch is a preview. `main` and GitHub Pages remain on the current published site until reviewed.
