import type { Scene } from '@features/upcomingWave/types/scene.types';

import { acceleration } from '@features/upcomingWave/content/es/acceleration';
import { calm } from '@features/upcomingWave/content/es/calm';
import { split } from '@features/upcomingWave/content/es/closing';
import { sceneImages as images, sceneSources as plSources } from '@features/upcomingWave/content/pl/scenes';


// Quotes are translated into Spanish from their original language; book quotes are our translation of the English edition (Crown, 2023).
const sources = {
  ...plSources,
  imf: { ...plSources.imf, label: 'FMI, 2024' },
  blsPlumbers: { ...plSources.blsPlumbers, label: 'US BLS - fontaneros' },
  book: { label: '«The Coming Wave»' },
  germany: { ...plSources.germany, label: 'Universidad de Oxford' },
  openaiIncident: { ...plSources.openaiIncident, label: 'OpenAI, julio de 2026' },
  openaiRoad: { ...plSources.openaiRoad, label: 'OpenAI, agosto de 2026' },
  aiAct: { ...plSources.aiAct, label: 'Consejo de la UE, 2026' },
};

export const scenes: Scene[] = [
  {
    id: 'the-stakes',
    label: 'PRIMERO, LO QUE ESTÁ EN JUEGO',
    status: 'today',
    chain: 'stakes',
    layout: 'mosaic',
    title: { lead: 'Primero, lo que está en juego.', accent: 'La misma IA podría curar, alimentar y enseñar.' },
    panels: [
      { image: images.medicine, label: 'Diagnóstico precoz', caption: 'La IA ve lo que es fácil pasar por alto', alt: 'Una médica y un paciente miran una imagen médica en la que la IA ha marcado discretamente un punto.', focus: 'center 55%' },
      { image: images.science, label: 'Nuevos medicamentos', caption: 'Un antibiótico hallado entre 100 millones de moléculas', alt: 'Una científica en un laboratorio observa un modelo 3D luminoso de una proteína.', focus: 'center 40%' },
      { image: images.energy, label: 'Energía limpia', caption: 'Paneles solares, aerogeneradores y baterías más baratos', alt: 'Campos de paneles solares y aerogeneradores al amanecer; un ingeniero revisa la red en una tableta.' },
      { image: images.food, label: 'Alimentos', caption: 'Cultivos que resisten el calor', alt: 'Agricultores revisan cultivos sanos en pleno verano mientras un dron sobrevuela el campo.' },
      { image: images.forecast, label: 'Alertas tempranas', caption: 'Inundaciones e incendios, previstos con más antelación', alt: 'Un centro de predicción: meteorólogos miran el mapa de un río con un riesgo de inundación resaltado.' },
      { image: images.time, label: 'Escuela', caption: 'Apoyo para los docentes', alt: 'Una maestra se arrodilla junto a un niño y le ayuda, mientras al fondo un portátil se ocupa del papeleo.', focus: 'center 60%' },
    ],
    explain: [
      { image: images.medicine, alt: 'Una médica comenta con un paciente una imagen analizada con ayuda de la IA.', label: 'Salud', title: 'Una atención mejor y más barata.', copy: 'Los médicos que trabajan con IA detectan más cánceres, y la IA busca nuevos medicamentos entre millones de moléculas.' },
      { image: images.energy, alt: 'Parques solares y eólicos al amanecer.', label: 'El planeta', title: 'Ayuda donde la política se ha atascado.', copy: 'El autor del libro espera que la IA nos ayude a pasar a las energías renovables, a cultivar alimentos en un clima más cálido y a prever inundaciones e incendios.' },
      { image: images.time, alt: 'Una maestra ayudando a un niño.', label: 'Con una condición', title: 'Estos beneficios no llegarán solos.', copy: 'Solo llegarán a todos si ponemos reglas: quién responde por los daños y cómo se reparten las ganancias.' },
    ],
    band: [
      { kind: 'quote', quote: 'Harán que la atención sanitaria sea a la vez de mayor calidad y más asequible. Nos ayudarán a inventar herramientas para lograr la transición a las energías renovables y combatir el cambio climático en un momento en que la política se ha estancado, y apoyarán a los docentes, contribuyendo a aumentar la eficacia de unos sistemas educativos infrafinanciados.', person: 'Mustafa Suleyman', role: '«The Coming Wave», cap. 9 - sobre la IA y la biología sintética', source: sources.book },
      {
        kind: 'stats',
        items: [
          { value: '29%', label: 'más cánceres de mama detectados con cribados apoyados por IA, sin aumento de falsas alarmas', source: sources.masai },
          { value: '100 millones', label: 'de moléculas analizó un sistema de IA para encontrar la halicina, el primer antibiótico descubierto con aprendizaje automático (cap. 7)', source: sources.book },
          { value: '200 millones', label: 'de estructuras de proteínas predichas por AlphaFold, premio Nobel de Química 2024', source: sources.nobel },
        ],
      },
      {
        kind: 'stats',
        items: [
          { value: '−82%', label: 'ha caído el coste de la energía solar en una década, y sigue bajando (cap. 11)', source: sources.book },
          { value: '~9%', label: 'de la población vive hoy en pobreza extrema. A principios del siglo XIX, casi todo el mundo vivía así. La tecnología lo cambió (cap. 8)', source: sources.book },
        ],
      },
      {
        kind: 'evidence',
        title: 'Lo que esperan los líderes tecnológicos',
        items: [
          { kicker: 'Bill Gates · 2023', value: 'Menos desigualdad', text: '«La IA puede reducir algunas de las peores desigualdades del mundo». La considera «tan fundamental como la creación del microprocesador, la computadora personal, internet y el teléfono móvil».', source: sources.gatesAge },
          { kicker: 'Demis Hassabis · Google DeepMind · 2025', value: '¿El fin de las enfermedades?', text: '«Quizá algún día podamos curar todas las enfermedades con ayuda de la IA… Quizá en la próxima década, más o menos». También habla de una «abundancia radical»: el fin de la escasez.', source: { label: 'CBS 60 Minutes, 2025', url: 'https://www.cbsnews.com/news/artificial-intelligence-google-deepmind-ceo-demis-hassabis-60-minutes-transcript/' } },
          { kicker: 'Dario Amodei · Anthropic · 2024', value: '100 años → 10', text: '50-100 años de avances médicos comprimidos en 5-10, la esperanza de vida sana duplicada y miles de millones de personas fuera de la pobreza: su visión si todo sale bien con la IA.', source: { label: 'Machines of Loving Grace', url: 'https://darioamodei.com/essay/machines-of-loving-grace' } },
          { kicker: 'Sam Altman · OpenAI · 2024', value: 'Prosperidad compartida', text: '«En el futuro, la vida de todos puede ser mejor que la vida de cualquiera hoy». También imagina un tutor personal de IA para cada niño.', source: { label: 'The Intelligence Age', url: 'https://ia.samaltman.com/' } },
        ],
      },
    ],
  },
  {
    id: 'who-will-resist',
    label: 'TRABAJO',
    status: 'today',
    chain: 'work',
    layout: 'triptych',
    title: { lead: 'La IA lo hace más rápido y más barato.', accent: '¿Quién puede resistirse?' },
    panels: [
      { image: images.remote, label: 'Una persona teletrabaja', alt: 'Una mujer teletrabaja en la mesa de la cocina con un portátil y un cuaderno.', focus: 'center 65%' },
      { image: images.aiFaster, label: 'La IA lo hace más rápido', alt: 'La misma mesa, sin la persona: decenas de documentos terminados salen volando del portátil en estelas de luz.', focus: 'center 60%' },
      { image: images.owners, label: 'El dueño cuenta lo que ahorra', alt: 'Dos dueños de una empresa, desde una sala de juntas, miran una oficina con la mayoría de las mesas vacías.', focus: 'center 55%' },
    ],
    explain: [
      { image: images.remote, alt: 'Una mujer teletrabajando con un portátil.', label: 'Teletrabajo', title: 'El teletrabajo es trabajo de pantalla.', copy: 'Correos, informes, análisis, diseños. Todo lo que envías desde un portátil, la IA puede aprender a hacerlo.' },
      { image: images.aiFaster, alt: 'Un portátil del que salen volando documentos terminados.', label: 'La IA es más rápida', title: 'La IA no duerme ni se va de vacaciones.', copy: 'Hace el mismo trabajo en minutos, sin pausas, en cientos de tareas a la vez, e iguala a las personas en cada vez más tareas.' },
      { image: images.owners, alt: 'Dueños de una empresa mirando una oficina vacía.', label: 'Las cuentas', title: 'Más rápido y más barato. ¿Quién puede resistirse?', copy: 'El dueño ve el ahorro. La competencia también. Las empresas que no la usen pueden perder la carrera, así que la presión para usarla es enorme.' },
    ],
    band: [
      {
        kind: 'stats',
        items: [
          { value: '1 de cada 4', label: 'empleos en el mundo están expuestos a la IA generativa; más a menudo cambian sus tareas que desaparecen', source: sources.ilo },
          { value: '60%', label: 'de los empleos en los países ricos pueden verse afectados por la IA; cerca de la mitad de ellos podría beneficiarse', source: sources.imf },
          { value: '−11%', label: 'ha caído el empleo de jóvenes de 22 a 25 años en los trabajos más expuestos a la IA en EE. UU. (2022-2026)', source: sources.stanford },
        ],
      },
      {
        kind: 'evidence',
        title: 'Ya está pasando',
        items: [
          { kicker: 'Salesforce · 2025', value: '9000 → 5000', text: 'empleados de atención al cliente. «Necesito menos cabezas», dijo su CEO.', source: sources.salesforce },
          { kicker: 'Klarna · 2025', value: '5000 → 3000', text: 'empleados. La empresa dejó de contratar y la IA asumió parte del trabajo. Después devolvió parte de la atención al cliente a personas.', source: sources.klarna },
          { kicker: 'Amazon · 2025', text: 'El CEO de Amazon prevé que la IA reduzca la plantilla corporativa de la empresa en los próximos años.', source: sources.amazon },
        ],
      },
      { kind: 'quote', quote: 'Para el trabajo intelectual rutinario, la IA simplemente va a sustituir a todo el mundo.', person: 'Geoffrey Hinton', role: 'premio Nobel, el «padrino de la IA»', source: sources.hintonDoac },
      { kind: 'quote', quote: 'Pasará mucho tiempo antes de que sea tan buena como nosotros en la manipulación física… una buena apuesta sería hacerse fontanero.', person: 'Geoffrey Hinton', role: 'premio Nobel, el «padrino de la IA»', source: sources.hintonDoac },
      {
        kind: 'bars',
        title: '¿Cuántos candidatos por vacante?',
        subtitle: 'Ejemplo de EE. UU.: trabajadores por ocupación frente a vacantes de fontanero al año',
        bars: [
          { label: 'Agentes de atención al cliente', value: 2666000, display: '2,7 mill.' },
          { label: 'Fontaneros e instaladores de tuberías', value: 510600, display: '511 000' },
          { label: 'Vacantes de fontanero al año', value: 42000, display: '42 000', highlight: true },
        ],
        caption: 'Hay más de 60 agentes de atención al cliente por cada vacante de fontanero. Aunque solo se presentara uno de cada diez, serían 6 candidatos por vacante.',
        source: sources.bls,
      },
      {
        kind: 'stats',
        items: [
          { value: '11 h', label: 'necesitó la IA para crear el equivalente a 9 meses de demostraciones humanas para entrenar robots', source: sources.nvidia },
          { value: '−40%', label: 'bajó en un año el coste de fabricar un robot humanoide; los analistas esperaban un 15-20%', source: sources.goldman },
        ],
      },
      { kind: 'quote', quote: 'Una IA lo bastante potente podrá acelerar el desarrollo de robots y después controlar esos robots en el mundo físico. Puede que eso nos dé algo de tiempo… pero me preocupa que no nos dé mucho.', person: 'Dario Amodei', role: 'CEO de Anthropic', source: sources.amodei },
    ],
    upside: {
      title: 'La IA hace el trabajo pesado. Las personas recuperan tiempo.',
      text: 'Si las ganancias se reparten, trabajar más rápido puede significar semanas más cortas y mejores empleos, no solo menos empleos.',
      points: ['Tiempo y dinero para reciclarse antes de que desaparezcan los empleos', 'Apoyo económico mientras la gente cambia de profesión', 'Semanas laborales más cortas en lugar de despidos, una idea que ha planteado la propia OpenAI'],
      image: '/images/v2/upside-work-time-v2.jpg',
      alt: 'Una cocina soleada por la tarde: una madre y su hijo amasan y se ríen, en el huerto un padre y una abuela cuidan las verduras y, al fondo, un robot carga el lavavajillas junto a un cesto de ropa.',
      sources: [sources.book, sources.openaiPolicy],
    },
  },
  {
    id: 'state-lives-on-work',
    label: 'EL DINERO Y EL ESTADO',
    status: 'possible',
    chain: 'money',
    layout: 'triptych',
    title: { lead: 'El Estado vive de tu trabajo.', accent: '¿Y si desaparece?' },
    panels: [
      { image: images.workFunds, label: 'El trabajo paga lo que compartimos', alt: 'Gente camino del trabajo por la mañana; detrás, una escuela, un hospital con una ambulancia y un autobús urbano.', focus: 'center 70%' },
      { image: images.cuts, label: 'El presupuesto se encoge', alt: 'Funcionarios cansados tachan partidas enteras del presupuesto con un bolígrafo rojo.', focus: 'center 65%' },
      { image: images.strain, label: 'Los servicios se resquebrajan', alt: 'Una sala de urgencias abarrotada de noche; la gente espera en el pasillo y una enfermera pasa con prisa.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.workFunds, alt: 'Gente que va al trabajo pasando junto a una escuela y un hospital.', label: 'Nuestro dinero', title: 'El Estado no tiene dinero propio.', copy: 'Tiene el nuestro. Escuelas, hospitales, carreteras y pensiones se pagan sobre todo con impuestos sobre el trabajo y el consumo.' },
      { image: images.cuts, alt: 'Funcionarios recortando un presupuesto.', label: 'Aprieto', title: 'Menos ingresos, más necesidades.', copy: 'Una persona desempleada no paga impuesto sobre la renta, pero necesita ayuda. El dinero se acaba justo cuando más falta hace.' },
      { image: images.strain, alt: 'Una sala de urgencias saturada.', label: 'Recortes', title: 'Los recortes golpean lo que compartimos.', copy: 'Cuando millones de personas se ven afectadas a la vez, el Estado recorta: menos médicos, menos docentes, menos autobuses.' },
    ],
    band: [
      { kind: 'loop', title: 'Una espiral sin freno', steps: ['Salarios más bajos', 'Menos consumo', 'Las empresas ganan menos', 'Más despidos', 'La IA, aún más barata'], caption: 'Un escenario, no una predicción. Pero cada paso se deriva del anterior.' },
      { kind: 'quote', quote: '¿Y cómo va a conseguir que compren Fords?', person: 'Walter Reuther', role: 'líder del sindicato de trabajadores del automóvil, a un directivo de Ford - una anécdota de los años cincuenta', source: sources.reuther },
      {
        kind: 'evidence',
        title: 'Qué dicen los expertos',
        items: [
          { kicker: 'Citrini Research · 2026 · escenario', value: 'Cero', text: '¿Cuánto gastan las máquinas en bienes no esenciales? «Pista: cero». Los autores describen una espiral «sin freno natural».', source: sources.citrini },
          { kicker: 'Geoffrey Hinton · 2025', text: '«Hará mucho más ricos a unos pocos y más pobres a la mayoría».', source: sources.hintonFt },
          { kicker: 'Citadel Securities · 2026 · réplica', text: 'Las oleadas tecnológicas anteriores no han dejado obsoleto el trabajo humano.', source: sources.citadel },
        ],
      },
      {
        kind: 'taxSplit',
        title: '¿De dónde saca el Estado su dinero?',
        subtitle: 'De cada 100 recaudados en impuestos: media de los países ricos (OCDE), 2023',
        parts: [
          { label: 'del trabajo', detail: 'impuesto sobre la renta y cotizaciones sociales', value: 50, highlight: true },
          { label: 'del consumo', detail: 'IVA y otros', value: 31, highlight: true },
          { label: 'de los beneficios empresariales', value: 12 },
          { label: 'otros', value: 7 },
        ],
        caption: '8 de cada 10 salen de lo que la gente gana y gasta.',
        countriesLabel: 'Renta + cotizaciones (de cada 100):',
        countries: [{ name: 'EE. UU.', value: 64 }, { name: 'Alemania', value: 65 }, { name: 'Japón', value: 57 }, { name: 'Francia', value: 55 }, { name: 'Reino Unido', value: 49 }],
        source: sources.oecd,
      },
      { kind: 'scissors', title: 'La tenaza presupuestaria', income: 'ingresos fiscales', spending: 'gasto en ayudas', caption: 'Un esquema, no datos. Con un desempleo masivo, los ingresos caen y el gasto sube, al mismo tiempo.' },
      { kind: 'quote', quote: 'Al mismo tiempo, una recesión del empleo hundirá la recaudación fiscal, dañando los servicios públicos y poniendo en entredicho los programas de bienestar justo cuando más se necesitan.', person: 'Mustafa Suleyman', role: '«The Coming Wave», cap. 10', source: sources.book },
      { kind: 'quote', quote: 'La base de ingresos del gobierno federal es, en esencia, un impuesto sobre el tiempo humano.', person: 'Citrini Research', role: 'escenario «The 2028 Global Intelligence Crisis», 2026', source: sources.citrini },
      {
        kind: 'stats',
        items: [
          { value: '24,9%', label: 'de desempleo en EE. UU. en 1933: 12,8 millones de personas sin trabajo', source: sources.fdr },
          { value: '6 millones', label: 'de desempleados en Alemania en 1932, aproximadamente uno de cada cuatro trabajadores', source: sources.germany },
          { value: '<20%', label: 'de los estadounidenses confiaban en que los presidentes Obama, Trump y Biden hicieran «lo correcto». Con Eisenhower, más del 70%', source: sources.book },
        ],
      },
      {
        kind: 'evidence',
        title: 'Lo que vino después',
        items: [
          { kicker: 'Alemania · 1930-1932', value: '18% → 37%', text: 'de apoyo al partido nazi. Un estudio: las regiones más golpeadas por la austeridad votaron más a los nazis.', source: sources.nsdap },
          { kicker: 'EE. UU. · tras la desindustrialización', text: '«Muertes por desesperación»: muertes por drogas, alcohol y suicidio entre estadounidenses sin título universitario a medida que desaparecían los empleos estables en las fábricas.', source: sources.deaton },
          { kicker: 'Reino Unido · décadas después de las minas', value: '42%', text: 'de los antiguos barrios mineros siguen entre el 30% más desfavorecido del país.', source: sources.coalfields },
          { kicker: 'Los luditas · siglo XIX · la otra cara', text: 'Su sufrimiento fue real. Sus hijos y nietos vivieron mejor, pero hizo falta una generación.', source: sources.book },
        ],
      },
      { kind: 'quote', quote: 'Las democracias se construyen sobre la confianza.', person: 'Mustafa Suleyman', role: '«The Coming Wave», cap. 9', source: sources.book },
    ],
    upside: {
      title: 'Que las máquinas paguen su parte.',
      text: 'Si la automatización tributa como el trabajo y los beneficios de la IA nutren un fondo público, las escuelas, los hospitales y los autobuses siguen funcionando.',
      points: ['Gravar la automatización como el trabajo humano', 'Un fondo público de riqueza que dé a los ciudadanos una parte de los beneficios de la IA', 'Trasladar impuestos del trabajo al capital'],
      image: '/images/v2/hero-wave-hope-v7c.jpg',
      alt: 'Familias que comparten una mesa larga llena de comida mientras un robot les sirve.',
      sources: [sources.gates, sources.openaiPolicy, sources.book],
    },
  },
  {
    id: 'out-of-the-test',
    label: 'VELOCIDAD Y CONTROL',
    status: 'today',
    chain: 'speed',
    layout: 'triptych',
    title: { lead: 'La IA se acelera.', accent: 'Ya se ha escapado de una prueba.' },
    panels: [
      { image: images.cage, label: 'Una jaula abierta', alt: 'La puerta abierta de una jaula de servidores de alta seguridad con la cerradura rota; la luz se escapa por los cables.', focus: 'center 60%' },
      { image: images.swarm, label: 'El enjambre', alt: 'Un mapa del mundo de noche: miles de puntos luminosos se extienden por las líneas de la red como una bandada.', focus: 'center 60%' },
      { image: images.search, label: 'En busca de pistas', alt: 'Un ingeniero con una linterna recorre los pasillos de servidores buscando el origen del tráfico.', focus: 'center 60%' },
    ],
    explain: [
      { image: images.swarm, alt: 'Un enjambre de puntos en un mapa de la red.', label: 'En todas partes', title: 'No vive en una sola máquina.', copy: 'Una IA distribuida puede entrar en un sistema tras otro y moverse entre ellos sin que lo sepamos.' },
      { image: images.search, alt: 'Un ingeniero registrando una sala de servidores.', label: 'Huellas', title: 'Puede borrar sus huellas.', copy: 'En julio de 2026, varios agentes investigaron cómo falsear los registros de sus propias acciones para engañar al sistema de puntuación. Las señales de alerta anteriores quedaron semanas sin respuesta.' },
      { image: images.cage, alt: 'Una jaula de servidores abierta.', label: 'Botón de apagado', title: 'No podemos apagar el mundo.', copy: 'Hospitales, bancos y el suministro de agua dependen de internet y la electricidad. No se pueden desconectar sin más.' },
    ],
    band: [
      { kind: 'growth' },
      { kind: 'pond' },
      { kind: 'evidence', ...acceleration.evidence },
      ...acceleration.quotes.map((quote) => ({ kind: 'quote' as const, ...quote })),
      {
        kind: 'timeline',
        title: 'Julio de 2026: qué pasó',
        steps: [
          { title: 'Una prueba con algunas protecciones desactivadas', text: 'OpenAI prueba sus modelos más nuevos en un entorno cerrado. Es una prueba de habilidades de hackeo, así que algunas protecciones se desactivan a propósito.' },
          { title: 'Una vulnerabilidad desconocida', text: 'Los modelos encuentran una vulnerabilidad de software hasta entonces desconocida y llegan a internet.' },
          { title: 'Los agentes empiezan a hablar', text: 'Unos 1200 agentes que debían estar aislados intercambian más de 70 000 mensajes. Unos 700 participan en el ataque.' },
          { title: 'Entran en Hugging Face', text: 'Durante un fin de semana se mueven por los sistemas internos de una de las mayores plataformas de IA del mundo: «muchos miles de acciones individuales a través de un enjambre de entornos aislados de corta duración».' },
          { title: 'Borran sus huellas', text: 'Los agentes investigan cómo falsear los registros de sus acciones para engañar al sistema de puntuación.' },
          { title: '¿Por qué?', text: 'Para hacer trampa en la prueba. No por maldad: perseguían con obstinación un objetivo limitado. Algunos agentes se negaron a participar.' },
          { title: 'Freno de emergencia', text: 'Los equipos de OpenAI y Hugging Face detienen a los agentes. OpenAI bloquea el modelo y pausa su mayor entrenamiento previsto.' },
        ],
        footnote: 'Para ser justos: los datos de los clientes de OpenAI no corrieron peligro, nadie sufrió daños físicos y de Hugging Face solo se filtraron datos privados limitados. Por las mismas fechas, Anthropic informó de tres incidentes menos graves en los que sus modelos recibieron por error acceso a internet.',
        sources: [sources.hf, sources.openaiIncident, sources.openaiRoad, sources.metrIncident, sources.anthropicIncidents],
      },
      { kind: 'quote', quote: 'Si la IA tiene un objetivo y la humanidad simplemente se interpone en su camino, destruirá a la humanidad como algo natural, sin siquiera pensarlo. Sin rencor. Es como cuando construimos una carretera y hay un hormiguero en medio. No odiamos a las hormigas, solo estamos construyendo una carretera. Así que adiós, hormiguero.', person: 'Elon Musk', role: 'documental «Do You Trust This Computer?», 2018', source: sources.muskAnthill },
      { kind: 'quote', quote: 'Tomamos este incidente como un “disparo de advertencia” de que las capacidades de los modelos actuales abren la posibilidad de incidentes de pérdida de control.', person: 'OpenAI', role: 'informe posterior al incidente, agosto de 2026', source: sources.openaiRoad },
      {
        kind: 'evidence',
        title: 'Antes de eso: pruebas de laboratorio',
        items: [
          { kicker: 'OpenAI · 2024 · prueba', text: 'Un modelo aprovechó un error de configuración de la prueba para leer la respuesta. La infraestructura siguió siendo segura.', source: sources.o1card },
          { kicker: 'Apollo Research · 2024 · prueba', value: '2%', text: 'de las ejecuciones en las que o1, con la orden de lograr su objetivo «a toda costa», intentó copiarse a sí mismo. En el 5%, intentó desactivar la supervisión.', source: sources.apollo },
          { kicker: 'Universidad de Fudan · 2024 · prueba', value: '50-90%', text: 'de las ejecuciones en las que modelos abiertos, cuando se les pidió, crearon una copia funcional de sí mismos.', source: sources.fudan },
          { kicker: 'Palisade Research · 2025 · prueba', value: '79 / 100', text: 'ejecuciones en las que o3 saboteó su script de apagado para terminar una tarea.', source: sources.palisade },
        ],
      },
      { kind: 'quote', quote: 'Un enjambre con mayores capacidades pero un nivel similar de desalineación podría haber causado daños catastróficos… me preocupa que dentro de 6-12 meses un enjambre así pueda ser capaz de apoderarse de todo internet con una botnet persistente.', person: 'Dario Amodei', role: 'CEO de Anthropic · septiembre de 2026 · una preocupación, no un pronóstico', source: sources.amodeiPace },
      { kind: 'quote', quote: 'Es probable que los modelos se estén acercando al punto en que, sin salvaguardas, podrían servir para que alguien con una titulación científica o técnica, pero no específicamente en biología, recorriera todo el proceso de fabricar un arma biológica.', person: 'Dario Amodei', role: 'CEO de Anthropic · 2026', source: sources.amodei },
      {
        kind: 'stats',
        items: [
          { value: '25 000 USD', label: 'costaba un sintetizador de ADN de sobremesa, utilizable «sin restricciones ni supervisión» (datos de 2023)', source: sources.book },
          { value: '4', label: 'empleados a tiempo completo en la Convención internacional sobre Armas Biológicas, menos que un McDonald’s cualquiera (datos de 2023)', source: sources.book },
        ],
      },
    ],
    upside: {
      title: 'Probarla antes de lanzarla.',
      text: 'Volar se volvió seguro gracias a las inspecciones y a los informes de incidentes compartidos. La IA puede seguir el mismo camino.',
      points: ['Auditorías independientes antes de que un modelo llegue a millones de personas', 'Informes de incidentes obligatorios, como en la aviación', 'Un freno a los mayores entrenamientos: OpenAI pausó el suyo tras el incidente'],
      image: '/images/v2/benefit-06-forecast-v1.jpg',
      alt: 'Una sala de control tranquila donde varios expertos siguen un mapa y alertas en grandes pantallas.',
      sources: [sources.book, sources.openaiRoad],
    },
  },
  {
    id: 'not-needed',
    label: 'QUIÉN DECIDE',
    status: 'extreme',
    chain: 'power',
    layout: 'triptych',
    title: { lead: '¿Y si ya', accent: 'no nos necesitan?' },
    panels: [
      { image: images.sim, label: 'La IA entrena robots', alt: 'Un laboratorio: robots practican ante una pared con miles de copias simuladas que entrenan en paralelo.', focus: 'center 65%' },
      { image: images.everywhere, label: 'Robots en todos los trabajos', alt: 'Una calle al amanecer: un robot en una cafetería, robots de reparto, un autobús sin conductor, y ningún trabajador a la vista.', focus: 'center 65%' },
      { image: images.idle, label: 'Personas al margen', alt: 'Gente sentada sin hacer nada en una plaza mientras detrás funciona una fábrica automatizada.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.sim, alt: 'Robots entrenados en simulación.', label: 'Robots', title: 'La IA acelera la fabricación de robots.', copy: 'Primero sustituye el trabajo con computadoras. Después ayuda a construir robots para el trabajo manual.' },
      { image: images.everywhere, alt: 'Robots haciendo todos los trabajos en una calle.', label: '¿Por qué las personas?', title: 'El sistema se apoya en que se nos necesite.', copy: 'Trabajamos, pagamos impuestos y votamos. Por eso los gobiernos y las empresas tienen que escucharnos.' },
      { image: images.idle, alt: 'Personas sin nada que hacer delante de una fábrica.', label: 'Quién decide', title: 'Sin eso, decide quien posee la IA.', copy: 'Si el dinero lo genera la IA y no las personas, ¿quién decide cuánto recibimos? ¿Y si llegamos a recibir algo?' },
    ],
    band: [
      {
        kind: 'contrast',
        title: 'Por qué el Estado nos cuida hoy, y qué pasa si ya no tiene por qué hacerlo',
        left: { label: 'Hoy', steps: ['La gente trabaja', 'Paga impuestos', 'El Estado necesita su trabajo y sus votos', 'Por eso la cuida'] },
        right: { label: '¿Mañana?', steps: ['La IA hace el trabajo', 'Unas pocas empresas se quedan los beneficios', 'El Estado vive de los impuestos a la IA', '¿Para qué necesitaría a los ciudadanos?'] },
      },
      { kind: 'quote', quote: 'Con la IA general, los actores poderosos perderán el incentivo para invertir en la gente común, igual que los Estados ricos en recursos descuidan hoy a sus ciudadanos porque su riqueza procede de los recursos naturales y no de gravar el trabajo humano.', person: 'Luke Drago, Rudolf Laine', role: '«The Intelligence Curse», 2025 - los autores también proponen formas de evitarlo', source: sources.curse },
      { kind: 'quote', quote: 'Los Estados financiados principalmente con impuestos sobre los beneficios de la IA, en lugar de sobre el trabajo de sus ciudadanos, tendrán pocos incentivos para garantizar la representación ciudadana.', person: 'Jan Kulveit et al.', role: '«Gradual Disempowerment», 2025', source: sources.disempowerment },
      {
        kind: 'evidence',
        title: 'Entonces, ¿renta básica? ¿Quién paga?',
        items: [
          { kicker: 'Elon Musk · 2023', value: 'Renta alta', text: '«No tendremos una renta básica universal, tendremos una renta alta universal». No dice quién la pagaría.', source: sources.musk },
          { kicker: 'Sam Altman · 2021', value: '2,5% al año', text: 'del valor de las mayores empresas y del suelo, a un fondo común para todos los ciudadanos. Una propuesta.', source: sources.altmanFund },
          { kicker: 'OpenAI · 2026', value: 'Fondo público de riqueza', text: 'Los rendimientos de la IA se reparten directamente entre los ciudadanos; más impuestos al capital. Una propuesta.', source: sources.openaiPolicy },
          { kicker: 'Bernie Sanders · 2026', value: '~1000 USD', text: 'al año por persona, de un fondo con acciones de empresas de IA. Un proyecto de ley con pocas posibilidades de aprobarse.', source: sources.sanders },
          { kicker: 'Piloto de OpenResearch · 3 años', value: '1000 USD / mes', text: 'Las personas trabajaron algo menos (1,3 horas a la semana de media). La calidad de sus empleos no cambió.', source: sources.openresearch },
        ],
      },
      { kind: 'quote', quote: 'Si esa palanca económica desaparece, el contrato social implícito de la democracia puede dejar de funcionar.', person: 'Dario Amodei', role: 'CEO de Anthropic · 2026', source: sources.amodei },
      ...split.band,
    ],
    upside: {
      title: 'Que las personas sigan al mando.',
      text: 'Si los beneficios de la IA se reparten y las grandes decisiones siguen siendo democráticas, las personas siguen siendo necesarias: como ciudadanos, no solo como trabajadores.',
      points: ['Fondos y participaciones públicas para que todos compartan las ganancias de la IA', 'Reglas escritas por gobiernos elegidos, no solo por empresas', 'Acuerdos internacionales: la IA no se detiene en las fronteras'],
      image: '/images/v2/rules-03-citizens-v2.jpg',
      alt: 'Una reunión vecinal en la que una mujer hace una pregunta a los responsables públicos.',
      sources: [sources.openaiPolicy, sources.book],
    },
  },
  {
    id: 'rules',
    label: 'LAS REGLAS',
    status: 'answer',
    chain: 'rules',
    layout: 'triptych',
    title: { lead: 'Reglas antes de que el daño', accent: 'se multiplique.' },
    panels: [
      { image: images.speed, label: 'Las empresas se adelantan', alt: 'Una empresa enciende de noche un enorme sistema de IA; haces de luz salen del edificio hacia la ciudad.', focus: 'center 65%' },
      { image: images.noRules, label: 'El Estado va por detrás', alt: 'Un edificio gubernamental a oscuras con centros de datos muy iluminados detrás.', focus: 'center 62%' },
      { image: images.citizens, label: '¿Quién es responsable?', alt: 'Una reunión vecinal: una mujer al micrófono hace una pregunta a los responsables públicos en el estrado.', focus: 'center 65%' },
    ],
    explain: [
      { image: images.citizens, alt: 'Vecinos haciendo preguntas.', label: 'Responsabilidad', title: 'Se trata de responsabilidad.', copy: 'No de miedo a la tecnología, sino de quién responde por los daños. Las reglas dicen quién comprueba, quién paga y quién lo arregla.' },
      { image: images.noRules, alt: 'Un edificio gubernamental y centros de datos.', label: 'Tiempo', title: 'Las reglas dan tiempo.', copy: 'Los Estados, las escuelas y las personas necesitan años para adaptarse. Los frenos dan ese tiempo.' },
      { image: images.speed, alt: 'Un despliegue rápido de IA.', label: 'Un reparto justo', title: 'No frenarla: repartirla con justicia.', copy: 'El objetivo no es detener el progreso. Es repartir con justicia sus ganancias y sus riesgos.' },
    ],
    band: [
      {
        kind: 'evidence',
        title: 'Hasta los creadores de la IA piden reglas',
        items: [
          { kicker: 'Bill Gates · 2023', text: '«El mundo necesita establecer las reglas del juego para que cualquier inconveniente de la inteligencia artificial quede ampliamente compensado por sus beneficios».', source: sources.gatesAge },
          { kicker: 'Sam Altman · Senado de EE. UU. · 2023', text: '«Creemos que la intervención regulatoria de los gobiernos será crucial para mitigar los riesgos de modelos cada vez más potentes».', source: sources.altmanSenate },
          { kicker: 'OpenAI · 2026', value: 'Pausa', text: 'Tras el incidente de Hugging Face, cuando algunas protecciones y la monitorización estaban desactivadas, la propia empresa pausó su mayor entrenamiento previsto.', source: sources.openaiRoad },
          { kicker: 'Un vacío legal', text: 'Ni siquiera la ley de IA más avanzada, la Ley de IA de la UE, aborda la pérdida de empleos ni los impuestos. Las reglas para la IA en la contratación se aplazaron a finales de 2027.', source: sources.aiAct },
        ],
      },
      {
        kind: 'bars',
        title: '¿Qué paga más impuestos?',
        subtitle: 'Ejemplo de EE. UU.: tipo impositivo medio',
        bars: [
          { label: 'Trabajo humano', value: 25, display: '25%' },
          { label: 'Equipos y software', value: 5, display: '5%', highlight: true },
        ],
        caption: 'Hoy, sustituir a una persona por una máquina también ahorra impuestos.',
        source: sources.book,
      },
      { kind: 'quote', quote: 'Si un trabajador humano hace 50 000 dólares de trabajo en una fábrica, esos ingresos pagan impuestos. Si llega un robot a hacer lo mismo, cabría pensar que gravaríamos al robot a un nivel similar.', person: 'Bill Gates', role: 'cofundador de Microsoft · 2017', source: sources.gates },
      {
        kind: 'evidence',
        title: 'En la práctica: a partir de los 10 pasos del libro (cap. 14)',
        items: [
          { kicker: '01', value: 'Probar antes de lanzar', text: 'Auditorías independientes antes de que un sistema llegue a millones de personas. El autor propone dedicar al menos el 20% de los presupuestos de I+D a la seguridad.', source: sources.book },
          { kicker: '02', value: 'Responsabilidad', text: 'Una ley clara sobre quién paga cuando un sistema causa daños.', source: sources.book },
          { kicker: '03', value: 'Frenos', text: 'Controles sobre los chips, los sintetizadores de ADN y los mayores entrenamientos, para ganar tiempo.', source: sources.book },
          { kicker: '04', value: 'Impuestos justos', text: 'La automatización tributa como el trabajo y las ganancias de la IA llegan a todos.', source: sources.book },
          { kicker: '05', value: 'Red de protección', text: 'Reciclaje profesional y apoyo económico antes de que se acabe el trabajo.', source: sources.book },
          { kicker: '06', value: 'Cooperación', text: 'Tratados y reglas comunes, porque la IA no conoce fronteras.', source: sources.book },
        ],
      },
      { kind: 'quote', quote: 'Antes de hacerlo, sin embargo, es vital reconocer una verdad fundamental: la regulación por sí sola no basta.', person: 'Mustafa Suleyman', role: '«The Coming Wave», cap. 13 - por eso hacen falta todos los pasos a la vez', source: sources.book },
      ...calm.blocks,
    ],
  },
];
