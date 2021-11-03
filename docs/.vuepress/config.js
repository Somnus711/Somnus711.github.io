const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题

  title: "Haoyuan's blog",
  description: 'Haoyuan的个人技术博客，借助于vdoing搭建的个人知识库，主要是平时的学习积累与总结，主要内容围绕web全栈技术、算法以及技术文档展开。',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}
