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
