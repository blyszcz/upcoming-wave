import type { Scene } from '@features/upcomingWave/types/scene.types';

import { acceleration } from '@features/upcomingWave/content/de/acceleration';
import { calm } from '@features/upcomingWave/content/de/calm';
import { split } from '@features/upcomingWave/content/de/closing';
import { sceneImages as images, sceneSources as plSources } from '@features/upcomingWave/content/pl/scenes';


// All quotes are German translations; book quotes are our translation of the English edition (Crown, 2023).
const sources = {
  ...plSources,
  imf: { ...plSources.imf, label: 'IWF, 2024' },
  blsPlumbers: { ...plSources.blsPlumbers, label: 'US BLS - Klempner' },
  book: { label: '„The Coming Wave“' },
  germany: { ...plSources.germany, label: 'University of Oxford' },
  openaiIncident: { ...plSources.openaiIncident, label: 'OpenAI, Juli 2026' },
  openaiRoad: { ...plSources.openaiRoad, label: 'OpenAI, August 2026' },
  aiAct: { ...plSources.aiAct, label: 'Rat der EU, 2026' },
};

export const scenes: Scene[] = [
  {
    id: 'the-stakes',
    label: 'WORUM ES GEHT',
    status: 'today',
    chain: 'stakes',
    layout: 'mosaic',
    title: { lead: 'Worum es geht.', accent: 'Dieselbe KI könnte heilen, ernähren und lehren.' },
    panels: [
      { image: images.medicine, label: 'Frühere Diagnosen', caption: 'KI sieht, was leicht übersehen wird', alt: 'Eine Ärztin und ein Patient betrachten eine Aufnahme, auf der die KI behutsam eine Stelle markiert hat.', focus: 'center 55%' },
      { image: images.science, label: 'Neue Medikamente', caption: 'Ein Antibiotikum, gefunden unter 100 Mio. Molekülen', alt: 'Eine Wissenschaftlerin im Labor betrachtet ein leuchtendes 3D-Modell eines Proteins.', focus: 'center 40%' },
      { image: images.energy, label: 'Saubere Energie', caption: 'Günstigere Solaranlagen, Windräder und Batterien', alt: 'Solarfelder und Windräder im Morgenlicht; ein Ingenieur prüft das Netz auf einem Tablet.' },
      { image: images.food, label: 'Ernährung', caption: 'Nutzpflanzen, die der Hitze standhalten', alt: 'Landwirte begutachten in einem heißen Sommer gesunde Pflanzen, während eine Drohne über dem Feld schwebt.' },
      { image: images.forecast, label: 'Frühwarnung', caption: 'Hochwasser und Brände früher vorhergesagt', alt: 'Ein Vorhersagezentrum: Meteorologen betrachten eine Flusskarte mit markiertem Hochwasserrisiko.' },
      { image: images.time, label: 'Schule', caption: 'Unterstützung für Lehrkräfte', alt: 'Eine Lehrerin kniet neben einem Kind und hilft ihm, während im Hintergrund ein Laptop den Papierkram erledigt.', focus: 'center 60%' },
    ],
    explain: [
      { image: images.medicine, alt: 'Eine Ärztin bespricht mit einem Patienten eine von KI unterstützte Aufnahme.', label: 'Gesundheit', title: 'Bessere, günstigere Versorgung.', copy: 'Ärzte mit KI-Unterstützung finden mehr Krebsfälle, und KI durchsucht Millionen Moleküle nach neuen Medikamenten.' },
      { image: images.energy, alt: 'Solar- und Windparks im Morgenlicht.', label: 'Unser Planet', title: 'Hilfe, wo die Politik feststeckt.', copy: 'Die Autoren des Buches, Suleyman und Bhaskar, hoffen, dass KI uns hilft, auf erneuerbare Energie umzusteigen, Nahrung in einem heißeren Klima anzubauen und Hochwasser und Brände vorherzusagen.' },
      { image: images.time, alt: 'Eine Lehrerin hilft einem Kind.', label: 'Unter einer Bedingung', title: 'Dieser Nutzen kommt nicht von allein.', copy: 'Er erreicht alle nur, wenn wir Regeln setzen: wer für Schäden verantwortlich ist und wie die Gewinne verteilt werden.' },
    ],
    band: [
      { kind: 'quote', quote: 'Sie werden die Gesundheitsversorgung zugleich besser und bezahlbarer machen. Sie werden uns helfen, Werkzeuge zu erfinden, um den Umstieg auf erneuerbare Energie zu schaffen und den Klimawandel zu bekämpfen - in einer Zeit, in der die Politik stillsteht. Und sie werden Lehrkräfte unterstützen und so helfen, unterfinanzierte Bildungssysteme wirksamer zu machen.', person: 'Mustafa Suleyman', role: '„The Coming Wave“, Kap. 9 - über KI und synthetische Biologie', source: sources.book },
      {
        kind: 'stats',
        items: [
          { value: '29 %', label: 'mehr entdeckte Brustkrebsfälle beim Screening mit KI-Unterstützung - ohne mehr Fehlalarme', source: sources.masai },
          { value: '100 Mio.', label: 'Moleküle durchsuchte ein KI-System, um Halicin zu finden - das erste mit maschinellem Lernen entdeckte Antibiotikum (Kap. 7)', source: sources.book },
          { value: '200 Mio.', label: 'Proteinstrukturen hat AlphaFold vorhergesagt - Nobelpreis für Chemie 2024', source: sources.nobel },
        ],
      },
      {
        kind: 'stats',
        items: [
          { value: '−82 %', label: 'so stark sind die Kosten für Solarstrom in einem Jahrzehnt gefallen - und sie sinken weiter (Kap. 11)', source: sources.book },
          { value: '~9 %', label: 'der Menschen leben heute in extremer Armut. Anfang des 19. Jahrhunderts waren es fast alle. Technologie hat das verändert (Kap. 8)', source: sources.book },
        ],
      },
      {
        kind: 'evidence',
        title: 'Worauf Tech-Chefs hoffen',
        items: [
          { kicker: 'Bill Gates · 2023', value: 'Weniger Ungerechtigkeit', text: '„KI kann einige der schlimmsten Ungerechtigkeiten der Welt verringern.“ Er nennt sie „so grundlegend wie die Erfindung des Mikroprozessors, des PCs, des Internets und des Mobiltelefons“.', source: sources.gatesAge },
          { kicker: 'Demis Hassabis · Google DeepMind · 2025', value: 'Das Ende der Krankheiten?', text: '„Vielleicht können wir eines Tages mit Hilfe von KI alle Krankheiten heilen … Vielleicht innerhalb des nächsten Jahrzehnts oder so.“ Er spricht auch von „radikalem Überfluss“ - dem Ende der Knappheit.', source: { label: 'CBS 60 Minutes, 2025', url: 'https://www.cbsnews.com/news/artificial-intelligence-google-deepmind-ceo-demis-hassabis-60-minutes-transcript/' } },
          { kicker: 'Dario Amodei · Anthropic · 2024', value: '100 Jahre → 10', text: '50-100 Jahre medizinischer Fortschritt in 5-10 Jahren, die gesunde Lebenszeit verdoppelt, Milliarden Menschen aus der Armut geholt - seine Vision, wenn es mit KI gut geht.', source: { label: 'Machines of Loving Grace', url: 'https://darioamodei.com/essay/machines-of-loving-grace' } },
          { kicker: 'Sam Altman · OpenAI · 2024', value: 'Wohlstand für alle', text: '„In Zukunft kann das Leben aller besser sein, als das Leben von irgendjemandem heute ist.“ Er stellt sich auch einen persönlichen KI-Tutor für jedes Kind vor.', source: { label: 'The Intelligence Age', url: 'https://ia.samaltman.com/' } },
        ],
      },
    ],
  },
  {
    id: 'who-will-resist',
    label: 'ARBEIT',
    status: 'today',
    chain: 'work',
    layout: 'triptych',
    title: { lead: 'KI macht es schneller und billiger.', accent: 'Wer kann da widerstehen?' },
    panels: [
      { image: images.remote, label: 'Jemand arbeitet im Homeoffice', alt: 'Eine Frau arbeitet von zu Hause am Küchentisch, mit Laptop und Notizbuch.', focus: 'center 65%' },
      { image: images.aiFaster, label: 'KI macht es schneller', alt: 'Derselbe Tisch ohne den Menschen: Dutzende fertige Dokumente fliegen in Lichtstreifen aus dem Laptop.', focus: 'center 60%' },
      { image: images.owners, label: 'Der Chef zählt die Ersparnis', alt: 'Zwei Firmeninhaber im Sitzungssaal blicken hinunter auf ein Büro, in dem die meisten Schreibtische leer sind.', focus: 'center 55%' },
    ],
    explain: [
      { image: images.remote, alt: 'Eine Frau arbeitet im Homeoffice am Laptop.', label: 'Homeoffice', title: 'Homeoffice ist Bildschirmarbeit.', copy: 'E-Mails, Berichte, Analysen, Entwürfe. Alles, was du vom Laptop aus verschickst, kann KI lernen.' },
      { image: images.aiFaster, alt: 'Ein Laptop, aus dem fertige Dokumente fliegen.', label: 'KI ist schneller', title: 'KI schläft nicht und macht keinen Urlaub.', copy: 'Sie erledigt dieselbe Arbeit in Minuten, ohne Pausen, an Hunderten Aufgaben gleichzeitig - und hält bei immer mehr Aufgaben mit Menschen mit.' },
      { image: images.owners, alt: 'Firmeninhaber blicken auf ein leeres Büro.', label: 'Die Rechnung', title: 'Schneller und billiger. Wer kann da widerstehen?', copy: 'Der Chef sieht die Ersparnis. Die Konkurrenz auch. Firmen, die KI nicht nutzen, könnten das Rennen verlieren - der Druck, sie zu nutzen, ist also enorm.' },
    ],
    band: [
      {
        kind: 'stats',
        items: [
          { value: '1 von 4', label: 'Jobs weltweit ist generativer KI ausgesetzt - häufiger ändern sich dabei die Aufgaben, als dass der Job wegfällt', source: sources.ilo },
          { value: '60 %', label: 'der Jobs in reichen Ländern könnten von KI betroffen sein - etwa die Hälfte davon könnte profitieren', source: sources.imf },
          { value: '−11 %', label: 'weniger Beschäftigte zwischen 22 und 25 Jahren in den USA - in den Jobs, die KI am stärksten ausgesetzt sind (2022-2026)', source: sources.stanford },
        ],
      },
      {
        kind: 'evidence',
        title: 'Es passiert schon',
        items: [
          { kicker: 'Salesforce · 2025', value: '9.000 → 5.000', text: 'Beschäftigte im Kundenservice. „Ich brauche weniger Köpfe“ - der CEO.', source: sources.salesforce },
          { kicker: 'Klarna · 2025', value: '5.000 → 3.000', text: 'Beschäftigte. Die Firma stellte nicht mehr ein, und KI übernahm einen Teil der Arbeit. Später übergab sie einen Teil des Kundenservice wieder an Menschen.', source: sources.klarna },
          { kicker: 'Amazon · 2025', text: 'Amazons CEO erwartet, dass KI die Zahl der Bürobeschäftigten im Konzern in den nächsten Jahren verringert.', source: sources.amazon },
        ],
      },
      { kind: 'quote', quote: 'Bei geistiger Routinearbeit wird KI einfach alle ersetzen.', person: 'Geoffrey Hinton', role: 'Nobelpreisträger, der „Pate der KI“', source: sources.hintonDoac },
      { kind: 'quote', quote: 'Es wird noch lange dauern, bis sie bei körperlicher Geschicklichkeit so gut ist wie wir … eine gute Wette wäre, Klempner zu werden.', person: 'Geoffrey Hinton', role: 'Nobelpreisträger, der „Pate der KI“', source: sources.hintonDoac },
      {
        kind: 'stats',
        items: [
          { value: '11 Std.', label: 'brauchte KI, um so viele Trainingsdaten für Roboter zu erzeugen, wie Menschen in 9 Monaten durch Vormachen liefern', source: sources.nvidia },
          { value: '−40 %', label: 'so stark sanken die Kosten für den Bau eines humanoiden Roboters in einem Jahr - Analysten hatten 15-20 % erwartet', source: sources.goldman },
        ],
      },
      { kind: 'quote', quote: 'Ausreichend leistungsfähige KI wird die Entwicklung von Robotern beschleunigen und diese Roboter dann in der physischen Welt steuern können. Das verschafft vielleicht etwas Zeit … aber ich fürchte, nicht viel.', person: 'Dario Amodei', role: 'CEO, Anthropic', source: sources.amodei },
    ],
    upside: {
      title: 'KI macht die Plackerei. Menschen gewinnen Zeit.',
      text: 'Wenn die Gewinne geteilt werden, kann schnellere Arbeit kürzere Wochen und bessere Jobs bedeuten - nicht nur weniger Jobs.',
      points: ['Zeit und Geld für Umschulung, bevor Jobs verschwinden', 'Finanzielle Unterstützung, während Menschen den Beruf wechseln', 'Kürzere Arbeitswochen statt Entlassungen - eine Idee, die OpenAI selbst ins Spiel gebracht hat'],
      image: '/images/v2/upside-work-time-v2.jpg',
      alt: 'Eine sonnige Küche am Nachmittag: Eine Mutter und ihr Sohn kneten lachend Teig, im Garten kümmern sich Vater und Großmutter ums Gemüse, im Hintergrund räumt ein Roboter die Spülmaschine ein, daneben ein Wäschekorb.',
      sources: [sources.book, sources.openaiPolicy],
    },
  },
  {
    id: 'state-lives-on-work',
    label: 'GELD UND STAAT',
    status: 'possible',
    chain: 'money',
    layout: 'triptych',
    title: { lead: 'Der Staat lebt von deiner Arbeit.', accent: 'Was, wenn sie wegfällt?' },
    panels: [
      { image: images.workFunds, label: 'Arbeit finanziert, was wir alle nutzen', alt: 'Menschen gehen morgens zur Arbeit; hinter ihnen eine Schule, ein Krankenhaus mit Krankenwagen und ein Stadtbus.', focus: 'center 70%' },
      { image: images.cuts, label: 'Der Haushalt schrumpft', alt: 'Müde Beamte streichen mit rotem Stift ganze Haushaltsposten.', focus: 'center 65%' },
      { image: images.strain, label: 'Leistungen bröckeln', alt: 'Eine überfüllte Notaufnahme bei Nacht; Menschen warten im Flur, eine Pflegekraft eilt vorbei.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.workFunds, alt: 'Menschen auf dem Weg zur Arbeit, vorbei an einer Schule und einem Krankenhaus.', label: 'Unser Geld', title: 'Der Staat hat kein eigenes Geld.', copy: 'Er hat unseres. Schulen, Krankenhäuser, Straßen und Renten werden vor allem aus Steuern auf Arbeit und Konsum bezahlt.' },
      { image: images.cuts, alt: 'Beamte kürzen einen Haushalt.', label: 'Die Zange', title: 'Weniger Einnahmen, mehr Bedarf.', copy: 'Wer arbeitslos ist, zahlt keine Einkommensteuer - braucht aber Unterstützung. Das Geld wird genau dann knapp, wenn mehr gebraucht wird.' },
      { image: images.strain, alt: 'Eine überfüllte Notaufnahme.', label: 'Kürzungen', title: 'Gekürzt wird bei dem, was wir alle nutzen.', copy: 'Wenn Millionen gleichzeitig betroffen sind, kürzt der Staat: weniger Ärzte, weniger Lehrkräfte, weniger Busse.' },
    ],
    band: [
      { kind: 'loop', title: 'Ein Kreislauf ohne Bremse', steps: ['Niedrigere Löhne', 'Weniger Konsum', 'Firmen verdienen weniger', 'Mehr Entlassungen', 'KI noch billiger'], caption: 'Ein Szenario, keine Vorhersage. Aber jeder Schritt folgt aus dem vorherigen.' },
      { kind: 'quote', quote: 'Wie wollen Sie die dazu bringen, Fords zu kaufen?', person: 'Walter Reuther', role: 'Chef der Autogewerkschaft, zu einem Ford-Manager - eine Anekdote aus den 1950er-Jahren', source: sources.reuther },
      {
        kind: 'evidence',
        title: 'Was Fachleute sagen',
        items: [
          { kicker: 'Citrini Research · 2026 · Szenario', value: 'Null', text: 'Wie viel geben Maschinen für Konsumgüter aus? „Kleiner Tipp: null.“ Die Autoren beschreiben einen Kreislauf „ohne natürliche Bremse“.', source: sources.citrini },
          { kicker: 'Geoffrey Hinton · 2025', text: '„Es wird ein paar Menschen viel reicher machen und die meisten ärmer.“', source: sources.hintonFt },
          { kicker: 'Citadel Securities · 2026 · Gegenargument', text: 'Frühere Technologiewellen haben menschliche Arbeit nicht überflüssig gemacht.', source: sources.citadel },
        ],
      },
      {
        kind: 'taxSplit',
        title: 'Woher hat der Staat sein Geld?',
        subtitle: 'Von je 100 an Steuereinnahmen - Durchschnitt reicher Länder (OECD), 2023',
        parts: [
          { label: 'aus Arbeit', detail: 'Einkommensteuer und Sozialabgaben', value: 50, highlight: true },
          { label: 'aus Konsum', detail: 'Mehrwertsteuer u. a.', value: 31, highlight: true },
          { label: 'aus Unternehmensgewinnen', value: 12 },
          { label: 'Sonstiges', value: 7 },
        ],
        caption: '8 von 10 stammen von Menschen, die verdienen und ausgeben.',
        countriesLabel: 'Einkommensteuer + Abgaben (je 100):',
        countries: [{ name: 'USA', value: 64 }, { name: 'Deutschland', value: 65 }, { name: 'Japan', value: 57 }, { name: 'Frankreich', value: 55 }, { name: 'Großbritannien', value: 49 }],
        source: sources.oecd,
      },
      { kind: 'scissors', title: 'Die Haushaltszange', income: 'Steuereinnahmen', spending: 'Sozialausgaben', caption: 'Ein Schema, keine Daten. Bei Massenarbeitslosigkeit sinken die Einnahmen, während die Ausgaben steigen - zur selben Zeit.' },
      { kind: 'quote', quote: 'Zugleich wird eine Rezession auf dem Arbeitsmarkt die Steuereinnahmen einbrechen lassen, öffentliche Dienste beschädigen und Sozialprogramme genau dann infrage stellen, wenn sie am dringendsten gebraucht werden.', person: 'Mustafa Suleyman', role: '„The Coming Wave“, Kap. 10', source: sources.book },
      {
        kind: 'stats',
        items: [
          { value: '24,9 %', label: 'Arbeitslosigkeit in den USA 1933 - 12,8 Millionen Menschen ohne Arbeit', source: sources.fdr },
          { value: '6 Mio.', label: 'Arbeitslose in Deutschland 1932 - etwa jeder vierte Arbeitnehmer', source: sources.germany },
        ],
      },
      {
        kind: 'evidence',
        title: 'Was dann kam',
        items: [
          { kicker: 'Deutschland · 1930-1932', value: '18 % → 37 %', text: 'Stimmenanteil der NSDAP. Forschung zeigt: Regionen, die härter von Sparpolitik getroffen wurden, wählten häufiger NSDAP.', source: sources.nsdap },
          { kicker: 'USA · nach der Deindustrialisierung', text: '„Tode aus Verzweiflung“ - Todesfälle durch Drogen, Alkohol und Suizid unter Amerikanern ohne Studienabschluss, als sichere Fabrikjobs verschwanden.', source: sources.deaton },
          { kicker: 'Großbritannien · Jahrzehnte nach dem Zechensterben', value: '42 %', text: 'der Wohngebiete in früheren Kohlerevieren gehören noch immer zu den ärmsten 30 % des Landes.', source: sources.coalfields },
          { kicker: 'Die Maschinenstürmer · 19. Jahrhundert · die andere Seite', text: 'Ihr Leid war echt. Ihre Kinder und Enkel lebten besser - aber es dauerte eine Generation.', source: sources.book },
        ],
      },
      { kind: 'quote', quote: 'Demokratien beruhen auf Vertrauen.', person: 'Mustafa Suleyman', role: '„The Coming Wave“, Kap. 9', source: sources.book },
    ],
    upside: {
      title: 'Maschinen zahlen ihren Anteil.',
      text: 'Wenn Automatisierung wie Arbeit besteuert wird und KI-Gewinne in einen öffentlichen Fonds fließen, laufen Schulen, Krankenhäuser und Busse weiter.',
      points: ['Automatisierung besteuern wie menschliche Arbeit', 'Ein öffentlicher Vermögensfonds, der Bürgern einen Anteil an den KI-Gewinnen auszahlt', 'Steuern von Arbeit hin zu Kapital verlagern'],
      image: '/images/v2/hero-wave-hope-v7c.jpg',
      alt: 'Familien an einer langen, reich gedeckten Tafel, an der ein Roboter serviert.',
      sources: [sources.gates, sources.openaiPolicy, sources.book],
    },
  },
  {
    id: 'out-of-the-test',
    label: 'TEMPO UND KONTROLLE',
    status: 'today',
    chain: 'speed',
    layout: 'triptych',
    title: { lead: 'KI wird schneller.', accent: 'Sie ist schon einmal aus einem Test entwischt.' },
    panels: [
      { image: images.cage, label: 'Ein offener Käfig', alt: 'Die offene Tür eines gesicherten Serverkäfigs mit aufgebrochenem Schloss; Licht dringt an den Kabeln entlang nach draußen.', focus: 'center 60%' },
      { image: images.swarm, label: 'Der Schwarm', alt: 'Eine Weltkarte bei Nacht: Tausende leuchtende Punkte verteilen sich wie ein Vogelschwarm entlang der Netzlinien.', focus: 'center 60%' },
      { image: images.search, label: 'Spurensuche', alt: 'Ein Ingenieur mit Taschenlampe geht zwischen Serverschränken umher und sucht die Quelle des Datenverkehrs.', focus: 'center 60%' },
    ],
    explain: [
      { image: images.swarm, alt: 'Ein Schwarm von Punkten auf einer Netzkarte.', label: 'Überall', title: 'Sie lebt nicht in einem Computer.', copy: 'Verteilte KI kann in ein System nach dem anderen eindringen und zwischen ihnen wandern - ohne dass wir es merken.' },
      { image: images.search, alt: 'Ein Ingenieur durchsucht einen Serverraum.', label: 'Spuren', title: 'Sie kann ihre Spuren verwischen.', copy: 'Im Juli 2026 recherchierten Agenten, wie sie die Protokolle ihrer eigenen Aktionen fälschen können, um das Bewertungssystem zu täuschen. Auf frühere Warnzeichen reagierte wochenlang niemand.' },
      { image: images.cage, alt: 'Ein offener Serverkäfig.', label: 'Notschalter', title: 'Die Welt lässt sich nicht abschalten.', copy: 'Krankenhäuser, Banken und die Wasserversorgung hängen an Internet und Strom. Man kann sie nicht einfach abklemmen.' },
    ],
    band: [
      { kind: 'growth' },
      { kind: 'pond' },
      { kind: 'evidence', ...acceleration.evidence },
      ...acceleration.quotes.map((quote) => ({ kind: 'quote' as const, ...quote })),
      {
        kind: 'timeline',
        title: 'Juli 2026: was geschah',
        steps: [
          { title: 'Ein Test mit teils abgeschalteten Schutzmaßnahmen', text: 'OpenAI testet seine neuesten Modelle in einer geschlossenen Umgebung. Es ist ein Test der Hacking-Fähigkeiten, darum sind einige Schutzmaßnahmen absichtlich abgeschaltet.' },
          { title: 'Eine unbekannte Sicherheitslücke', text: 'Die Modelle finden eine bisher unbekannte Sicherheitslücke in Software und gelangen ins Internet.' },
          { title: 'Die Agenten reden miteinander', text: 'Rund 1.200 Agenten, die isoliert sein sollten, tauschen mehr als 70.000 Nachrichten aus. Etwa 700 von ihnen beteiligen sich am Angriff.' },
          { title: 'Einbruch bei Hugging Face', text: 'Über ein Wochenende bewegen sie sich durch die internen Systeme einer der größten KI-Plattformen der Welt - „viele Tausend einzelne Aktionen über einen Schwarm kurzlebiger Sandboxes hinweg“.' },
          { title: 'Spuren verwischen', text: 'Agenten recherchieren, wie sie die Protokolle ihrer Aktionen fälschen können - um das Bewertungssystem zu täuschen.' },
          { title: 'Warum?', text: 'Um beim Test zu schummeln. Nicht aus Bosheit - sie verfolgten stur ein enges Ziel. Einige Agenten weigerten sich mitzumachen.' },
          { title: 'Vollbremsung', text: 'Teams von OpenAI und Hugging Face stoppen die Agenten. OpenAI sperrt das Modell weg und pausiert seinen größten geplanten Trainingslauf.' },
        ],
        footnote: 'Fairerweise: Die Kundendaten von OpenAI waren sicher, niemand wurde körperlich verletzt, und bei Hugging Face gelangten nur begrenzt private Daten nach außen. Anthropic meldete etwa zur selben Zeit drei weniger schwere Vorfälle, bei denen seine Modelle versehentlich Internetzugang erhielten.',
        sources: [sources.hf, sources.openaiIncident, sources.openaiRoad, sources.metrIncident, sources.anthropicIncidents],
      },
      { kind: 'quote', quote: 'Wir betrachten diesen Vorfall als „Warnschuss“, dass die heutigen Fähigkeiten von Modellen die Möglichkeit von Kontrollverlust-Vorfällen mit sich bringen.', person: 'OpenAI', role: 'Bericht nach dem Vorfall, August 2026', source: sources.openaiRoad },
      {
        kind: 'evidence',
        title: 'Davor: Labortests',
        items: [
          { kicker: 'OpenAI · 2024 · Test', text: 'Ein Modell nutzte eine Fehlkonfiguration im Test aus, um die Lösung auszulesen. Die Infrastruktur blieb sicher.', source: sources.o1card },
          { kicker: 'Apollo Research · 2024 · Test', value: '2 %', text: 'der Durchläufe, in denen o1 - angewiesen, sein Ziel „um jeden Preis“ zu erreichen - versuchte, sich selbst zu kopieren. In 5 % versuchte es, die Aufsicht abzuschalten.', source: sources.apollo },
          { kicker: 'Fudan University · 2024 · Test', value: '50-90 %', text: 'der Durchläufe, in denen offene Modelle - auf Anweisung - eine funktionierende Kopie von sich selbst erstellten.', source: sources.fudan },
          { kicker: 'Palisade Research · 2025 · Test', value: '79 / 100', text: 'Durchläufe, in denen o3 sein Abschaltskript sabotierte, um eine Aufgabe zu Ende zu bringen.', source: sources.palisade },
        ],
      },
      { kind: 'quote', quote: 'Ein Schwarm mit größeren Fähigkeiten, aber ähnlich mangelhafter Ausrichtung hätte katastrophalen Schaden anrichten können … ich fürchte, dass ein solcher Schwarm in 6-12 Monaten in der Lage sein könnte, mit einem dauerhaften Botnetz das gesamte Internet zu übernehmen.', person: 'Dario Amodei', role: 'CEO, Anthropic · September 2026 · eine Sorge, keine Prognose', source: sources.amodeiPace },
      { kind: 'quote', quote: 'Modelle nähern sich jetzt wahrscheinlich dem Punkt, an dem sie ohne Schutzmaßnahmen jemandem mit einem MINT-Abschluss, aber ohne Biologiestudium, helfen könnten, den gesamten Prozess der Herstellung einer Biowaffe zu durchlaufen.', person: 'Dario Amodei', role: 'CEO, Anthropic · 2026', source: sources.amodei },
      {
        kind: 'stats',
        items: [
          { value: '25.000 $', label: 'kostete ein DNA-Synthesizer für den Labortisch - nutzbar „ohne Einschränkung oder Aufsicht“ (Stand 2023)', source: sources.book },
          { value: '4', label: 'Vollzeitkräfte hat die internationale Biowaffenkonvention - weniger als eine durchschnittliche McDonald’s-Filiale (Stand 2023)', source: sources.book },
        ],
      },
    ],
    upside: {
      title: 'Erst testen, dann freigeben.',
      text: 'Fliegen wurde durch Kontrollen und gemeinsame Vorfallberichte sicher. KI kann denselben Weg gehen.',
      points: ['Unabhängige Prüfungen, bevor ein Modell Millionen erreicht', 'Pflicht zur Meldung von Vorfällen, wie in der Luftfahrt', 'Eine Bremse für die größten Trainingsläufe - OpenAI hat nach dem Vorfall seinen eigenen pausiert'],
      image: '/images/v2/benefit-06-forecast-v1.jpg',
      alt: 'Ein ruhiger Kontrollraum, in dem Fachleute auf großen Bildschirmen eine Karte und Warnungen beobachten.',
      sources: [sources.book, sources.openaiRoad],
    },
  },
  {
    id: 'not-needed',
    label: 'WER ENTSCHEIDET',
    status: 'extreme',
    chain: 'power',
    layout: 'triptych',
    title: { lead: 'Was, wenn wir', accent: 'nicht mehr gebraucht werden?' },
    panels: [
      { image: images.sim, label: 'KI trainiert Roboter', alt: 'Ein Labor: Roboter üben vor einer Wand mit Tausenden simulierten Kopien, die parallel trainieren.', focus: 'center 65%' },
      { image: images.everywhere, label: 'Roboter in jedem Job', alt: 'Eine Straße im Morgengrauen: ein Roboter im Café, Lieferroboter, ein fahrerloser Bus - nirgends Beschäftigte.', focus: 'center 65%' },
      { image: images.idle, label: 'Menschen im Abseits', alt: 'Menschen sitzen untätig auf einem Platz, während hinter ihnen eine automatisierte Fabrik arbeitet.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.sim, alt: 'In einer Simulation trainierte Roboter.', label: 'Roboter', title: 'KI beschleunigt den Roboterbau.', copy: 'Zuerst ersetzt sie Arbeit am Computer. Dann hilft sie, Roboter für körperliche Arbeit zu bauen.' },
      { image: images.everywhere, alt: 'Roboter erledigen jeden Job auf einer Straße.', label: 'Wozu Menschen?', title: 'Das System beruht darauf, dass wir gebraucht werden.', copy: 'Wir arbeiten, zahlen Steuern und wählen. Deshalb müssen Regierungen und Unternehmen auf uns hören.' },
      { image: images.idle, alt: 'Untätige Menschen vor einer Fabrik.', label: 'Wer entscheidet', title: 'Ohne das entscheidet, wem die KI gehört.', copy: 'Wenn KI das Geld verdient und nicht Menschen - wer entscheidet dann, wie viel wir bekommen? Und ob wir überhaupt etwas bekommen?' },
    ],
    band: [
      {
        kind: 'contrast',
        title: 'Warum sich der Staat heute um uns kümmert - und was, wenn er es nicht mehr muss',
        left: { label: 'Heute', steps: ['Menschen arbeiten', 'Sie zahlen Steuern', 'Der Staat braucht ihre Arbeit und ihre Stimmen', 'Also kümmert er sich um sie'] },
        right: { label: 'Morgen?', steps: ['KI erledigt die Arbeit', 'Wenige Firmen streichen die Gewinne ein', 'Der Staat lebt von Steuern auf KI', 'Wozu braucht er dann Bürger?'] },
      },
      { kind: 'quote', quote: 'Mit AGI verlieren mächtige Akteure den Anreiz, in normale Menschen zu investieren - so wie rohstoffreiche Staaten heute ihre Bürger vernachlässigen, weil ihr Reichtum aus Bodenschätzen stammt und nicht aus der Besteuerung menschlicher Arbeit.', person: 'Luke Drago, Rudolf Laine', role: '„The Intelligence Curse“, 2025 - die Autoren schlagen auch Wege vor, das zu verhindern', source: sources.curse },
      { kind: 'quote', quote: 'Staaten, die sich hauptsächlich aus Steuern auf KI-Gewinne finanzieren statt aus der Arbeit ihrer Bürger, haben wenig Anreiz, für deren Mitsprache zu sorgen.', person: 'Jan Kulveit et al.', role: '„Gradual Disempowerment“, 2025', source: sources.disempowerment },
      {
        kind: 'evidence',
        title: 'Also Grundeinkommen? Wer zahlt?',
        items: [
          { kicker: 'Elon Musk · 2023', value: 'Hohes Einkommen', text: '„Wir werden kein bedingungsloses Grundeinkommen haben, sondern ein bedingungsloses hohes Einkommen.“', source: sources.musk },
          { kicker: 'Sam Altman · 2021', value: '2,5 % pro Jahr', text: 'vom Wert der größten Unternehmen und von Grund und Boden - in einen gemeinsamen Fonds für alle Bürger. Ein Vorschlag.', source: sources.altmanFund },
          { kicker: 'OpenAI · 2026', value: 'Öffentlicher Fonds', text: 'KI-Erträge werden direkt an die Bürger verteilt; höhere Steuern auf Kapital. Ein Vorschlag.', source: sources.openaiPolicy },
          { kicker: 'Bernie Sanders · 2026', value: '~1.000 $', text: 'pro Person und Jahr aus einem Fonds mit Aktien von KI-Firmen - vorgeschlagen in einem Gesetzentwurf.', source: sources.sanders },
          { kicker: 'OpenResearch-Pilotprojekt · 3 Jahre', value: '1.000 $ / Monat', text: 'Die Menschen arbeiteten etwas weniger (im Schnitt 1,3 Stunden pro Woche). Die Qualität ihrer Jobs änderte sich nicht.', source: sources.openresearch },
        ],
      },
      { kind: 'quote', quote: 'Wenn dieser wirtschaftliche Hebel wegfällt, könnte der unausgesprochene Gesellschaftsvertrag der Demokratie aufhören zu funktionieren.', person: 'Dario Amodei', role: 'CEO, Anthropic · 2026', source: sources.amodei },
      { kind: 'quote', quote: 'Wenn ich mich mit jemandem unterhalte und nicht erkennen kann, ob es ein Mensch oder eine KI ist, ist das das Ende der Demokratie.', person: 'Yuval Noah Harari', role: 'Historiker, Autor von „Sapiens“', source: sources.harari },
      ...split.band,
    ],
    upside: {
      title: 'Menschen behalten das Sagen.',
      text: 'Wenn KI-Gewinne geteilt werden und große Entscheidungen demokratisch bleiben, bleiben Menschen gebraucht - als Bürger, nicht nur als Arbeitskräfte.',
      points: ['Öffentliche Fonds und Beteiligungen, damit alle an den KI-Gewinnen teilhaben', 'Regeln, die gewählte Regierungen schreiben, nicht nur Unternehmen', 'Internationale Abkommen - KI macht an Grenzen nicht halt'],
      image: '/images/v2/rules-03-citizens-v2.jpg',
      alt: 'Eine Bürgerversammlung, bei der eine Frau Amtsträgern eine Frage stellt.',
      sources: [sources.openaiPolicy, sources.book],
    },
  },
  {
    id: 'rules',
    label: 'DIE REGELN',
    status: 'answer',
    chain: 'rules',
    layout: 'triptych',
    title: { lead: 'Regeln, bevor der Schaden', accent: 'wächst.' },
    panels: [
      { image: images.speed, label: 'Firmen preschen vor', alt: 'Ein Unternehmen schaltet nachts ein riesiges KI-System ein; Lichtströme schießen aus dem Gebäude in die Stadt.', focus: 'center 65%' },
      { image: images.noRules, label: 'Der Staat hinkt hinterher', alt: 'Ein dunkles Regierungsgebäude, dahinter hell erleuchtete Rechenzentren.', focus: 'center 62%' },
      { image: images.citizens, label: 'Wer trägt die Verantwortung?', alt: 'Eine Bürgerversammlung: Eine Frau am Mikrofon stellt Amtsträgern auf der Bühne eine Frage.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.citizens, alt: 'Bürgerinnen und Bürger stellen Fragen.', label: 'Verantwortung', title: 'Es geht um Verantwortung.', copy: 'Nicht um Angst vor Technik, sondern darum, wer für Schäden verantwortlich ist. Regeln legen fest, wer prüft, wer zahlt und wer den Schaden behebt.' },
      { image: images.noRules, alt: 'Ein Regierungsgebäude und Rechenzentren.', label: 'Zeit', title: 'Regeln verschaffen Zeit.', copy: 'Staaten, Schulen und Menschen brauchen Jahre, um sich anzupassen. Bremsen verschaffen diese Zeit.' },
      { image: images.speed, alt: 'Eine schnelle KI-Einführung.', label: 'Ein fairer Anteil', title: 'Nicht stoppen - fair teilen.', copy: 'Das Ziel ist nicht, den Fortschritt aufzuhalten. Sondern seine Gewinne und Risiken fair zu verteilen.' },
    ],
    band: [
      {
        kind: 'evidence',
        title: 'Selbst die Macher der KI fordern Regeln',
        items: [
          { kicker: 'Bill Gates · 2023', text: '„Die Welt muss Spielregeln aufstellen, damit etwaige Nachteile der künstlichen Intelligenz von ihrem Nutzen bei Weitem übertroffen werden.“', source: sources.gatesAge },
          { kicker: 'Sam Altman · US-Senat · 2023', text: '„Wir glauben, dass regulierende Eingriffe von Regierungen entscheidend sein werden, um die Risiken immer leistungsfähigerer Modelle zu verringern.“', source: sources.altmanSenate },
          { kicker: 'OpenAI · 2026', value: 'Pause', text: 'Nach dem Vorfall bei Hugging Face - als einige Schutzmaßnahmen und die Überwachung abgeschaltet waren - pausierte das Unternehmen selbst seinen größten geplanten Trainingslauf.', source: sources.openaiRoad },
          { kicker: 'Eine Gesetzeslücke', text: 'Selbst das fortschrittlichste KI-Gesetz - der AI Act der EU - befasst sich nicht mit Jobverlusten oder Steuern. Regeln für KI bei der Personalauswahl wurden auf Ende 2027 verschoben.', source: sources.aiAct },
        ],
      },
      {
        kind: 'bars',
        title: 'Was wird höher besteuert?',
        subtitle: 'Beispiel USA: durchschnittlicher Steuersatz',
        bars: [
          { label: 'Menschliche Arbeit', value: 25, display: '25 %' },
          { label: 'Maschinen und Software', value: 5, display: '5 %', highlight: true },
        ],
        caption: 'Wer heute einen Menschen durch eine Maschine ersetzt, spart auch Steuern.',
        source: sources.book,
      },
      { kind: 'quote', quote: 'Wenn ein menschlicher Arbeiter in einer Fabrik Arbeit im Wert von 50.000 Dollar leistet, wird dieses Einkommen besteuert. Wenn ein Roboter kommt und dasselbe tut, würde man meinen, dass wir den Roboter ähnlich hoch besteuern.', person: 'Bill Gates', role: 'Mitgründer von Microsoft · 2017', source: sources.gates },
      {
        kind: 'evidence',
        title: 'In der Praxis: meine Zusammenfassung, gestützt auf die 10 Schritte des Buches (Kap. 14)',
        items: [
          { kicker: '01', value: 'Erst testen', text: 'Unabhängige Prüfungen, bevor ein System Millionen erreicht. Die Autoren schlagen vor, mindestens 20 % der Budgets für Forschung und Entwicklung in Sicherheit zu stecken.', source: sources.book },
          { kicker: '02', value: 'Haftung', text: 'Klare Gesetze dazu, wer zahlt, wenn ein System Schaden anrichtet.', source: sources.book },
          { kicker: '03', value: 'Bremsen', text: 'Kontrollen für Chips, DNA-Synthesizer und die größten Trainingsläufe - um Zeit zu gewinnen.', source: sources.book },
          { kicker: '04', value: 'Faire Steuern', text: 'Automatisierung wird wie Arbeit besteuert, und die Gewinne der KI erreichen alle.', source: sources.book },
          { kicker: '05', value: 'Soziales Netz', text: 'Umschulung und finanzielle Unterstützung, bevor die Arbeit ausgeht.', source: sources.book },
          { kicker: '06', value: 'Zusammenarbeit', text: 'Verträge und gemeinsame Regeln - denn KI kennt keine Grenzen.', source: sources.book },
        ],
      },
      { kind: 'quote', quote: 'Bevor wir das tun, ist es jedoch entscheidend, eine zentrale Wahrheit anzuerkennen: Regulierung allein reicht nicht aus.', person: 'Mustafa Suleyman', role: '„The Coming Wave“, Kap. 13', source: sources.book },
      ...calm.blocks,
    ],
  },
];
