# AlienAI — Brand Guide

> Higher order intelligence.

This is the canonical guide to how AlienAI presents itself. It governs the website, product UIs, marketing materials, decks, outbound, and every other surface that bears the AlienAI name.

---

## 1 · Positioning

**What we are.** AlienAI is a software company that builds production AI systems and licenses them as SaaS to businesses. We are not a consulting firm. We do not sell hours. We do not write strategy decks.

**What we sell.** A small library of named, productized systems — the Recruiting System, the Customer Operations System, the Document Intelligence System, the Sales Automation System, the Knowledge Copilot System, the Workflow Engine. Each one is built once, hardened in production, and deployed to many businesses. The engine is shared. The configuration is theirs.

**What we promise.** That a business can subscribe to a working system, plug it into their stack within weeks, and have it run continuously without growing the team that runs it. Production-grade. Auditable. Quietly compounding.

**What we don't promise.** Magic. Strategy. Off-the-shelf miracles. We are very good at the gap between a working prototype and a system a business can rely on — and we are clear that closing that gap is the entire job.

---

## 2 · Voice

**Editorial, not salesy.** Plain English. Short sentences. No buzzwords. No "revolutionizing." No "unleash the potential." No exclamation points outside of conversation.

**Confident by understatement.** State the result. Name the system. Move on. Headlines should sound like a closing argument, not an opening pitch.

**Specific over abstract.** "Quote turnaround compressed from days to minutes" beats "transformative business impact." Numbers, durations, system names, integrations — these are our texture.

**Honest about scope.** We say what we don't do as often as what we do. The first thing a prospect should learn about us is that we are not the right firm for half of what they might ask.

### Words we use

- **System** (not "solution," not "tool," not "platform" unless precise)
- **Deploy** (not "implement")
- **Configure** (not "customize")
- **Connect** (not "integrate" when "connect" suffices)
- **Production** (when meant — never as a buzzword)
- **Quietly** (a signature adverb — *quietly engineered, quietly compounds*)
- **Operate** (the verb of the brand — we ship things that *operate*)

### Words we don't use

- "Revolutionary," "disruptive," "game-changing," "transformative"
- "Synergy," "leverage," "unlock," "empower"
- "Solutions" (in marketing copy — use "systems")
- "Custom" — we don't sell custom. Each system is built once, configured many times.
- "Bespoke," "tailored from scratch"
- "Cutting-edge AI" — show, don't tell. Say what the system does.
- "World-class," "best-in-class," "industry-leading"
- "Agency," "consultancy" — we are a software company

### Cadence

- Body copy: short sentences, occasional long one. Em-dashes are fine, used deliberately.
- Headlines: lower-case sentence case unless a proper noun. Periods on declaratives.
- Numbers: keep them concrete. "8 weeks" not "a couple of months." "30–60%" not "significantly."

### Examples — yes / no

| ❌ Don't write | ✅ Write |
|---|---|
| "We deliver cutting-edge AI solutions for forward-thinking businesses." | "We build production AI systems for the work modern businesses run on." |
| "Our team will customize a bespoke solution for your unique needs." | "We deploy the same proven system, configured to your stack." |
| "AlienAI unlocks transformative business value!" | "AlienAI builds systems that quietly compound." |
| "Revolutionizing the future of work with AI." | "Higher order intelligence." |

---

## 3 · The Name

**"Alien"** — adjective, from the Latin *alienus*: "belonging to another," of a different order. The only sense in which we use it. There are no little green men. No UFOs. No sci-fi tropes.

**Spelling.** Always "AlienAI" (one word, capital A, capital A on AI) in prose. The lowercase "alienai" form is reserved for the wordmark.

**Pronunciation.** *AY-lee-en AY-eye.* (Two words spoken; one word written.)

**Voice references.** When the brand needs to refer to itself in copy, prefer "AlienAI" or "we." Avoid "the team," "our company," "the firm" (cliché agency-speak).

---

## 4 · Visual identity

See [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md) for the full system reference. The short version:

### Palette

| Color | Hex | Role |
|---|---|---|
| **Ink** | `#171A22` | Primary text, dark surfaces, footer — a settled fountain-pen blue-black |
| **Parchment** | `#F0E7D6` | Page canvas — a warm cream. Never use `#FFFFFF`. |
| **Linen** | `#E6D7BD` | Section breaks, card backgrounds |
| **Ember** | `#D24D2A` | Signature accent — pills, dots, accent bars. Used sparingly. |
| **Ember-deep** | `#A93B1F` | Ember hover state. Eyebrow-accent labels. |

The brand is monochromatic — ink on parchment — with **one** signature accent (ember). No second color. Heritage gold, forest green, cobalt, terracotta were all considered and rejected. Discipline > variety.

### Typography

- **Display + body:** Geist Sans (Vercel's open-source typeface)
- **Labels + numbers:** Geist Mono

Two faces. Clean, modern, software-native, decidedly not playful. We do not use serifs. We do not pair an italic-serif tagline with a sans-serif headline — that combination is over-used in 2026 AI marketing.

### Mark

The mark is a stylized lowercase "A" rendered as a chevron + crossbar, set inside an ink-colored rounded tile. The wordmark "alienai" is set in Geist Black with tight tracking (`-0.045em`), all lowercase.

Do not redraw the mark. Do not rotate it. Do not gradient it. Do not place it on a busy photograph. When in doubt, use the SVG in `/public/favicon.svg`.

---

## 5 · Layout principles

- **Generous, but not sparse.** The site reads as confident and dense — not as a brand guide. Sections have substantive content; whitespace serves typography, not the other way around.
- **Editorial column.** A `max-w-[1320px]` container with `px-6 md:px-10` is the default. Inside, content uses a 12-column grid where useful.
- **Single accent dot.** When a section needs a marker, use one small (`h-2 w-2`) ember dot. Not a row of three. Not a colored bar.
- **Sticky header.** Always sticky. Pill nav. The "Start a project" CTA is always visible.
- **Closing CTA.** Every long page ends with the same ink-on-parchment pill: aliens@alienai.llc and one secondary action.

---

## 6 · Forbidden patterns

These are the cliché AI marketing patterns we do not use, ever:

- Glowing/neon gradient mesh backgrounds
- 3D iridescent orbs
- Stock photography of "people in glasses looking at screens"
- Hexagonal grid patterns suggesting "tech"
- Brain-with-circuits iconography
- Robot hands reaching toward human hands
- Servers/clouds/binary numerals as decorative texture
- "AI"-prefixed pun product names (AIcademy, AIlite, AIliens, etc.)
- Generic SaaS hero illustrations of dashboards with cartoon people

---

## 7 · Naming conventions for systems

When introducing a productized system, use:

> **"The AI [Function] System"** — e.g., *The AI Recruiting System*, *The AI Customer Operations System*

The definite article ("the") is intentional. It signals a singular, named product, not a category. Avoid:

- "Recruiting AI" (generic)
- "Recruit.ai" or "Recruito" (toy-sounding)
- "AI for HR" (vague)
- "AlienAI Recruit" (sub-brand creep — we have one brand)

---

## 8 · Email and outbound

All outbound prose follows the voice rules above. Specific to email:

- **From:** `aliens@alienai.llc` (the only email address we publicize)
- **Subject lines:** ≤ 8 words, lowercase except proper nouns, no emoji
- **Sign-off:** A first name. Not "Best," not "Cheers," not "Warm regards." Just the name.
- **Signatures:** Name, role, the wordmark, the email. No phone block, no LinkedIn QR, no "Schedule a call" widget.

---

## 9 · Use of the brand by partners and press

- **Logo files:** SVG, in `/public/favicon.svg` for the mark. A horizontal wordmark file is rendered live in `src/components/brand/Wordmark.tsx`.
- **Clearspace:** Minimum half the mark's height of clearspace on all sides.
- **Backgrounds:** Mark on parchment, on linen, or knocked out on ink. Not on cobalt blue. Not on white.
- **Approvals:** Press use → email aliens@alienai.llc. We respond same business day.

---

*Last updated: alongside `design-system/tokens/design-tokens.json` v1.0.0. Update both together.*
