# CLAUDE.md — MPS Website Project Memory

This file is the permanent source of truth for developing the MPS marketing website in Claude Code. It was created by auditing the existing codebase (previously built in Claude.ai) before any further development began, then updated with the approved strategy/brand/Art Direction handed down from the previous Claude.ai project.

## Labeling convention (read before editing this file)

Every claim in this document falls into exactly one of these categories. When adding or editing content, tag it accordingly:

- **APPROVED DIRECTION** — strategic, brand, UX, or design decisions explicitly approved by the project owner. Binding. Do not treat existing code as having silently overridden these.
- **CURRENT IMPLEMENTATION** — what actually exists in the codebase today, verified by reading the files. Not automatically approved just because it's shipped.
- **VERIFIED BUSINESS DATA** — only facts about MPS (numbers, clients, results) explicitly confirmed by the project owner. Never invented.
- **PROPOSED CHANGE** — Claude's own recommendations. Not approved until the owner says so.

Where APPROVED DIRECTION and CURRENT IMPLEMENTATION disagree, both are recorded side by side and flagged `APPROVED DIRECTION ≠ CURRENT IMPLEMENTATION` — the conflict is not resolved by editing the site, only by an explicit decision from the project owner.

---

## 1. Project overview

**APPROVED DIRECTION** — concept: MPS is a **Business Growth Operating System**. It unifies strategy, marketing, sales, finance, team, process, and automation into one managed system. The site must sell the *system*, not a menu of separate services.

**CURRENT IMPLEMENTATION**:
- **Product**: Marketing/lead-generation website for **MPS**, a business growth & development consulting system ("система роста и развития для бизнеса").
- **Format**: Static multipage HTML site. No framework, no build tooling, no backend, no CMS.
- **Languages**: Bilingual RU/EN. Russian is the default (`<html lang="ru" data-lang="ru">`); English is toggled client-side. (RU/EN is also the **approved** requirement — see §3.)
- **Scale**: 39 HTML pages, one shared CSS file, one shared JS file, no photographic assets (SVG icons/illustrations only).
- **Primary conversion mechanism**: A "diagnostics" lead form ([diagnostics.html](diagnostics.html)) that hands off to a pre-filled WhatsApp message; no server-side backend currently processes leads. Consistent with the approved funnel entry point (§4).
- **Origin**: Initially designed and built in Claude.ai; development now continues in Claude Code. This file exists to bridge that transition.

[TO BE PROVIDED FROM PREVIOUS PROJECT CONTEXT: company background, founding story, business model details, service pricing structure, team/company info not published on the site]

---

## 2. Brand positioning

**APPROVED DIRECTION**:
- MPS = **Система роста бизнеса / Business Growth Operating System**. It unifies strategy, marketing, sales, finance, team, process, and automation into one managed system.
- The site sells **the system**, not a set of individual services.
- **Do not use negative/comparative positioning** — no "we are not an agency," "we are not a marketing company," "we are not consultants," or similar contrast statements against other categories of provider.
- Core framing (still valid, consistent with the system concept): a business is "not a set of departments, but a single system" — problems are cross-functional (finance × marketing × sales × team × process), not siloed.
- No guaranteed-results claims — do not promise a specific profit-growth percentage.
- Case studies are published without company names or identifying details (confidentiality/NDA policy) — still valid.

**APPROVED DIRECTION ≠ CURRENT IMPLEMENTATION** — conflict found:
- [about.html](about.html) and [faq.html](faq.html) currently define MPS **negatively**, by contrast with other categories:
  - vs. agency: "Агентство обычно продаёт конкретную услугу... MPS работает от финансовой цели бизнеса" (an agency sells one fixed service; MPS works from the business's financial goal).
  - vs. consultant: "Консультант обычно даёт рекомендации. MPS также доводит изменения до внедрения" (a consultant gives recommendations; MPS also carries changes through to implementation).
  - This is exactly the pattern the approved direction prohibits. Flagged for the project owner — **not to be rewritten yet**.
- Process principle currently on-site ("Сначала диагностика, потом решение. Сначала приоритеты, потом внедрение" — diagnostics before solutions, priorities before implementation) is compatible with the approved funnel (§4) and not in conflict.

[TO BE PROVIDED FROM PREVIOUS PROJECT CONTEXT: brand voice/tone guidelines, brand pillars, mission/vision statements, naming rationale for "MPS", brand personality attributes, messaging hierarchy beyond what's stated above]

---

## 3. Target audience

**APPROVED DIRECTION**:
- Primary audience: **owners and decision-makers of an existing, operating business** — not startups.
- Size threshold: businesses from **~30 million ₸ (KZT) turnover** and up.
- Must have an existing team and operating system already in place (not pre-revenue, not solo-founder).
- Primary market: **Kazakhstan**, with room for international expansion.
- Primary communication language: **Russian**. Site must be **RU/EN** (already implemented, see §1/§12).
- No additional audience characteristics (personas, psychographics, decision-maker/influencer mapping) are confirmed — do not invent beyond what's listed here.

**CURRENT IMPLEMENTATION** (compatible with the above, not in conflict):
- Diagnostics page copy: "owners of an operating business with a team, clients and cash flow who need managed growth" — consistent with the approved threshold/profile.
- Industries with dedicated content: clinics/medical, construction/renovation, restaurants/HoReCa, automotive/car service, education/training centers, manufacturing, retail/jewelry/beauty.
- Business scale labels used in case studies: "Малый бизнес" / "Средний бизнес" / "Крупный бизнес" (small/medium/large), with a monthly turnover example given in one case (~$65,000/month) — **VERIFIED BUSINESS DATA status unconfirmed**, treat as unverified copy, not a confirmed client figure (see §10 on invented data).
- Pain points targeted (homepage pain-grid): ad spend without profit growth, profit leakage despite revenue growth, sales dependent on individual staff, owner stuck firefighting, team without unified system, disconnected contractors, no unified financial/metrics visibility, scaling amplifying existing chaos.

[TO BE PROVIDED FROM PREVIOUS PROJECT CONTEXT: formal buyer personas beyond the profile above, specific decision-maker vs. influencer mapping, any additional target-market detail for international expansion]

---

## 4. Website goals and conversion funnel

**APPROVED DIRECTION**:
- The site must, within roughly the first ~5 seconds, answer: what MPS is, who it's for, what problem it solves, what result the owner gets, and what to do next.
- Overarching goal: not just an attractive site, but a **premium international B2B product** that helps a business owner decide to work with MPS.
- The site must: build trust quickly; present the business as a system of interconnected functions; help the owner see structural growth problems; demonstrate methodology and evidence; and drive a qualified prospect to a business diagnostics.
- **Approved funnel**: Диагностика → Аудит → Стратегия → Сопровождение/Implementation → Автоматизация → Масштабирование (Diagnostics → Audit → Strategy → Implementation/Support → Automation → Scaling). **Diagnostics is the primary entry point.**
- **Approved H1 direction**: «Находим, где бизнес теряет прибыль, и выстраиваем систему роста» ("We find where a business is losing profit, and build a system for growth").
- **Approved primary CTA copy**: «Пройти диагностику бизнеса» ("Take the business diagnostics").
- Case studies are a **secondary** trust path, not the primary conversion driver.
- This funnel/H1/CTA direction is locked — **do not change without separate explicit confirmation.**

**CURRENT IMPLEMENTATION** (compatible, minor CTA wording variance to note):
- Current homepage H1 ([index.html](index.html)) already reads "Находим, где бизнес теряет прибыль, и выстраиваем систему роста" — **matches the approved H1 direction**, no conflict.
- Current primary CTA button copy site-wide is "Получить диагностику" ("Get diagnostics") — **wording differs from the approved** «Пройти диагностику бизнеса» ("Take the business diagnostics"). Flagged as `APPROVED DIRECTION ≠ CURRENT IMPLEMENTATION`, not to be changed yet.
- CTA is reachable from header, mobile nav, sticky mobile CTA bar, hero, footer, and end-of-page "next step" blocks on nearly every page — structurally consistent with "diagnostics as primary entry point."
- Secondary CTA: WhatsApp float button (all pages) and a "Message on WhatsApp" CTA on [contacts.html](contacts.html) — consistent with cases/WhatsApp being secondary trust/contact paths.
- Funnel documented on [how-we-work.html](how-we-work.html): Квалификация/Qualification → Диагностика/Diagnostics → Приоритеты/Priorities → Стратегия/Strategy → Внедрение/Implementation → Контроль/Control → Масштабирование/Scaling (7 stages, JSON-LD `HowTo`) — compatible with the approved funnel, slightly more granular (adds Qualification and Control/Priorities as explicit stages, folds Automation into Implementation).
- Lead capture mechanics: diagnostics form collects name, country, business niche, monthly turnover, main task; submits via WhatsApp deep link (`wa.me/<number>?text=...`). Optional webhook (`MPS_CONFIG.leadWebhookUrl` in [main.js](assets/js/main.js)) wired but empty/unused (see §16).
- Pricing is explicitly **not published** — every service/solution/industry page ends with a price-note stating cost is determined after diagnostics.

[TO BE PROVIDED FROM PREVIOUS PROJECT CONTEXT: quantified conversion goals/KPIs, target conversion rate, intended lead qualification criteria, what happens after WhatsApp handoff operationally, whether the webhook is meant to connect to a CRM, confirmation on the CTA-copy variance noted above]

---

## 5. Information architecture

Confirmed against actual files and [sitemap.xml](sitemap.xml) (all entries verified to match real files, no orphans found):

```
/                           index.html (home)
/about.html
/how-we-work.html
/faq.html
/contacts.html
/diagnostics.html           (lead form landing page)

/solutions/                 index + 8 pain-point pages
  no-growth.html
  profit-loss.html
  unstable-sales.html
  owner-dependency.html
  team-management.html
  contractor-chaos.html
  business-analytics.html
  scaling-readiness.html

/services/                  index + 6 service pages
  business-audit.html
  business-growth-strategy.html
  implementation.html
  marketing-and-sales.html
  automation.html
  scaling.html

/cases/                     index (with industry filter) + 7 case studies
  restaurants-quick-analysis.html
  construction-strategy.html
  retail-beauty-marketing.html
  automotive-implementation.html
  manufacturing-full-outsourcing.html
  clinics-audit.html
  education-funnel.html

/industries/                index + 7 industry pages
  clinics.html
  construction.html
  restaurants.html
  automotive.html
  education.html
  manufacturing.html
  retail-and-beauty.html
```

- **Top nav** (identical on every page): Решения/Solutions (mega-menu), Услуги/Services (mega-menu), Кейсы/Cases, Отрасли/Industries, Как мы работаем/How we work, О компании/About, FAQ. Header also carries a lang toggle (RU/EN) and the primary "Get diagnostics" button.
- **Cross-linking pattern**: solution pages link to relevant services; service pages link to relevant cases; industry pages link to relevant services + cases. Every content page ends with a breadcrumb trail and a "next step" diagnostics CTA block.
- **Footer** (identical on every page): brand blurb + Solutions list (5 of 8 shown) + Services list (all 6) + Company list (About/How we work/FAQ/Contacts).

[TO BE PROVIDED FROM PREVIOUS PROJECT CONTEXT: any planned pages not yet built, intended URL/taxonomy changes]

---

## 6. Design direction

**APPROVED DIRECTION** — Art Direction formula: **70% Intelligent System + 30% Executive Editorial**.

**Intelligent System (70%)** — visual language of: systems, connections, flows, diagnostic maps, KPIs, nodes, business functions, structural diagrams, interdependencies, managed growth.

**Executive Editorial (30%)** — strong typographic hierarchy, large editorial compositions, asymmetry, generous white space, deliberate rhythm, visual pauses.

Overall feel target: **intelligence + authority + premium restraint.**

The site must explicitly **not** look like: a templated AI-generated site, a generic SaaS template, a standard digital agency site, a CRM/dashboard product, or an experimental portfolio site built for effects' sake.

**Visual dramaturgy (approved narrative arc)**: Fragmentation → Diagnosis → Connection → Managed System → Growth. Each major section should have its own composition, visual focal point, rhythm, and dramaturgy (plus interaction mechanics only where genuinely needed) — while the site as a whole still reads as one system. **Repeating card grids must not be the default way of building every section** — a card is only appropriate when the content is genuinely a discrete, self-contained entity.

**APPROVED DIRECTION ≠ CURRENT IMPLEMENTATION** — conflict found:
- The current site is built almost entirely from **repeating card-grid sections** (`.pain-grid`, `.dir-grid`, `.case-grid`, `.ind-grid`, `.mock-grid`, `.testi-grid`) — this is the pattern the approved direction says must not be the default. Every section type audited in §5/§12 uses a card grid as its base layout.
- The current aesthetic (dark theme, single-color-mood card panels, uniform grid rhythm site-wide) reads closer to a generic dark SaaS template than to the "Intelligent System 70% / Executive Editorial 30%" formula — no asymmetry, no editorial pacing, no visual-pause rhythm between sections currently exists.
- Not to be redesigned at this step — flagged for the project owner's awareness only.

**CURRENT IMPLEMENTATION** (facts, kept for reference — not automatically approved):
- Dark theme throughout (`--bg-main: #10130F`), no light-mode variant implemented.
- Subtle fixed background grid texture (`.bg-grid`, 46px grid, low-opacity lines, radial mask fading toward the bottom of the viewport).
- Card-based layout system: rounded panels (`--radius: 14px` / `--radius-lg: 22px`) with soft borders (`--line`, `--line-strong`) on a slightly lighter panel background than the page background.
- Signature homepage element: an animated SVG "hub" diagram — a central node with 6 connected satellite nodes (Finance/Marketing/Sales/Team/Processes/Automation), animated flowing dashes along the connectors, clickable/tooltip-enabled nodes linking to solution pages. This is the one element already aligned with the "Intelligent System" visual language (systems/nodes/connections).
- Sticky, blurred (`backdrop-filter: blur(12px)`) translucent header.
- Consistent iconography: all icons are hand-authored inline SVGs (24×24 viewBox, `stroke-width:1.5`, `currentColor`), no icon library/font.
- Zero photography anywhere on the site (status unconfirmed as intentional — still open, see placeholder below).

[TO BE PROVIDED FROM PREVIOUS PROJECT CONTEXT: moodboard/inspiration references, whether a light theme is planned (note: the approved color palette in §8 is light-first — Canvas/Paper as base — which itself conflicts with the current dark theme), brand imagery direction, logo file/brand guidelines beyond the current text-based "MPS" mark]

---

## 7. Typography

**APPROVED DIRECTION**:
- **Display**: Prata
- **Body / UI**: Manrope — weights 400 / 500 / 600 / 700
- **Data / system labels**: IBM Plex Mono — used specifically for KPIs, statuses, indices, stage numbers, and system labels.
- Font changes are **not to be made yet** — this is direction for future work, not an instruction to swap fonts now.

**APPROVED DIRECTION ≠ CURRENT IMPLEMENTATION** — conflict found:
- The current codebase uses **Space Grotesk (display) / Inter (body)**, not Prata / Manrope / IBM Plex Mono. This is a full typeface mismatch against the approved direction, flagged for the project owner. Not to be changed at this step.

**CURRENT IMPLEMENTATION** (facts, kept for reference — not automatically approved):
- **Display font** (`--font-display`): `'Space Grotesk', sans-serif` — weights 500/600/700 loaded. Used for `h1`–`h5`, logo, nav mega-menu titles, stat numbers, section tags, buttons' numeric/label accents.
- **Body font** (`--font-body`): `'Inter', sans-serif` — weights 400/500/600/700 loaded. Used for body copy, nav links, form fields.
- Loaded via Google Fonts (`fonts.googleapis.com` / `fonts.gstatic.com`, with `preconnect`).
- Headings: `font-weight: 600`, `letter-spacing: -0.01em`, `line-height: 1.15`.
- `h1` is fluid: `clamp(30px, 4.4vw, 48px)`.
- Section heading (`h2` in `.section-head`): `clamp(24px, 3.2vw, 34px)`.
- Body base: `16px` / `line-height: 1.6`.
- Small/meta text conventions: `14px`–`14.5px` for body copy inside cards, `11–13px` uppercase tracked labels (`letter-spacing: 0.06–0.09em`) for eyebrows/tags/section labels. No dedicated monospace/system-label font currently used anywhere (relevant once IBM Plex Mono is introduced).

[No further placeholder needed — typeface direction is now approved, see above.]

---

## 8. Color system

**APPROVED DIRECTION** — approved palette:

| Name | Value | Usage rule |
|---|---|---|
| Canvas | `#F5F7F4` | base background |
| Paper | `#FFFFFF` | surface |
| Ink | `#11191B` | primary text |
| Deep Mineral | `#12383C` | dark accent |
| Mineral Green | `#2B6C63` | primary system color |
| Mist | `#DFE9E6` | tint/soft surface |
| Signal Lime | `#C9D96F` | **CTA, active state, positive KPI/growth signals only** |
| Risk Coral | `#D36C5F` | **risk, loss, error, negative diagnostic states only — not a decorative brand color** |

This is a **light-first** palette (Canvas/Paper as base), notably different in character from the current dark theme (§6).

**APPROVED DIRECTION ≠ CURRENT IMPLEMENTATION** — conflict found:
- The current color system (below) is a **dark palette** (near-black background, teal/gold/coral accents) and does not match the approved Canvas/Paper/Ink/Mineral Green/Signal Lime/Risk Coral system in either lightness, hue, or token names. This is a full palette mismatch, flagged for the project owner. Not to be changed at this step.
- One usage-rule parallel already exists conceptually: the current `--danger` token is already restricted to negative/problem states (pain cards, "without MPS" column) — the same restriction the approved direction places on Risk Coral. This behavioral pattern can likely carry over once the palette itself is migrated, but the actual color values must not be swapped in yet.

**CURRENT IMPLEMENTATION** (facts, kept for reference — not automatically approved) — design tokens exactly as defined in [style.css](assets/css/style.css) `:root`:

| Token | Value | Apparent role |
|---|---|---|
| `--bg-main` | `#10130F` | page background |
| `--bg-secondary` | `#171B15` | alternate section background (e.g. CTA bands, footer-adjacent) |
| `--panel` | `#1D231B` | card background |
| `--panel-light` | `#252C22` | hover/elevated card background |
| `--text-main` | `#F1EFE7` | primary text |
| `--text-secondary` | `#B7B9AE` | secondary text |
| `--text-muted` | `#878F82` | muted/meta text |
| `--accent` | `#4FD7BE` | primary accent (teal) — links, active states, primary data viz |
| `--accent-soft` | `rgba(79,215,190,0.12)` | accent tint background |
| `--gold` | `#C6A45B` | secondary accent (gold) — CTAs, highlights, "premium" signaling |
| `--gold-soft` | `rgba(198,164,91,0.12)` | gold tint background |
| `--danger` | `#DC7968` | negative/"problem" state (pain cards, "without MPS" comparison column) |
| `--danger-soft` | `rgba(220,121,104,0.12)` | danger tint background |
| `--line` / `--line-strong` | `rgba(241,239,231,0.09)` / `0.16` | hairline borders |

- Two-tone accent system: **teal (`--accent`)** = growth/positive/system, **gold (`--gold`)** = premium/primary CTA, **coral/red (`--danger`)** = problem/pain state. Used consistently: pain-grid hovers → danger; "good" comparison column → accent; CTA buttons → gold; stat numbers → teal→gold gradient text.
- `theme-color` meta and manifest background/theme color both set to `#10130F`.

[No further placeholder needed — palette direction is now approved, see above. Remaining open question: official Pantone/print values, if any exist beyond the hex codes given.]

---

## 9. Animation and interaction principles

**APPROVED DIRECTION** — core principle: **"Animation explains the system."** Motion must communicate connections, cause-and-effect, process, or a change of state — not decorate.

Approved mechanics: reveal; clip-path/masks; building system connections visually; signal flow; sticky narrative; before → after; hover intelligence; counters (**only for confirmed/verified data**, see §10).

Explicitly **not allowed**: infinite decorative animation; meaningless glow; heavy WebGL used purely for effect; motion that interferes with reading. `prefers-reduced-motion` must always be respected.

**APPROVED DIRECTION ≈ CURRENT IMPLEMENTATION** — largely compatible, two notes:
- Reveal-on-scroll, hover states, and the hub-diagram flowing-connection animation (below) already fit "animation explains the system" reasonably well.
- The counter-animation feature (`[data-count]`) must only ever be wired to **verified** business metrics once such data exists (see §10/§16) — do not attach it to placeholder or invented numbers.

Patterns currently implemented (in [style.css](assets/css/style.css) and [main.js](assets/js/main.js)):

- **Scroll reveal**: elements with class `.reveal` fade + translate-up on entering viewport via `IntersectionObserver` (`opacity 0→1`, `translateY(10px)→0`, `.45s ease`). A safety-net timeout forces all `.reveal` elements visible after 1200ms regardless, so content is never permanently hidden if JS/observer fails.
- **Respect for reduced motion**: global `@media (prefers-reduced-motion: reduce)` collapses all animations/transitions to ~0 and disables smooth scroll.
- **Hover conventions**: cards lift on hover (`translateY(-4px)`) with a matching colored glow shadow (danger/gold/accent depending on card type) and border-color shift to the relevant accent color.
- **Hub diagram**: connector lines have a continuously animated flowing-dash effect (`stroke-dashoffset` animation, 3.6s linear loop); nodes show a tooltip on hover/focus with title+description, positioned via JS using `getBoundingClientRect`.
- **FAQ accordion**: single-open-at-a-time within a `.faq-list`, height animated via `max-height` transition.
- **Mobile nav**: slide-in panel (`transform: translateX`) with accordion-style sub-menus.
- **Sticky mobile CTA**: bottom-fixed bar that slides in (`translateY(100%→0)`) once the user scrolls past the hero; WhatsApp float button repositions upward (`.raised`) when the CTA bar is visible, to avoid overlap.
- **Counter animation**: numeric case-study metrics animate from 0 to target value with cubic ease-out when scrolled into view (currently declared via `[data-count]` but not observed to be used in the sampled pages — verify before relying on it).

[TO BE PROVIDED FROM PREVIOUS PROJECT CONTEXT: any additional motion/interaction principles intended but not yet built, animation timing/easing standards to enforce on new components]

---

## 10. Content and copy rules

**APPROVED DIRECTION**:
- Every piece of copy must either **explain**, **prove**, or **persuade** — no filler.
- **Avoid these phrases/patterns**: «индивидуальный подход» (individual approach), «команда профессионалов» (team of professionals), «выводим бизнес на новый уровень» (we take business to a new level), «инновационные решения» (innovative solutions), «лучшие специалисты» (best specialists), empty superlatives, unconfirmed promises.
- **Never invent**: clients, case studies, results, percentages, testimonials, awards, years of experience, or business metrics.
- Where real data doesn't exist yet, mark it explicitly as `[PLACEHOLDER — REQUIRES VERIFIED DATA]` rather than filling in a plausible-sounding number.
- No negative/comparative positioning language (ties to §2 — "we are not an agency" etc. is also a copy-rule violation, not just a positioning one).

**APPROVED DIRECTION ≠ CURRENT IMPLEMENTATION** — conflict found:
- Existing case studies contain **specific unverified metrics** presented as fact (e.g. "22% → 41% repeat visits," "$65,000/month turnover," "+68% average improvement across cases" on the homepage stats strip) — under the approved rule these must be treated as **unverified** until confirmed as real, not as ready-to-keep VERIFIED BUSINESS DATA. Not to be edited/removed at this step — flagged for the project owner to confirm or mark as placeholder.
- The "not an agency / not a consultant" passages in about.html/faq.html (§2) also violate the "no empty comparison" spirit of this rule.

**CURRENT IMPLEMENTATION** conventions observed consistently across all 39 pages (facts, kept for reference — not automatically approved; largely compatible with the approved rules above except where flagged):

- **Bilingual duplication pattern**: every piece of copy is written twice inline — `<span class="i18n-ru">...</span><span class="i18n-en">...</span>` — toggled via CSS keyed off `html[data-lang]`. There is no separate translation file/i18n system.
- **No pricing anywhere on the site.** Every service/solution/industry page ends with an identical price-note: cost is determined after diagnostics, based on business scale, number of areas involved, and depth of implementation.
- **No guaranteed-outcome language** — case studies show concrete before/after metrics, but FAQ explicitly disclaims guaranteed profit percentages.
- **Case study anonymity**: no company names or identifying details in any case study; described by industry + scale only.
- **Recurring page skeleton** for solution/service/industry pages: symptoms/problem → why it happens → what's included/what's not → stages → data needed from client → what the owner gets → price-note → FAQ → related cases → next-step CTA.
- **Every page ends with a "Следующий шаг" (Next step) block** driving to diagnostics.
- **SEO title pattern**: `<Page-specific title> | MPS` for interior pages; homepage title has no suffix.

[TO BE PROVIDED FROM PREVIOUS PROJECT CONTEXT: formal voice-and-tone guide, editorial style guide, terminology glossary (e.g. approved translations of recurring terms), whether the current RU or EN copy is the "source of truth" for future edits]

---

## 11. Responsive design principles

**APPROVED DIRECTION**:
- **Grid**: Desktop 12 columns, max-width ~1440px, horizontal spacing ~64–88px. Tablet 8 columns. Mobile 4 columns, horizontal spacing ~20–24px.
- **Vertical section spacing**: Desktop ~128–180px between sections; Mobile ~88–120px.
- Avoid stacking too many visually heavy sections in a row — a complex "system" section should be followed by a calmer editorial pause (ties to §6 visual dramaturgy).
- **Mobile is not a shrunk desktop.** Complex system visualizations must become sequential states, vertical narrative flows, or simplified diagrams on mobile — not a smaller version of the same layout.
- QA must check Desktop / Tablet / Mobile × RU / EN for any significant change (see §17/§18).

**APPROVED DIRECTION ≠ CURRENT IMPLEMENTATION** — conflict found:
- The current grid system is **not** a 12/8/4-column grid — layout is built from ad hoc CSS Grid/Flexbox column counts per component (e.g. `.pain-grid` 4→2→1, `.dir-grid`/`.case-grid` 3→2→1, `.ind-grid` 4→3→2), with a `--maxw` of 1240px, not ~1440px, and section padding of 72px desktop / 52px mobile — well under the approved 128–180px / 88–120px vertical rhythm.
- The current 3-breakpoint system (1080 / 900 / 640px) is comparable in spirit to a desktop/tablet/mobile split but doesn't map cleanly onto the approved 12/8/4-column model. Not to be changed at this step.
- The hub diagram is the only element that currently changes composition (not just size) between desktop and mobile (max-width 480px → 380px, same layout) — it does not yet become a "sequential/vertical narrative" on mobile as the approved direction calls for.

**CURRENT IMPLEMENTATION** (facts, kept for reference — not automatically approved) — breakpoints exactly as defined in [style.css](assets/css/style.css):

- **`max-width: 1080px`**: pain-grid/dir-grid/case-grid drop from 4/3/3 columns to 2; industries grid 4→3; mock-grid 4→2; footer grid 4→2 columns.
- **`max-width: 900px`**: desktop nav, lang toggle, and header CTA button hide; hamburger menu appears; hero grid collapses to single column; hub diagram shrinks (max-width 380px); compare/content-2col/about-grid/diag-points collapse to 1 column; mobile sticky CTA bar becomes visible (`display:flex`).
- **`max-width: 640px`**: `.wrap` padding reduces to 18px; section vertical padding reduces; pain/dir/case/mock grids drop to 1 column; industries grid to 2 columns; form two-column rows collapse to 1; footer grid to 1 column; testimonial grid to 1 column; stat pills wrap to 2 per row.
- Mobile gets a device-specific UI: hamburger nav (slide-in panel with accordion sub-menus), sticky bottom CTA bar, and a WhatsApp float button that repositions to avoid overlapping the CTA bar.
- No container queries; all responsive behavior is viewport-width media queries.

[TO BE PROVIDED FROM PREVIOUS PROJECT CONTEXT: target device/browser support matrix, any required breakpoints not yet implemented]

---

## 12. Technical architecture

Verified facts about the current codebase:

- **Stack**: static HTML5 + one global CSS file + one global vanilla-JS file. No framework (React/Vue/etc.), no CSS preprocessor, no bundler, no `package.json`, no build step of any kind.
- **No backend/CMS.** All content is hardcoded directly into each HTML file.
- **No templating/includes system** — the entire `<header>`, mobile nav, and `<footer>` markup is duplicated verbatim in all 39 HTML files. There is no shared-partial mechanism (no SSI, no build-time include, no JS-injected header/footer). **Any change to nav/footer must currently be made by hand in every file.**
- **Path convention**: root-level pages reference assets as `assets/...`; pages one level deep (`solutions/`, `services/`, `cases/`, `industries/`) reference them as `../assets/...`.
- **JS structure** ([main.js](assets/js/main.js)): a single `DOMContentLoaded` handler containing independent, self-guarding feature blocks (language toggle, desktop dropdown nav, mobile menu, scroll reveal, FAQ accordion, hub diagram tooltips, mobile sticky CTA, lead-form handling, counter animation). A global `window.MPS_CONFIG` object holds the WhatsApp number, WhatsApp message templates (RU/EN), and an empty `leadWebhookUrl`.
- **Fonts**: loaded externally from Google Fonts CDN (`fonts.googleapis.com`), not self-hosted.
- **No version control detected** at the project root (not currently a git repository).
- **No test suite, no linter config, no CI configuration** present.

[TO BE PROVIDED FROM PREVIOUS PROJECT CONTEXT: whether a build step / templating system / framework migration is planned, hosting platform, deployment process]

---

## 13. SEO requirements (incl. accessibility & performance — approved as mandatory, non-negotiable baseline)

**APPROVED DIRECTION** — these must be preserved as mandatory requirements on every future change, not just nice-to-haves:
- Semantic HTML; full keyboard navigation; visible focus states; WCAG AA readable contrast; `prefers-reduced-motion` respected (also see §9).
- Mobile body text ≥ ~16px; no layout shifts.
- Minimal heavy third-party scripts; hero must not require heavy video/WebGL.
- Canonical URLs; unique metadata per page; correct H1–H3 hierarchy; separate URLs per service/case (already the case, see §5); `schema.org` structured data where appropriate.
- Lighthouse checks as part of QA for any significant change (see §18).

**APPROVED DIRECTION ≈ CURRENT IMPLEMENTATION** — largely compatible:
- Metadata, canonical, structured data, and heading hierarchy are already implemented per-page (see below) — consistent with the approved requirement, not a conflict.
- No heavy third-party scripts or video/WebGL currently present — compatible.
- WCAG AA contrast and Lighthouse have **not been audited/verified** as part of this project yet — open item, not a confirmed pass or fail.

**CURRENT IMPLEMENTATION** (facts, kept for reference — not automatically approved) — implemented today (verified against all sampled pages):

- Per-page `<title>` (with dual `data-title-ru`/`data-title-en` attributes for JS-driven swap), meta description, canonical URL, `robots: index, follow`.
- Open Graph (`og:type`, `og:site_name`, `og:title`, `og:description`, `og:image`, `og:url`) and Twitter Card (`summary_large_image`) tags on every page.
- Structured data (JSON-LD) per page type: `Organization`/`ProfessionalService` on home, `Service` on service pages, `Article` on solution/case/industry pages, `FAQPage` on FAQ and on pages with embedded FAQs, `HowTo` on how-we-work, `ContactPage`/`AboutPage`/`CollectionPage` as applicable — each including a `BreadcrumbList`.
- [sitemap.xml](sitemap.xml) lists all 39 pages with priority weighting (1.0 home, 0.8 section indexes, 0.6 detail pages) — confirmed to exactly match the files present, no orphans or missing entries either direction.
- [robots.txt](robots.txt): `Allow: /` for all user agents, references the sitemap.
- `favicon.svg` + `manifest.json` (PWA-lite, no service worker) present.

**Known SEO gap**: canonical/OG/JSON-LD URLs all use the placeholder domain `https://www.example-mps-domain.com` (152 occurrences across 40 files) — must be replaced with the real production domain before launch.

[TO BE PROVIDED FROM PREVIOUS PROJECT CONTEXT: target keywords, real production domain, analytics/tag-manager requirements, hreflang strategy for the RU/EN duplication (currently there is no `hreflang` or separate URL per language — both languages live at the same URL, toggled client-side, which search engines cannot index separately — confirm if this is the intended SEO approach)]

---

## 14. Things that must NOT be changed without explicit approval

**Strategic/brand/design locks (APPROVED DIRECTION — do not alter without separate explicit confirmation):**
- The Business Growth Operating System concept and positioning (§1/§2).
- The prohibition on negative/comparative positioning ("we are not an agency," etc.) — this also means the existing about.html/faq.html passages that violate it are **not to be silently rewritten** either; the conflict is flagged for the project owner to decide, not resolved unilaterally.
- The approved funnel (Диагностика → Аудит → Стратегия → Сопровождение → Автоматизация → Масштабирование), the approved H1 direction, and the approved primary CTA copy «Пройти диагностику бизнеса» (§4).
- The Art Direction formula (70% Intelligent System / 30% Executive Editorial) and the visual dramaturgy arc (§6).
- The approved color palette and typography (§7/§8) — and, symmetrically, **the current dark theme / Space Grotesk / Inter / teal-gold-coral system must not be treated as quietly "grandfathered in"** just because it ships today.
- The approved audience definition and RU/EN + Kazakhstan-market requirement (§3).
- The content rules in §10 (no invented data, no banned phrases, no negative positioning).

**Structural invariants observed in the current codebase** — flagged here because breaking them silently would have wide-reaching or hard-to-detect consequences:

- **The header/mobile-nav/footer markup is duplicated across all 39 files.** A partial edit (e.g. updating nav in some pages but not others) will silently desync the site. Any nav/footer change must be applied identically everywhere, or a templating solution should be discussed first.
- **The relative asset path convention** (`assets/...` at root, `../assets/...` one level deep) — changing directory depth of any page breaks its asset links.
- **`window.MPS_CONFIG.whatsappNumber`** in [main.js](assets/js/main.js) — changing this redirects all real leads; must be confirmed as intentional/correct before any change.
- **The `data-lang`/`i18n-ru`/`i18n-en` dual-span pattern** — this is the entire mechanism the site's bilingual support depends on; removing either span from any element breaks language switching for that content.
- **[sitemap.xml](sitemap.xml) ↔ actual file set correspondence** — currently exact; adding/removing/renaming a page without updating the sitemap (and vice versa) will desync SEO.

[No further placeholder needed — the strategic locks are now recorded above. Any additional specific copy/layout locks not covered above should be added here if the project owner identifies them.]

---

## 15. Current implementation status

- All 39 pages exist, are structurally complete, and cross-link correctly in the samples checked (nav, footer, breadcrumbs, related-content links, sitemap).
- Design system (colors, type, spacing, components) is consistently applied across all page types.
- Bilingual RU/EN toggle is functional site-wide via `localStorage`-persisted preference.
- Lead form on [diagnostics.html](diagnostics.html) validates required fields client-side and hands off to WhatsApp.
- Case-study filtering by industry is implemented on [cases/index.html](cases/index.html) only.
- SEO metadata, structured data, sitemap, and robots.txt are all in place and internally consistent (aside from the placeholder domain, see §13).
- No photographic/real imagery anywhere on the site — 100% SVG icon/illustration based.

---

## 16. Known technical issues

Carried over from the initial codebase audit — none of these have been fixed yet:

1. **Placeholder domain** `example-mps-domain.com` hardcoded in 152 places across 40 files (canonical, OG, JSON-LD, sitemap). Must be replaced before launch.
2. **No functioning backend lead capture** — `leadWebhookUrl` is empty; the only lead channel is the WhatsApp deep-link handoff. The success message displays regardless of whether the WhatsApp popup actually opened (e.g. if blocked by the browser or WhatsApp isn't installed).
3. **Unconfirmed WhatsApp number** (`77064261056`) hardcoded in [main.js](assets/js/main.js) — needs verification as the real, current business number.
4. **Suspect copy bug**: the sticky mobile-CTA banner text — *"Бесплатная консультация недоступна — запишитесь на диагностику бизнеса"* ("Free consultation unavailable — sign up for a business diagnostics") — appears verbatim on all 38 non-index-adjacent pages using this component. Reads as unintended/broken messaging; likely needs rewriting or was a mistranslation carried over from the original build.
5. **Dead/inconsistent CSS**: `.filter-bar`/`.filter-chip` styles are global, but the filtering JS is only implemented inline on [cases/index.html](cases/index.html) — industries/services/solutions index pages don't use it despite the shared styling existing.
6. **No 404 page.**
7. **No `hreflang` / per-language URLs** — RU and EN content share one URL per page, toggled client-side only; not indexable as separate language versions by search engines.
8. **Zero real photography/imagery** — may or may not be intentional; flagged as a gap either way.
9. **Maintenance burden from full markup duplication** (see §14) — every nav/footer change today requires 39 manual edits.
10. **Typography conflicts with the approved direction** (§7) — site uses Space Grotesk/Inter; approved is Prata/Manrope/IBM Plex Mono.
11. **Color palette may conflict with the approved Mineral Green system** (§8) — site uses a dark teal/gold/coral palette; approved is the light Canvas/Paper/Ink/Mineral Green/Signal Lime/Risk Coral palette.
12. **Real business proof (case studies, metrics, testimonials) requires verification** (§10) — current figures (e.g. "+68%", "$65,000/month", before/after percentages) are unconfirmed as real and must not be treated as VERIFIED BUSINESS DATA until the project owner confirms them.

---

## 17. Development workflow

**APPROVED DIRECTION** — workflow for future tasks:

1. Identify the business goal.
2. Identify the UX goal.
3. Identify the user scenario.
4. Read only the code relevant to the task.
5. Identify constraints.
6. Change only the necessary scope.
7. Don't touch unrelated parts of the project.
8. Test the result.

**Token/time-saving rule**: do not re-read the entire project for every small task. Use this CLAUDE.md and prior context first; read only the files relevant to the current task unless a full re-audit is explicitly needed.

**QA checklist** — before considering a significant change complete, check the items relevant to that change:
Desktop / Tablet / Mobile / RU / EN / Accessibility / SEO / Performance / Animation / Responsive / Typography / Spacing / Hover / Keyboard / Lighthouse implications.

**Never claim testing was done if it wasn't actually performed.**

**Current state** (facts only):

- No version control is currently initialized for this project.
- No build step, package manager, linter, or test suite exists.
- Development so far has happened directly in Claude.ai; this is the first Claude Code session for this project.
- This CLAUDE.md file itself is intended to be the persistent memory/source-of-truth going forward, since the project has no other form of documentation.
- The APPROVED DIRECTION / CURRENT IMPLEMENTATION / VERIFIED BUSINESS DATA / PROPOSED CHANGE labeling convention (see top of file) governs how new information is recorded from this point forward.

[TO BE PROVIDED FROM PREVIOUS PROJECT CONTEXT: preferred git workflow (branching, commit conventions), whether to introduce a build step/templating system going forward, hosting/deployment target and process]

---

*This file should be kept up to date as development continues. When placeholders above are filled in with real context from the previous project, replace the bracketed placeholder text directly rather than appending new sections.*
