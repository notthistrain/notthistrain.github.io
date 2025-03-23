import { getThemeConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({
  // 页脚
  footer: {
    message: '个人博客',
  },

  // 主题色修改
  themeColor: 'el-blue',

  // 文章默认作者
  author: 'ella',

  // 友链
  friend: [
    {
      nickname: '粥里有勺糖',
      des: '你的指尖用于改变世界的力量',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://sugarat.top',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar: 'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/',
    },
  ],
})

export { blogTheme }
