(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{411:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("本内容分为三篇：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("上篇为 JVM - 内存与垃圾回收篇")])]),t._v(" "),s("li",[s("p",[t._v("中篇为 JVM - 字节码与类的加载篇")])]),t._v(" "),s("li",[s("p",[t._v("下篇为 JVM - 性能监控与调优篇")])])]),t._v(" "),s("p",[t._v("JVM - 内存与垃圾回收篇内容分为：")]),t._v(" "),s("ul",[s("li",[t._v("类加载子系统：第 2 章（类加载子系统）")]),t._v(" "),s("li",[t._v("运行时数据区：第 3 章（运行时数据区概述及线程） - 第 11 章（直接内容）")]),t._v(" "),s("li",[t._v("执行引擎：第 12 章（执行引擎）")]),t._v(" "),s("li",[t._v("面试常问：第 13 章（StringTable）")]),t._v(" "),s("li",[t._v("垃圾回收机制：第 14 章（垃圾回收概述） - 第 17 章（垃圾回收期）")])]),t._v(" "),s("p",[t._v("JVM - 字节码与类的加载篇内容为第 18 章 - 第 21 章。")]),t._v(" "),s("p",[t._v("JVM - 性能监控与调优篇内容为第 22 章 - 第 26章。")]),t._v(" "),s("p",[t._v("学习自 "),s("code",[t._v("https://www.bilibili.com/video/BV1PJ411n7xZ")]),t._v("。")]),t._v(" "),s("p",[t._v("JVM - 内存与垃圾回收篇内容学习内容的顺序图（从上往下，中间是核心）：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220115234155.png",alt:"image-20200705080911284"}})]),t._v(" "),s("h2",{attrs:{id:"技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技巧"}},[t._v("#")]),t._v(" 技巧")]),t._v(" "),s("h3",{attrs:{id:"技巧1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技巧1"}},[t._v("#")]),t._v(" 技巧1")]),t._v(" "),s("p",[t._v("在开发中，能够使用 final 修饰的时候，建议使用上，因为在编译期间就确定值，提高效率。")]),t._v(" "),s("h3",{attrs:{id:"技巧2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技巧2"}},[t._v("#")]),t._v(" 技巧2")]),t._v(" "),s("p",[t._v("遇到多个 String 相加，应该换成 StringBuilder")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("method1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" highLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" highLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每次循环都会创建一个 StringBuilder 和 String 对象（应该避免）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("method2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" highLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只需要创建一个StringBuilder")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),t._v(" sb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 优化：StringBuilder s = new StringBuilder(highLevel);")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" highLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        sb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("方法 1 耗费的时间：4005ms，方法 2 消耗时间：7ms。")]),t._v(" "),s("p",[t._v("方法 2 的再次优化："),s("code",[t._v("new StringBuilder()")]),t._v(" 构造器里可以传入参数（长度），所以为了避免后续长度不够的扩容，可以在创建的时候确定长度。")]),t._v(" "),s("p",[t._v("具体看 "),s("RouterLink",{attrs:{to:"/java/jvm/stringtable/#拼接操作和append性能对比"}},[t._v("JVM - 拼接操作和append性能对比")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[t._v("因为个人的时间原因，没有从头到尾完全手写笔记，而是参考了别人的一些笔记框架，然后在学习的途中，改成自己的布局和知识理解，这里注明参考的笔记来源：")]),t._v(" "),s("ul",[s("li",[t._v("1 - 17 篇（部分）参考 "),s("code",[t._v("https://gitee.com/moxi159753/LearningNotes/tree/master/JVM")])]),t._v(" "),s("li",[t._v("18 - 21 篇（部分）参考 "),s("code",[t._v("https://www.zhihu.com/column/c_1303831719934214144")])]),t._v(" "),s("li",[t._v("22 - 26 篇（部分）参考 "),s("code",[t._v("https://gitee.com/moxi159753/LearningNotes/tree/master/JVM")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);