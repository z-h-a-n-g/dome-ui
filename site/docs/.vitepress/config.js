

export default {
  title: "Asen-ui",
  description: "程序员阿森的一次自己搭建组件库的初体验",
  base: process.env.NODE_ENV === 'production' ? '/asen-ui/' : '/',
  themeConfig: {
    siteTitle: "Asen-ui",
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "组件", link: "/components/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/z-h-a-n-g/dome-ui.git" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guide/installation",
            },
            {
              text: "快速开始",
              link: "/guide/quickstart",
            },
          ],
        }      
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
  }
};
