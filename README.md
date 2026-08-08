# Tarot Companion

A phone-friendly tarot PWA for daily pulls, classic spreads, deck browsing, and a local journal. Meanings are Rider-Waite-Smith inspired. Artwork is public-domain RWS imagery.

## Features

- **Daily Pull** - one random card (optional reverse ~30%), keywords, meaning, save to journal
- **Spreads** - Single, Three Card (Past/Present/Future), Celtic Cross (10 cards)
- **Deck Library** - browse all 78 cards by Major / Wands / Cups / Swords / Pentacles
- **Journal** - readings stored in localStorage (`tarot-companion-v1`)
- **Settings** - clear journal, about / public-domain note
- Works offline as a PWA after first visit

## Quick start

```bash
npm install
npm run generate:icons
npm run dev
```

Optional: place card images in `public/cards/` named `{id}.jpg` (for example `major-0.jpg`). The UI shows a styled placeholder if an image is missing.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run generate:icons` | Generate purple PWA icon PNGs |

## Hosting

Cloudflare Workers static assets via `wrangler.toml`:

```bash
npm run build
npx wrangler deploy
```

## Note

This app is for reflection and journaling. It is not advice, prediction, or a substitute for professional care.
