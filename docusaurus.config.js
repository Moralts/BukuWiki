// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BukuWiki',
  tagline: 'Minecraft玩家们的终极游玩指南',
  favicon: 'img/favicon.ico',

  future: {
      v4: true,
      experimental_faster: {
          rspackBundler: true, // required flag
          rspackPersistentCache: true, // new flag
      },
  },

  // Set the production url of your site here
  url: 'https://docs.buku.wiki',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',
  
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  scripts: [
    {
      src: 'https://docs.buku.wiki/js/script.js',
      async: true,
    }
  ],

  plugins: [
      'docusaurus-plugin-image-zoom',
      [
        '@docusaurus/plugin-content-docs',
        {
            id: 'docs-pc',
            path: 'docs-pc',
            routeBasePath: 'PC',
            editUrl: 'https://github.com/Moralts/BukuWiki/tree/main/',
            sidebarPath: './sidebars.js',
            editCurrentVersion: true,
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
        }],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'docs-android',
                path: 'docs-android',
                routeBasePath: 'Android',
                editUrl: 'https://github.com/Moralts/BukuWiki/tree/main/',
                sidebarPath: require.resolve('./sidebars.js'),
                editCurrentVersion: true,
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: 'https://github.com/Moralts/BukuWiki/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  headTags: [],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    // 插件配置文件
    ({
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(36 36 36 / 80%)',
          },
      },
      // 原生配置文件
      image: 'img/docusaurus-social-card.jpg',
      announcementBar: {
        id: 'beta',
        content:
          '🚧 文档仍然有许多的内容尚未补全，我们正在持续补充内容，你可以在 <a href="https://github.com/Moralts/BukuWiki/">Github</a> 上一起编写 🚧',
        backgroundColor: '#f8d75a',
        textColor: '#091E42',
        isCloseable: false,
      },
      algolia: {
        appId: 'EK86IMAOMJ',
        apiKey: '80e060bceeb14c15260c72a7f2cec366',
        indexName: 'buku',
        contextualSearch: true,
      },
      navbar: {
        title: 'BukuWiki',
        logo: {
          alt: 'BukuWiki Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '通用',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'PC',
            docsPluginId: 'docs-pc'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '安卓',
            docsPluginId: 'docs-android'
          },
          {
            href: 'https://github.com/Moralts/BukuWiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '通用',
                to: '/intro',
              },
              {
                label: 'PC',
                to: '/PC/intro',
              },
              {
                label: '安卓',
                to: '/android/intro',
              },
              {
                label: '贡献者条约',
                to: '/contributor-conventions',
              },
              {
                label: '许可声明',
                to: '/LICENSE'
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'QQ Group',
                href: 'https://qm.qq.com/q/lbNpVgNxza',
              },
              {
                label: '编写条例',
                to: '/write-specifications'
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '本项目 GitHub 仓库',
                href: 'https://github.com/Moralts/BukuWiki',
              },
              {
                html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
                </a>
              `,
              },
              {
                html: `<a href="https://ipw.cn/ssl/?site=docs.buku.wiki" title="本站支持SSL安全访问" target='_blank'><img style='display:inline-block;vertical-align:middle' alt="本站支持SSL安全访问" src="https://static.ipw.cn/icon/ssl-s1.svg"></a><a href="https://ipw.cn/ipv6webcheck/?site=docs.buku.wiki" title="本站支持IPv6访问" target='_blank'><img style='display:inline-block;vertical-align:middle' alt="本站支持IPv6访问" src="https://static.ipw.cn/icon/ipv6-s1.svg"></a>`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <b>by BukuTeam And Github Contributors</b>. <a href="/LICENSE">LICENSE</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
