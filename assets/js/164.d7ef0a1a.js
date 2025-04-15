(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{543:function(t,s,e){"use strict";e.r(s);var a=e(5),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),s("p",[t._v("本内容将介绍在 Linux 环境下安装 Redis。")]),t._v(" "),s("div",{staticClass:"custom-block right"},[s("p",[t._v("2021-12-25 @Young Kbt")])])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#redis概述"}},[t._v("Redis概述")])]),s("li",[s("a",{attrs:{href:"#应用场景"}},[t._v("应用场景")]),s("ul",[s("li",[s("a",{attrs:{href:"#配合关系型数据库做高速缓存"}},[t._v("配合关系型数据库做高速缓存")])]),s("li",[s("a",{attrs:{href:"#多样的数据结构存储持久化数据"}},[t._v("多样的数据结构存储持久化数据")])])])]),s("li",[s("a",{attrs:{href:"#redis安装"}},[t._v("Redis安装")])]),s("li",[s("a",{attrs:{href:"#redis启动"}},[t._v("Redis启动")]),s("ul",[s("li",[s("a",{attrs:{href:"#前台启动-不推荐"}},[t._v("前台启动（不推荐）")])]),s("li",[s("a",{attrs:{href:"#后台启动-推荐"}},[t._v("后台启动（推荐）")])])])]),s("li",[s("a",{attrs:{href:"#redis压力测试"}},[t._v("redis压力测试")])]),s("li",[s("a",{attrs:{href:"#redis基础知识"}},[t._v("Redis基础知识")])]),s("li",[s("a",{attrs:{href:"#关于redis的单线程"}},[t._v("关于Redis的单线程")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"redis概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis概述"}},[t._v("#")]),t._v(" Redis概述")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Redis 是一个开源的 key-value 存储系统")])]),t._v(" "),s("li",[s("p",[t._v("和 Memcached 类似，它支持存储的 value 类型相对更多，包括 "),s("code",[t._v("string")]),t._v("(字符串)、"),s("code",[t._v("list")]),t._v("(链表)、"),s("code",[t._v("set")]),t._v("(集合)、"),s("code",[t._v("zset")]),t._v("(sorted set 有序集合)和 "),s("code",[t._v("hash")]),t._v("（哈希类型）")]),t._v(" "),s("p",[t._v("这些数据类型都支持 push/pop、add/remove 及取交集并集和差集及更丰富的操作，而且这些操作都是 "),s("strong",[t._v("原子性")]),t._v(" 的。")])]),t._v(" "),s("li",[s("p",[t._v("在此基础上，Redis 支持各种不同方式的 "),s("strong",[t._v("排序")])])]),t._v(" "),s("li",[s("p",[t._v("与 memcached 一样，为了保证效率，数据都是 "),s("strong",[t._v("缓存在内存中")])])]),t._v(" "),s("li",[s("p",[t._v("区别的是 Redis 会 "),s("strong",[t._v("周期性")]),t._v(" 的把更新的数据写入磁盘或者把修改操作写入追加的记录文件")])]),t._v(" "),s("li",[s("p",[t._v("并且在此基础上实现了 "),s("strong",[t._v("master-slave(主从)")]),t._v(" 同步")])])]),t._v(" "),s("h2",{attrs:{id:"应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),s("h3",{attrs:{id:"配合关系型数据库做高速缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配合关系型数据库做高速缓存"}},[t._v("#")]),t._v(" 配合关系型数据库做高速缓存")]),t._v(" "),s("ul",[s("li",[t._v("高频次，热门访问的数据，降低数据库 IO")]),t._v(" "),s("li",[t._v("分布式架构，做 session 共享")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225231723.png",alt:"image-20211225231722475"}})]),t._v(" "),s("h3",{attrs:{id:"多样的数据结构存储持久化数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多样的数据结构存储持久化数据"}},[t._v("#")]),t._v(" 多样的数据结构存储持久化数据")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225231740.png",alt:"image-20211225231739782"}})]),t._v(" "),s("h2",{attrs:{id:"redis安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis安装"}},[t._v("#")]),t._v(" Redis安装")]),t._v(" "),s("p",[t._v("Redis 官方网站："),s("a",{attrs:{href:"http://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://redis.io/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("官网下载网站："),s("a",{attrs:{href:"https://redis.io/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://redis.io/download"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("下载 Linux 版本 6.2.1，具体版本根据你的需求。")]),t._v(" "),s("p",[t._v("安装步骤：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("安装 C 语言的编译环境：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装环境")]),t._v("\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" centos-release-scl scl-utils-build devtoolset-8-toolchain gcc-c++\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启 devtoolset-8")]),t._v("\nscl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" devtoolset-8 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("测试 gcc 版本：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("gcc "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("下载 redis-6.2.1.tar.gz 放 /opt 目录")])]),t._v(" "),s("li",[s("p",[t._v("在 /opt 目录下解压，命令如下：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-zxvf")]),t._v(" redis-6.2.1.tar.gz\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("进入目录")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" redis-6.2.1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("执行 "),s("code",[t._v("make")]),t._v(" 命令进行编译")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("可能报错 "),s("code",[t._v("Jemalloc/jemalloc.h：没有那个文件或目录")]),t._v("，解决方法：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("make distclean\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("然后再次执行 "),s("code",[t._v("make")]),t._v(" 即可。")])]),t._v(" "),s("li",[s("p",[t._v("确保 make 编译通过，然后执行安装命令")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("p",[t._v("默认安装目录在 "),s("code",[t._v("usr/local/bin")]),t._v(" 路径下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225232743.png",alt:"image-20210406233231151"}})]),t._v(" "),s("h2",{attrs:{id:"redis启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis启动"}},[t._v("#")]),t._v(" Redis启动")]),t._v(" "),s("h3",{attrs:{id:"前台启动-不推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前台启动-不推荐"}},[t._v("#")]),t._v(" 前台启动（不推荐）")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("/usr/local/bin/redis-server\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225232950.png",alt:"image-20211225232949146"}})]),t._v(" "),s("h3",{attrs:{id:"后台启动-推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后台启动-推荐"}},[t._v("#")]),t._v(" 后台启动（推荐）")]),t._v(" "),s("p",[t._v("redis 默认不是后台启动，我们需要修改配置文件，一般我们在 /usr/local/bin 目录下，创建 myredis 目录，存放我们的配置文件")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/bin\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" myredis   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建目录")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拷贝配置文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /opt/redis-6.2.1/redis.conf /usr/local/bin \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改配置保证可以后台应用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" redis.conf\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("找到 daemonize，大概在 128 行左右，我们可以利用搜索功能")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("/daemonize   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 搜索功能")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225233326.png",alt:"image-20210406234601005"}})]),t._v(" "),s("p",[t._v("daemonize 是守护线程，默认是 no，无法进行守护，也就是无法后台启动，所有我们需要改为 yes。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("daemonize 设置 yes 或者 no 区别")])])]),t._v(" "),s("ul",[s("li",[t._v("Redis 采用的是单进程多线程的模式。当 redis.conf 中选项 daemonize 设置成 yes 时，代表开启守护进程模式。在该模式下，Redis 会在后台运行，并将进程 pid 号写入至 redis.conf 选项 pidfile 设置的文件中，此时 Redis 将一直运行，除非手动 kill 该进程")]),t._v(" "),s("li",[t._v("当 daemonize 选项设置成 no 时，当前界面将进入 Redis 的命令行界面，exit 强制退出或者关闭连接工具（putty，xshell 等）都会导致 Redis 进程退出")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("启动连接")])])]),t._v(" "),s("p",[t._v("启动时，我们告诉 Redis 启动使用的配置文件：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/bin\n\nredis-server myredis/redis.conf\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("此时 Redis 服务已经启动成功，那么现在我们需要连接服务：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("redis-cli "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 多个端口多个 -p")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("观察地址的变化，如果连接成功，是直接连上的，redis 默认端口号 6379")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225233731.png",alt:"image"}})]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v("\nPONG   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回这个代表连接成功")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("blockquote",[s("p",[s("strong",[t._v("关闭连接")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("内部关闭连接")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),t._v("\nnot connected"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("外部关闭连接")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("redis-cli "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("多实例关闭，指定端口关闭：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("redis-cli "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6380")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ......")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])]),t._v(" "),s("h2",{attrs:{id:"redis压力测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis压力测试"}},[t._v("#")]),t._v(" redis压力测试")]),t._v(" "),s("p",[t._v("Redis-benchmark 是官方自带的 Redis 性能测试工具，可以有效的测试 Redis 服务的性能。")]),t._v(" "),s("p",[t._v("Redis 性能测试工具可选参数如下所示：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("序号")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("选项")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("-h")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("指定服务器主机名")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("-p")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("指定服务器端口")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("6379")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("-s")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("指定服务器 socket")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("-c")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("指定并发连接数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("50")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("-n")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("指定请求数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("10000")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("-d")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("以字节的形式指定 SET/GET 值的数据大小")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("2")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("-k")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1=keep alive 0=reconnect")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("-r")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("SET/GET/INCR 使用随机 key，SADD 使用随机值")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("-P")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("通过管道传输  numreq 请求")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("-q")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("强制退出 redis。仅显示 query/sec 值")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("--csv")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("以 CSV 格式输出")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("12")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("-l")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("生成循环，永久执行测试")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("-t")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("仅运行以逗号分隔的测试命令列表。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("14")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("-I")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Idle 模式。仅打开 N 个 idle 连接并等待。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 测试：100 个并发连接，100000 个请求，检测 host 为 localhost 端口为 6379 的 Redis 服务器性能")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v("  /usr/local/bin\nredis-benchmark "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-h")]),t._v(" localhost "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("参考资料：https://www.runoob.com/redis/redis-benchmarks.html")]),t._v(" "),s("h2",{attrs:{id:"redis基础知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis基础知识"}},[t._v("#")]),t._v(" Redis基础知识")]),t._v(" "),s("p",[t._v("Redis 默认有 16 个数据库，类似数组下标从零开始，初始默认使用 "),s("strong",[t._v("0 号库")]),t._v("。每个数据库的数据不会互相影响，名字相同也不会影响。")]),t._v(" "),s("p",[t._v("查看 redis.conf ，里面有默认的配置")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set the number of databases. The default database is DB 0, you can select")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a different one on a per-connection basis using SELECT <dbid> where")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dbid is a number between 0 and 'databases'-1")]),t._v("\ndatabases "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("code",[t._v("select")]),t._v(" 命令切换数据库")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\nOK\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:6379"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不同的库可以存不同的数据")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("dbsize 查看当前数据库的 key 的数量")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\nOK\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:6379"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" DBSIZE\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:6379"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nOK\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" DBSIZE\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" keys * "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看具体的 key")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"counter:__rand_int__"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mylist"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"k1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myset:__rand_int__"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key:__rand_int__"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[s("strong",[t._v("flushdb 清空当前库")]),t._v("，慎用。")]),t._v(" "),s("p",[s("strong",[t._v("flushall 清空全部的库")]),t._v("，慎用。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" DBSIZE\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" FLUSHDB\nOK\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:637"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("9")]),t._v(">")]),t._v(" DBSIZE\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"关于redis的单线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于redis的单线程"}},[t._v("#")]),t._v(" 关于Redis的单线程")]),t._v(" "),s("p",[t._v("Redis 是单线程 + 多路 IO 复用技术，多路指的是多个网络连接客户端，复用指的是复用同一个线程（单进程），多路复用是指使用一个线程来检查多个文件描述符（Socket）的就绪状态（监听多个客户端），比如调用 select 和 epoll 函数，传入多个文件描述符，如果有一个文件描述符就绪，则返回，否则阻塞直到超时。得到就绪状态后进行真正的操作，可以在同一个线程里执行，也可以启动线程执行（比如使用线程池）。")]),t._v(" "),s("p",[t._v("多路 IO 复用技术也就是一个线程监听多个客户端，哪个客户端准备好了读写操作，就先与那个客户端进行连接。解决了单线程按顺序排队问题：排在第一个客户端卡住了，导致后面无法执行。")]),t._v(" "),s("p",[t._v("注：6.x 版本有多线程，一般用不到，单线程足够应对。")]),t._v(" "),s("p",[t._v("我们首先要明白，Redis 很快，官方表示，因为 Redis 是基于内存的操作，CPU 不是 Redis 的瓶颈，Redis 的瓶颈最有可能是机器内存的大小或者网络带宽。既然单线程容易实现，而且 CPU 不会成为瓶颈，那就顺理成章地采用单线程的方案了。")]),t._v(" "),s("p",[t._v("Redis 采用的是基于内存的采用的是单进程单线程模型的 KV 数据库，由 C 语言编写，官方提供的数据是可以达到 100000+ 的 QPS（每秒内查询次数）。这个数据不比采用单进程多线程的同样基于内存的 KV 数据库 Memcached 差。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Redis 为什么这么快？")])])]),t._v(" "),s("p",[t._v("Redis 核心就是如果我的数据全都在内存里，我单线程的去操作就是效率最高的，为什么呢，因为多线程的本质就是 CPU 模拟出来多个线程的情况，这种模拟出来的情况就有一个代价，就是上下文的切换，对于一个内存的系统来说，它没有上下文的切换就是效率最高的。Redis 用单个 CPU 绑定一块内存的数据，然后针对这块内存的数据进行多次读写的时候，都是在一个 CPU 上完成的，所以它是单线程处理这个事。在内存的情况下，这个方案就是最佳方案。")]),t._v(" "),s("p",[t._v("因为一次 CPU 上下文的切换大概在 1500ns 左右。从内存中读取 1MB 的连续数据，耗时大约为 250us，假设 1MB 的数据由多个线程读取了 1000 次，那么就有 1000 次时间上下文的切换，那么就有 "),s("code",[t._v("1500ns * 1000 = 1500us")]),t._v("，单线程的读完 1MB 数据才 250us，而光时间上下文的切换就用了 1500us 了。")])])}),[],!1,null,null,null);s.default=n.exports}}]);