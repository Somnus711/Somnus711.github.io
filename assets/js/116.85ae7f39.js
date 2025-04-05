(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{499:function(t,a,v){"use strict";v.r(a);var s=v(5),i=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#前言"}},[t._v("前言")])]),a("li",[a("a",{attrs:{href:"#线程"}},[t._v("线程")]),a("ul",[a("li",[a("a",{attrs:{href:"#线程的内存空间"}},[t._v("线程的内存空间")])]),a("li",[a("a",{attrs:{href:"#runtime类"}},[t._v("Runtime类")])]),a("li",[a("a",{attrs:{href:"#jvm线程"}},[t._v("JVM线程")])]),a("li",[a("a",{attrs:{href:"#jvm系统线程"}},[t._v("JVM系统线程")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("本节主要讲的是运行时数据区，也就是下图这部分，它是在类加载完成后的阶段")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116000053.png",alt:"image-20200705111640511"}})]),t._v(" "),a("p",[t._v("当我们通过前面的：类的加载 -> 验证 -> 准备 -> 解析 -> 初始化这几个阶段完成后，就会用到执行引擎对我们的类进行使用，同时执行引擎将会使用到我们运行时数据区")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116000056.png",alt:"image-20200705111843003"}})]),t._v(" "),a("p",[t._v("也就是大厨做饭，我们把大厨后面的东西（切好的菜，刀，调料），比作是运行时数据区。而厨师可以类比于执行引擎，将通过准备的东西进行制作成精美的菜品")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116000057.png",alt:"image-20200705112036630"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("内存是非常重要的系统资源，是硬盘和 CPU 的中间仓库及桥梁，承载着操作系统和应用程序的实时运行 JVM 内存布局规定了 Java 在运行过程中内存申请、分配、管理的策略，保证了 JVM 的高效稳定运行。"),a("strong",[t._v("不同的 JVM 对于内存的划分方式和管理机制存在着部分差异")]),t._v("。结合 JVM 虚拟机规范，来探讨一下经典的 JVM 内存布局。")])]),t._v(" "),a("li",[a("p",[t._v("我们通过磁盘或者网络 IO 得到的数据，都需要先加载到内存中，然后 CPU 从内存中获取数据进行读取，也就是说内存充当了 CPU 和磁盘之间的桥梁。")])])]),t._v(" "),a("p",[t._v("运行时数据区的完整图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116000059.png",alt:"image-20200705112416101"}})]),t._v(" "),a("h2",{attrs:{id:"线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[t._v("#")]),t._v(" 线程")]),t._v(" "),a("h3",{attrs:{id:"线程的内存空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程的内存空间"}},[t._v("#")]),t._v(" 线程的内存空间")]),t._v(" "),a("p",[t._v("Java 虚拟机定义了若干种程序运行期间会使用到的运行时数据区：其中有一些会随着虚拟机启动而创建，随着虚拟机退出而销毁。另外一些则是与线程一一对应的，这些与线程对应的数据区域会随着线程开始和结束而创建和销毁。")]),t._v(" "),a("p",[t._v("灰色的为单独线程私有的，红色的为多个线程共享的。即：")]),t._v(" "),a("ul",[a("li",[t._v("线程独有：独立包括程序计数器、栈、本地方法栈")]),t._v(" "),a("li",[t._v("线程间共享：堆、堆外内存（永久代或元空间、代码缓存）")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220117151029.png",alt:"image-20220117151028811"}})]),t._v(" "),a("h3",{attrs:{id:"runtime类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runtime类"}},[t._v("#")]),t._v(" Runtime类")]),t._v(" "),a("p",[a("strong",[t._v("每个 JVM 只有一个 Runtime 实例")]),t._v("。即为运行时环境，相当于内存结构的中间的那个框框：运行时环境。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220117150900.png",alt:"image-20220117150859224"}})]),t._v(" "),a("h3",{attrs:{id:"jvm线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm线程"}},[t._v("#")]),t._v(" JVM线程")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("线程是一个程序里的运行单元。JVM 允许一个应用有多个线程并行的执行")])]),t._v(" "),a("li",[a("p",[t._v("在 Hotspot JVM 里，每个线程都与操作系统的本地线程直接映射")]),t._v(" "),a("ul",[a("li",[t._v("当一个 Java 线程准备好执行以后，此时一个操作系统的本地线程也同时创建。Java 线程执行终止后，本地线程也会回收")])])])]),t._v(" "),a("p",[t._v("操作系统负责所有线程的安排调度到任何一个可用的 CPU 上。一旦本地线程初始化成功，它就会调用 Java 线程中的 "),a("code",[t._v("run()")]),t._v(" 方法。")]),t._v(" "),a("h3",{attrs:{id:"jvm系统线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm系统线程"}},[t._v("#")]),t._v(" JVM系统线程")]),t._v(" "),a("p",[t._v("如果你使用 console 或者是任何一个调试工具，都能看到在后台有许多线程在运行。这些后台线程不包括调用 "),a("code",[t._v("public static void main(String[])")]),t._v(" 的 main 线程以及所有这个 main 线程自己创建的线程。")]),t._v(" "),a("p",[t._v("这些主要的后台系统线程在 Hotspot JVM 里主要是以下几个：")]),t._v(" "),a("ul",[a("li",[t._v("虚拟机线程：这种线程的操作是需要 JVM 达到安全点才会出现。这些操作必须在不同的线程中发生的原因是他们都需要 JVM 达到安全点，这样堆才不会变化。这种线程的执行类型包括「stop-the-world」的垃圾收集，线程栈收集，线程挂起以及偏向锁撤销")]),t._v(" "),a("li",[t._v("周期任务线程：这种线程是时间周期事件的体现（比如中断），他们一般用于周期性操作的调度执行")]),t._v(" "),a("li",[t._v("GC 线程：这种线程对在 JVM 里不同种类的垃圾收集行为提供了支持")]),t._v(" "),a("li",[t._v("编译线程：这种线程在运行时会将字节码编译成到本地代码")]),t._v(" "),a("li",[t._v("信号调度线程：这种线程接收信号并发送给 JVM，在它内部通过调用适当的方法进行处理")])])])}),[],!1,null,null,null);a.default=i.exports}}]);