import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/redisfx-docs/',
  title: "RedisFX",
  description: "A RedisFX Guide",
  head: [
    ['link', { rel: 'icon', href: '/redisfx-docs/svg/fx_icon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/redisfx-docs/png/fx_icon_256.png', type: 'image/png' }]
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
      link: '/zh',
      themeConfig: {
        logo: '/svg/fx_icon.svg',
        logoLink: "https://tanhuang2016.github.io/redisfx-docs/",
        nav: [
          { text: '主页', link: '/' },
          { text: '示例', link: '/markdown-examples' }
        ],

        sidebar: [
          {
            text: '示例',
            items: [
              { text: 'Markdown 示例', link: '/markdown-examples' },
              { text: '运行时 API 示例', link: '/api-examples' }
            ]
          }
        ],

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
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tanhuang2016/RedisFX' }
    ]
  }
})
