# Syed Talha Raza – Portfolio Website

Interactive website built from the original Canva PDF (1024.5 × 11520 pt, 20 stacked slides).

## Run locally
```bash
cd syed-talha-portfolio-site
python3 -m http.server 8000      # then open http://localhost:8000
```
(or `npx serve .`; opening `index.html` directly also works.)

## Deploy
Static site, no build step. Drag the folder onto Netlify Drop, or use Vercel, GitHub Pages, Cloudflare Pages or any web host. Publish the folder root (where `index.html` is).

## Structure
- `index.html` – semantic markup, ribbon, 20 slides, clickable hotspots
- `assets/s00–s19.webp` – each slide rendered from your PDF at 2× resolution (pixel-exact artwork)
- `css/style.css` – layout (proportional scaling), ribbon, animations
- `js/main.js` – smooth scroll, active-section highlight, fade-in, optional Drive embeds

## How fidelity is preserved
Each slide is the exact rendering of your PDF, so fonts, colours, spacing and imagery are identical. Interactive areas are transparent links positioned in % of each slide, so they stay locked to the artwork at every screen size. The page scales proportionally with the viewport width (never re-flowed).
Trade-off: because the artwork is image-based, text is not selectable; section headings are included for screen readers/SEO.

## Google Drive videos
Clicking any phone, its label, or a monitor / laptop / tablet screen opens that video's `/view` link in a new tab.
For videos to play for visitors, each Drive file must be shared as **General access → Anyone with the link → Viewer**. If not, visitors see a Google "request access" page.
Optional live previews inside the screens: set `EMBED_PREVIEWS = true` at the top of `js/main.js` (uses `/preview` URLs; needs the same sharing setting).

| Element | Drive file ID |
|---|---|
| Instagram Reels | 1by7RY2org3rJ-fCpg-uT1_iIesNMfOsf |
| YouTube Shorts | 1sMwOTipo8VYq9fLY2ilfRBIPMdzZ7RpW |
| TikTok Reels | 1ZoBO8ZcHlFpGXPnnZY87S1Btfdd-QtMb |
| Monitor | 1PKgToq4KLC13LNAyLEMFh4TVoP-Qw7bM |
| Laptop | 1A3LeuaD7YJRt0a3aFYLSlGWpQ9JRsrdj |
| Tablet | 1uE8I8WuypjuRXVtMTVYyl4wFmoFCdtxn |
