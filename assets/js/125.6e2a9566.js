(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{504:function(t,a,s){"use strict";s.r(a);var v=s(5),r=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#执行引擎概述"}},[t._v("执行引擎概述")]),a("ul",[a("li",[a("a",{attrs:{href:"#执行引擎的工作流程"}},[t._v("执行引擎的工作流程")])])])]),a("li",[a("a",{attrs:{href:"#java代码编译和执行过程"}},[t._v("Java代码编译和执行过程")]),a("ul",[a("li",[a("a",{attrs:{href:"#什么是解释器-interpreter"}},[t._v("什么是解释器（Interpreter）")])]),a("li",[a("a",{attrs:{href:"#什么是jit编译器"}},[t._v("什么是JIT编译器")])]),a("li",[a("a",{attrs:{href:"#为什么java是半编译半解释型语言"}},[t._v("为什么Java是半编译半解释型语言")])])])]),a("li",[a("a",{attrs:{href:"#机器码、指令、汇编语言"}},[t._v("机器码、指令、汇编语言")]),a("ul",[a("li",[a("a",{attrs:{href:"#机器码"}},[t._v("机器码")])]),a("li",[a("a",{attrs:{href:"#指令"}},[t._v("指令")])]),a("li",[a("a",{attrs:{href:"#指令集"}},[t._v("指令集")])]),a("li",[a("a",{attrs:{href:"#汇编语言"}},[t._v("汇编语言")])]),a("li",[a("a",{attrs:{href:"#高级语言"}},[t._v("高级语言")])]),a("li",[a("a",{attrs:{href:"#c、c-源程序执行过程"}},[t._v("C、C++源程序执行过程")])]),a("li",[a("a",{attrs:{href:"#字节码"}},[t._v("字节码")])])])]),a("li",[a("a",{attrs:{href:"#解释器"}},[t._v("解释器")]),a("ul",[a("li",[a("a",{attrs:{href:"#解释器分类"}},[t._v("解释器分类")])]),a("li",[a("a",{attrs:{href:"#现状"}},[t._v("现状")])])])]),a("li",[a("a",{attrs:{href:"#jit编译器"}},[t._v("JIT编译器")]),a("ul",[a("li",[a("a",{attrs:{href:"#java代码的执行分类"}},[t._v("Java代码的执行分类")])]),a("li",[a("a",{attrs:{href:"#问题来了"}},[t._v("问题来了")])]),a("li",[a("a",{attrs:{href:"#hotspotjvm执行方式"}},[t._v("HotSpotJVM执行方式")])]),a("li",[a("a",{attrs:{href:"#案例"}},[t._v("案例")])]),a("li",[a("a",{attrs:{href:"#概念解释"}},[t._v("概念解释")])]),a("li",[a("a",{attrs:{href:"#热点探测技术"}},[t._v("热点探测技术")])]),a("li",[a("a",{attrs:{href:"#方法调用计数器"}},[t._v("方法调用计数器")])]),a("li",[a("a",{attrs:{href:"#热点衰减"}},[t._v("热点衰减")])]),a("li",[a("a",{attrs:{href:"#回边计数器"}},[t._v("回边计数器")])]),a("li",[a("a",{attrs:{href:"#hotspotvm可以设置程序执行方法"}},[t._v("HotSpotVM可以设置程序执行方法")])]),a("li",[a("a",{attrs:{href:"#hotspotvm中jit分类"}},[t._v("HotSpotVM中JIT分类")])]),a("li",[a("a",{attrs:{href:"#c1和c2编译器不同的优化策略"}},[t._v("C1和C2编译器不同的优化策略")])])])]),a("li",[a("a",{attrs:{href:"#分层编译策略"}},[t._v("分层编译策略")]),a("ul",[a("li",[a("a",{attrs:{href:"#graal编译器"}},[t._v("Graal编译器")])]),a("li",[a("a",{attrs:{href:"#aot编译器"}},[t._v("AOT编译器")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"执行引擎概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行引擎概述"}},[t._v("#")]),t._v(" 执行引擎概述")]),t._v(" "),a("p",[t._v("执行引擎属于 JVM 的下层，里面包括解释器、及时编译器、垃圾回收器。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155828.png",alt:"image-20200710080707873"}})]),t._v(" "),a("p",[t._v("执行引擎是 Java 虚拟机核心的组成部分之一。")]),t._v(" "),a("p",[t._v("「虚拟机」是一个相对于「物理机」的概念，这两种机器都有代码执行能力，其区别是物理机的执行引擎是直接建立在处理器、缓存、指令集和操作系统层面上的，而虚拟机的执行引擎则是由软件自行实现的，因此可以不受物理条件制约地定制指令集与执行引擎的结构体系，能够执行那些不被硬件直接支持的指令集格式。")]),t._v(" "),a("p",[t._v("JVM 的主要任务是负责 "),a("strong",[t._v("装载字节码到其内部")]),t._v("，但字节码并不能够直接运行在操作系统之上，因为字节码指令并非等价于本地机器指令，它内部包含的仅仅只是一些能够被 JVM 所识别的字节码指令、符号表，以及其他辅助信息。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155830.png",alt:"image-20200710081118053"}})]),t._v(" "),a("p",[t._v("那么，如果想要让一个 Java 程序运行起来，执行引擎（Execution Engine）的任务就是 "),a("strong",[t._v("将字节码指令解释 / 编译为对应平台上的本地机器指令才可以")]),t._v("。简单来说，"),a("strong",[t._v("JVM 中的执行引擎充当了将高级语言翻译为机器语言的译者")]),t._v("。")]),t._v(" "),a("p",[t._v("如下图，韩文（操作系统）和英文（字节码）之间是无法直接交流的，需要中间的翻译官，也就是执行引擎进行翻译。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155832.png",alt:"image-20200710081259276"}})]),t._v(" "),a("h3",{attrs:{id:"执行引擎的工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行引擎的工作流程"}},[t._v("#")]),t._v(" 执行引擎的工作流程")]),t._v(" "),a("ul",[a("li",[t._v("执行引擎在执行的过程中究竟需要执行什么样的字节码指令完全依赖于 PC 寄存器")]),t._v(" "),a("li",[t._v("每当执行完一项指令操作后，PC 寄存器就会更新下一条需要被执行的指令地址")]),t._v(" "),a("li",[t._v("当然方法在执行的过程中，执行引擎有可能会通过存储在局部变量表中的对象引用准确定位到存储在 Java 堆区中的对象实例信息，以及通过对象头中的元数据指针定位到目标对象的类型信息")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155834.png",alt:"image-20200710081627217"}})]),t._v(" "),a("p",[t._v("从外观上来看，所有的 Java 虚拟机的执行引擎输入，输出都是一致的：输入的是字节码二进制流，处理过程是字节码解析执行的等效过程，输出的是执行过程。")]),t._v(" "),a("h2",{attrs:{id:"java代码编译和执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java代码编译和执行过程"}},[t._v("#")]),t._v(" Java代码编译和执行过程")]),t._v(" "),a("p",[t._v("大部分的程序代码转换成物理机的目标代码或虚拟机能执行的指令集之前，都需要经过上图中的各个步骤")]),t._v(" "),a("ul",[a("li",[t._v("前面橙色部分是生成字节码文件的过程，和 JVM 无关")]),t._v(" "),a("li",[t._v("后面蓝色和绿色才是 JVM 需要考虑的过程")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155835.png",alt:"image-20200710082141643"}})]),t._v(" "),a("p",[t._v("Java 代码编译是由 Java 源码编译器来完成，流程图如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155837.png",alt:"image-20200710082433146"}})]),t._v(" "),a("p",[t._v("Java 字节码的执行是由 JVM 执行引擎来完成，流程图如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155838.png",alt:"image-20200710083036258"}})]),t._v(" "),a("p",[t._v("我们用一个总的图，来说说解释器和编译器")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155839.png",alt:"image-20200710083656277"}})]),t._v(" "),a("h3",{attrs:{id:"什么是解释器-interpreter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是解释器-interpreter"}},[t._v("#")]),t._v(" 什么是解释器（Interpreter）")]),t._v(" "),a("p",[t._v("当 Java 虚拟机启动时会根据预定义的规范对字节码采用逐行解释的方式执行，将每条字节码文件中的内容「翻译」为对应平台的本地机器指令执行。")]),t._v(" "),a("h3",{attrs:{id:"什么是jit编译器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是jit编译器"}},[t._v("#")]),t._v(" 什么是JIT编译器")]),t._v(" "),a("p",[t._v("JIT（Just In Time Compiler）编译器：就是虚拟机将源代码直接编译成和本地机器平台相关的机器语言。")]),t._v(" "),a("h3",{attrs:{id:"为什么java是半编译半解释型语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么java是半编译半解释型语言"}},[t._v("#")]),t._v(" 为什么Java是半编译半解释型语言")]),t._v(" "),a("p",[t._v("JDK1.e 时代，将 Java 语言定位为「解释执行」还是比较准确的。再后来，Java 也发展出可以直接生成本地代码的编译器。现在 JVM 在执行 Java 代码的时候，通常都会将解释执行与编译执行二者结合起来进行。")]),t._v(" "),a("p",[t._v("翻译成本地代码后，就可以做一个缓存操作，存储在方法区中")]),t._v(" "),a("h2",{attrs:{id:"机器码、指令、汇编语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机器码、指令、汇编语言"}},[t._v("#")]),t._v(" 机器码、指令、汇编语言")]),t._v(" "),a("h3",{attrs:{id:"机器码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机器码"}},[t._v("#")]),t._v(" 机器码")]),t._v(" "),a("p",[t._v("各种用二进制编码方式表示的指令，叫做机器指令码。开始，人们就用它采编写程序，这就是机器语言。")]),t._v(" "),a("p",[t._v("机器语言虽然能够被计算机理解和接受，但和人们的语言差别太大，不易被人们理解和记忆，并且用它编程容易出差错。")]),t._v(" "),a("p",[t._v("用它编写的程序一经输入计算机，CPU 直接读取运行，因此和其他语言编的程序相比，执行速度最快。")]),t._v(" "),a("p",[t._v("机器指令与 CPU 紧密相关，所以不同种类的 CPU 所对应的机器指令也就不同。")]),t._v(" "),a("h3",{attrs:{id:"指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),a("p",[t._v("由于机器码是有 0 和 1 组成的二进制序列，可读性实在太差，于是人们发明了指令。")]),t._v(" "),a("p",[t._v("指令就是把机器码中特定的 0 和 1 序列，简化成对应的指令（一般为英文简写，如 mov，inc 等），可读性稍好")]),t._v(" "),a("p",[t._v("由于不同的硬件平台，执行同一个操作，对应的机器码可能不同，所以不同的硬件平台的同一种指令（比如 mov），对应的机器码也可能不同。")]),t._v(" "),a("h3",{attrs:{id:"指令集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令集"}},[t._v("#")]),t._v(" 指令集")]),t._v(" "),a("p",[t._v("不同的硬件平台，各自支持的指令，是有差别的。因此每个平台所支持的指令，称之为对应平台的指令集。\n如常见的")]),t._v(" "),a("ul",[a("li",[t._v("x86 指令集，对应的是 x86 架构的平台")]),t._v(" "),a("li",[t._v("ARM 指令集，对应的是 ARM 架构的平台")])]),t._v(" "),a("h3",{attrs:{id:"汇编语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#汇编语言"}},[t._v("#")]),t._v(" 汇编语言")]),t._v(" "),a("p",[t._v("由于指令的可读性还是太差，于是人们又发明了汇编语言。")]),t._v(" "),a("p",[t._v("在汇编语言中，用助记符（Mnemonics）代替机器指令的操作码，用地址符号（Symbol）或标号（Label）代替指令或操作数的地址。在不同的硬件平台，汇编语言对应着不同的机器语言指令集，通过汇编过程转换成机器指令。")]),t._v(" "),a("blockquote",[a("p",[t._v("由于计算机只认识指令码，所以用汇编语言编写的程序还必须翻译成机器指令码，计算机才能识别和执行。")])]),t._v(" "),a("h3",{attrs:{id:"高级语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级语言"}},[t._v("#")]),t._v(" 高级语言")]),t._v(" "),a("p",[t._v("为了使计算机用户编程序更容易些，后来就出现了各种高级计算机语言。")]),t._v(" "),a("p",[t._v("高级语言比机器语言、汇编语言更接近人的语言当计算机执行高级语言编写的程序时，仍然需要把程序解释和编译成机器的指令码。完成这个过程的程序就叫做解释程序或编译程序。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155842.png",alt:"image-20200710085323733"}})]),t._v(" "),a("p",[t._v("高级语言也不是直接翻译成机器指令，而是翻译成汇编语言吗，如下面说的 C 和 C++。")]),t._v(" "),a("h3",{attrs:{id:"c、c-源程序执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c、c-源程序执行过程"}},[t._v("#")]),t._v(" C、C++源程序执行过程")]),t._v(" "),a("p",[t._v("编译过程又可以分成两个阶段：编译和汇编。")]),t._v(" "),a("p",[t._v("编译过程：是读取源程序（字符流），对之进行词法和语法的分析，将高级语言指令转换为功能等效的汇编代码")]),t._v(" "),a("p",[t._v("汇编过程：实际上指把汇编语言代码翻译成目标机器指令的过程。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155843.png",alt:"image-20200710085553258"}})]),t._v(" "),a("h3",{attrs:{id:"字节码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字节码"}},[t._v("#")]),t._v(" 字节码")]),t._v(" "),a("p",[t._v("字节码是一种中间状态（中间码）的二进制代码（文件），它比机器码更抽象，需要直译器转译后才能成为机器码。")]),t._v(" "),a("p",[t._v("字节码主要为了实现特定软件运行和软件环境、与硬件环境无关。")]),t._v(" "),a("p",[t._v("字节码的实现方式是通过编译器和虚拟机器。编译器将源码编译成字节码，特定平台上的虚拟机器将字节码转译为可以直接执行的指令。")]),t._v(" "),a("ul",[a("li",[t._v("字节码典型的应用为：Java bytecode")])]),t._v(" "),a("h2",{attrs:{id:"解释器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解释器"}},[t._v("#")]),t._v(" 解释器")]),t._v(" "),a("p",[t._v("JVM 设计者们的初衷仅仅只是单纯地为了满足 Java 程序实现跨平台特性，因此避免采用静态编译的方式直接生成本地机器指令，从而诞生了实现解释器在运行时采用逐行解释字节码执行程序的想法。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155845.png",alt:"image-20200710090203674"}})]),t._v(" "),a("p",[t._v("为什么 Java 源文件不直接翻译成 JVM，而是翻译成字节码文件？可能是因为直接翻译的代码是比较大的。")]),t._v(" "),a("p",[t._v("解释器真正意义上所承担的角色就是一个运行时「翻译者」，将字节码文件中的内容「翻译」为对应平台的本地机器指令执行。")]),t._v(" "),a("p",[t._v("当一条字节码指令被解释执行完成后，接着再根据 PC 寄存器中记录的下一条需要被执行的字节码指令执行解释操作。")]),t._v(" "),a("h3",{attrs:{id:"解释器分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解释器分类"}},[t._v("#")]),t._v(" 解释器分类")]),t._v(" "),a("p",[t._v("在 Java 的发展历史里，一共有两套解释执行器，即古老的字节码解释器、现在普遍使用的模板解释器。")]),t._v(" "),a("p",[t._v("字节码解释器在执行时通过 "),a("strong",[t._v("纯软件代码")]),t._v(" 模拟字节码的执行，效率非常低下。")]),t._v(" "),a("p",[t._v("而模板解释器将 "),a("strong",[t._v("每一条字节码和一个模板函数相关联")]),t._v("，模板函数中直接产生这条字节码执行时的机器码，从而很大程度上提高了解释器的性能。")]),t._v(" "),a("p",[t._v("在 HotSpot VM 中，解释器主要由 Interpreter 模块和 Code 模块构成。")]),t._v(" "),a("ul",[a("li",[t._v("Interpreter 模块：实现了解释器的核心功能")]),t._v(" "),a("li",[t._v("Code 模块：用于管理 HotSpot VM 在运行时生成的本地机器指令")])]),t._v(" "),a("h3",{attrs:{id:"现状"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现状"}},[t._v("#")]),t._v(" 现状")]),t._v(" "),a("p",[t._v("由于解释器在设计和实现上非常简单，因此除了 Java 语言之外，还有许多高级语言同样也是基于解释器执行的，比如 Python、Per1、Ruby 等。但是在今天，"),a("strong",[t._v("基于解释器执行已经沦落为低效的代名词")]),t._v("，并且时常被一些 C/C++ 程序员所调侃。")]),t._v(" "),a("p",[t._v("为了解决这个问题，JVM 平台支持一种叫作即时编译的技术。即时编译的目的是避免函数被解释执行，而是将 "),a("strong",[t._v("整个函数体编译成为机器码，每次函数执行时，只执行编译后的机器码即可")]),t._v("，这种方式可以使执行效率大幅度提升。")]),t._v(" "),a("p",[t._v("不过无论如何，基于解释器的执行模式仍然为中间语言的发展做出了不可磨灭的贡献。")]),t._v(" "),a("h2",{attrs:{id:"jit编译器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jit编译器"}},[t._v("#")]),t._v(" JIT编译器")]),t._v(" "),a("h3",{attrs:{id:"java代码的执行分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java代码的执行分类"}},[t._v("#")]),t._v(" Java代码的执行分类")]),t._v(" "),a("p",[t._v("第一种是将源代码编译成字节码文件，然后在运行时通过解释器将字节码文件转为机器码执行。")]),t._v(" "),a("p",[t._v("第二种是编译执行（直接编译成机器码）。现代虚拟机为了提高执行效率，会使用即时编译技术（JIT，Just In Time）将方法编译成机器码后再执行。")]),t._v(" "),a("p",[t._v("HotSpot VM 是目前市面上高性能虚拟机的代表作之一。它 "),a("strong",[t._v("采用解释器与即时编译器并存")]),t._v(" 的架构。在 Java 虚拟机运行时，解释器和即时编译器能够相互协作，各自取长补短，尽力去选择最合适的方式来权衡编译本地代码的时间和直接解释执行代码的时间。")]),t._v(" "),a("p",[t._v("在今天，Java 程序的运行性能早已脱胎换骨，已经达到了可以和 C/C++ 程序一较高下的地步。")]),t._v(" "),a("h3",{attrs:{id:"问题来了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题来了"}},[t._v("#")]),t._v(" 问题来了")]),t._v(" "),a("p",[t._v("有些开发人员会感觉到诧异，既然 HotSpot VM 中已经内置 JIT 编译器了，那么为什么还需要再使用解释器来「拖累」程序的执行性能呢？比如 JRockit VM 内部就不包含解释器，字节码全部都依靠即时编译器编译后执行。")]),t._v(" "),a("ul",[a("li",[t._v("JRockit 虚拟机是砍掉了解释器，也就是只采及时编译器。那是因为呢？")]),t._v(" "),a("li",[t._v("JRockit 只部署在服务器上，一般已经有时间让他进行指令编译的过程了，对于响应来说要求不高，等及时编译器的编译完成后，就会提供更好的性能")])]),t._v(" "),a("p",[t._v("首先明确：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("当程序启动后，解释器可以马上发挥作用，省去编译的时间，立即执行。")])]),t._v(" "),a("li",[a("p",[t._v("编译器要想发挥作用，把代码编译成本地代码，需要一定的执行时间。但编译为本地代码后，执行效率高。")])])]),t._v(" "),a("p",[t._v("所以：")]),t._v(" "),a("p",[t._v("尽管 JRockit VM 中程序的执行性能会非常高效，但程序在启动时必然需要花费更长的时间来进行编译。对于服务端应用来说，启动时间并非是关注重点，但对于那些看中启动时间的应用场景而言，或许就需要采用解释器与即时编译器并存的架构来换取一个平衡点。")]),t._v(" "),a("p",[t._v("在此模式下，当 Java 虚拟器启动时，解释器可以首先发挥作用，而不必等待即时编译器全部编译完成后再执行，这样可以省去许多不必要的编译时间。随着时间的推移，编译器发挥作用，把越来越多的代码编译成本地代码，获得更高的执行效率。")]),t._v(" "),a("p",[t._v("同时，解释执行在编译器进行激进优化不成立的时候，作为编译器的「逃生门」。")]),t._v(" "),a("h3",{attrs:{id:"hotspotjvm执行方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hotspotjvm执行方式"}},[t._v("#")]),t._v(" HotSpotJVM执行方式")]),t._v(" "),a("p",[t._v("当虚拟机启动的时候，解释器可以首先发挥作用，而不必等待即时编译器全部编译完成再执行，这样可以省去许多不必要的编译时间。并且随着程序运行时间的推移，即时编译器逐渐发挥作用，根据热点探测功能，将有价值的字节码编译为本地机器指令，以换取更高的程序执行效率。")]),t._v(" "),a("p",[t._v("解释器响应快，但是速度慢。而编译器需要时间来「一次性」编译，所以等编译完，速度就非常快。")]),t._v(" "),a("h3",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),a("p",[t._v("注意解释执行与编译执行在线上环境微妙的辩证关系。机器在热机状态可以承受的负载要大于冷机状态。如果以热机状态时的流量进行切流，可能使处于冷机状态的服务器因无法承载流量而假死。")]),t._v(" "),a("p",[t._v("在生产环境发布过程中，以分批的方式进行发布，根据机器数量划分成多个批次，每个批次的机器数至多占到整个集群的 1/8。曾经有这样的故障案例：某程序员在发布平台进行分批发布，在输入发布总批数时，误填写成分为两批发布。如果是热机状态，在正常情况下一半的机器可以勉强承载流量，但由于刚启动的 JVM 均是解释执行，还没有进行热点代码统计和 JIT 动态编译，导致机器启动之后，当前 1/2 发布成功的服务器马上全部宕机，此故障说明了 JIT 的存在。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155847.png",alt:"image-20200710095417462"}})]),t._v(" "),a("h3",{attrs:{id:"概念解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念解释"}},[t._v("#")]),t._v(" 概念解释")]),t._v(" "),a("ul",[a("li",[t._v("Java 语言的「编译期」其实是一段「不确定」的操作过程，因为它可能是指一个 "),a("strong",[t._v("前端编译器")]),t._v("（其实叫「编译器的前端」更准确一些）把 "),a("code",[t._v(".java")]),t._v(" 文件转变成 "),a("code",[t._v(".class")]),t._v(" 文件的过程")]),t._v(" "),a("li",[t._v("也可能是指虚拟机的 "),a("strong",[t._v("后端运行期编译器")]),t._v("（JIT 编译器：Just In Time Compiler）把字节码转变成机器码的过程")]),t._v(" "),a("li",[t._v("还可能是指使用 "),a("strong",[t._v("静态提前编译器")]),t._v("（AOT 编译器：Ahead of Time Compiler）直接把 "),a("code",[t._v(".java")]),t._v(" 文件编译成本地机器代码的过程")])]),t._v(" "),a("p",[t._v("前端编译器：Sun 的 Javac、Eclipse JDT 中的增量式编译器（ECJ）。")]),t._v(" "),a("p",[t._v("JIT 编译器：HotSpot VM 的 C1、C2 编译器。")]),t._v(" "),a("p",[t._v("AOT 编译器：GNU Compiler for the Java（GCJ）、Excelsior JET。")]),t._v(" "),a("h3",{attrs:{id:"热点探测技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#热点探测技术"}},[t._v("#")]),t._v(" 热点探测技术")]),t._v(" "),a("p",[t._v("当然是否需要启动 JIT 编译器将字节码直接编译为对应平台的本地机器指令，则需要根据代码被调用 "),a("strong",[t._v("执行的频率")]),t._v(" 而定。")]),t._v(" "),a("p",[t._v("关于那些需要被编译为本地代码的字节码，也被称之为「热点代码」，JIT 编译器在运行时会针对那些频繁被调用的「热点代码」做出 "),a("strong",[t._v("深度优化")]),t._v("，将其直接编译为对应平台的本地机器指令，以此提升 Java 程序的执行性能。")]),t._v(" "),a("p",[t._v("一个被多次调用的方法，或者是一个方法体内部循环次数较多的循环体都可以被称之为「热点代码」，因此都可以通过 JIT 编译器编译为本地机器指令。由于这种编译方式发生在方法的执行过程中，因此被称之为栈上替换，或简称为 OSR（On Stack Replacement）编译。")]),t._v(" "),a("p",[t._v("一个方法究竟要被调用多少次，或者一个循环体究竟需要执行多少次循环才可以达到这个标准？必然需要一个明确的阈值，JIT 编译器才会将这些「热点代码」编译为本地机器指令执行。这里主要依靠热点探测功能。")]),t._v(" "),a("p",[a("strong",[t._v("目前 HotSpot VM 所采用的热点探测方式是基于计数器的热点探测。")])]),t._v(" "),a("p",[t._v("采用基于计数器的热点探测，HotSpot VM 将会为每一个方法都建立 2 个不同类型的计数器，分别为方法调用计数器（Invocation Counter）和回边计数器（Back Edge Counter）。")]),t._v(" "),a("ul",[a("li",[t._v("方法调用计数器用于统计方法的调用次数")]),t._v(" "),a("li",[t._v("回边计数器则用于统计循环体执行的循环次数")])]),t._v(" "),a("h3",{attrs:{id:"方法调用计数器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法调用计数器"}},[t._v("#")]),t._v(" 方法调用计数器")]),t._v(" "),a("p",[t._v("这个计数器就用于统计方法被调用的次数，它的默认阀值在 Client 模式下是 1500 次，在 Server 模式下是 10000 次。超过这个阈值，就会触发 JIT 编译。")]),t._v(" "),a("p",[t._v("这个阀值可以通过虚拟机参数 "),a("code",[t._v("-XX:CompileThreshold")]),t._v(" 来人为设定。")]),t._v(" "),a("p",[t._v("当一个方法被调用时，会先检查该方法是否存在被 JIT 编译过的版本，如果存在，则优先使用编译后的本地代码来执行。如果不存在已被编译过的版本，则将此方法的调用计数器值加 1，然后判断方法调用计数器与回边计数器值之和是否超过方法调用计数器的阀值。如果已超过阈值，那么将会向即时编译器提交一个该方法的代码编译请求。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155848.png",alt:"image-20200710101829934"}})]),t._v(" "),a("h3",{attrs:{id:"热点衰减"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#热点衰减"}},[t._v("#")]),t._v(" 热点衰减")]),t._v(" "),a("p",[t._v("如果不做任何设置，方法调用计数器统计的并不是方法被调用的绝对次数，而是一个相对的执行频率，即 "),a("strong",[t._v("一段时间之内方法被调用的次数")]),t._v("。当超过 "),a("strong",[t._v("一定的时间限度")]),t._v("，如果方法的调用次数仍然不足以让它提交给即时编译器编译，那这个方法的调用计数器就会被 "),a("strong",[t._v("减少一半")]),t._v("，这个过程称为方法调用计数器热度的 "),a("strong",[t._v("衰减")]),t._v("（Counter Decay），而这段时间就称为此方法统计的 "),a("strong",[t._v("半衰周期")]),t._v("（Counter Half Life Time）")]),t._v(" "),a("ul",[a("li",[t._v("半衰周期是化学中的概念，比如出土的文物通过查看 C60 来获得文物的年龄")])]),t._v(" "),a("p",[t._v("进行热度衰减的动作是在虚拟机进行垃圾收集时顺便进行的，可以使用虚拟机参数 "),a("code",[t._v("-XX:-UseCounterDecay")]),t._v(" 来关闭热度衰减，让方法计数器统计方法调用的绝对次数，这样，只要系统运行时间足够长，绝大部分方法都会被编译成本地代码。")]),t._v(" "),a("p",[t._v("另外，可以使用 "),a("code",[t._v("-XX:CounterHalfLifeTime")]),t._v(" 参数设置半衰周期的时间，单位是秒。")]),t._v(" "),a("h3",{attrs:{id:"回边计数器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回边计数器"}},[t._v("#")]),t._v(" 回边计数器")]),t._v(" "),a("p",[t._v("它的作用是统计一个方法中循环体代码执行的次数，在字节码中遇到控制流向后跳转的指令称为「回边」（Back Edge）。显然，建立回边计数器统计的目的就是为了触发 OSR 编译。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155850.png",alt:"image-20200710103103869"}})]),t._v(" "),a("h3",{attrs:{id:"hotspotvm可以设置程序执行方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hotspotvm可以设置程序执行方法"}},[t._v("#")]),t._v(" HotSpotVM可以设置程序执行方法")]),t._v(" "),a("p",[t._v("缺省情况下 HotSpot VM 是采用解释器与即时编译器并存的架构，当然开发人员可以根据具体的应用场景，通过命令显式地为 Java 虚拟机指定在运行时到底是完全采用解释器执行，还是完全采用即时编译器执行。如下所示：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("-Xint")]),t._v("：完全采用解释器模式执行程序")]),t._v(" "),a("li",[a("code",[t._v("-Xcomp")]),t._v("：完全采用即时编译器模式执行程序。如果即时编译出现问题，解释器会介入执行")]),t._v(" "),a("li",[a("code",[t._v("-Xmixed")]),t._v("：采用解释器 + 即时编译器的混合模式共同执行程序")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116155851.png",alt:"image-20200710103340273"}})]),t._v(" "),a("p",[t._v("代码测试")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 测试解释器模式和JIT编译模式\n *  -Xint：6520ms\n *  -Xcomp：950ms\n *  -Xmixed：936ms\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntCompTest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentTimeMillis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testPrimeNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentTimeMillis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"花费的时间为："')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testPrimeNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//计算100以内的质数")]),t._v("\n            label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sqrt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v(" label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//System.out.println(j);")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br")])]),a("p",[t._v("在 "),a("code",[t._v("VM option")]),t._v(" 分别添加三个参数，结果分别如下：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Xint")]),t._v("："),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6520")]),t._v("ms\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Xcomp")]),t._v("："),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("950")]),t._v("ms\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Xmixed")]),t._v("："),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("936")]),t._v("ms\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("可以看出只用解释器，非常慢。")]),t._v(" "),a("h3",{attrs:{id:"hotspotvm中jit分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hotspotvm中jit分类"}},[t._v("#")]),t._v(" HotSpotVM中JIT分类")]),t._v(" "),a("p",[t._v("JIT 的编译器还分为了两种，分别是 C1 和 C2，在 HotSpot VM 中内嵌有两个 JIT 编译器，分别为 Client Compiler 和 Server Compiler，但大多数情况下我们简称为 C1 编译器 和 C2 编译器。开发人员可以通过如下命令显式指定 Java 虚拟机在运行时到底使用哪一种即时编译器，如下所示：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("-client")]),t._v("：指定 Java 虚拟机运行在 Client 模式下，并使用 C1 编译器")]),t._v(" "),a("ul",[a("li",[t._v("C1 编译器会对字节码进行 "),a("strong",[t._v("简单和可靠的优化，耗时短")]),t._v("。以达到更快的编译速度")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("-server")]),t._v("：指定 Java 虚拟机运行在 Server 模式下，并使用 C2 编译器")]),t._v(" "),a("ul",[a("li",[t._v("C2 进行 "),a("strong",[t._v("耗时较长的优化，以及激进优化")]),t._v("。但优化的代码执行效率更高。（使用 C++ 编写）")])])])]),t._v(" "),a("h3",{attrs:{id:"c1和c2编译器不同的优化策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c1和c2编译器不同的优化策略"}},[t._v("#")]),t._v(" C1和C2编译器不同的优化策略")]),t._v(" "),a("p",[t._v("在不同的编译器上有不同的优化策略，C1 编译器上主要有方法内联，去虚拟化、元余消除。")]),t._v(" "),a("ul",[a("li",[t._v("方法内联：将引用的函数代码编译到引用点处，这样可以减少栈帧的生成，减少参数传递以及跳转过程")]),t._v(" "),a("li",[t._v("去虚拟化：对唯一的实现进行内联")]),t._v(" "),a("li",[t._v("冗余消除：在运行期间把一些不会执行的代码折叠掉")])]),t._v(" "),a("p",[t._v("C2 的优化主要是在全局层面，逃逸分析是优化的基础。基于逃逸分析在 C2 上有如下几种优化：")]),t._v(" "),a("ul",[a("li",[t._v("标量替换：用标量值代替聚合对象的属性值")]),t._v(" "),a("li",[t._v("栈上分配：对于未逃逸的对象分配对象在栈而不是堆")]),t._v(" "),a("li",[t._v("同步消除：清除同步操作，通常指 synchronized")])]),t._v(" "),a("h2",{attrs:{id:"分层编译策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分层编译策略"}},[t._v("#")]),t._v(" 分层编译策略")]),t._v(" "),a("p",[t._v("分层编译（Tiered Compilation）策略：程序解释执行（不开启性能监控）可以触发 C1 编译，将字节码编译成机器码，可以进行简单优化，也可以加上性能监控，C2 编译会根据性能监控信息进行激进优化。")]),t._v(" "),a("p",[t._v("不过在 Java7 版本之后，一旦开发人员在程序中显式指定命令 "),a("code",[t._v("-XX:+TieredCompilation")]),t._v(" 时，将会开启分层编译策略，由 C1 编译器和 C2 编译器相互协作共同来执行编译任务。")]),t._v(" "),a("p",[t._v("在 Java8 中，默认开启分层编译，"),a("code",[t._v("-client")]),t._v(" 和 "),a("code",[t._v("-server")]),t._v(" 的设置已经是无效的了。如果只想开启 C2，可以关闭分层编译（"),a("code",[t._v("XX:-TieredCompilation")]),t._v("），如果只想用 C1，可以在打开分层编译的同时，使用参数："),a("code",[t._v("-XX:TieredStopAtLevel=1")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("总结")])]),t._v(" "),a("ul",[a("li",[t._v("一般来讲，JIT 编译出来的机器码性能比解释器高")]),t._v(" "),a("li",[t._v("C2 编译器启动时长比 C1 慢，系统稳定执行以后，C2 编译器执行速度远快于 C1 编译器")])]),t._v(" "),a("h3",{attrs:{id:"graal编译器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graal编译器"}},[t._v("#")]),t._v(" Graal编译器")]),t._v(" "),a("ul",[a("li",[t._v("自 JDK10 起，HotSpot 又加入了一个全新的及时编译器：Graal 编译器")]),t._v(" "),a("li",[t._v("编译效果短短几年时间就追评了 C2 编译器，未来可期")]),t._v(" "),a("li",[t._v("目前，带着实验状态标签，需要使用开关参数去激活才能使用")])]),t._v(" "),a("p",[t._v("参数如下：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnlockExperimentalvMOptions")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UseJVMCICompiler")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"aot编译器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aot编译器"}},[t._v("#")]),t._v(" AOT编译器")]),t._v(" "),a("p",[t._v("JDK9 引入了 AOT 编译器（静态提前编译器，Ahead of Time Compiler）。")]),t._v(" "),a("p",[t._v("Java 9 引入了实验性 AOT 编译工具 jaotc。它借助了 Graal 编译器，将所输入的 Java 类文件转换为机器码，并存放至生成的动态共享库之中。")]),t._v(" "),a("p",[t._v("所谓 AOT 编译，是与即时编译相对立的一个概念。我们知道，即时编译指的是在程序的运行过程中，将字节码转换为可在硬件上直接运行的机器码，并部署至托管环境中的过程。而 AOT 编译指的则是，在程序运行之前，便将字节码转换为机器码的过程。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("使用 jaotc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("so\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("最大的好处：Java 虚拟机加载已经预编译成二进制库，可以直接执行。不必等待及时编译器的预热，减少 Java 应用给人带来「第一次运行慢」的不良体验。")]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("破坏了 Java「一次编译，到处运行」，必须为每个不同的硬件，OS 编译对应的发行包")]),t._v(" "),a("li",[t._v("降低了 Java 链接过程的动态性，加载的代码在编译器就必须全部已知")]),t._v(" "),a("li",[t._v("还需要继续优化中，最初只支持 Linux X64 java base")])])])}),[],!1,null,null,null);a.default=r.exports}}]);