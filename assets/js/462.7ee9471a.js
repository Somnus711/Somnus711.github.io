(window.webpackJsonp=window.webpackJsonp||[]).push([[462],{841:function(s,t,a){"use strict";a.r(t);var e=a(5),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#介绍"}},[s._v("介绍")])]),t("li",[t("a",{attrs:{href:"#删除部分配置"}},[s._v("删除部分配置")])]),t("li",[t("a",{attrs:{href:"#全局替换-匹配大小写"}},[s._v("全局替换（匹配大小写）")])]),t("li",[t("a",{attrs:{href:"#全局替换-匹配大小写-全词匹配"}},[s._v("全局替换（匹配大小写 & 全词匹配）")])]),t("li",[t("a",{attrs:{href:"#文件夹命名"}},[s._v("文件夹命名")])]),t("li",[t("a",{attrs:{href:"#图片命名"}},[s._v("图片命名")])]),t("li",[t("a",{attrs:{href:"#最后执行"}},[s._v("最后执行")]),t("ul",[t("li",[t("a",{attrs:{href:"#全局替换-匹配大小写"}},[s._v("全局替换（匹配大小写）")])]),t("li",[t("a",{attrs:{href:"#局部修改"}},[s._v("局部修改")])])])]),t("li",[t("a",{attrs:{href:"#安装"}},[s._v("安装")])]),t("li",[t("a",{attrs:{href:"#可选"}},[s._v("可选")])]),t("li",[t("a",{attrs:{href:"#解决构建问题"}},[s._v("解决构建问题")])]),t("li",[t("a",{attrs:{href:"#本地文档编译启动"}},[s._v("本地文档编译启动")])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("p",[s._v("本内容介绍如何基于 Element Plus 源码进行封装为自己的 UI 名。当发布 NPM 后，通过 "),t("code",[s._v("npm install xx")]),s._v(" 下封装后的 UI 名。")]),s._v(" "),t("blockquote",[t("p",[s._v("如果需要对 EP（Element Plus）进行封装，基于 EP 二次拓展自己的组件，可以参考本文档。")])]),s._v(" "),t("p",[s._v("建议使用 VS Code，只需要按照大纲顺序执行全局替换或者增改删一些内容即可得到一个和 EP 一样的功能，但是 UI 项目名是个人的 UI 库。")]),s._v(" "),t("p",[s._v("假设我的项目名字是 "),t("code",[s._v("kbt-ui")]),s._v("、组件前缀为 "),t("code",[s._v("k")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"删除部分配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除部分配置"}},[s._v("#")]),s._v(" 删除部分配置")]),s._v(" "),t("p",[s._v("把一些不需要的配置去掉")]),s._v(" "),t("p",[s._v("必须删除：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("pnpm-lock.yaml")])])]),s._v(" "),t("p",[s._v("可选：")]),s._v(" "),t("ul",[t("li",[s._v(".github 文件夹")]),s._v(" "),t("li",[s._v(".circleci 文件夹")]),s._v(" "),t("li",[s._v("breakings 文件夹")]),s._v(" "),t("li",[s._v("CHANGELOG.en-US.md")]),s._v(" "),t("li",[s._v("CODE_OF_CONDUCT.md")]),s._v(" "),t("li",[s._v("CONTRIBUTING.md")])]),s._v(" "),t("p",[s._v("README.md 清空内容。")]),s._v(" "),t("h2",{attrs:{id:"全局替换-匹配大小写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局替换-匹配大小写"}},[s._v("#")]),s._v(" 全局替换（匹配大小写）")]),s._v(" "),t("ul",[t("li",[s._v("element-plus -> kbt-ui")]),s._v(" "),t("li",[s._v("elementPlus -> kbtUI")]),s._v(" "),t("li",[s._v("ElementPlus -> KbtUI")]),s._v(" "),t("li",[s._v("Element Plus -> Kbt UI")]),s._v(" "),t("li",[s._v("El -> K（大写）")])]),s._v(" "),t("h2",{attrs:{id:"全局替换-匹配大小写-全词匹配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局替换-匹配大小写-全词匹配"}},[s._v("#")]),s._v(" 全局替换（匹配大小写 & 全词匹配）")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("el-")]),s._v(" -> "),t("code",[s._v("k-")])]),s._v(" "),t("li",[t("code",[s._v("</el-")]),s._v(" -> "),t("code",[s._v("</k-")])]),s._v(" "),t("li",[t("code",[s._v("'el'")]),s._v(" -> "),t("code",[s._v("'k'")]),s._v("（注意 "),t("code",[s._v("packages/hooks/locale/lang/el.ts")]),s._v(" 的 "),t("code",[s._v("'el'")]),s._v(" 不需要替换，位于第二行左右）")])]),s._v(" "),t("h2",{attrs:{id:"文件夹命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件夹命名"}},[s._v("#")]),s._v(" 文件夹命名")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("packages/element-plus")]),s._v(" -> kbt-ui")]),s._v(" "),t("li",[t("code",[s._v("internal/build/src/plugins/element-plus-alias")]),s._v(" -> kbt-ui-alias")])]),s._v(" "),t("h2",{attrs:{id:"图片命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图片命名"}},[s._v("#")]),s._v(" 图片命名")]),s._v(" "),t("p",[t("code",[s._v("docs/public/images")]),s._v(" 带有 element-plus 的图片换成 kbt-ui（3 个图片）")]),s._v(" "),t("h2",{attrs:{id:"最后执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后执行"}},[s._v("#")]),s._v(" 最后执行")]),s._v(" "),t("h3",{attrs:{id:"全局替换-匹配大小写-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局替换-匹配大小写-2"}},[s._v("#")]),s._v(" 全局替换（匹配大小写）")]),s._v(" "),t("ul",[t("li",[s._v("@kbt-ui/icons-vue -> @element-plus/icons-vue")]),s._v(" "),t("li",[s._v("unplugin-kbt-ui -> unplugin-element-plus")]),s._v(" "),t("li",[s._v("Kement -> Element")]),s._v(" "),t("li",[s._v("KemeFE -> ElemeFE")])]),s._v(" "),t("h3",{attrs:{id:"局部修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#局部修改"}},[s._v("#")]),s._v(" 局部修改")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("docs/examples/button/loading.vue")]),s._v(" 里的 Keme 改为 Eleme")]),s._v(" "),t("li",[t("code",[s._v("docs/examples/text/mixed.vue")]),s._v(" 里的 ElementPlus 改为 KbtUi")])]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("ul",[t("li",[s._v("将项目里所有 package.json 的 "),t("code",[s._v('"vue": "^3.2.37"')]),s._v(" 改为 "),t("code",[s._v('"vue": "3.2.47"')]),s._v("（建议全局替换），这里是为了解决构建问题，具体看下面")]),s._v(" "),t("li",[s._v("执行 "),t("code",[s._v("pnpm install")]),s._v(" 安装依赖")])]),s._v(" "),t("h2",{attrs:{id:"可选"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可选"}},[s._v("#")]),s._v(" 可选")]),s._v(" "),t("ul",[t("li",[s._v("所有 package.json 的 version 由 0.0.5 改为 0.0.1")]),s._v(" "),t("li",[s._v("格式化项目代码："),t("code",[s._v("pnpm format")])])]),s._v(" "),t("h2",{attrs:{id:"解决构建问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决构建问题"}},[s._v("#")]),s._v(" 解决构建问题")]),s._v(" "),t("p",[s._v("拉下项目后，执行 "),t("code",[s._v("pnpm install")]),s._v(" 后，执行 "),t("code",[s._v("pnpm build")]),s._v(" 进行构建时会报错：")]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[s._v("ReferenceError"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" __name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" not defined\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("因为 Vue 最新版不兼容问题，因此将 Vue 版本回退到 3.3.0 以下的版本即可。")]),s._v(" "),t("p",[s._v("将项目里所有 package.json 的 "),t("code",[s._v('"vue": "^3.2.37"')]),s._v(" 改为 "),t("code",[s._v('"vue": "3.2.47"')]),s._v("（建议全局替换）。")]),s._v(" "),t("blockquote",[t("p",[s._v("说明：项目默认的 Vue 依赖为 "),t("code",[s._v('"vue": "^3.2.37"')]),s._v("，看起来好像是 3.3.0 以下版本，但是注意版本号前面有一个 "),t("code",[s._v("^")]),s._v("，说明直接使用 3.x.x 版本，这里的 3.x.x 就是 3 以内的最新版，如 3.4.21。而 3.2.37 只是说明第一次项目安装 Vue 的时候，是 3.2.37 版本，因此去掉 "),t("code",[s._v("^")]),s._v(" 就是精确匹配版本号。")]),s._v(" "),t("p",[s._v("番外：除了 "),t("code",[s._v("^")]),s._v(" 还有 "),t("code",[s._v("~")]),s._v("，如果是 "),t("code",[s._v("~3.2.37")]),s._v("，则代表使用 3.2.x，x 就是最新版。")])]),s._v(" "),t("h2",{attrs:{id:"本地文档编译启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地文档编译启动"}},[s._v("#")]),s._v(" 本地文档编译启动")]),s._v(" "),t("p",[s._v("如果你想本地启动文档看效果，那么执行 "),t("code",[s._v("pnpm docs:dev")]),s._v(" 即可。")]),s._v(" "),t("p",[s._v("但是 docs 下 "),t("code",[s._v("package.json")]),s._v(" 里 kbt-ui 版本引用的是 npm 仓库的版本，不是本地的版本，那么需要修改版本号为 "),t("code",[s._v("workspace:*")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"kbt-ui"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"workspace:*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果发布到了 npm 仓库，则可以改为具体的线上版本号。")]),s._v(" "),t("p",[s._v("然后在 "),t("code",[s._v("packages/kbt-ui/package.json")]),s._v(" 替换为如下内容（注意先备份好原来 "),t("code",[s._v("package.json")]),s._v(" 的内容，发版时需要修改回来，这只是本地文档启动的 "),t("code",[s._v("package.json")]),s._v("）：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kbt-ui"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A Component Library for Vue 3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"publishConfig"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"access"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"public"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"peerDependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vue"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^3.2.0"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@ctrl/tinycolor"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^3.4.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@element-plus/icons-vue"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^2.3.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@floating-ui/dom"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.0.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@popperjs/core"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm:@sxzz/popperjs-es@^2.11.7"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@types/lodash"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^4.14.182"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@types/lodash-es"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^4.17.6"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@vueuse/core"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^9.1.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"async-validator"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^4.2.5"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dayjs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.11.3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"escape-html"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.0.3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lodash"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^4.17.21"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lodash-es"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^4.17.21"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lodash-unified"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.0.2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"memoize-one"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^6.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"normalize-wheel-es"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.2.0"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@types/node"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"csstype"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^2.6.20"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vue"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~3.2.47"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vue-router"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^4.0.16"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vetur"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tags"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tags.json"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"attributes"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"attributes.json"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"web-types"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"web-types.json"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"browserslist"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"> 1%"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not ie 11"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not op_mini all"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br")])]),t("blockquote",[t("p",[s._v("注意：文档执行 build 前必须本地编译一次。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);