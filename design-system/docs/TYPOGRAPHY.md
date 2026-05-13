# Typography

## Type system

AlienAI uses **two type families**: Geist Sans for everything visible, Geist Mono for technical labels and numbers. Both are open-source typefaces from Vercel, designed specifically for software products.

We chose this combination after rejecting the serif-display + sans-body trope ("Instrument Serif + italic tagline") that has become a cliché in AI marketing in 2025–2026.

---

## Geist Sans

**Used for:** every visible character on the brand surface — display, body, buttons, the wordmark itself.

**Why Geist:** clean, neutral, modern, software-native. Designed for screens. Doesn't lean playful (like Bricolage Grotesque or Manrope), doesn't lean editorial (like Söhne or Aktiv Grotesk). Reads as confident infrastructure.

**Weights available:** 100–900 (variable).

**Weights used in the brand:**

| Weight | Used for |
|---|---|
| 400 | Body copy, secondary text |
| 500 | Buttons, mid-emphasis labels |
| 600 | `.display` (sub-display headings) |
| 700 | `.display-tight` (hero, primary headlines), `.metric` (large numbers) |
| 800 | The wordmark only |

---

## Geist Mono

**Used for:** eyebrow labels, nav links, small uppercase ticks, metric annotations, code samples.

**Why mono:** the monospace forms read as technical, deliberate, system-y. They give labels a stamped quality and let numbers align cleanly in tabular data. In the brand they signal "this is the structural scaffolding" — eyebrows, taxonomy, footnotes.

**Weights used:** 400 only. Never bold Geist Mono; the uppercase tracking and small size do enough.

---

## Type scale

The scale is functional, not strict. The site uses `clamp()` heavily so headlines scale fluidly between mobile and desktop, but the canonical sizes are:

| Token | Mobile min | Desktop max | Use |
|---|---|---|---|
| `display` | 48px | 168px | Hero h1 |
| `h1` | 48px | 120px | Section h1 (About, Solutions, Results, Contact) |
| `h2` | 36px | 88px | Solutions h2, "Where we build" |
| `h3` | 22px | 30px | Card titles, sub-headings |
| `lead` | 17px | 22px | Hero subhead, lead paragraphs |
| `body` | 14.5px | 16px | Default body |
| `small` | 13.5px | 14.5px | Caption, secondary |
| `micro` | 10.5px | 11px | Eyebrow labels, mono ticks |

### Tracking (letter-spacing)

| Value | Use |
|---|---|
| `-0.045em` | Wordmark only — its black weight needs tight tracking |
| `-0.035em` | `.display-tight` — hero h1, primary headlines |
| `-0.025em` | `.display` — sub-display, section h2 |
| `-0.005em` | Body copy — subtle tightening for screen rendering |
| `+0.14em` | Nav links (uppercase mono) |
| `+0.18em` | Eyebrows (uppercase mono) |
| `+0.20em` | "/ Section name" eyebrow-accent — slightly wider to read as a tagged section marker |

### Line height

| Value | Use |
|---|---|
| 0.95 | `.display-tight` — hero, primary headlines |
| 1.0 | `.display` — sub-display |
| 1.1 | h2, h3 — section headings |
| 1.5 | UI text, secondary |
| 1.65 | Body paragraphs |

---

## Voice through type

### Headlines

Lowercase sentence case. Period on declaratives. Headlines should read as closing arguments:

> Higher order intelligence.

> Production AI systems, ready to deploy.

> Four phases. One operating system.

### Eyebrows

Always mono, uppercase, tracked wide. Prefix with `/` for section-marker accents:

> / WHAT WE BUILD

> / HOW WE DEPLOY

> / DEPLOYMENTS

The `/` is a quiet typographic flag — it differentiates structural markers from prose.

### Body

Geist Sans 400 at 16–19px depending on context. Line-height 1.5 (UI) or 1.65 (paragraphs). Tracking `-0.005em`. Use em-dashes deliberately. Avoid passive voice.

### The wordmark

```
alienai
```

Lowercase. Geist 800. Tight tracking `-0.045em`. Sized: `sm` 18px, `md` 22px, `lg` 36px. Always paired with the mark to its left.

---

## Loading

The site uses Next.js `next/font` for both faces. Both are self-hosted, preloaded, and fall back to a system stack identical in metric:

```
Geist, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif
"Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace
```

`font-display: swap` is set so text is visible immediately and re-flows when the web fonts load. This is the right tradeoff for a content-dense site.
