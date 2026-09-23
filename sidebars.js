// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  curso: [
    'intro',
    {
      type: 'category',
      label: 'Android',
      link: { type: 'doc', id: 'android/indice' },
      items: [
        {
          type: 'category',
          label: 'UT1 · Tecnologías para dispositivos móviles',
          link: { type: 'doc', id: 'android/ut1/indice' },
          items: [
            'android/ut1/puesta-a-punto',
            'android/ut1/cuaderno-instalacion',
            'android/ut1/practicas',
            'android/ut1/dispositivos-moviles',
            'android/ut1/tecnologias-y-plataformas',
            'android/ut1/dentro-de-android',
            'android/ut1/versiones-y-fragmentacion',
            'android/ut1/estructura-y-ciclo-de-vida',
            'android/ut1/fabricantes-y-custom-roms',
            'android/ut1/bibliografia',
          ],
        },
        {
          type: 'category',
          label: 'UT2 · Compose: diseño, botones y estado',
          link: { type: 'doc', id: 'android/ut2' },
          // Ojo: estos cuatro ficheros siguen físicamente en docs/android/ut1/,
          // pero su slug y su sitio en el menú son ya de la UT2.
          items: [
            'android/ut1/primera-app',
            'android/ut1/piezas-app-compose',
            'android/ut1/kotlin',
            'android/ut1/ejercicios',
          ],
        },
        'android/ut3',
        'android/ut4',
        'android/ut5',
      ],
    },
    {
      type: 'category',
      label: 'Videojuegos',
      link: { type: 'doc', id: 'videojuegos/indice' },
      items: ['videojuegos/ut6', 'videojuegos/ut7'],
    },
  ],
};

export default sidebars;
