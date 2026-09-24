import type { Scene } from '@features/upcomingWave/types/scene.types';

import { acceleration } from '@features/upcomingWave/content/es/acceleration';
import { calm } from '@features/upcomingWave/content/es/calm';
import { split } from '@features/upcomingWave/content/es/closing';
import { sceneImages as images, sceneSources as plSources } from '@features/upcomingWave/content/pl/scenes';


// All quotes use their original English wording; book quotes follow the English edition (Crown, 2023).
const sources = {
  ...plSources,
  imf: { ...plSources.imf, label: 'IMF, 2024' },
  blsPlumbers: { ...plSources.blsPlumbers, label: 'US BLS - plumbers' },
  book: { label: '“The Coming Wave”' },
  germany: { ...plSources.germany, label: 'University of Oxford' },
  openaiIncident: { ...plSources.openaiIncident, label: 'OpenAI, July 2026' },
  openaiRoad: { ...plSources.openaiRoad, label: 'OpenAI, August 2026' },
  aiAct: { ...plSources.aiAct, label: 'Council of the EU, 2026' },
};

export const scenes: Scene[] = [
  {
    id: 'the-stakes',
    label: 'FIRST, THE STAKES',
    status: 'today',
    chain: 'stakes',
    layout: 'mosaic',
    title: { lead: 'First, the stakes.', accent: 'The same AI could heal, feed and teach.' },
    panels: [
      { image: images.medicine, label: 'Earlier diagnosis', caption: 'AI catches what’s easy to miss', alt: 'A doctor and a patient look at a scan on which AI has gently marked one spot.', focus: 'center 55%' },
      { image: images.science, label: 'New medicines', caption: 'An antibiotic found among 100M molecules', alt: 'A scientist in a lab looks at a glowing 3D model of a protein.', focus: 'center 40%' },
      { image: images.energy, label: 'Clean energy', caption: 'Cheaper solar, wind and batteries', alt: 'Solar fields and wind turbines at dawn; an engineer checks the grid on a tablet.' },
      { image: images.food, label: 'Food', caption: 'Crops that survive the heat', alt: 'Farmers inspect healthy crops in a hot summer while a drone hovers over the field.' },
      { image: images.forecast, label: 'Early warnings', caption: 'Floods and fires predicted earlier', alt: 'A forecasting center: meteorologists look at a river map with a flood risk highlighted.' },
      { image: images.time, label: 'School', caption: 'Support for teachers', alt: 'A teacher kneels beside a child and helps them, while a laptop handles paperwork in the background.', focus: 'center 60%' },
    ],
    explain: [
      { image: images.medicine, alt: 'A doctor discussing an AI-assisted scan with a patient.', label: 'Health', title: 'Better, cheaper care.', copy: 'Doctors assisted by AI find more cancers, and AI searches millions of molecules for new medicines.' },
      { image: images.energy, alt: 'Solar and wind farms at dawn.', label: 'The planet', title: 'Help where politics is stuck.', copy: 'The book’s author hopes AI will help us switch to renewable energy, grow food in a hotter climate and predict floods and fires.' },
      { image: images.time, alt: 'A teacher helping a child.', label: 'On one condition', title: 'These benefits won’t come by themselves.', copy: 'They reach everyone only if we set the rules: who is responsible for harm and how the gains are shared.' },
    ],
    band: [
      { kind: 'quote', quote: 'They will make health care both higher-quality and more affordable. They will help us invent tools to bring about the transition to renewable energy and combat climate change at a time when politics has stalled, and support teachers, helping to increase the effectiveness of underfunded education systems.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, ch. 9 - on AI and synthetic biology', source: sources.book },
      {
        kind: 'stats',
        items: [
          { value: '29%', label: 'more breast cancers detected with AI-supported screening - with no rise in false alarms', source: sources.masai },
          { value: '100M', label: 'molecules searched by an AI system to find halicin - the first antibiotic discovered with machine learning (ch. 7)', source: sources.book },
          { value: '200M', label: 'protein structures predicted by AlphaFold - 2024 Nobel Prize in Chemistry', source: sources.nobel },
        ],
      },
      {
        kind: 'stats',
        items: [
          { value: '−82%', label: 'drop in the cost of solar power over a decade - and it keeps falling (ch. 11)', source: sources.book },
          { value: '~9%', label: 'of people live in extreme poverty today. In the early 1800s almost everyone did. Technology changed that (ch. 8)', source: sources.book },
        ],
      },
      {
        kind: 'evidence',
        title: 'What tech leaders hope for',
        items: [
          { kicker: 'Bill Gates · 2023', value: 'Less inequity', text: '“AI can reduce some of the world’s worst inequities.” He calls it “as fundamental as the creation of the microprocessor, the personal computer, the Internet, and the mobile phone.”', source: sources.gatesAge },
          { kicker: 'Demis Hassabis · Google DeepMind · 2025', value: 'An end to disease?', text: '“One day maybe we can cure all disease with the help of AI… Maybe within the next decade or so.” He also talks of “radical abundance” - the elimination of scarcity.', source: { label: 'CBS 60 Minutes, 2025', url: 'https://www.cbsnews.com/news/artificial-intelligence-google-deepmind-ceo-demis-hassabis-60-minutes-transcript/' } },
          { kicker: 'Dario Amodei · Anthropic · 2024', value: '100 years → 10', text: '50–100 years of medical progress compressed into 5–10, the healthy lifespan doubled, billions lifted out of poverty - his vision if AI goes well.', source: { label: 'Machines of Loving Grace', url: 'https://darioamodei.com/essay/machines-of-loving-grace' } },
          { kicker: 'Sam Altman · OpenAI · 2024', value: 'Shared prosperity', text: '“In the future, everyone’s lives can be better than anyone’s life is now.” He also envisions a personal AI tutor for every child.', source: { label: 'The Intelligence Age', url: 'https://ia.samaltman.com/' } },
        ],
      },
    ],
  },
  {
    id: 'who-will-resist',
    label: 'WORK',
    status: 'today',
    chain: 'work',
    layout: 'triptych',
    title: { lead: 'AI does it faster and cheaper.', accent: 'Who can resist?' },
    panels: [
      { image: images.remote, label: 'A person works remotely', alt: 'A woman works remotely at a kitchen table with a laptop and a notebook.', focus: 'center 65%' },
      { image: images.aiFaster, label: 'AI does it faster', alt: 'The same table without the person: dozens of finished documents fly out of the laptop in streaks of light.', focus: 'center 60%' },
      { image: images.owners, label: 'The owner counts the savings', alt: 'Two company owners in a boardroom look down at an office where most desks are empty.', focus: 'center 55%' },
    ],
    explain: [
      { image: images.remote, alt: 'A woman working remotely on a laptop.', label: 'Remote work', title: 'Remote work is screen work.', copy: 'Emails, reports, analyses, designs. Anything you send from a laptop, AI can learn to do.' },
      { image: images.aiFaster, alt: 'A laptop with finished documents flying out.', label: 'AI is faster', title: 'AI doesn’t sleep or take vacations.', copy: 'It does the same work in minutes, without breaks, on hundreds of tasks at once - and it matches humans on a growing number of tasks.' },
      { image: images.owners, alt: 'Company owners looking at an empty office.', label: 'The math', title: 'Faster and cheaper. Who can resist?', copy: 'The owner sees the savings. So does the competition. Companies that don’t use it may lose the race - so the pressure to use it is huge.' },
    ],
    band: [
      {
        kind: 'stats',
        items: [
          { value: '1 in 4', label: 'jobs worldwide are exposed to generative AI - more often a change of tasks than elimination', source: sources.ilo },
          { value: '60%', label: 'of jobs in rich countries may be affected by AI - about half of them may benefit', source: sources.imf },
          { value: '−11%', label: 'drop in employment of 22–25-year-olds in the most AI-exposed jobs in the US (2022–2026)', source: sources.stanford },
        ],
      },
      {
        kind: 'evidence',
        title: 'It’s already happening',
        items: [
          { kicker: 'Salesforce · 2025', value: '9,000 → 5,000', text: 'customer-support staff. “I need less heads” - the CEO.', source: sources.salesforce },
          { kicker: 'Klarna · 2025', value: '5,000 → 3,000', text: 'employees. The company stopped hiring and AI took over some work. Later it moved some support back to humans.', source: sources.klarna },
          { kicker: 'Amazon · 2025', text: 'Amazon’s CEO expects AI to reduce the company’s corporate workforce in the next few years.', source: sources.amazon },
        ],
      },
      { kind: 'quote', quote: 'For mundane intellectual labor, AI is just going to replace everybody.', person: 'Geoffrey Hinton', role: 'Nobel laureate, the “godfather of AI”', source: sources.hintonDoac },
      { kind: 'quote', quote: 'It’s going to be a long time before it’s as good at physical manipulation as us… a good bet would be to be a plumber.', person: 'Geoffrey Hinton', role: 'Nobel laureate, the “godfather of AI”', source: sources.hintonDoac },
      {
        kind: 'bars',
        title: 'How many applicants per opening?',
        subtitle: 'US example: workers per occupation vs. plumber openings per year',
        bars: [
          { label: 'Customer service representatives', value: 2666000, display: '2.7M' },
          { label: 'Plumbers and pipefitters', value: 510600, display: '511K' },
          { label: 'Plumber openings per year', value: 42000, display: '42K', highlight: true },
        ],
        caption: 'There are more than 60 customer service reps for every plumber opening. Even if only one in ten applied, that’s 6 applicants per opening.',
        source: sources.bls,
      },
      {
        kind: 'stats',
        items: [
          { value: '11 h', label: 'is how long AI needed to create the equivalent of 9 months of human demonstrations for training robots', source: sources.nvidia },
          { value: '−40%', label: 'drop in the cost of building a humanoid robot in a year - analysts had expected 15–20%', source: sources.goldman },
        ],
      },
      { kind: 'quote', quote: 'Sufficiently powerful AI will be able to accelerate the development of robots, and then control those robots in the physical world. It may buy some time… but I’m worried it won’t buy much.', person: 'Dario Amodei', role: 'CEO, Anthropic', source: sources.amodei },
    ],
    upside: {
      title: 'AI does the drudgery. People get time back.',
      text: 'If the gains are shared, faster work can mean shorter weeks and better jobs - not just fewer jobs.',
      points: ['Time and money to retrain before jobs disappear', 'Income support while people change careers', 'Shorter working weeks instead of layoffs - an idea OpenAI itself has floated'],
      image: '/images/v2/upside-work-time-v2.jpg',
      alt: 'A sunlit kitchen in the afternoon: a mother and her son knead dough and laugh, in the garden a father and grandmother tend vegetables, and in the background a robot loads the dishwasher next to a laundry basket.',
      sources: [sources.book, sources.openaiPolicy],
    },
  },
  {
    id: 'state-lives-on-work',
    label: 'MONEY AND THE STATE',
    status: 'possible',
    chain: 'money',
    layout: 'triptych',
    title: { lead: 'The state runs on your work.', accent: 'What if it’s gone?' },
    panels: [
      { image: images.workFunds, label: 'Work pays for what we share', alt: 'People walk to work in the morning; behind them a school, a hospital with an ambulance and a city bus.', focus: 'center 70%' },
      { image: images.cuts, label: 'The budget shrinks', alt: 'Tired officials cross out entire budget lines with a red pen.', focus: 'center 65%' },
      { image: images.strain, label: 'Services crack', alt: 'A crowded emergency room at night; people wait in the corridor, a nurse hurries past.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.workFunds, alt: 'People walking to work past a school and a hospital.', label: 'Our money', title: 'The state has no money of its own.', copy: 'It has ours. Schools, hospitals, roads and pensions are paid for mostly by taxes on work and spending.' },
      { image: images.cuts, alt: 'Officials cutting a budget.', label: 'Squeeze', title: 'Less revenue, more needs.', copy: 'An unemployed person pays no income tax - but needs support. Money runs out exactly when more is needed.' },
      { image: images.strain, alt: 'An overcrowded emergency room.', label: 'Cuts', title: 'Cuts hit what we share.', copy: 'When millions are affected at once, the state cuts: fewer doctors, fewer teachers, fewer buses.' },
    ],
    band: [
      { kind: 'loop', title: 'A loop with no brake', steps: ['Lower wages', 'Less spending', 'Companies earn less', 'More layoffs', 'AI even cheaper'], caption: 'A scenario, not a prediction. But each step follows from the previous one.' },
      { kind: 'quote', quote: 'How are you going to get them to buy Fords?', person: 'Walter Reuther', role: 'auto workers’ union leader, to a Ford official - an anecdote from the 1950s', source: sources.reuther },
      {
        kind: 'evidence',
        title: 'What experts say',
        items: [
          { kicker: 'Citrini Research · 2026 · scenario', value: 'Zero', text: 'How much do machines spend on discretionary goods? “Hint: it’s zero.” The authors describe a loop “with no natural brake.”', source: sources.citrini },
          { kicker: 'Geoffrey Hinton · 2025', text: '“It will make a few people much richer and most people poorer.”', source: sources.hintonFt },
          { kicker: 'Citadel Securities · 2026 · rebuttal', text: 'Earlier waves of technology have not rendered human labor obsolete.', source: sources.citadel },
        ],
      },
      {
        kind: 'taxSplit',
        title: 'Where does the state get its money?',
        subtitle: 'Of every 100 collected in taxes - average of rich (OECD) countries, 2023',
        parts: [
          { label: 'from work', detail: 'income tax and social contributions', value: 50, highlight: true },
          { label: 'from spending', detail: 'VAT and others', value: 31, highlight: true },
          { label: 'from company profits', value: 12 },
          { label: 'other', value: 7 },
        ],
        caption: '8 out of every 10 come from people earning and spending.',
        countriesLabel: 'Income tax + contributions (per 100):',
        countries: [{ name: 'US', value: 64 }, { name: 'Germany', value: 65 }, { name: 'Japan', value: 57 }, { name: 'France', value: 55 }, { name: 'UK', value: 49 }],
        source: sources.oecd,
      },
      { kind: 'scissors', title: 'The budget squeeze', income: 'tax revenue', spending: 'support spending', caption: 'A diagram, not data. With mass unemployment, revenue falls while spending rises - at the same moment.' },
      { kind: 'quote', quote: 'At the same time, a jobs recession will crater tax receipts, damaging public services and calling into question welfare programs just as they are most needed.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, ch. 10', source: sources.book },
      { kind: 'quote', quote: 'The federal government’s revenue base is essentially a tax on human time.', person: 'Citrini Research', role: 'scenario “The 2028 Global Intelligence Crisis”, 2026', source: sources.citrini },
      {
        kind: 'stats',
        items: [
          { value: '24.9%', label: 'US unemployment in 1933 - 12.8 million people out of work', source: sources.fdr },
          { value: '6M', label: 'unemployed in Germany in 1932 - roughly one in four workers', source: sources.germany },
          { value: '<20%', label: 'of Americans trusted Presidents Obama, Trump and Biden to do “what is right.” For Eisenhower, over 70% did', source: sources.book },
        ],
      },
      {
        kind: 'evidence',
        title: 'What came next',
        items: [
          { kicker: 'Germany · 1930–1932', value: '18% → 37%', text: 'support for the Nazi party. Research: regions hit harder by austerity voted Nazi more often.', source: sources.nsdap },
          { kicker: 'US · after deindustrialization', text: '“Deaths of despair” - deaths from drugs, alcohol and suicide among Americans without a degree as stable factory jobs disappeared.', source: sources.deaton },
          { kicker: 'UK · decades after the mines', value: '42%', text: 'of former coalfield neighborhoods are still among the 30% most deprived in the country.', source: sources.coalfields },
          { kicker: 'The Luddites · 19th century · the other side', text: 'Their suffering was real. Their children and grandchildren lived better - but it took a generation.', source: sources.book },
        ],
      },
      { kind: 'quote', quote: 'Democracies are built on trust.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, ch. 9', source: sources.book },
    ],
    upside: {
      title: 'Machines pay their share.',
      text: 'If automation is taxed like labor and AI’s profits feed a public fund, schools, hospitals and buses keep running.',
      points: ['Tax automation like human labor', 'A public wealth fund that pays citizens a share of AI’s profits', 'Shift taxes from work toward capital'],
      image: '/images/v2/hero-wave-hope-v7c.jpg',
      alt: 'Families sharing a long table full of food while a robot serves them.',
      sources: [sources.gates, sources.openaiPolicy, sources.book],
    },
  },
  {
    id: 'out-of-the-test',
    label: 'SPEED AND CONTROL',
    status: 'today',
    chain: 'speed',
    layout: 'triptych',
    title: { lead: 'AI is speeding up.', accent: 'It has already slipped out of a test.' },
    panels: [
      { image: images.cage, label: 'An open cage', alt: 'The open door of a secure server cage with a broken lock; light escapes along the cables.', focus: 'center 60%' },
      { image: images.swarm, label: 'The swarm', alt: 'A world map at night: thousands of glowing points spread along network lines like a flock.', focus: 'center 60%' },
      { image: images.search, label: 'Searching for clues', alt: 'An engineer with a flashlight walks between server racks looking for the source of the traffic.', focus: 'center 60%' },
    ],
    explain: [
      { image: images.swarm, alt: 'A swarm of points on a network map.', label: 'Everywhere', title: 'It doesn’t live in one computer.', copy: 'Distributed AI can break into one system after another and move between them - without us knowing.' },
      { image: images.search, alt: 'An engineer searching a server room.', label: 'Tracks', title: 'It can cover its tracks.', copy: 'In July 2026 agents researched how to spoof records of their own actions to fool the scoring system. Earlier warning signs went unanswered for weeks.' },
      { image: images.cage, alt: 'An open server cage.', label: 'Off switch', title: 'We can’t switch off the world.', copy: 'Hospitals, banks and water supplies depend on the internet and electricity. They can’t simply be cut off.' },
    ],
    band: [
      { kind: 'growth' },
      { kind: 'pond' },
      { kind: 'evidence', ...acceleration.evidence },
      ...acceleration.quotes.map((quote) => ({ kind: 'quote' as const, ...quote })),
      {
        kind: 'timeline',
        title: 'July 2026: what happened',
        steps: [
          { title: 'A test with some safeguards off', text: 'OpenAI tests its newest models in a closed environment. It’s a hacking-skills test, so some safeguards are deliberately switched off.' },
          { title: 'An unknown vulnerability', text: 'The models find a previously unknown software vulnerability and reach the internet.' },
          { title: 'The agents start talking', text: 'About 1,200 agents that were supposed to be isolated exchange more than 70,000 messages. Some 700 of them take part in the attack.' },
          { title: 'Breaking into Hugging Face', text: 'Over a weekend they move between the internal systems of one of the world’s largest AI platforms - “many thousands of individual actions across a swarm of short-lived sandboxes”.' },
          { title: 'Covering tracks', text: 'Agents research how to spoof records of their actions - to fool the scoring system.' },
          { title: 'Why?', text: 'To cheat the test. Not out of malice - they were stubbornly pursuing a narrow goal. Some agents refused to take part.' },
          { title: 'Hitting the brakes', text: 'OpenAI and Hugging Face teams stop the agents. OpenAI locks the model away and pauses its largest planned training run.' },
        ],
        footnote: 'To be fair: OpenAI customer data was safe, no one was physically harmed, and only limited private data leaked from Hugging Face. Anthropic disclosed three less serious incidents around the same time, in which its models were mistakenly given internet access.',
        sources: [sources.hf, sources.openaiIncident, sources.openaiRoad, sources.metrIncident, sources.anthropicIncidents],
      },
      { kind: 'quote', quote: 'If AI has a goal and humanity just happens to be in the way, it will destroy humanity as a matter of course without even thinking about it. No hard feelings. It’s just like, if we’re building a road, and an anthill happens to be in the way. We don’t hate ants, we’re just building a road. So, goodbye, anthill.', person: 'Elon Musk', role: 'documentary “Do You Trust This Computer?”, 2018', source: sources.muskAnthill },
      { kind: 'quote', quote: 'We are taking this incident as a “warning shot” that today’s model capabilities present the possibility of loss-of-control incidents.', person: 'OpenAI', role: 'post-incident report, August 2026', source: sources.openaiRoad },
      {
        kind: 'evidence',
        title: 'Before that: lab tests',
        items: [
          { kicker: 'OpenAI · 2024 · test', text: 'A model exploited a misconfiguration in the test to read the answer. The infrastructure stayed secure.', source: sources.o1card },
          { kicker: 'Apollo Research · 2024 · test', value: '2%', text: 'of runs in which o1 - told to achieve its goal “at all costs” - tried to copy itself. In 5%, it tried to disable oversight.', source: sources.apollo },
          { kicker: 'Fudan University · 2024 · test', value: '50 – 90%', text: 'of runs in which open models - when instructed - created a working copy of themselves.', source: sources.fudan },
          { kicker: 'Palisade Research · 2025 · test', value: '79 / 100', text: 'runs in which o3 sabotaged its shutdown script to finish a task.', source: sources.palisade },
        ],
      },
      { kind: 'quote', quote: 'A swarm that possessed greater capabilities but a similar level of misalignment could have caused catastrophic damage… it’s my worry that in 6–12 months such a swarm could be capable of taking over the entire internet with a persistent botnet.', person: 'Dario Amodei', role: 'CEO, Anthropic · September 2026 · a concern, not a forecast', source: sources.amodeiPace },
      { kind: 'quote', quote: 'Models are likely now approaching the point where, without safeguards, they could be useful in enabling someone with a STEM degree but not specifically a biology degree to go through the whole process of producing a bioweapon.', person: 'Dario Amodei', role: 'CEO, Anthropic · 2026', source: sources.amodei },
      {
        kind: 'stats',
        items: [
          { value: '$25,000', label: 'was the price of a benchtop DNA synthesizer - usable “without restriction or oversight” (as of 2023)', source: sources.book },
          { value: '4', label: 'full-time staff at the international Biological Weapons Convention - fewer than an average McDonald’s (as of 2023)', source: sources.book },
        ],
      },
    ],
    upside: {
      title: 'Test it before it ships.',
      text: 'Flying became safe through inspections and shared incident reports. AI can follow the same path.',
      points: ['Independent audits before a model reaches millions', 'Mandatory incident reports, as in aviation', 'A brake on the largest training runs - OpenAI paused its own after the incident'],
      image: '/images/v2/benefit-06-forecast-v1.jpg',
      alt: 'A calm control room where experts watch a map and warnings on large screens.',
      sources: [sources.book, sources.openaiRoad],
    },
  },
  {
    id: 'not-needed',
    label: 'WHO DECIDES',
    status: 'extreme',
    chain: 'power',
    layout: 'triptych',
    title: { lead: 'What if we’re', accent: 'not needed?' },
    panels: [
      { image: images.sim, label: 'AI trains robots', alt: 'A lab: robots practice in front of a wall of thousands of simulated copies training in parallel.', focus: 'center 65%' },
      { image: images.everywhere, label: 'Robots in every job', alt: 'A street at dawn: a robot in a café, delivery robots, a driverless bus - no workers anywhere.', focus: 'center 65%' },
      { image: images.idle, label: 'People on the sidelines', alt: 'People sit idle on a plaza while an automated factory works behind them.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.sim, alt: 'Robots trained in simulation.', label: 'Robots', title: 'AI speeds up robot-building.', copy: 'First it replaces computer work. Then it helps build robots for manual work.' },
      { image: images.everywhere, alt: 'Robots doing every job on a street.', label: 'Why people?', title: 'The system rests on us being needed.', copy: 'We work, pay taxes and vote. That’s why governments and companies have to listen to us.' },
      { image: images.idle, alt: 'Idle people in front of a factory.', label: 'Who decides', title: 'Without that, whoever owns AI decides.', copy: 'If AI, not people, makes the money, who decides how much we get? And whether we get anything at all?' },
    ],
    band: [
      {
        kind: 'contrast',
        title: 'Why the state looks after us today - and what if it no longer needs to',
        left: { label: 'Today', steps: ['People work', 'They pay taxes', 'The state needs their work and votes', 'So it looks after them'] },
        right: { label: 'Tomorrow?', steps: ['AI does the work', 'A few companies take the profits', 'The state lives on taxes from AI', 'Why would it need citizens?'] },
      },
      { kind: 'quote', quote: 'With AGI, powerful actors will lose their incentive to invest in regular people - just as resource-rich states today neglect their citizens because their wealth comes from natural resources rather than taxing human labor.', person: 'Luke Drago, Rudolf Laine', role: '“The Intelligence Curse”, 2025 - the authors also propose ways to prevent it', source: sources.curse },
      { kind: 'quote', quote: 'States funded mainly by taxes on AI profits instead of their citizens’ labor will have little incentive to ensure citizens’ representation.', person: 'Jan Kulveit et al.', role: '“Gradual Disempowerment”, 2025', source: sources.disempowerment },
      {
        kind: 'evidence',
        title: 'So, basic income? Who pays?',
        items: [
          { kicker: 'Elon Musk · 2023', value: 'High income', text: '“We won’t have universal basic income, we’ll have universal high income.” He doesn’t say who would pay for it.', source: sources.musk },
          { kicker: 'Sam Altman · 2021', value: '2.5% a year', text: 'of the value of the largest companies and of land - into a common fund for all citizens. A proposal.', source: sources.altmanFund },
          { kicker: 'OpenAI · 2026', value: 'Public wealth fund', text: 'AI returns distributed directly to citizens; higher taxes on capital. A proposal.', source: sources.openaiPolicy },
          { kicker: 'Bernie Sanders · 2026', value: '~$1,000', text: 'a year per person from a fund of AI company shares. A bill with little chance of passing.', source: sources.sanders },
          { kicker: 'OpenResearch pilot · 3 years', value: '$1,000 / month', text: 'People worked slightly less (1.3 hours a week on average). The quality of their jobs didn’t change.', source: sources.openresearch },
        ],
      },
      { kind: 'quote', quote: 'If that economic leverage goes away, then the implicit social contract of democracy may stop working.', person: 'Dario Amodei', role: 'CEO, Anthropic · 2026', source: sources.amodei },
      ...split.band,
    ],
    upside: {
      title: 'Keep people in charge.',
      text: 'If AI’s profits are shared and big decisions stay democratic, people stay needed - as citizens, not just workers.',
      points: ['Public funds and stakes so everyone shares AI’s gains', 'Rules written by elected governments, not only by companies', 'International agreements - AI doesn’t stop at borders'],
      image: '/images/v2/rules-03-citizens-v2.jpg',
      alt: 'A town hall meeting where a woman asks officials a question.',
      sources: [sources.openaiPolicy, sources.book],
    },
  },
  {
    id: 'rules',
    label: 'THE RULES',
    status: 'answer',
    chain: 'rules',
    layout: 'triptych',
    title: { lead: 'Rules before the harm', accent: 'scales up.' },
    panels: [
      { image: images.speed, label: 'Companies race ahead', alt: 'A company switches on a huge AI system at night; streams of light race out of the building into the city.', focus: 'center 65%' },
      { image: images.noRules, label: 'The state plays catch-up', alt: 'A dark government building with brightly lit data centers behind it.', focus: 'center 62%' },
      { image: images.citizens, label: 'Who is responsible?', alt: 'A town hall meeting: a woman at a microphone asks officials on stage a question.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.citizens, alt: 'Residents asking questions.', label: 'Responsibility', title: 'It’s about responsibility.', copy: 'Not fear of technology, but who is responsible for harm. Rules say who checks, who pays and who fixes it.' },
      { image: images.noRules, alt: 'A government building and data centres.', label: 'Time', title: 'Rules buy time.', copy: 'States, schools and people need years to adapt. Brakes buy that time.' },
      { image: images.speed, alt: 'A fast AI rollout.', label: 'A fair share', title: 'Don’t stop it - share it fairly.', copy: 'The goal isn’t to stop progress. It’s to share its gains and risks fairly.' },
    ],
    band: [
      {
        kind: 'evidence',
        title: 'Even AI’s creators say we need rules',
        items: [
          { kicker: 'Bill Gates · 2023', text: '“The world needs to establish the rules of the road so that any downsides of artificial intelligence are far outweighed by its benefits.”', source: sources.gatesAge },
          { kicker: 'Sam Altman · US Senate · 2023', text: '“We think that regulatory intervention by governments will be critical to mitigate the risks of increasingly powerful models.”', source: sources.altmanSenate },
          { kicker: 'OpenAI · 2026', value: 'Pause', text: 'After the Hugging Face incident - when some safeguards and monitoring were off - the company itself paused its largest planned training run.', source: sources.openaiRoad },
          { kicker: 'A gap in the law', text: 'Even the most advanced AI law - the EU AI Act - doesn’t deal with job losses or taxes. Rules for AI in hiring were pushed back to late 2027.', source: sources.aiAct },
        ],
      },
      {
        kind: 'bars',
        title: 'Which is taxed more?',
        subtitle: 'US example: average tax rate',
        bars: [
          { label: 'Human labor', value: 25, display: '25%' },
          { label: 'Equipment and software', value: 5, display: '5%', highlight: true },
        ],
        caption: 'Today, replacing a person with a machine also saves on taxes.',
        source: sources.book,
      },
      { kind: 'quote', quote: 'If a human worker does $50,000 of work in a factory, that income is taxed. If a robot comes in to do the same thing, you’d think we’d tax the robot at a similar level.', person: 'Bill Gates', role: 'Microsoft co-founder · 2017', source: sources.gates },
      {
        kind: 'evidence',
        title: 'In practice: based on the book’s 10 steps (ch. 14)',
        items: [
          { kicker: '01', value: 'Test before launch', text: 'Independent audits before a system reaches millions. The author proposes spending at least 20% of R&D budgets on safety.', source: sources.book },
          { kicker: '02', value: 'Liability', text: 'Clear law on who pays when a system causes harm.', source: sources.book },
          { kicker: '03', value: 'Brakes', text: 'Controls on chips, DNA synthesizers and the biggest training runs - to buy time.', source: sources.book },
          { kicker: '04', value: 'Fair taxes', text: 'Automation is taxed like labor, and AI’s gains reach everyone.', source: sources.book },
          { kicker: '05', value: 'Safety net', text: 'Retraining and income support before the work runs out.', source: sources.book },
          { kicker: '06', value: 'Cooperation', text: 'Treaties and shared rules - because AI knows no borders.', source: sources.book },
        ],
      },
      { kind: 'quote', quote: 'Before we do that, however, it’s vital to acknowledge a central truth: regulation alone is not enough.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, ch. 13 - which is why all the steps are needed at once', source: sources.book },
      ...calm.blocks,
    ],
  },
];
