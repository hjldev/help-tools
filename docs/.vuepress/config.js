module.exports = {
  lang: "zh-CN",
  title: "常用工具总结",
  description: "总结一些常用的功能，java、mysql等用法",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://avatars.githubusercontent.com/u/43716716?s=200&v=4",
      },
    ],
  ],
  base: "/",
  themeConfig: {
    repo: "help-tools",
    logo: "https://avatars.githubusercontent.com/u/43716716?s=200&v=4",
    open: true,
    contributorsText: "贡献者",
    docsDir: "docs",
    editLinkText: "编辑",
    lastUpdatedText: "最近更新时间",
    locales: {
      "/": {
        tip: "说明",
        warning: "注意",
        danger: "警告",
      },
    },
    sidebar: [
      {
        text: "指南",
        children: [
          
        ],
      },
    ],
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        isSearchable: (page) => page.path !== "/",
      },
    ],
  ],
};
