# Profile-Card Portfolio Redesign — Design Spec

**Date:** 2026-05-01
**Scope:** Redesign of the Home page (`src/pages/Home.jsx`) into a single profile-card style page, retaining the dark theme.

## Goal

Adopt the layout system of the reference profile-page mockup (provided by the user) — profile-card hero + sticky sidebar of grouped small cards + right content column — while keeping the existing dark theme, brand color (`#202124` primary, red accent), and existing content. Mobile collapses to a tabbed view.

## Non-goals

- Changing routes (`/cv`, `/photography`, `/album/:id` remain).
- Restyling the `/cv`, `/photography`, or `/album/:id` pages.
- Changing the global `Header`, `Footer`, or `Layout`.
- Light theme support.

## Foundation

- Stack unchanged: React 18, Vite, Tailwind CSS, Framer Motion, react-router-dom v6.
- Color tokens unchanged: `--primary-color: #202124`, `--secondary-color: #e8eaed`, `--tertiary-color: #cccccc`, `--accent-color: red`.
- Existing data in `src/utils/skillsData.js` is reused. Two new fields are added: `certifications` and `photographyTeaser`.

## Layout

Home becomes one continuous profile page. The previous full-width `<Section>` model is retired on Home (the component itself is kept for any other consumers).

```
┌─────────────────────────── Profile Hero ───────────────────────────┐
│  banner ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│
│   ◉ avatar  Antonio Rice    [Work] [Focus]      [Get in touch]    │
│             Software Engineer                  [View Photography →]│
│             📍 Tokyo                                               │
│             [in] [gh] [✉] [📄]                                    │
└────────────────────────────────────────────────────────────────────┘
┌──────── Sidebar ────────┐  ┌──────── Right column ────────┐
│ Skills                  │  │ About                        │
│ Quick Links             │  │ Experience                   │
│ Certifications          │  │ Projects                     │
│ Location / Availability │  │ Learning                     │
│ Photography             │  │ Contact                      │
└─────────────────────────┘  └──────────────────────────────┘
```

- Desktop (≥768px): two-column grid. Sidebar is `position: sticky` on `top: 5rem`, ~320–360px wide. Right column is fluid.
- Mobile (≤640px): tabbed (see Mobile section).

## Hero card

- **Container:** rounded card (`border-radius: 12px`) with `border: 1px solid #2c2f31` and `background: #16181c` for visual separation from page bg.
- **Banner:** ~140–180px tall on desktop (~80–100px on mobile). Style: soft glow blobs — `#0e0f11` base with two faint radial gradients (red `rgba(239,68,68,0.18)` top-left, purple `rgba(124,58,237,0.18)` bottom-right). Subtle Framer Motion fade-in on mount; no continuous animation.
- **Avatar:** existing `/assets/images/main-avatar-3.jpg`, ~120px circle on desktop, overlapping the banner by 50%, ring-2 ring-white ring-offset matching current style.
- **Identity block:** name with existing red dot, "Software Engineer" subtitle, location chip ("📍 Tokyo, Japan").
- **Chip cluster:** four round chips (40px) for LinkedIn, GitHub, Email, Resume PDF. Reuses anchors and tracking from existing `SocialLinks` (Email is added — pulled from existing `Contact` component's address).
- **Quick-card:** two-cell card (Work | Focus). Reads from new fields in `skillsData.js`:
  - `Work` — current role + company (string).
  - `Focus` — current focus area (string).
  Mirrors the visual treatment of the reference's Work/Education card (red micro-label in uppercase + value).
- **CTAs:**
  - Primary: **"Get in touch"** — smooth-scrolls to `contactRef`.
  - Secondary: **"View Photography →"** — `navigate("/photography")`.
  Both reuse the existing `motion.button` styling (`bg-[#cccccc]` solid for primary, transparent + border for secondary).

## Left sidebar (desktop)

Each card uses a shared `<SidebarCard>` chrome: bordered (`#2c2f31`), rounded, padded, with an uppercase label heading.

1. **Skills** (`SkillsCard`) — pill cloud grouped by category, reusing `skills.about.skillSet` and the existing `<SkillPill>` component.
2. **Quick Links** (`QuickLinksCard`) — row of round icon chips: GitHub, LinkedIn, Resume PDF. Reuses URLs from existing `SocialLinks`.
3. **Certifications** (`CertificationsCard`) — vertical list. Each item: small icon, name, optional issuer, and a green check. Data: new `skills.certifications` array — see Data section. If the array is empty, the card is not rendered.
4. **Location / Availability** (`AvailabilityCard`) — single row: location pin + "Tokyo, Japan", and a status pill (e.g. "Open to roles" or "Currently employed"). Driven by new `skills.availability` object.
5. **Photography** (`PhotographyTeaserCard`) — 2×2 thumbnail grid of recent photos. Each thumbnail links to `/photography`. Data: new `skills.photographyTeaser` array of 4 image paths. Uses existing `<ImageWithLoader>` for lazy-loading.

The order above is fixed (Skills → Quick Links → Certifications → Availability → Photography), not user-configurable.

## Right column (desktop)

Plain headings, no card chrome (so the column doesn't visually compete with the sidebar). Each section has a top heading row matching the existing pattern (large title + red dot), then content. Spacing between sections matches current `Section` padding.

- **About** — paragraphs from `skills.about.description` via existing `<Description>`. Skills column is removed (skills now live in sidebar). The signature line ("- A. Rice") is preserved.
- **Experience** — existing `ExperienceBlock` items unchanged, followed by the existing 2-up grid (Resume download / Life Before Tech).
- **Projects** — existing `ProjectBlock` grid unchanged.
- **Learning** — existing `LearningBlock` items + `LeetCodeBlock` unchanged.
- **Contact** — existing `Contact` component unchanged.

The existing vertical floating nav (`<NavItem>` list at `top-1/3` on desktop) is **kept** for section-jump.

## Mobile (≤640px)

- Hero card stacks vertically: banner → avatar → identity → chips → quick-card (full width) → CTAs (stacked, full-width).
- Below the hero: a horizontally-scrollable, sticky tab bar (`position: sticky; top: 0`) with tabs: **About · Skills · Work · Projects · Learning · Contact**.
- Tapping a tab swaps the content area below it. Active tab is underlined in red.
- Sidebar cards collapse into the relevant tab:
  - "Skills" tab — Skills card + Certifications card + Availability card.
  - "Work" tab — Experience content (sidebar isn't shown here; experience is the focus).
  - Quick Links — chip row stays inside the hero on mobile (already there), so the sidebar Quick Links card is omitted on mobile.
  - Photography teaser — appended to the bottom of the "Projects" tab.
- Tab state is local component state (no router params). Initial tab: About.
- The current desktop floating left-side `NavItem` rail is hidden on mobile (already is).

## Component plan

### New components (`src/components/`)

- **`ProfileHero.jsx`** — replaces `HeroSection` on Home. Contains banner, avatar, identity, chips, quick-card, CTAs. Reads from `skillsData.hero`.
- **`SidebarCard.jsx`** — generic card chrome: `<SidebarCard title="Skills">{children}</SidebarCard>`. Border, padding, title heading.
- **`SkillsCard.jsx`** — sidebar card wrapping skills pill cloud. Reuses `<SkillPill>`.
- **`QuickLinksCard.jsx`** — sidebar card with icon chip row.
- **`CertificationsCard.jsx`** — sidebar card with cert list.
- **`AvailabilityCard.jsx`** — sidebar card with location + status.
- **`PhotographyTeaserCard.jsx`** — sidebar card with 2×2 thumbnail grid; click routes to `/photography`.
- **`MobileTabs.jsx`** — sticky horizontal tab bar + content slot. API: `<MobileTabs tabs={[{id, label, content}]} initial="about" />`.

### Modified

- **`src/pages/Home.jsx`** — replaced layout: hero → desktop two-column grid (sidebar + right column) on `md+`, mobile tabbed view on `sm`. Uses media-query-driven conditional rendering (Tailwind `sm:` and `md:` breakpoints).
- **`src/utils/skillsData.js`** — adds new fields:
  - `hero: { name, title, location, work: { company, role }, focus }`
  - `certifications: [{ name, issuer, icon? }]`
  - `availability: { location, status }`
  - `photographyTeaser: [src, src, src, src]`
- **`src/components/index.jsx`** — export the new components.

### Untouched

- `ExperienceBlock`, `ProjectBlock`, `LearningBlock`, `LeetCodeBlock`, `Contact`, `SocialLinks`, `Section`, `NavItem`, `Layout`, `Header`, `Footer`, `Description`, `SkillPill`, `ImageWithLoader`, `DevNote`.
- All other pages (`CV`, `Photography`, `AlbumDetails`, `ErrorPage`).
- Routing (`App.jsx`).
- Scroll context (`ScrollContext`) — section refs stay; mobile tabs do not use scroll-into-view.

## Data additions (skillsData.js)

```js
hero: {
  name: "Antonio Rice",
  title: "Software Engineer",
  location: "Tokyo, Japan",
  work: { company: "<current>", role: "<current>" },
  focus: "Cloud / Web",
},
certifications: [
  // { name: "AWS Solutions Architect Associate", issuer: "AWS" },
  // populate with real certs; empty array hides the card
],
availability: {
  location: "Tokyo, Japan",
  status: "Open to roles", // or "Currently employed"
},
photographyTeaser: [
  // four image paths from existing photography assets
],
```

Real values for `work`, `certifications`, and `photographyTeaser` are filled by Antonio during implementation; the spec only defines the shape.

## Animations

- Hero: existing fade + scale on mount (Framer Motion), unchanged pattern.
- Banner glows: simple opacity fade-in over 800ms; no continuous animation.
- Sidebar cards: stagger fade-in when scrolled into view (existing `useInView` pattern).
- Right-column sections: keep current per-section fade-in animation.
- Mobile tabs: cross-fade content on tab switch (200ms).

## Accessibility

- All chips and CTAs keep their existing `title` and `aria-label` attributes from `SocialLinks` and `HeroSection`.
- Mobile tab bar: `role="tablist"` / `role="tab"` / `role="tabpanel"`, arrow-key navigation between tabs, focus follows selection.
- Color contrast: chip and pill backgrounds remain `#2c2f31` on `#16181c` — verified WCAG AA in current site, unchanged.
- Photography teaser thumbnails have descriptive `alt` text from the existing photography data.

## Testing approach

This site has no test runner configured (`package.json` has no `test` script). Verification is manual:

1. `npm start` → verify dev server, no console errors.
2. `npm run build` → verify production build succeeds.
3. `npm run lint` → must pass with `--max-warnings 0`.
4. Visual smoke at three breakpoints: 375px, 768px, 1280px.
5. Click every CTA, chip, and tab: verify links route correctly and smooth-scroll works.
6. Verify the floating left-side `NavItem` rail still highlights the correct active section as you scroll on desktop.
7. Verify `/cv` and `/photography` routes still load without regression.

## Risks and trade-offs

- **Sidebar duplication on mobile:** sidebar cards have to find homes in tabs; some content (Quick Links) is intentionally dropped on mobile because it duplicates the hero chips. Documented above.
- **Mobile tabs hide content behind taps.** Acceptable per user choice; SEO is not impacted because all content still renders to the DOM (tabs are CSS-toggled, not conditionally mounted).
- **Photography teaser depends on real images** — if Antonio doesn't supply 4 thumbnails, fall back to hiding the card.
- **Certifications card hidden if empty** — avoids an awkward placeholder.
- **The existing scroll-tracking nav (`activeSection`) is desktop-only.** Mobile uses tabs, not scroll position; the two systems do not coordinate.
