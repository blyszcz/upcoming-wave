export const site = {
  // Page titles, descriptions and link-preview text (used by src/app metadata).
  meta: {
    siteName: 'Upcoming Wave',
    home: {
      title: '¿Quién paga las escuelas cuando la IA hace el trabajo?',
      description: 'Una guía visual de 5 minutos basada en «The Coming Wave»: lo que la IA podría arreglar, qué empleos e impuestos podría borrar, la prueba de julio de 2026 que se escapó y las reglas que deciden qué futuro tendremos. Cada dato tiene su fuente.',
    },
    sources: {
      title: 'Fuentes y método - Upcoming Wave',
      description: 'Todas las fuentes de las cifras y citas de Upcoming Wave, y cómo las compruebo.',
    },
    card: { lead: '¿Quién paga las escuelas', accent: 'cuando la IA hace el trabajo?' },
    ogAlt: '¿Quién paga las escuelas cuando la IA hace el trabajo? La misma ola, dos futuros: oscura sobre una ciudad, dorada sobre un parque.',
  },
  sourcesPage: {
    title: 'Fuentes y método',
    lead: 'Cada cifra y cada cita de la página tiene su nota. Aquí está la lista completa, en orden de aparición.',
    methodTitle: 'Cómo trabajo',
    method: [
      'Cada dato tiene una fuente. Compruebo las citas en la fuente original; cuando no es accesible, me baso en medios fiables que las recogen.',
      'Las etiquetas de cada sección dicen qué es cada cosa: «hoy» - ya está pasando; «historia» - ya ocurrió antes; «incidente» - un hecho real; «posible» y «escenario extremo» - riesgos, no predicciones.',
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
    why: { title: '¿Por qué esta página?', text: 'Hablo mucho de IA con la gente y siempre veo lo mismo: no faltan opiniones, falta contexto - entender qué está realmente en juego. Así que decidí hacer algo al respecto y explicarlo de forma sencilla, con imágenes. Cada dato enlaza a su fuente.' },
    sources: 'Cada dato enlaza a su fuente. Los escenarios son riesgos, no predicciones.',
    independence: 'Independiente: sin vínculo con los autores ni la editorial de «The Coming Wave».',
    author: { label: 'Hecho por', handle: '@blyzbyte', url: 'https://x.com/blyzbyte', with: '' },
  },
};
