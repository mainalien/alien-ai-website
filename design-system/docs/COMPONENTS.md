# Components

Built primitives and patterns used across the AlienAI surface. All components live in `src/components/`.

---

## Brand primitives

### Wordmark

`src/components/brand/Wordmark.tsx`

The text "alienai" set in Geist Black with the AI mark immediately to its left. Three sizes: `sm` (header on mobile), `md` (default), `lg` (footer).

```tsx
<Wordmark size="md" />
```

Always rendered as a single inline-flex container. Never split, never reordered.

### Mark

`src/components/brand/Mark.tsx`

An ink-filled rounded square (`rx=9` on a 48×48 viewBox) containing a parchment-stroke "A" — a chevron `M14 32 L24 14 L34 32` plus a crossbar `M19 25.5 L29 25.5`. Stroke is square-cap, miter-join.

```tsx
<Mark size={28} />
```

Inherits `currentColor` for the tile background, so the mark adapts to dark/light contexts.

---

## Navigation

### SiteHeader

Sticky header with backdrop blur. Three slots: wordmark (left), nav links (center, hidden on mobile), CTA pill (right, always visible). The "Start a project" pill is the only CTA in the header.

### SiteFooter

Three columns: wordmark + tagline + paragraph (5-span), Site/Contact/Operating link groups (7-span). Below: copyright + a brand tagline. Linen-tinted background.

---

## Buttons

### Primary pill (dark)

```html
<a class="
  inline-flex items-center justify-between gap-3
  bg-ink text-parchment
  rounded-full pl-6 pr-3 py-3
  text-[15px] font-medium no-underline
  hover:bg-ember-deep transition-colors group
">
  <span>Start a project</span>
  <span class="
    inline-flex h-9 w-9 items-center justify-center rounded-full
    bg-parchment text-ink
    group-hover:text-ember-deep transition-colors
  ">→</span>
</a>
```

Ink background, parchment text, ember-deep on hover. The trailing arrow sits in a small circle for tactile affordance.

### Secondary pill (light)

```html
<a class="
  inline-flex items-center justify-between gap-3
  border border-ink/15 text-ink
  rounded-full pl-6 pr-3 py-3
  text-[15px] font-medium no-underline
  hover:border-ink/40 transition-colors group
">
  <span>See our systems</span>
  <span class="
    inline-flex h-9 w-9 items-center justify-center rounded-full
    bg-ink/8 text-ink
    group-hover:bg-ink group-hover:text-parchment transition-colors
  ">↗</span>
</a>
```

Hairline border, transparent background. Inverts on hover (the circle bg becomes ink, the text becomes parchment).

---

## Eyebrows

### Plain eyebrow

```html
<p class="eyebrow">Custom AI software, built for production</p>
```

Lowercase Geist Mono 11px, tracked `0.18em`, uppercase via CSS, graphite color.

### Section-marker eyebrow

```html
<p class="eyebrow-accent">/ What we build</p>
```

Same typography, ember-deep color. The leading `/` is part of the brand vocabulary; treat it as a glyph, not punctuation.

### "Intersection" pill

```html
<div class="
  inline-flex items-center gap-3 rounded-full
  border border-ember/35 bg-ember/8
  pl-3 pr-4 py-1.5
">
  <span class="inline-flex h-1.5 w-1.5 rounded-full bg-ember"></span>
  <span class="font-mono text-[10.5px] tracking-[0.18em] uppercase text-ember">
    At the intersection of AI &amp; innovation
  </span>
</div>
```

Used on Hero and About page heros. The signature pill of the brand — always ember, always small dot + uppercase mono.

---

## Cards

### Standard card (solution / area / metric)

```html
<article class="
  card                              <!-- .card utility -->
  rounded-2xl
  p-5 md:p-8
  h-full flex flex-col gap-4 md:gap-5
  transition-colors hover:border-ink/20
">…</article>
```

The `.card` utility (defined in `globals.css`) sets:

```css
.card {
  background-color: color-mix(in oklab, var(--color-linen) 75%, var(--color-parchment));
  border: 1px solid color-mix(in oklab, var(--color-ink) 8%, transparent);
}
```

This produces a slightly lifted, parchment-toned panel that reads as "card" without needing a shadow.

### Solutions card layout

A solutions card carries:

1. A small mono `family` label (ember-deep) and an `01`–`06` index (graphite-soft), spread.
2. A 24–28px display title.
3. A 15px body paragraph.
4. A row of chip pills with the technical sub-tags.

### Process card layout

1. Large `01`–`04` metric number (ember-deep) and a duration label (mono, graphite-soft).
2. A 22–24px display title.
3. A 14.5px body paragraph.

---

## Dots, dividers, and accent bars

### Dot

```html
<span class="inline-block h-2 w-2 rounded-full bg-ember"></span>
```

The single accent dot. One per section maximum. Use to mark a category label.

### Accent bar

```html
<span class="inline-block h-[2px] w-7 bg-ember opacity-90"></span>
```

Used on the Functional Areas grid in the top-right of each card. A subtle but consistent ember signature across the matrix.

### Hairline divider

```html
<div class="h-px bg-ink/12"></div>
<!-- or the .rule utility class -->
<div class="rule"></div>
```

Single-pixel ink at 12% opacity. The default section separator.

### Outcomes proof rule

```html
<p class="pt-4 border-t border-ember/40 italic">…</p>
```

The italic proof line under each Outcome column has an ember hairline rule above it — a subtle nod that the proof is the accent.

---

## Animations

There are no JavaScript-driven entrance animations. Earlier versions used Framer Motion's `whileInView` and `animate` props, which produced "blank pages" on mobile when the animation failed to hydrate. We removed all of them.

The `Reveal` primitive (`src/components/primitives/Reveal.tsx`) is now a passthrough that renders its children with the className. If we add re-entrance animation later, it will be CSS-only and respect `prefers-reduced-motion`.

---

## Forbidden patterns

- ✗ Multiple accent colors per page beyond the ember system
- ✗ Drop shadows on cards (we use border-only)
- ✗ Gradients except the single radial-glow on the home Closing CTA
- ✗ Icons within prose body text (mono labels do the work)
- ✗ Emoji in headlines or button text
- ✗ Decorative photography of any kind on the marketing site
