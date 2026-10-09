# Musium — Final Responsive Website

Approved English/Korean website, including the working Formspree consultation form.

Preview: https://musium-piano-responsive.whateveriplay.chatgpt.site

## Run locally

This is a static website; no build or installation is required. Run from this folder:

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. Keep all assets beside index.html.

## Files

- index.html: page content and consultation dialog
- style.css, page.css, fidelity.css, site-overrides.css, site-utilities.css: layout and responsive styles
- script.js, page.js: language toggle, navigation, videos, and consultation submission
- translations.js: Korean text
- videos.js: lesson video data
- assets/: images, fonts, icons, and videos

This branch contains the approved website snapshot. Production cloudflare branch is preserved.
