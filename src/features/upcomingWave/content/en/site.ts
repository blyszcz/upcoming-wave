export const site = {
  // Page titles, descriptions and link-preview text (used by src/app metadata).
  meta: {
    siteName: 'Upcoming Wave',
    home: {
      title: 'Who pays for schools when AI does the work?',
      description: 'A 5-minute visual guide based on “The Coming Wave”: what AI could fix, which jobs and taxes it could erase, the July 2026 test that got out, and the rules that decide which future we get. Every fact is sourced.',
    },
    sources: {
      title: 'Sources & method - Upcoming Wave',
      description: 'Every source behind the numbers and quotes on Upcoming Wave, and how I check them.',
    },
    // Text baked into the link-preview image (scripts/og-cards.py): white lead, orange accent.
    card: { lead: 'Who pays for schools', accent: 'when AI does the work?' },
    ogAlt: 'Who pays for schools when AI does the work? The same wave, two futures: dark over a city, golden over a park.',
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
    code: { label: 'Open source on GitHub', issue: 'report a mistake' },
    why: { title: 'Why this page?', text: 'I talk to people about AI a lot, and I keep seeing the same thing: what’s missing isn’t opinions, it’s context - an understanding of what’s actually at stake. So I decided to do something about it and explain it simply, in pictures. Every fact links to its source.' },
    sources: 'Quotes from AI’s creators and scientists, research, and the book “The Coming Wave” (M. Suleyman, M. Bhaskar) - every fact links to its source.',
    independence: 'Scenarios are possible risks, not predictions. An independent project - not affiliated with the book’s authors or publisher.',
    author: { label: 'Made by', handle: '@blyzbyte', url: 'https://x.com/blyzbyte', with: '' },
  },
};
