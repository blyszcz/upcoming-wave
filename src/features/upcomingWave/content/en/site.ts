export const site = {
  // Page titles, descriptions and link-preview text (used by src/app metadata).
  meta: {
    siteName: 'Upcoming Wave',
    home: {
      title: 'AI will change your job. Who decides how?',
      description: 'A 5-minute visual guide: what AI could fix, what it could do to jobs and public budgets, and the rules that decide which future we get.',
    },
    sources: {
      title: 'Sources & method - Upcoming Wave',
      description: 'Every source behind the numbers and quotes on Upcoming Wave, and how I check them.',
    },
    // Text baked into the link-preview image (scripts/og-cards.py): white lead, orange accent.
    card: { lead: 'AI will change your job.', accent: 'Who decides how?' },
    ogAlt: 'AI will change your job. Who decides how? Two futures: an office emptied by automation, and a family with time back while a robot does the chores.',
  },
  sourcesPage: {
    title: 'Sources & method',
    lead: 'Every number and quote on the page is footnoted. Here is the full list, in order of appearance.',
    methodTitle: 'How I work',
    method: [
      'Every fact has a source. I check quotes against the primary source; where that isn’t accessible, I rely on reputable outlets that report them.',
      'Section labels say what something is: “today” - already happening; “history” - it happened before; “incident” - a real event; “possible” and “extreme scenario” - risks, not predictions.',
      'Lab tests are labeled as tests and never mixed with real incidents.',
      'Quotes from “The Coming Wave” use the wording of the English edition (Crown, 2023).',
      'I show the other side too: AI’s benefits and the arguments that the risks may be overstated.',
    ],
    listTitle: 'All sources',
    updated: 'Last updated: September 2026.',
    correction: 'Spotted a mistake? Tell me on X:',
    correctionAlt: 'or open an issue on GitHub',
    back: '← Back to the page',
    noLink: 'book - no link',
  },
  footer: {
    sourcesLink: 'Sources & method',
    code: { label: 'GitHub', issue: 'Report a mistake' },
    why: { title: 'Why this page?', text: 'I talk to people about AI a lot, and I keep seeing the same thing: what’s missing isn’t opinions, it’s context - an understanding of what’s actually at stake. So I decided to do something about it and explain it simply, in pictures.' },
    sources: 'Every fact links to its source. Scenarios are risks, not predictions.',
    independence: 'Independent, non-commercial project - not affiliated with any AI company, author or publisher.',
    author: { label: 'Made by', handle: '@blyzbyte', url: 'https://x.com/blyzbyte', with: '' },
  },
};
