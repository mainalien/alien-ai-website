# alienai.llc

Brand site for **AlienAI LLC** — www.alienai.llc

Built with Next.js 15 (App Router) + TypeScript + Tailwind CSS v4. Static export, deployed to GitHub Pages, fronted by Cloudflare.

## Develop

```bash
npm install
npm run dev      # http://localhost:3737
npm run build    # static export to ./out
```

## Stack

- Next.js 15 (`output: "export"`)
- Tailwind CSS v4 (CSS-first theme tokens in `src/app/globals.css`)
- Framer Motion (scroll-reveal + hero entrance)
- `next/font` — Geist Sans, Geist Mono, Instrument Serif

## Brand tokens

| Token | Value |
| --- | --- |
| `--color-ink` | `#0B0B10` |
| `--color-bone` | `#F4F1EA` |
| `--color-mist` | `#E4DFD3` |
| `--color-graphite` | `#4A4A52` |
| `--color-halo` | `#6E5BFF` |

## Deploy

`main` → GitHub Actions builds the static export and publishes to GitHub Pages. `CNAME` is preserved on every deploy.
