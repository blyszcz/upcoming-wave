import type { BandBlock } from '@features/upcomingWave/types/scene.types';

const sources = { book: { label: '«The Coming Wave»' } };

export const calm = {
  id: 'are-we-exaggerating',
  label: 'PARA SER JUSTOS',
  title: { lead: '¿Exageramos?', accent: 'Quizá. Por eso nos abrochamos el cinturón.' },
  blocks: [
      { kind: 'quote', quote: 'Si contenerla es imposible, las consecuencias para nuestra especie son dramáticas, potencialmente nefastas. Del mismo modo, sin sus frutos quedamos expuestos y en una situación precaria.', person: 'Mustafa Suleyman', role: '«The Coming Wave», cap. 1', source: sources.book },
      {
        kind: 'evidence',
        title: 'Argumentos para la calma',
        items: [
          { kicker: 'Daron Acemoglu · MIT, premio Nobel', value: '~1%', text: 'es lo que calcula que la IA sumará al PIB en 10 años: evolución, no revolución.', source: { label: 'NBER', url: 'https://www.nber.org/papers/w32487' } },
          { kicker: 'Fed de Nueva York · 2026', text: 'La IA todavía no es la causa principal de la desaceleración en las contrataciones.', source: { label: 'NY Fed', url: 'https://libertystreeteconomics.newyorkfed.org/2026/05/do-job-postings-show-early-labor-market-effects-of-ai/' } },
          { kicker: 'Foro Económico Mundial', value: '+170 / −92 mill.', text: 'empleos creados y perdidos hasta 2030, según una encuesta a empleadores (todas las tendencias, no solo la IA).', source: { label: 'WEF', url: 'https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf' } },
          { kicker: 'Dario Amodei · 2026', text: '«Si automatizas el 90% del trabajo, entonces todo el mundo hace el 10% del trabajo», y ese 10% se amplía hasta convertirse en todo el trabajo.', source: { label: 'Fortune', url: 'https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/' } },
          { kicker: 'Mustafa Suleyman · cap. 12', text: '«Que no quede ninguna duda: el estancamiento, en sí mismo, significa el desastre». La promesa de la tecnología, escribe, es que «mejora la vida, y sus beneficios superan con creces sus costes e inconvenientes».', source: sources.book },
          { kicker: 'Sam Altman · 2026', text: '«Estoy encantado de equivocarme en esto»: hasta ahora hay menos despidos de los que él había predicho.', source: { label: 'Fortune', url: 'https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/' } },
        ],
      },
  ] satisfies BandBlock[] as BandBlock[],
};
