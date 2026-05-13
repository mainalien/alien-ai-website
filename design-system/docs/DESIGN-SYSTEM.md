# AlienAI Design System — Reference

Companion to [`BRAND-GUIDE.md`](BRAND-GUIDE.md). This file is the implementation-level reference for engineers and designers building on the AlienAI brand.

---

## Source of truth

`design-system/tokens/design-tokens.json` is the canonical token store. Everything else — CSS variables in `colors.css` and `typography.css`, the runtime tokens in `src/app/globals.css`, the Tailwind theme — mirrors it. **If you change a token value, change it in `design-tokens.json` first, then propagate.**

```
design-tokens.json   ──┬──► design-system/tokens/colors.css
                       ├──► design-system/tokens/typography.css
                       └──► src/app/globals.css     (this site's runtime)
                            └──► Tailwind utility classes
                                 (bg-ink, text-ember, etc.)
```

---

## Color tokens

### Core

| Token | Hex | Description |
|---|---|---|
| `ink` | `#171A22` | Settled blue-black. Primary text, dark surfaces, footer, navy-stamp accents. Midpoint between Athena's custom inkwell and a generic charcoal. |
| `ink-soft` | `#2B2E36` | Elevated dark surfaces. Secondary navy. |
| `parchment` | `#F0E7D6` | Page canvas. Warm cream. **Never use `#FFFFFF`.** |
| `linen` | `#E6D7BD` | Section breaks, card backgrounds on light surfaces. |
| `ember` | `#D24D2A` | Signature accent — pills, dots, accent bars, hairlines. Used sparingly. |
| `ember-deep` | `#A93B1F` | Ember hover state. Eyebrow-accent text on light backgrounds. |
| `ember-soft` | `#E3784F` | Ember used on dark surfaces (against ink). |
| `graphite` | `#4E5165` | Body copy. Cool warm-leaning gray. |
| `graphite-soft` | `#6F7287` | Tertiary copy and small label text. |

### Semantic aliases

| Token | Resolves to | Use |
|---|---|---|
| `text.primary` | `ink` | Default text |
| `text.secondary` | `graphite` | Body / sub-headline |
| `text.muted` | `graphite-soft` | Tertiary, labels |
| `text.on-dark` | `parchment` | Text on ink surfaces |
| `text.accent` | `ember-deep` | Eyebrows, accent text on light |
| `surface.canvas` | `parchment` | Page background |
| `surface.card` | `linen` | Card backgrounds, section breaks |
| `surface.inverted` | `ink` | Dark sections, principles |
| `border.subtle` | `ink @ 12% opacity` | Hairline dividers |
| `border.strong` | `ink` | Strong dividers, focused inputs |

### Tailwind utilities (this site)

The site exposes these via `@theme` in `globals.css`:

```css
bg-parchment   text-parchment
bg-linen
bg-ink         text-ink         border-ink/12
bg-ink-soft
bg-ember       text-ember       border-ember/35
bg-ember-deep  text-ember-deep
text-graphite  text-graphite-soft
```

---

## Typography

### Type scale

| Token | Size | Use |
|---|---|---|
| `display` | `120px` | Hero h1 (clamp from `48px` mobile) |
| `h1` | `72px` | Section h1 |
| `h2` | `40px` | Pillars, cards |
| `h3` | `24px` | Sub-headings, card titles |
| `lead` | `19px` | Hero subhead, lead paragraphs |
| `body` | `16px` | Default body |
| `small` | `13.5px` | Captions, secondary |
| `micro` | `10.5px` | Eyebrow labels, mono ticks |

Almost every display heading uses `clamp()` to fluidly scale between a mobile minimum and a desktop maximum.

### Weights

| Weight | Use |
|---|---|
| 400 (regular) | Body, secondary text |
| 500 (medium) | Buttons, mid-emphasis |
| 600 (semibold) | `display` (sub-display) |
| 700 (bold) | `display-tight` (hero, h1) |
| 800 (black) | Wordmark only |

### Tracking

| Variable | Value | Use |
|---|---|---|
| `--tracking-display-tight` | `-0.035em` | Hero h1, display headlines |
| `--tracking-display` | `-0.025em` | Sub-display, h2 |
| `--tracking-wordmark` | `-0.045em` | Wordmark only |
| `--tracking-body` | `-0.005em` | Body — subtle tightening |
| `--tracking-eyebrow` | `0.18em` | Uppercase eyebrow labels |
| `--tracking-uppercase-tight` | `0.14em` | Uppercase nav links |

### Line height

| Token | Value | Use |
|---|---|---|
| `display` | 0.95 | Hero h1 |
| `tight` | 1.1 | h2, h3 |
| `snug` | 1.2 | Lists |
| `normal` | 1.5 | UI |
| `loose` | 1.65 | Body paragraphs |

### Utility classes (this site)

```html
<h1 class="display-tight">…</h1>
<h2 class="display">…</h2>
<p class="eyebrow">Section label</p>
<p class="eyebrow-accent">/ Section label</p>
<span class="wordmark">alienai</span>
<span class="metric">120 +</span>
```

---

## Spacing scale

| Step | Value |
|---|---|
| 0 | 0 |
| 1 | 4px |
| 2 | 8px |
| 3 | 12px |
| 4 | 16px |
| 6 | 24px |
| 8 | 32px |
| 10 | 40px |
| 12 | 48px |
| 16 | 64px |
| 20 | 80px |
| 24 | 96px |
| 32 | 128px |

Mirrors Tailwind's spacing scale; values are stable.

### Section padding rhythm

- **Mobile:** `py-14` (56px) is the default vertical padding for a section.
- **Desktop:** `py-32` (128px) for breath.
- **Compressed:** `py-10` mobile / `py-24` desktop for dense sections.

Sections never sit flush — there is always at least `py-14` between adjacent sections.

---

## Radius

| Token | Value | Use |
|---|---|---|
| `sm` | 4px | Small chips |
| `md` | 8px | Inputs |
| `lg` | 12px | Standard buttons (not used currently — we use pill) |
| `xl` | 16px | Cards (rarely) |
| `2xl` | 24px | Most cards |
| `3xl` | 32px | Hero cards, closing CTA panel |
| `pill` | 9999px | All CTAs, nav buttons, eyebrow pills |

The brand's default surface shape is **pill** (fully rounded) for interactive elements and **2xl/3xl** for static cards.

---

## Components

See [`COMPONENTS.md`](COMPONENTS.md) for the full library. Quick reference:

- **Wordmark** — `src/components/brand/Wordmark.tsx`
- **Mark** — `src/components/brand/Mark.tsx`
- **Site header / footer** — `src/components/nav/`
- **Hero, Solutions, Areas, Outcomes, Process, Principles, ClosingCTA** — `src/components/sections/`
- **Reveal** — `src/components/primitives/Reveal.tsx` (currently a passthrough; reserved for future entrance animations)

---

## Accessibility floor

- **Body text contrast:** ink `#171A22` on parchment `#F0E7D6` ≈ **15.5:1** (AAA for all sizes).
- **Graphite secondary:** `#4E5165` on parchment ≈ **9.1:1** (AAA for normal text).
- **Graphite-soft tertiary:** `#6F7287` on parchment ≈ **5.4:1** (AA for normal; AAA for large).
- **Ember on parchment:** ember-deep `#A93B1F` ≈ **6.0:1** (AA for normal text). Plain `ember #D24D2A` ≈ **4.0:1** — sufficient for large text and decorative use; avoid for small body copy on parchment.
- **All focus rings:** 2px ember-deep, 4px offset, 2px border-radius. Specified in `globals.css`.
- **Motion:** `prefers-reduced-motion` is respected globally; entrance animations collapse to instant render.

---

## Versioning

Token changes follow semver in `design-tokens.json`:

- **Patch (1.0.x)** — A hex value nudged. Spacing trivially adjusted.
- **Minor (1.x.0)** — New tokens added. Existing tokens unchanged.
- **Major (x.0.0)** — Tokens renamed, removed, or re-semantic'd.

When a token changes, update in this order:
1. `tokens/design-tokens.json`
2. `tokens/colors.css` and/or `tokens/typography.css`
3. `src/app/globals.css`
4. Tailwind class usages across `src/`
5. The version field in `design-tokens.json`
6. `BRAND-GUIDE.md` if the change is semantic
