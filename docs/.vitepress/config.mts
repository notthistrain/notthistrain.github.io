import { defineConfig } from 'vitepress'

import { blogTheme } from './blog-theme'

export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  lang: 'zh-cn',
  title: "Ella's blog",
  description: 'ella个人博客网站',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    outline: {
      level: [2, 3],
      label: '目录',
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于作者', link: '#' },
      {
        text: '数据分析',
        link: '/stata/index',
      },
      {
        text: '笔记',
        link: '/notes/index',
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ella-xiaoguo',
      },
      {
        icon: 'github',
        link: 'https://github.com/notthistrain',
      },
    ],
  },
})
