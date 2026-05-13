# Color Palette

## The brief

AlienAI's palette is intentionally narrow: **two colors plus one signature accent**. Most premium AI brands (Linear, Vercel, Anthropic) operate this way — discipline reads as confidence; variety reads as uncertainty.

---

## The five swatches

### Ink — `#171A22`

The primary text and dark-surface color. A settled blue-black — the linear midpoint between Athena Promo's custom inkwell (`#0F1424`, a strong navy) and a generic charcoal (`#1F1F1F`). Retains a subtle navy undertone without the icy intensity of pure indigo.

- RGB: 23, 26, 34
- HSL: 224°, 19%, 11%
- Use: body text, headlines, dark sections, footer, wordmark, mark fill
- Contrast on parchment: 15.5:1 (AAA)

### Parchment — `#F0E7D6`

The page canvas. A warm cream with a clear yellow undertone (R 240 > G 231 > B 214; a 26-point R−B spread). Selected over Athena Promo's `#ECE7DD` because it reads as more decisively warm and less like a desaturated gray.

- RGB: 240, 231, 214
- HSL: 38°, 50%, 89%
- Use: page background; the default canvas for everything
- **Never use `#FFFFFF`** — pure white is hostile to the warm-toned brand

### Linen — `#E6D7BD`

A slightly deeper cream for section breaks and card backgrounds. Same hue family as parchment, more saturated and slightly darker, so it reads as a quiet step rather than a contrast.

- RGB: 230, 215, 189
- HSL: 38°, 47%, 82%
- Use: card backgrounds, inset section blocks, secondary panels

### Ember — `#D24D2A`

The signature accent. A saturated burnt-orange / signal-coral. Warm hue (analogous to parchment), but the high saturation (vs. parchment's low saturation) makes it pop instead of blend. Strong complementary contrast against ink (warm vs. cool).

- RGB: 210, 77, 42
- HSL: 12°, 67%, 49%
- Use: signature accent — eyebrow dots, "intersection" pill, accent bars on cards, hover state for the dark CTA, hairline rules on outcomes
- **Use sparingly.** Two or three appearances per scrolled section is the ceiling. Never as primary text.

### Ember-deep — `#A93B1F`

Ember's hover state and small-text variant. Lower lightness gives enough contrast against parchment for body-sized accent text.

- RGB: 169, 59, 31
- HSL: 12°, 69%, 39%
- Use: eyebrow-accent labels (`/ Section name`), hover states for ember elements
- Contrast on parchment: 6.0:1 (AA)

---

## Why these choices

### Why a warm cream instead of white?

White is the default. Warm cream is a position. It signals editorial, considered, premium. It also makes the brand visually distinct from the sea of AI sites that default to `#FFFFFF` or `#F9FAFB`.

### Why navy ink instead of black?

Pure black is harsh against warm parchment — too much contrast, slightly oppressive. A blue-undertone ink reads as deliberate, fountain-pen, intellectual. The subtle hue echo against the warm background creates harmony without sacrificing legibility.

### Why ember, not cobalt / forest / gold?

We tried each:

- **Cobalt blue:** too tech-cliché; said "another SaaS company." Also conflicts with the navy ink.
- **Forest green:** too eco-coded; the brand isn't sustainability-focused.
- **Heritage gold:** too analogous to parchment (same hue family); read as "antique" rather than "cutting edge."
- **Dusty terracotta:** worked but read as "agency-warm" rather than "cutting-edge AI."

Ember (saturated burnt-orange) signals **energy, intelligence, signal** — kintsugi seam, Mars rover, signal flare — without being playful or generic.

### Why only one accent color?

One accent forces every design decision to earn its accent. Two accents create ambiguity ("which means what?"). The brands we admire most (Linear, Vercel, Anthropic) commit to a single accent and become recognizable by it.

---

## Accessibility

All combinations have been checked. The floor is:

| Foreground | Background | Ratio | Pass |
|---|---|---|---|
| ink | parchment | 15.5:1 | AAA |
| ink | linen | 14.8:1 | AAA |
| graphite (`#4E5165`) | parchment | 9.1:1 | AAA |
| graphite-soft (`#6F7287`) | parchment | 5.4:1 | AA (AAA for large) |
| ember-deep (`#A93B1F`) | parchment | 6.0:1 | AA |
| ember (`#D24D2A`) | parchment | 4.0:1 | Large only — decorative use |
| parchment | ink | 15.5:1 | AAA |
| ember-soft (`#E3784F`) | ink | 5.1:1 | AA |

Do not use base ember `#D24D2A` for small body text on parchment — it falls below AA for normal-size text. Use ember-deep for any accent text smaller than 18px.

---

## Light + dark stance

The brand is **light-mode only by design**. There is no dark-mode equivalent of the palette — the warm parchment canvas is fundamental to the brand expression. If a UI requires a dark mode for ergonomics (e.g., a coding-tool surface, an OOH context), the inverted palette should be:

| Light token | Dark equivalent |
|---|---|
| parchment | ink (`#171A22`) |
| ink text | parchment text |
| linen card | ink-soft (`#2B2E36`) |
| ember | ember-soft (`#E3784F`) |
| graphite | parchment @ 70% |

But the canonical brand expression is light.
