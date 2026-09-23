// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const USUARIO = 'carlospra';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PMDM',
  tagline: 'Programación multimedia y dispositivos móviles · 2º DAM · IES Villaverde',
  favicon: 'img/favicon.ico',

  url: `https://${USUARIO}.github.io`,
  baseUrl: '/pmdm-2627-ies-villaverde/',
  organizationName: USUARIO,
  projectName: 'pmdm-2627-ies-villaverde',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: { format: 'detect' },

  i18n: { defaultLocale: 'es', locales: ['es'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Fecha de la última modificación al pie de cada página.
          // La saca de los commits, así que no hay que mantenerla a mano.
          // Necesita fetch-depth: 0 en .github/workflows/deploy.yml.
          showLastUpdateTime: true,
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PMDM',
        items: [
          { to: '/', label: 'Inicio', position: 'left', activeBaseRegex: '^/pmdm-2627-ies-villaverde/?$' },
          { to: '/android', label: 'Android', position: 'left' },
          { to: '/videojuegos', label: 'Videojuegos', position: 'left' },
          { href: 'https://aulavirtual32.educa.madrid.org/ies.villaverde.madrid/', label: 'Aula virtual', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        copyright:
          'Curso 2026-2027 · IES Villaverde · Carlos Fernández Pradales. ' +
          'Basado en los codelabs de Android Developers (CC BY 4.0).',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'csharp', 'bash'],
      },
    }),
};

export default config;
