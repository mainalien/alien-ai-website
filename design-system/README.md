# AlienAI Design System

The visual, verbal, and component vocabulary for everything AlienAI ships — site, product UIs, marketing materials, decks, and outbound.

## What's here

```
design-system/
├── README.md                    you are here
├── tokens/
│   ├── design-tokens.json       machine-readable source of truth
│   ├── colors.css               CSS custom properties
│   └── typography.css           font stack + scale
├── docs/
│   ├── BRAND-GUIDE.md           voice, positioning, identity
│   ├── DESIGN-SYSTEM.md         full system reference
│   ├── COLOR-PALETTE.md         color rationale + accessibility
│   ├── TYPOGRAPHY.md            type scale + usage
│   ├── COMPONENTS.md            buttons, pills, cards, dots
│   └── COPY-VOICE-GUIDE.md      tone, vocabulary, do's and don'ts
└── swatches.html                standalone color/type swatch viewer
```

## Quick reference

**Palette (two-color + signature accent)**

| Token | Hex | Use |
|---|---|---|
| `ink` | `#171A22` | Primary text, dark surfaces, footer, navy-stamp accents |
| `parchment` | `#F0E7D6` | Page canvas — warm cream, never `#FFF` |
| `linen` | `#E6D7BD` | Section breaks, card backgrounds |
| `ember` | `#D24D2A` | Signature accent — pills, dots, accent bars |
| `ember-deep` | `#A93B1F` | Hover state for ember |
| `graphite` | `#4E5165` | Body copy |
| `graphite-soft` | `#6F7287` | Tertiary copy, labels |

**Type**

| Role | Family | Variable |
|---|---|---|
| Display + body | Geist Sans | `--font-display`, `--font-sans` |
| UI labels, eyebrows, numbers | Geist Mono | `--font-mono` |

**Voice in one line**

> Quiet, exact, confident — never effusive, never salesy. State the result, name the system, move on.

See [`docs/BRAND-GUIDE.md`](docs/BRAND-GUIDE.md) for the full system.

## How this system is consumed

- **The website** (`/src`) imports tokens from `src/app/globals.css`, which mirrors `tokens/colors.css` line-for-line. Update both when changing a token value.
- **Product UIs** (in separate repos) consume `tokens/design-tokens.json` as the source of truth and generate their own platform-native token files from it (CSS for web, Swift colors for iOS, etc.).
- **Decks, PDFs, slack, video** reference [`docs/BRAND-GUIDE.md`](docs/BRAND-GUIDE.md) and [`docs/COPY-VOICE-GUIDE.md`](docs/COPY-VOICE-GUIDE.md).

## Versioning

Tokens are versioned with semver in `tokens/design-tokens.json`. Breaking changes (renamed tokens, deleted tokens, semantic shifts) require a major bump. Additions are minor. Hex tweaks are patch.

## License

The design system is internal to AlienAI LLC. Code samples are MIT. The brand expression — name, mark, palette, voice — is reserved.
