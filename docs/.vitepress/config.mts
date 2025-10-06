import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: '/redisfx-docs/',
  title: "RedisFX",
  description: "A RedisFX Guide",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/svg/fx_icon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/png/fx_icon_256.png', type: 'image/png' }]
    // 如果用 svg 或 png，可以改为 '/favicon.svg' 或 '/favicon.png'
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        logo: '/svg/fx_icon.svg',
        logoLink: "https://tanhuang2016.github.io/redisfx-docs/",
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '使用指南', link: '/zh/introduction' }
        ],

        sidebar: [
          {
            text: '使用指南',
            collapsed: false,
            items: [
              { text: '什么是 RedisFX？', link: '/zh/introduction' },
              { text: '如何安装', link: '/zh/install' },
              { text: '使用说明', link: '/zh/user-manual' },
              { text: '扩展功能', link: '/zh/extensions' },
              { text: '设置', link: '/zh/settings' }
            ]
          },
           {
            text: '开发和构建',
            collapsed: false,
            items: [
              { text: '开发', link: '/zh/dev' },
              { text: '构建', link: '/zh/build' }
            ]
          },
          {
            text: '贡献指南',
            link: '/zh/contribution',
            
          },
          
        ],
        footer: {
          message: '基于 Apache Licence 2.0 许可发布',
          copyright: '版权所有 © 2023-至今 RedisFX所有贡献者'
        },

        docFooter: {
          prev: '上一页',
          next: '下一页'
        },

        outline: {
          label: '页面导航'
        },
        lastUpdated: {
          text: '最后更新于'
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/tanhuang2016/RedisFX' }
        ]
      }
    }
  },
  themeConfig: {
    logo: '/svg/fx_icon.svg',
    logoLink: "https://tanhuang2016.github.io/redisfx-docs/",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/introduction' }
    ],

    sidebar: [
      {
        text: 'Guide',
        collapsed: false,
        items: [
          { text: 'What is RedisFX?', link: '/introduction' },
          { text: 'Install', link: '/install' },
          { text: 'User Manual', link: '/user-manual' },
          { text: '扩展功能', link: '/extensions' },
          { text: '设置', link: '/settings' }

        ]
      },
      {
        text: '开发和构建',
        collapsed: false,
        items: [
          { text: '开发', link: '/dev' },
          { text: '构建', link: '/build' }
        ]
      },
      {
        text: '贡献指南',
        link: '/contribution',

      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tanhuang2016/RedisFX' }
    ]
  }
})
