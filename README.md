# Musium New Homepage

Latest development website source, exported September 29, 2026.

Development preview: https://musium-development.whateveriplay.chatgpt.site

## Source archives

The browser upload preserves the project directory structure inside three archives. Extract **all three archives into the same directory**:

- `musium-source.zip`: React/Vinext source, components, fonts, configuration and dependency lockfile.
- `musium-images.zip`: original photographs, design images and SVG assets under `public/musium-media-v2`.
- `musium-videos.zip`: testimonial performance and looping lesson character videos under `public/musium-media-v2`.

These are source archives, not build output. The repository does not yet contain an expanded source tree.

## Run locally

Install Node.js compatible with the included package.json, then run:

```sh
npm ci
npm run dev
```

To build:

```sh
npm run build
```

## Current behavior

Adult Level 1 is the default sample lesson category. YouTube thumbnails and commenter avatars load from remote URLs. Consultation form and confirmation are development previews only: no request is sent or stored. The testimonial video plays in the preview area after clicking Play.

The official musium.org domain has not been changed. Hosting-specific project identity is omitted from this export.
