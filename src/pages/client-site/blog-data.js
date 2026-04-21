/**
 * Canalix blog — CMS-ready static data.
 *
 * Shape chosen so a CMS (Sanity, Payload, Hygraph, etc.) can replace these
 * arrays with a fetched equivalent without the page JSX having to change.
 * Bodies are block-structured (type + payload) for the same reason — no
 * markdown parsing required at render time.
 *
 * Block types supported by the renderer:
 *   { type: 'p',     text }
 *   { type: 'h2',    text }
 *   { type: 'h3',    text }
 *   { type: 'quote', text, cite? }
 *   { type: 'ul',    items: [string] }
 *   { type: 'ol',    items: [string] }
 */

export const AUTHORS = [
  {
    slug: 'hugvit-studio',
    name: 'Hugvit Studio',
    role: 'Brand & product design',
    bio: 'Reykjavík-based design studio. We built Canalix end-to-end — brand, product, marketing, and the branded-house architecture that ties them together.',
    links: [{ label: 'hugvit.is', href: 'https://hugvit.is' }],
    avatarInitial: 'H',
  },
  {
    slug: 'canalix-stewards',
    name: 'Canalix brand stewards',
    role: 'Brand operations',
    bio: 'Custodians of the Canalix system. An editorial voice that publishes product notes and design-system updates from the house.',
    links: [],
    avatarInitial: 'Cn',
  },
  {
    slug: 'casedoc-product',
    name: 'Casedoc product team',
    role: 'Flagship product',
    bio: 'The team behind Casedoc — the justice platform that lives inside the Canalix house. We ship court software end-to-end.',
    links: [],
    avatarInitial: 'Cd',
  },
]

export const ARTICLES = [
  {
    slug: 'virtual-hearing-2',
    title: 'Virtual Hearing 2.0 — real-time transcript, live exhibits',
    excerpt:
      'The second-gen Teams add-on ships: concurrent transcript, exhibit-share with privilege controls, auto-filed into the case record.',
    authorSlug: 'casedoc-product',
    publishedAt: '2026-02-14',
    readingMinutes: 5,
    cover: '/brand/canalix/mood/mood-no-logo-02.png',
    tag: 'Product',
    body: [
      { type: 'p', text: 'Virtual Hearing 2.0 is now generally available. The release consolidates three capabilities that used to live in separate tools — transcript, exhibit-share, and the docket link — into a single Teams-native surface.' },
      { type: 'h2', text: 'What changed' },
      { type: 'p', text: 'The biggest shift is that the transcript is no longer a post-session artifact. It streams concurrently with the hearing, attaches to the case record in real time, and indexes against the participant roster.' },
      { type: 'ul', items: [
        'Transcript streams in real time, attached to the case record',
        'Exhibit-share enforces the same privilege controls as the source filing',
        'Orders issued mid-session populate the docket before the hearing closes',
      ] },
      { type: 'quote', text: "What used to be a post-session admin task is now just a side effect of having the hearing.", cite: 'Senior registrar, pilot deployment' },
      { type: 'h2', text: 'Rollout' },
      { type: 'p', text: 'Existing Casedoc tenants get the upgrade automatically. New deployments can opt in during onboarding. The on-prem bundle ships with the same feature set but a 30-day lag.' },
    ],
  },
  {
    slug: 'iceland-90-days-paperless',
    title: 'Iceland Ministry of Justice — 90 days to paperless',
    excerpt:
      'How a forty-year-old regional registry moved the full docket to Casedoc in a single fiscal quarter.',
    authorSlug: 'casedoc-product',
    publishedAt: '2026-01-22',
    readingMinutes: 7,
    cover: '/brand/canalix/mood/mood-no-logo-03.png',
    tag: 'Case study',
    body: [
      { type: 'p', text: 'The ministry had run on a 1984-vintage registry system — paper dockets, microfiche archives, and a hand-keyed index. In January 2025 they committed to migrating the full active case load in one fiscal quarter.' },
      { type: 'h2', text: 'The constraints' },
      { type: 'p', text: 'Three weeks of discovery, six weeks of migration, three weeks of stabilisation. No hearings cancelled, no filings lost, no data-sovereignty exceptions.' },
      { type: 'h2', text: 'What worked' },
      { type: 'ol', items: [
        'Pre-mapped every paper case-type to a Casedoc schema before touching records',
        'Ran two weeks of dual-write (paper + Casedoc) to build trust, then cut over',
        'Trained registrars on roles, not screens — the UI followed the role, not the task',
      ] },
      { type: 'p', text: 'At T+90 the ministry had ingested 48,000 active cases and retired two legacy systems. The paper archive stays for statutory retention; new cases file digital-first.' },
    ],
  },
  {
    slug: 'tokens-components-design-system',
    title: 'Tokens, components, and why every product feels the same',
    excerpt:
      'A look inside the Canalix design system and how it lets Forum, Hearings, and Casedoc ship at the same pace.',
    authorSlug: 'canalix-stewards',
    publishedAt: '2025-12-02',
    readingMinutes: 6,
    cover: '/brand/canalix/mood/mood-no-logo-04.png',
    tag: 'Design system',
    body: [
      { type: 'p', text: 'The Canalix design system is not a component library with a brand skin on top. It is a token vocabulary — color, typography, spacing, radius, elevation — that every product in the house speaks.' },
      { type: 'h2', text: 'Tokens before components' },
      { type: 'p', text: 'Components are downstream. The primary contract is that a Casedoc button and a Forum button reference the same `--kol-accent-primary` token, so changing the token changes both products in the same release.' },
      { type: 'h2', text: 'Two families, one voice' },
      { type: 'p', text: 'Montserrat for product and UI across every surface. PP Hatton as the editorial serif for Canalix display moments. That is the entire type system — nothing else ships.' },
      { type: 'quote', text: 'A system we could grow into, not a set of rules we had to follow.', cite: 'Canalix brand stewards' },
    ],
  },
  {
    slug: 'justice-runs-on-data',
    title: 'Justice runs on data — but whose data?',
    excerpt:
      'Sovereignty, audit, privilege, retention. The four questions every digital-court program has to answer.',
    authorSlug: 'hugvit-studio',
    publishedAt: '2025-10-18',
    readingMinutes: 8,
    cover: '/brand/canalix/mood/mood-no-logo-01.png',
    tag: 'Perspective',
    body: [
      { type: 'p', text: 'Every digital-court conversation eventually arrives at the same four questions. Who owns the data, who can audit it, what is privileged, and when is it destroyed?' },
      { type: 'h2', text: 'Sovereignty' },
      { type: 'p', text: 'Casedoc deploys on infrastructure the ministry controls — on-premise, national cloud, or a sovereign region of a commercial provider. The choice belongs to the court, not the vendor.' },
      { type: 'h2', text: 'Audit' },
      { type: 'p', text: 'Every filing, every view, every order generates an audit line. The line is immutable, signed, and retained for the full statutory window — independent of whether the case record itself is sealed.' },
      { type: 'h2', text: 'Privilege and retention' },
      { type: 'p', text: 'These are jurisdictional. Casedoc does not encode a global privilege model; it enforces the one the court configures. Retention works the same way — destruction schedules follow local statute.' },
    ],
  },
]

/* ── Selectors ── */

export const findAuthor = (slug) => AUTHORS.find((a) => a.slug === slug)
export const findArticle = (slug) => ARTICLES.find((a) => a.slug === slug)
export const articlesByAuthor = (slug) => ARTICLES.filter((a) => a.authorSlug === slug)
export const sortedArticles = () => [...ARTICLES].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' })
