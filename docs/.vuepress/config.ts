import { defineConfig4CustomTheme } from "vuepress/config";

import plugins from "./config/plugins";
import head from "./config/head";
import themeConfig from "./config/themeConfig";
import { penName, title } from "./common/info";

export default defineConfig4CustomTheme({
  theme: "vdoing", // 使用npm包主题
  // 如果使用 locales 的 title 和 description，则下方的 title 和 description 失效
  // title: penName + title,
  // description: 'Young Kbt个人博客, VuePress搭建, 使用了 Vdoing 主题, 学习Java, Web, 框架, 微服务, 工具, 前端等相关知识, 记录生活和技术路程, 同时分享编程技巧。',
  // lang: 'zh-CN',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 显示代码块的行号
    extractHeaders: ["h2", "h3", "h4"], // 支持 h2、h3、h4 标题
  },
  // 多语言支持
  locales: {
    "/": {
      lang: "zh-CN",
      title: penName + "'s " + title,
      description:
        "Somnus Haoyuan个人博客, VuePress搭建, 使用了 Vdoing 主题, 学习Java, AI大模型等相关知识, 记录生活和技术路程, 同时分享编程技巧。",
    },
  },
  // 监听文件变化并重新构建
  extraWatchFiles: [".vuepress/config.ts"],

  themeConfig,

  head,

  plugins,
});
