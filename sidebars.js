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
            {
              type: 'category',
              label: 'Sección 1 · Los dispositivos y las tecnologías',
              collapsed: false,
              items: [
                'android/ut1/1-1-dispositivos-moviles',
                'android/ut1/1-2-hardware-y-limitaciones',
                'android/ut1/1-3-seguridad',
                'android/ut1/1-4-tecnologias-de-desarrollo',
                'android/ut1/1-5-entornos-y-lenguajes',
                'android/ut1/1-6-emuladores-configuraciones-perfiles',
              ],
            },
            {
              type: 'category',
              label: 'Sección 2 · La aplicación',
              collapsed: false,
              items: [
                'android/ut1/2-1-estructura-y-clases',
                'android/ut1/2-2-modelo-de-estados',
                'android/ut1/2-3-ciclo-de-vida',
                'android/ut1/2-4-modificar-aplicaciones',
                'android/ut1/2-5-errores-frecuentes',
              ],
            },
            'android/ut1/ampliacion-fabricantes',
            'android/ut1/mini-proyecto',
            'android/ut1/bibliografia',
          ],
        },
        {
          type: 'category',
          label: 'UT2 · Compose: diseño, botones y estado',
          link: { type: 'doc', id: 'android/ut2' },
          items: [
            'android/ut2/primera-app',
            'android/ut2/piezas-app-compose',
            'android/ut2/kotlin-para-android',
            'android/ut2/practica-kotlin',
            'android/ut2/texto-imagenes-recursos',
            'android/ut2/practica-tarjeta',
            'android/ut2/layouts',
            'android/ut2/practica-layouts',
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
