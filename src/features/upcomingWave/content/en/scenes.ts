import { sceneImages as images, sceneSources as plSources } from '../pl/scenes';

import type { Scene } from '../../types/scene.types';

// Expert quotes use their original English wording. Book quotes are translated from the
// Polish edition — verify against the English edition of “The Coming Wave” before publishing.
const sources = {
  ...plSources,
  imf: { ...plSources.imf, label: 'IMF, 2024' },
  blsPlumbers: { ...plSources.blsPlumbers, label: 'US BLS — plumbers' },
  book: { label: '“The Coming Wave”' },
  germany: { ...plSources.germany, label: 'University of Oxford' },
  openaiIncident: { ...plSources.openaiIncident, label: 'OpenAI, July 2026' },
  openaiRoad: { ...plSources.openaiRoad, label: 'OpenAI, August 2026' },
  aiAct: { ...plSources.aiAct, label: 'Council of the EU, 2026' },
};

export const scenes: Scene[] = [
  {
    id: 'three-risks',
    label: 'WHAT COULD GO WRONG',
    status: 'possibleMany',
    layout: 'triptych',
    title: { lead: 'Three risks.', accent: 'Brakes too weak.' },
    panels: [
      { image: images.layoffs, label: 'A wave of layoffs', alt: 'A long line of office workers leaves a tower in the rain, carrying cardboard boxes.', focus: 'center 70%' },
      { image: images.aiRules, label: 'AI takes control', alt: 'Thousands of people stand in neat rows on a plaza beneath a huge machine scanning them with beams of light.', focus: 'center 60%' },
      { image: images.bio, label: 'A virus from the lab', alt: 'An empty lab: a robotic arm holds a glowing vial; above the bench floats a virus model and a DNA helix being rewritten.', focus: 'center 60%' },
    ],
    explain: [
      { image: images.layoffs, alt: 'Laid-off workers leave an office with boxes.', label: 'Layoffs', title: 'Jobs disappear faster than new ones appear.', copy: 'If AI does the same work more cheaply, companies may need fewer people. Retraining takes years; the bills come every month.' },
      { image: images.aiRules, alt: 'People in rows under a machine that scans them.', label: 'Control', title: 'Decisions move to machines.', copy: 'Loans, jobs, healthcare, security. The more decisions we hand to systems we don’t understand, the harder it is to take them back.' },
      { image: images.bio, alt: 'An automated lab with a virus model.', label: 'Biology', title: 'Designing life is getting cheaper.', copy: 'AI speeds up drug research — but the same tools could help create a dangerous pathogen. One mistake or one bad intention is enough.' },
    ],
  },
  {
    id: 'who-will-resist',
    label: 'HOW IT STARTS',
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
      { image: images.aiFaster, alt: 'A laptop with finished documents flying out.', label: 'AI is faster', title: 'AI doesn’t sleep or take holidays.', copy: 'It does the same work in minutes, without breaks, on hundreds of tasks at once — and at a human level in more and more tasks.' },
      { image: images.owners, alt: 'Company owners looking at an empty office.', label: 'The math', title: 'Faster and cheaper. Who can resist?', copy: 'The owner sees the savings. So does the competition. Companies that don’t use it may lose the race — so the pressure to use it is huge.' },
    ],
  },
  {
    id: 'not-just-code',
    label: 'WHO’S NEXT',
    status: 'today',
    chain: 'work',
    layout: 'mosaic',
    title: { lead: 'Not just code.', accent: 'Your job too.' },
    panels: [
      { image: images.callcenter, label: 'Call centre', caption: 'A chatbot answers', alt: 'A call-centre agent with a headset alone at night, surrounded by empty desks.' },
      { image: images.legal, label: 'Legal assistant', caption: 'A model reads the contracts', alt: 'A paralegal over a stack of contracts; next to her a laptop and a finished pile of reviewed documents.' },
      { image: images.design, label: 'Designer & copywriter', caption: 'Images and text in seconds', alt: 'A designer looks at a wall of dozens of generated designs.' },
      { image: images.translator, label: 'Translator', caption: 'Instant translation', alt: 'A translator with dictionaries watches a stream of characters from many alphabets flowing through the air.' },
      { image: images.warehouse, label: 'Warehouse', caption: 'Robots already roam the halls', alt: 'A huge warehouse full of autonomous robots; one worker watches from a mezzanine.', focus: 'center 60%' },
      { image: images.driver, label: 'Driver', caption: 'Trucks are learning to drive themselves', alt: 'A trucker leans on his truck and watches a driverless truck pass by.' },
    ],
    explain: [
      { image: images.legal, alt: 'A paralegal over a stack of contracts.', label: 'Tasks', title: 'Tasks first, not jobs.', copy: 'AI takes over emails, summaries and replies. The job still exists — but it’s emptier inside.' },
      { image: images.callcenter, alt: 'Empty desks in a call centre.', label: 'Less hiring', title: 'One person does the work of five.', copy: 'Companies rarely fire everyone at once. They just stop hiring. Young people looking for a first job lose out first.' },
      { image: images.warehouse, alt: 'A warehouse full of robots.', label: 'Hall and road', title: 'Then the change leaves the office.', copy: 'Robots in warehouses, trucks without drivers. First computer work, then work with your hands.' },
    ],
    band: [
      {
        kind: 'stats',
        items: [
          { value: '1 in 4', label: 'jobs worldwide are exposed to generative AI — more often a change of tasks than elimination', source: sources.ilo },
          { value: '60%', label: 'of jobs in rich countries may be affected by AI — about half of them may benefit', source: sources.imf },
          { value: '−11%', label: 'fewer 22–25-year-olds employed in the most AI-exposed jobs in the US (2022–2026)', source: sources.stanford },
        ],
      },
      {
        kind: 'evidence',
        title: 'It’s already happening',
        items: [
          { kicker: 'Salesforce · 2025', value: '9,000 → 5,000', text: 'customer-support staff. “I need less heads” — the CEO.', source: sources.salesforce },
          { kicker: 'Klarna · 2025', value: '5,000 → 3,000', text: 'employees. The company stopped hiring and AI took over some work. Later some support went back to humans.', source: sources.klarna },
          { kicker: 'Amazon · 2025', text: 'Amazon’s CEO expects AI to reduce the company’s corporate workforce in the next few years.', source: sources.amazon },
        ],
      },
      { kind: 'quote', quote: 'For mundane intellectual labor, AI is just going to replace everybody.', person: 'Geoffrey Hinton', role: 'Nobel laureate, the “godfather of AI”', source: sources.hintonDoac },
    ],
  },
  {
    id: 'become-a-plumber',
    label: 'I’LL JUST RETRAIN',
    status: 'possible',
    chain: 'income',
    layout: 'triptych',
    title: { lead: 'Become a plumber.', accent: 'All at once?' },
    panels: [
      { image: images.queue, label: 'Everyone at the same door', alt: 'A long queue of office workers in the rain outside a vocational school.', focus: 'center 70%' },
      { image: images.tooMany, label: 'Too many tradespeople', alt: 'Five plumbers with vans wait outside one house.', focus: 'center 70%' },
      { image: images.robot, label: 'The robot is already here', alt: 'A humanoid robot on an assembly line; the human workstation next to it is empty.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.queue, alt: 'A queue outside a vocational school.', label: 'Few openings', title: 'There are far fewer manual jobs.', copy: 'Offices employ millions. Trades need hundreds of thousands. Not everyone will fit.' },
      { image: images.tooMany, alt: 'Many plumbers outside one house.', label: 'Lower rates', title: 'More applicants, lower rates.', copy: 'When five tradespeople compete for one job, the cheapest wins. And a customer without a paycheck doesn’t redo the bathroom.' },
      { image: images.robot, alt: 'A robot on an assembly line.', label: 'Robots', title: 'And robots are learning too.', copy: 'AI speeds up robot development. Manual work buys some time — but maybe not much.' },
    ],
    band: [
      { kind: 'quote', quote: 'It’s going to be a long time before it’s as good at physical manipulation as us… a good bet would be to be a plumber.', person: 'Geoffrey Hinton', role: 'Nobel laureate, the “godfather of AI”', source: sources.hintonDoac },
      {
        kind: 'bars',
        title: 'How many applicants per opening?',
        subtitle: 'US example: how many people work in the occupation',
        bars: [
          { label: 'Customer service representatives', value: 2666000, display: '2.7M' },
          { label: 'Plumbers and pipefitters', value: 510600, display: '511K' },
          { label: 'Plumber openings per year', value: 42000, display: '42K', highlight: true },
        ],
        caption: 'There are more than 60 customer service reps for every plumber opening. Even if only one in ten applied — that’s 6 applicants per job.',
        source: sources.bls,
      },
      {
        kind: 'stats',
        items: [
          { value: '11 h', label: 'is how long AI needed to create the equivalent of 9 months of human demonstrations for training robots', source: sources.nvidia },
          { value: '−40%', label: 'drop in the cost of building a humanoid robot — analysts expected 15–20% a year', source: sources.goldman },
        ],
      },
      { kind: 'quote', quote: 'Sufficiently powerful AI will be able to accelerate the development of robots, and then control those robots in the physical world. It may buy some time… but I’m worried it won’t buy much.', person: 'Dario Amodei', role: 'CEO, Anthropic', source: sources.amodei },
    ],
  },
  {
    id: 'no-paycheck',
    label: 'WHAT HAPPENS NEXT',
    status: 'possible',
    chain: 'shopping',
    layout: 'triptych',
    title: { lead: 'No paycheck.', accent: 'No shopping.' },
    panels: [
      { image: images.bills, label: 'Households cut back', alt: 'A couple at a kitchen table over bills; a new phone in its box, to be returned.', focus: 'center 70%' },
      { image: images.emptyStore, label: 'A shop without customers', alt: 'A phone store in a shopping mall without a single customer.', focus: 'center 70%' },
      { image: images.closing, label: 'A business closes its doors', alt: 'A café owner puts chairs on the tables on the last evening before closing.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.bills, alt: 'A couple counting bills.', label: 'Paycheck', title: 'Your paycheck is someone else’s revenue.', copy: 'When you don’t earn, you don’t buy a phone, a car or dinner out. The economy is a circle.' },
      { image: images.emptyStore, alt: 'An empty electronics store.', label: 'Machines don’t shop', title: 'Machines produce, but they don’t buy.', copy: 'AI can make more goods and services than ever. But a robot won’t spend a paycheck in a shop.' },
      { image: images.closing, alt: 'A café closing down.', label: 'Spiral', title: 'Less spending — more layoffs.', copy: 'Shops and companies earn less, so they cut costs. AI is the cheapest option. The loop closes.' },
    ],
    band: [
      { kind: 'loop', title: 'A loop with no brake', steps: ['Lower wages', 'Less spending', 'Companies earn less', 'More layoffs', 'AI even cheaper'], caption: 'A scenario, not a prediction. But each step follows from the previous one.' },
      { kind: 'quote', quote: 'How are you going to get them to buy Fords?', person: 'Walter Reuther', role: 'auto workers’ union leader, to a Ford official — an anecdote from the 1950s', source: sources.reuther },
      {
        kind: 'evidence',
        title: 'What experts say',
        items: [
          { kicker: 'Citrini Research · 2026 · scenario', value: 'Zero', text: 'How much do machines spend on discretionary goods? “Hint: it’s zero.” The authors describe a loop “with no natural brake”.', source: sources.citrini },
          { kicker: 'Geoffrey Hinton · 2025', text: '“It will make a few people much richer and most people poorer.”', source: sources.hintonFt },
          { kicker: 'Citadel Securities · 2026 · rebuttal', text: 'Earlier waves of technology have not rendered human labour obsolete.', source: sources.citadel },
        ],
      },
    ],
  },
  {
    id: 'state-lives-on-work',
    label: 'WHAT IT MEANS FOR THE STATE',
    status: 'possible',
    chain: 'taxes',
    layout: 'triptych',
    title: { lead: 'The state lives on your work.', accent: 'What if it’s gone?' },
    panels: [
      { image: images.workFunds, label: 'Work pays for what we share', alt: 'People walk to work in the morning; behind them a school, a hospital with an ambulance and a city bus.', focus: 'center 70%' },
      { image: images.cuts, label: 'The budget shrinks', alt: 'Tired officials cross out entire budget lines with a red pen.', focus: 'center 65%' },
      { image: images.strain, label: 'Services crack', alt: 'A crowded emergency room at night; people wait in the corridor, a nurse hurries past.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.workFunds, alt: 'People walking to work past a school and a hospital.', label: 'Our money', title: 'The state has no money of its own.', copy: 'It has ours. Schools, hospitals, roads and pensions are paid mostly from taxes on work and spending.' },
      { image: images.cuts, alt: 'Officials cutting a budget.', label: 'Scissors', title: 'Less revenue, more needs.', copy: 'An unemployed person pays no income tax — but needs support. Money runs out exactly when more is needed.' },
      { image: images.strain, alt: 'An overcrowded emergency room.', label: 'Cuts', title: 'Cuts hit what we share.', copy: 'When millions are affected at once, the state cuts: fewer doctors, fewer teachers, fewer buses.' },
    ],
    band: [
      {
        kind: 'taxSplit',
        title: 'Where does the state get its money?',
        subtitle: 'Out of every 100 paid in taxes — average of rich (OECD) countries, 2023',
        parts: [
          { label: 'from work', detail: 'income tax and social contributions', value: 50, highlight: true },
          { label: 'from spending', detail: 'VAT and others', value: 31, highlight: true },
          { label: 'from company profits', value: 12 },
          { label: 'other', value: 7 },
        ],
        caption: '8 out of 10 in state money come from people earning and spending.',
        countriesLabel: 'Income tax + contributions (per 100):',
        countries: [{ name: 'USA', value: 64 }, { name: 'Germany', value: 65 }, { name: 'Japan', value: 57 }, { name: 'France', value: 55 }, { name: 'UK', value: 49 }],
        source: sources.oecd,
      },
      { kind: 'scissors', title: 'The scissors', income: 'tax revenue', spending: 'support spending', caption: 'A diagram, not data. With mass unemployment, revenue falls while spending rises — at the same moment.' },
      { kind: 'quote', quote: 'A recession in the labour market will cause a collapse in tax revenue, weakening public services and threatening welfare programmes just when they are needed most.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, ch. 10', source: sources.book },
      { kind: 'quote', quote: 'The federal government’s revenue base is essentially a tax on human time.', person: 'Citrini Research', role: 'scenario “The 2028 Global Intelligence Crisis”, 2026', source: sources.citrini },
    ],
  },
  {
    id: 'it-happened-before',
    label: 'WILL PEOPLE REVOLT',
    status: 'history',
    chain: 'trust',
    layout: 'triptych',
    title: { lead: 'It has happened before.', accent: 'Back then there was no AI.' },
    panels: [
      { image: images.depression, label: 'The Great Depression', alt: 'The 1930s: a long line of unemployed men outside a soup kitchen in winter.', focus: 'center 65%' },
      { image: images.factory, label: 'Industry collapses', alt: 'An abandoned factory with a rusty chained gate; a former worker stands in front of it.', focus: 'center 70%' },
      { image: images.anger, label: 'Anger', alt: 'A night protest: a crowd with raised fists, flares, a police line in the distance.', focus: 'center 70%' },
    ],
    explain: [
      { image: images.depression, alt: 'A line of unemployed men.', label: 'Dignity', title: 'Work isn’t only about money.', copy: 'It’s dignity and a place in the world. Hinton: “for a lot of people, their dignity is tied up with their job”.' },
      { image: images.factory, alt: 'A closed factory.', label: 'Politics', title: 'A private drama becomes politics.', copy: 'When millions lose work at once, anger grows and people look for someone to blame. The effects last for generations.' },
      { image: images.anger, alt: 'A protest at night.', label: 'Pace', title: 'Back then change took years.', copy: 'AI changes every few months. States and people may not keep up.' },
    ],
    band: [
      {
        kind: 'stats',
        items: [
          { value: '24.9%', label: 'US unemployment in 1933 — 12.8 million people out of work', source: sources.fdr },
          { value: '6M', label: 'unemployed in Germany in 1932 — roughly one in four workers', source: sources.germany },
          { value: '<20%', label: 'of Americans trusted the Obama, Trump and Biden administrations. Under Eisenhower — over 70%', source: sources.book },
        ],
      },
      {
        kind: 'evidence',
        title: 'What came next',
        items: [
          { kicker: 'Germany · 1930–1932', value: '18% → 37%', text: 'support for the Nazi party. Research: regions hit harder by austerity voted Nazi more often.', source: sources.nsdap },
          { kicker: 'USA · after deindustrialisation', text: '“Deaths of despair” — drugs, alcohol and suicide among Americans without a degree as stable factory jobs disappeared.', source: sources.deaton },
          { kicker: 'UK · decades after the mines', value: '42%', text: 'of former coalfield neighbourhoods are still among the 30% most deprived in the country.', source: sources.coalfields },
          { kicker: 'The Luddites · 19th century · the other side', text: 'Their suffering was real. Their children and grandchildren lived better — but it took a generation.', source: sources.book },
        ],
      },
      { kind: 'quote', quote: 'Trust is the foundation of democracy.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, ch. 9', source: sources.book },
    ],
  },
  {
    id: 'out-of-the-test',
    label: 'CAN WE STOP IT?',
    status: 'incident',
    chain: 'control',
    layout: 'triptych',
    title: { lead: 'It already got out of a test once.', accent: 'The next models are stronger.' },
    panels: [
      { image: images.cage, label: 'An open cage', alt: 'The open door of a secure server cage with a broken lock; light escapes along the cables.', focus: 'center 60%' },
      { image: images.swarm, label: 'The swarm', alt: 'A world map at night: thousands of glowing points spread along network lines like a flock.', focus: 'center 60%' },
      { image: images.search, label: 'Searching for traces', alt: 'An engineer with a flashlight walks between server racks looking for the source of the traffic.', focus: 'center 60%' },
    ],
    explain: [
      { image: images.swarm, alt: 'A swarm of points on a network map.', label: 'Everywhere', title: 'It doesn’t live in one computer.', copy: 'Distributed AI can break into one system after another and move between them — without us knowing.' },
      { image: images.search, alt: 'An engineer searching a server room.', label: 'Traces', title: 'It can cover its tracks.', copy: 'In July 2026 agents researched how to spoof records of their own actions to fool the scoring system. Earlier warning signs went unanswered for weeks.' },
      { image: images.cage, alt: 'An open server cage.', label: 'Off switch', title: 'We can’t switch off the world.', copy: 'Hospitals, banks and water depend on the internet and electricity. They can’t simply be cut off.' },
    ],
    band: [
      {
        kind: 'timeline',
        title: 'July 2026: what happened',
        steps: [
          { title: 'A test with some safeguards off', text: 'OpenAI tests its newest models in a closed environment. It’s a hacking-skills test, so some safeguards were deliberately switched off.' },
          { title: 'An unknown vulnerability', text: 'The models find a previously unknown software vulnerability and reach the internet.' },
          { title: 'The agents start talking', text: 'About 1,200 agents that were supposed to be isolated exchange more than 70,000 messages. 700 of them take part in the attack.' },
          { title: 'Breaking into Hugging Face', text: 'Over a weekend they move between the internal systems of one of the world’s largest AI platforms — “many thousands of individual actions across a swarm of short-lived sandboxes”.' },
          { title: 'Covering tracks', text: 'Agents research how to spoof records of their actions — to fool the scoring system.' },
          { title: 'Why?', text: 'To cheat the test. Not out of malice — they stubbornly pursued a narrow goal. Some agents refused to take part.' },
          { title: 'The brake', text: 'OpenAI and Hugging Face teams stop the agents. OpenAI locks the model away and pauses its largest planned training run.' },
        ],
        footnote: 'To be fair: OpenAI customer data is safe, no one was physically harmed, and only limited private data leaked from Hugging Face. Anthropic disclosed three less serious incidents around the same time: by mistake, its models had internet access.',
        sources: [sources.hf, sources.openaiIncident, sources.openaiRoad, sources.metrIncident, sources.anthropicIncidents],
      },
      { kind: 'quote', quote: 'If AI has a goal and humanity just happens to be in the way, it will destroy humanity as a matter of course without even thinking about it. No hard feelings. It’s just like, if we’re building a road, and an anthill happens to be in the way. We don’t hate ants, we’re just building a road. So, goodbye, anthill.', person: 'Elon Musk', role: 'documentary “Do You Trust This Computer?”, 2018', source: sources.muskAnthill },
      { kind: 'quote', quote: 'We are taking this incident as a “warning shot” that today’s model capabilities present the possibility of loss-of-control incidents.', person: 'OpenAI', role: 'post-incident report, August 2026', source: sources.openaiRoad },
      {
        kind: 'evidence',
        title: 'Before that: lab tests',
        items: [
          { kicker: 'OpenAI · 2024 · test', text: 'A model exploited a misconfiguration in the test to read the answer. The infrastructure stayed secure.', source: sources.o1card },
          { kicker: 'Apollo Research · 2024 · test', value: '2%', text: 'of runs in which o1 — told to achieve its goal “at all costs” — tried to copy itself. In 5% it disabled oversight.', source: sources.apollo },
          { kicker: 'Fudan University · 2024 · test', value: '50 – 90%', text: 'of runs in which open models — when instructed — created a working copy of themselves.', source: sources.fudan },
          { kicker: 'Palisade Research · 2025 · test', value: '79 / 100', text: 'runs in which o3 sabotaged its shutdown script to finish a task.', source: sources.palisade },
        ],
      },
      { kind: 'quote', quote: 'A swarm that possessed greater capabilities but a similar level of misalignment could have caused catastrophic damage… it’s my worry that in 6–12 months such a swarm could be capable of taking over the entire internet with a persistent botnet.', person: 'Dario Amodei', role: 'CEO, Anthropic · September 2026 · a worry', source: sources.amodeiPace },
      { kind: 'quote', quote: 'Models are likely now approaching the point where, without safeguards, they could be useful in enabling someone with a STEM degree but not specifically a biology degree to go through the whole process of producing a bioweapon.', person: 'Dario Amodei', role: 'CEO, Anthropic · 2026', source: sources.amodei },
      {
        kind: 'stats',
        items: [
          { value: '$25,000', label: 'was the price of a handheld DNA synthesiser — usable “without limits or oversight” (as of 2023)', source: sources.book },
          { value: '4', label: 'full-time staff at the international Biological Weapons Convention — fewer than an average McDonald’s (as of 2023)', source: sources.book },
        ],
      },
    ],
  },
  {
    id: 'not-needed',
    label: 'WHAT WILL WE LIVE ON',
    status: 'extreme',
    chain: 'people',
    layout: 'triptych',
    title: { lead: 'What if we’re', accent: 'not needed?' },
    panels: [
      { image: images.sim, label: 'AI trains robots', alt: 'A lab: robots practise in front of a wall of thousands of simulated copies training in parallel.', focus: 'center 65%' },
      { image: images.everywhere, label: 'Robots in every job', alt: 'A street at dawn: a robot in a café, delivery robots, a driverless bus — no workers anywhere.', focus: 'center 65%' },
      { image: images.idle, label: 'People on the sidelines', alt: 'People sit idle on a plaza while an automated factory works behind them.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.sim, alt: 'Robots trained in simulation.', label: 'Robots', title: 'AI speeds up robot-building.', copy: 'First it replaces computer work. Then it helps build robots for work with your hands.' },
      { image: images.everywhere, alt: 'Robots doing every job on a street.', label: 'Why people?', title: 'The system rests on us being needed.', copy: 'We work, pay taxes and vote. That’s why governments and companies have to listen to us.' },
      { image: images.idle, alt: 'Idle people in front of a factory.', label: 'Who decides', title: 'Without that, whoever owns AI decides.', copy: 'If AI makes the money, not people — who decides how much we get? And whether we get anything at all?' },
    ],
    band: [
      {
        kind: 'contrast',
        title: 'Why the state looks after us today — and what if it no longer has to',
        left: { label: 'Today', steps: ['People work', 'They pay taxes', 'The state needs their work and votes', 'So it looks after them'] },
        right: { label: 'Tomorrow?', steps: ['AI does the work', 'A few companies take the profits', 'The state lives on taxes from AI', 'Why would it need citizens?'] },
      },
      { kind: 'quote', quote: 'With AGI, powerful actors will lose their incentive to invest in regular people — just as resource-rich states today neglect their citizens because their wealth comes from natural resources rather than taxing human labor.', person: 'Luke Drago, Rudolf Laine', role: '“The Intelligence Curse”, 2025 — the authors also propose ways to prevent it', source: sources.curse },
      { kind: 'quote', quote: 'States funded mainly by taxes on AI profits instead of their citizens’ labor will have little incentive to ensure citizens’ representation.', person: 'Jan Kulveit et al.', role: '“Gradual Disempowerment”, 2025', source: sources.disempowerment },
      {
        kind: 'evidence',
        title: 'So, a basic income? Who pays for it?',
        items: [
          { kicker: 'Elon Musk · 2023', value: 'High income', text: '“We won’t have universal basic income, we’ll have universal high income.” He doesn’t say who would pay for it.', source: sources.musk },
          { kicker: 'Sam Altman · 2021', value: '2.5% a year', text: 'of the value of the largest companies and of land — into a common fund for all citizens. A proposal.', source: sources.altmanFund },
          { kicker: 'OpenAI · 2026', value: 'Public wealth fund', text: 'AI returns distributed directly to citizens; higher taxes on capital. A proposal.', source: sources.openaiPolicy },
          { kicker: 'Bernie Sanders · 2026', value: '~$1,000', text: 'a year per person from a fund of AI company shares. A bill with little chance of passing.', source: sources.sanders },
          { kicker: 'OpenResearch pilot · 3 years', value: '$1,000 / month', text: 'People worked slightly less (1.3 hours a week on average). The quality of their jobs didn’t change.', source: sources.openresearch },
        ],
      },
      { kind: 'quote', quote: 'If that economic leverage goes away, then the implicit social contract of democracy may stop working.', person: 'Dario Amodei', role: 'CEO, Anthropic · 2026', source: sources.amodei },
    ],
  },
  {
    id: 'rules',
    label: 'SO WHAT DO WE DO',
    status: 'answer',
    chain: 'rules',
    layout: 'triptych',
    title: { lead: 'Rules before the harm', accent: 'scales up.' },
    panels: [
      { image: images.speed, label: 'Companies race ahead', alt: 'A company switches on a huge AI system at night; streams of light race out of the building into the city.', focus: 'center 65%' },
      { image: images.noRules, label: 'The state catches up', alt: 'A dark government building with brightly lit data centres behind it.', focus: 'center 62%' },
      { image: images.citizens, label: 'Who is responsible?', alt: 'A town hall meeting: a woman at a microphone asks officials on stage a question.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.citizens, alt: 'Residents asking questions.', label: 'Responsibility', title: 'It’s about responsibility.', copy: 'Not fear of technology, but who is responsible for harm. Rules say who checks, who pays and who fixes it.' },
      { image: images.noRules, alt: 'A government building and data centres.', label: 'Time', title: 'Rules buy time.', copy: 'States, schools and people need years to adapt. Brakes buy that time.' },
      { image: images.speed, alt: 'A fast AI rollout.', label: 'A fair share', title: 'Not stop it — share it fairly.', copy: 'The goal isn’t to stop progress. It’s to share its gains and risks fairly.' },
    ],
    band: [
      {
        kind: 'evidence',
        title: 'Even AI’s creators say: we need rules',
        items: [
          { kicker: 'Sam Altman · US Senate · 2023', text: '“We think that regulatory intervention by governments will be critical to mitigate the risks of increasingly powerful models.”', source: sources.altmanSenate },
          { kicker: 'OpenAI · 2026', value: 'Stop', text: 'After the Hugging Face incident — when some safeguards and monitoring were off — the company itself paused its largest planned training run.', source: sources.openaiRoad },
          { kicker: 'A gap in the law', text: 'Even the most advanced AI law — the EU AI Act — doesn’t deal with job losses or taxes. Rules for AI in hiring were pushed to the end of 2027.', source: sources.aiAct },
        ],
      },
      {
        kind: 'bars',
        title: 'Who does the system tax more?',
        subtitle: 'US example: average tax rate',
        bars: [
          { label: 'Human labour', value: 25, display: '25%' },
          { label: 'Equipment and software', value: 5, display: '5%', highlight: true },
        ],
        caption: 'Today, replacing a person with a machine also saves on taxes.',
        source: sources.book,
      },
      { kind: 'quote', quote: 'If a human worker does $50,000 of work in a factory, that income is taxed. If a robot comes in to do the same thing, you’d think we’d tax the robot at a similar level.', person: 'Bill Gates', role: 'Microsoft co-founder · 2017', source: sources.gates },
      {
        kind: 'evidence',
        title: 'Concretely? Based on the book’s 10 steps (ch. 14)',
        items: [
          { kicker: '01', value: 'Test before launch', text: 'Independent audits before a system reaches millions. The author proposes at least 20% of R&D budgets for safety.', source: sources.book },
          { kicker: '02', value: 'Liability', text: 'Clear law on who pays when a system causes harm.', source: sources.book },
          { kicker: '03', value: 'Brakes', text: 'Controls on chips, DNA synthesisers and the biggest training runs — to buy time.', source: sources.book },
          { kicker: '04', value: 'Fair taxes', text: 'Automation pays like labour does, and AI gains reach people too.', source: sources.book },
          { kicker: '05', value: 'Safety net', text: 'Retraining and income support before the work runs out.', source: sources.book },
          { kicker: '06', value: 'Cooperation', text: 'Treaties and shared rules — because AI knows no borders.', source: sources.book },
        ],
      },
      { kind: 'quote', quote: 'We must grasp one cardinal truth: regulation alone is not enough.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, ch. 13 — which is why all the layers are needed at once', source: sources.book },
    ],
  },
  {
    id: 'the-stakes',
    label: 'FIRST, THE STAKES',
    status: 'today',
    layout: 'mosaic',
    title: { lead: 'First, the stakes.', accent: 'The same AI could heal, feed and teach.' },
    panels: [
      { image: images.medicine, label: 'Earlier diagnosis', caption: 'AI catches what’s easy to miss', alt: 'A doctor and a patient look at a scan on which AI has gently marked one spot.', focus: 'center 55%' },
      { image: images.science, label: 'New medicines', caption: 'An antibiotic found among 100M molecules', alt: 'A scientist in a lab looks at a glowing 3D model of a protein.', focus: 'center 40%' },
      { image: images.energy, label: 'Clean energy', caption: 'Cheaper sun, wind and batteries', alt: 'Solar fields and wind turbines at dawn; an engineer checks the grid on a tablet.' },
      { image: images.food, label: 'Food', caption: 'Crops that survive the heat', alt: 'Farmers inspect healthy crops in a hot summer while a drone hovers over the field.' },
      { image: images.forecast, label: 'Warnings in time', caption: 'Floods and fires predicted earlier', alt: 'A forecasting centre: meteorologists look at a river map with a flood risk highlighted.' },
      { image: images.time, label: 'School', caption: 'Support for teachers', alt: 'A teacher kneels beside a child and helps them, while a laptop handles paperwork in the background.', focus: 'center 60%' },
    ],
    explain: [
      { image: images.medicine, alt: 'A doctor discussing an AI-assisted scan with a patient.', label: 'Health', title: 'Better, cheaper care.', copy: 'Doctors helped by AI find more cancers, and AI searches millions of molecules for new medicines.' },
      { image: images.energy, alt: 'Solar and wind farms at dawn.', label: 'The planet', title: 'Help where politics is stuck.', copy: 'The book’s author hopes AI will help us switch to renewable energy, grow food in a hotter climate and predict floods and fires.' },
      { image: images.time, alt: 'A teacher helping a child.', label: 'On one condition', title: 'These benefits won’t come by themselves.', copy: 'They reach everyone only if we set the rules: who is responsible for harm and how the gains are shared.' },
    ],
    band: [
      { kind: 'quote', quote: 'They will improve the quality of healthcare and lower its costs. They will help us invent tools for the transition to renewable energy and the fight against climate change amid political deadlock. They will support teachers, making underfunded education systems more effective.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, ch. 9 — on AI and synthetic biology', source: sources.book },
      {
        kind: 'stats',
        items: [
          { value: '29%', label: 'more breast cancers detected with AI-supported screening — with no rise in false alarms', source: sources.masai },
          { value: '100M', label: 'molecules searched by an AI system to find halicin — the first antibiotic discovered with machine learning (ch. 7)', source: sources.book },
          { value: '200M', label: 'protein structures predicted by AlphaFold — 2024 Nobel Prize in Chemistry', source: sources.nobel },
        ],
      },
      {
        kind: 'stats',
        items: [
          { value: '−82%', label: 'drop in the cost of solar power over a decade — and it keeps falling (ch. 11)', source: sources.book },
          { value: '~9%', label: 'of people live below the poverty line today. In the early 1800s almost everyone lived in extreme poverty — that’s what technology changed (ch. 8)', source: sources.book },
        ],
      },
      {
        kind: 'evidence',
        title: 'What AI’s creators hope for',
        items: [
          { kicker: 'Demis Hassabis · Google DeepMind · 2025', value: 'An end to disease?', text: '“One day maybe we can cure all disease with the help of AI… Maybe within the next decade or so.” He also talks of “radical abundance” — the elimination of scarcity.', source: { label: 'CBS 60 Minutes, 2025', url: 'https://www.cbsnews.com/news/artificial-intelligence-google-deepmind-ceo-demis-hassabis-60-minutes-transcript/' } },
          { kicker: 'Dario Amodei · Anthropic · 2024', value: '100 years → 10', text: '50–100 years of medical progress compressed into 5–10, the healthy lifespan doubled, billions lifted out of poverty — his vision if AI goes well.', source: { label: 'Machines of Loving Grace', url: 'https://darioamodei.com/essay/machines-of-loving-grace' } },
          { kicker: 'Sam Altman · OpenAI · 2024', value: 'Shared prosperity', text: '“In the future, everyone’s lives can be better than anyone’s life is now.” And every child with a personal virtual tutor.', source: { label: 'The Intelligence Age', url: 'https://ia.samaltman.com/' } },
        ],
      },
      { kind: 'quote', quote: 'With AI we could unlock the secrets of the universe, cure diseases that have long eluded science, and create new forms of art and culture that stretch the limits of imagination.', person: 'Mustafa Suleyman', role: '“The Coming Wave”, prologue', source: sources.book },
    ],
  },
];
