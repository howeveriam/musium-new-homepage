# Musium Cloudflare Pages

Connect this repository to Cloudflare Pages.

- Production branch: cloudflare
- Root directory: repository root
- Build command: npx next build
- Build output directory: out
- Environment variable: NODE_VERSION=22

The consultation form submits directly to Formspree. No server credentials or database are required. Keep the existing domain active until this deployment is verified, then add musium.org and www.musium.org through the Cloudflare custom domains setup.
