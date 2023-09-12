export default {
  title: "asen-ui",
  description: "程序员阿森的一次自己搭建组件库的初体验",
  base: process.env.NODE_ENV === 'production' ? '/asen-ui/' : '/',
  themeConfig: {
    siteTitle: "vitepress",
    nav: [
      { text: "指南", link: "/guild/" },
      { text: "组件", link: "/components/button/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/z-h-a-n-g/dome-ui.git" },
    ],
  },
  sidebar: {
    "/guild/": [
      {
        text: "基础",
        items: [
          {
            text: "安装",
            link: "/guild/installation",
          },
          {
            text: "快速开始",
            link: "/guild/quickstart",
          },
        ],
      },
      {
        text: "进阶",
        items: [
          {
            text: "xx",
            link: "/xx",
          },
        ],
      },
    ],
    "/components/": [
      {
        text: "基础组件",
        items: [
          {
            text: "Button",
            link: "/components/button",
          }
        ],
      }
    ]
  }
};
