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
          label: 'UT1 · Entorno, Kotlin y primera app',
          link: { type: 'doc', id: 'android/ut1/indice' },
          items: [
            'android/ut1/puesta-a-punto',
            'android/ut1/dispositivos-moviles',
            'android/ut1/piezas-app-compose',
            'android/ut1/primera-app',
            'android/ut1/kotlin',
            'android/ut1/ejercicios',
          ],
        },
        'android/ut2',
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
