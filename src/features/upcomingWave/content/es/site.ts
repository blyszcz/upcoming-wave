export const site = {
  // Page titles, descriptions and link-preview text (used by src/app metadata).
  meta: {
    siteName: 'Upcoming Wave',
    home: {
      title: 'La IA cambiará tu trabajo. ¿Quién decide cómo?',
      description: 'Una guía visual de 5 minutos: qué podría arreglar la IA, qué podría hacer con el empleo y los presupuestos públicos, y qué reglas decidirán qué futuro tendremos.',
    },
    sources: {
      title: 'Fuentes y método - Upcoming Wave',
      description: 'Todas las fuentes de las cifras y citas de Upcoming Wave, y cómo las compruebo.',
    },
    card: { lead: 'La IA cambiará tu trabajo.', accent: '¿Quién decide cómo?' },
    ogAlt: 'La IA cambiará tu trabajo. ¿Quién decide cómo? Dos futuros: una oficina vaciada por la automatización y una familia con tiempo libre mientras un robot hace las tareas.',
  },
  sourcesPage: {
    title: 'Fuentes y método',
    lead: 'Cada cifra y cada cita de la página tiene su nota. Aquí está la lista completa, en orden de aparición.',
    methodTitle: 'Cómo trabajo',
    method: [
      'Cada dato tiene una fuente. Compruebo las citas en la fuente original; cuando no es accesible, me baso en medios fiables que las recogen.',
      'Las etiquetas de cada sección dicen qué es cada cosa: «hoy» - ya está pasando; «escenario posible» y «escenario extremo» - riesgos, no predicciones; «un camino» - soluciones propuestas.',
      'Las pruebas de laboratorio se señalan como pruebas y nunca se mezclan con incidentes reales.',
      'Las citas de «The Coming Wave» son traducción propia de la edición en inglés (Crown, 2023). Las demás citas están traducidas de su idioma original.',
      'También muestro la otra cara: los beneficios de la IA y los argumentos de que los riesgos podrían estar exagerados.',
    ],
    listTitle: 'Todas las fuentes',
    updated: 'Última actualización: septiembre de 2026.',
    correction: '¿Has visto un error? Avísame en X:',
    correctionAlt: 'o abre un issue en GitHub',
    back: '← Volver a la página',
    noLink: 'libro - sin enlace',
  },
  footer: {
    sourcesLink: 'Fuentes y método',
    code: { label: 'GitHub', issue: 'Informar de un error' },
    why: { title: '¿Por qué esta página?', text: 'Hablo mucho de IA con la gente y siempre veo lo mismo: no faltan opiniones, falta contexto - entender qué está realmente en juego. Así que decidí hacer algo al respecto y explicarlo de forma sencilla, con imágenes.' },
    sources: 'Cada dato enlaza a su fuente. Los escenarios son riesgos, no predicciones.',
    independence: 'Proyecto independiente y sin ánimo de lucro, sin vínculo con ninguna empresa de IA, autor ni editorial.',
    author: { label: 'Hecho por', handle: '@blyzbyte', url: 'https://x.com/blyzbyte', with: '' },
  },
};
