(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{501:function(t,v,a){"use strict";a.r(v);var _=a(5),e=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#什么是本地方法栈"}},[t._v("什么是本地方法栈")])])])]),v("p"),t._v(" "),v("h2",{attrs:{id:"什么是本地方法栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是本地方法栈"}},[t._v("#")]),t._v(" 什么是本地方法栈")]),t._v(" "),v("p",[t._v("Java 虚拟机栈于管理 Java 方法的调用，而 "),v("strong",[t._v("本地方法栈用于管理本地方法的调用")]),t._v("。")]),t._v(" "),v("p",[t._v("本地方法栈，也是线程私有的。")]),t._v(" "),v("p",[t._v("允许被实现成固定或者是可动态扩展的内存大小。（在内存溢出方面是相同的）")]),t._v(" "),v("ul",[v("li",[t._v("如果线程请求分配的栈容量超过本地方法栈允许的最大容量，Java 虚拟机将会抛出一个 StackoverflowError 异常")]),t._v(" "),v("li",[t._v("如果本地方法栈可以动态扩展，并且在尝试扩展的时候无法申请到足够的内存，或者在创建新的线程时没有足够的内存去创建对应的本地方法栈，那么 Java 虚拟机将会抛出一个 OutofMemoryError 异常")])]),t._v(" "),v("p",[t._v("本地方法是使用 C 语言实现的。")]),t._v(" "),v("p",[t._v("它的具体做法是 Native Method Stack 中登记 native 方法，在 Execution Engine 执行时加载本地方法库。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116151734.png",alt:"image-20200706174708418"}})]),t._v(" "),v("p",[t._v("当某个线程调用一个本地方法时，它就进入了一个全新的并且不再受虚拟机限制的世界。它和虚拟机拥有同样的权限。")]),t._v(" "),v("ul",[v("li",[t._v("本地方法可以通过本地方法接口来访问虚拟机内部的运行时数据区")]),t._v(" "),v("li",[t._v("它甚至可以直接使用本地处理器中的寄存器")]),t._v(" "),v("li",[t._v("直接从本地内存的堆中分配任意数量的内存")])]),t._v(" "),v("p",[t._v("并不是所有的 JVM 都支持本地方法。因为 Java 虚拟机规范并没有明确要求本地方法栈的使用语言、具体实现方式、数据结构等。如果 JVM 产品不打算支持 native 方法，也可以无需实现本地方法栈。")]),t._v(" "),v("p",[t._v("在 Hotspot JVM 中，"),v("strong",[t._v("直接将本地方法栈和虚拟机栈合二为一")]),t._v("。")])])}),[],!1,null,null,null);v.default=e.exports}}]);