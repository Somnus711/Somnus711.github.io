(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{539:function(s,t,a){"use strict";a.r(t);var e=a(5),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#错误日志"}},[s._v("错误日志")])]),t("li",[t("a",{attrs:{href:"#二进制日志"}},[s._v("二进制日志")]),t("ul",[t("li",[t("a",{attrs:{href:"#概述"}},[s._v("概述")])]),t("li",[t("a",{attrs:{href:"#日志格式"}},[s._v("日志格式")])]),t("li",[t("a",{attrs:{href:"#日志读取"}},[s._v("日志读取")])]),t("li",[t("a",{attrs:{href:"#日志删除"}},[s._v("日志删除")])])])]),t("li",[t("a",{attrs:{href:"#查询日志"}},[s._v("查询日志")])]),t("li",[t("a",{attrs:{href:"#慢查询日志"}},[s._v("慢查询日志")]),t("ul",[t("li",[t("a",{attrs:{href:"#文件位置和格式"}},[s._v("文件位置和格式")])]),t("li",[t("a",{attrs:{href:"#日志的读取"}},[s._v("日志的读取")])])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"错误日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误日志"}},[s._v("#")]),s._v(" 错误日志")]),s._v(" "),t("p",[s._v("错误日志是 MySQL 中最重要的日志之一，它记录了当 "),t("code",[s._v("mysqld")]),s._v(" 启动和停止时，以及服务器在运行过程中发生任何严重错误时的相关信息。当数据库出现任何故障导致无法正常使用时，可以首先查看此日志。")]),s._v(" "),t("p",[s._v("该日志是默认开启的，默认存放目录为 MySQL 的数据目录："),t("code",[s._v("var/lib/mysql")])]),s._v(" "),t("p",[s._v("默认的日志文件名为 "),t("code",[s._v("hostname.err")]),s._v("（hostname 是主机名）。")]),s._v(" "),t("p",[s._v("查看日志位置指令 ：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("show variables like "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'log_error%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024153338.png",alt:""}})]),s._v(" "),t("p",[s._v("查看日志内容：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /var/lib/mysql/xaxh-server.err\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024153350.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"二进制日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二进制日志"}},[s._v("#")]),s._v(" 二进制日志")]),s._v(" "),t("h3",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("p",[s._v("二进制日志（BINLOG）记录了所有的 DDL（数据定义语言）语句和 DML（数据操纵语言）语句，但是 "),t("strong",[s._v("不包括数据查询语句")]),s._v("。此日志对于灾难时的数据恢复起着极其重要的作用，MySQL 的主从复制，就是通过该 binlog 实现的。")]),s._v(" "),t("p",[s._v("二进制日志，默认情况下是没有开启的，需要到 MySQL 的配置文件中开启，并配置 MySQL 日志的格式。")]),s._v(" "),t("p",[s._v("配置文件位置: "),t("code",[s._v("/usr/my.cnf")])]),s._v(" "),t("p",[s._v("日志存放位置: 配置时，给定了文件名但是没有指定路径，日志默认写入 MySQL 的数据目录。")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置开启 binlog 日志，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志的文件前缀为 mysqlbin")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成的文件名如: mysqlbin.000001，mysqlbin.000002")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("log_bin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("mysqlbin")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置二进制日志的格式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("binlog_format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("STATEMENT")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"日志格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日志格式"}},[s._v("#")]),s._v(" 日志格式")]),s._v(" "),t("p",[t("strong",[s._v("STATEMENT")])]),s._v(" "),t("p",[s._v("该日志格式在日志文件中记录的都是 SQL 语句（statement），每一条对数据进行修改的 SQL 都会记录在日志文件中，通过 MySQL 提供的 mysqlbinlog 工具，可以清晰的查看到每条语句的文本。")]),s._v(" "),t("p",[s._v("主从复制的时候，从库（slave）会将日志解析为原文本，并在从库重新执行一次。")]),s._v(" "),t("p",[t("strong",[s._v("ROW")])]),s._v(" "),t("p",[s._v("该日志格式在日志文件中记录的是每一行的数据变更，而不是记录 SQL 语句。")]),s._v(" "),t("p",[s._v("比如，执行 SQL 语句："),t("code",[s._v("update tb_book set status='1'")])]),s._v(" "),t("p",[s._v("如果是 STATEMENT 日志格式，在日志中会记录一行 SQL 文件；")]),s._v(" "),t("p",[s._v("如果是 ROW，由于是对全表进行更新，也就是每一行记录都会发生变更，ROW 格式的日志中会记录每一行的数据变更。")]),s._v(" "),t("p",[t("strong",[s._v("MIXED")])]),s._v(" "),t("p",[s._v("这是目前 MySQL 默认的日志格式，即混合了 STATEMENT 和 ROW 两种格式。")]),s._v(" "),t("p",[s._v("默认情况下采用 STATEMENT，但是在一些特殊情况下采用 ROW 来进行记录。")]),s._v(" "),t("p",[s._v("MIXED 格式能尽量利用两种模式的优点，而避开他们的缺点。")]),s._v(" "),t("h3",{attrs:{id:"日志读取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日志读取"}},[s._v("#")]),s._v(" 日志读取")]),s._v(" "),t("p",[s._v("由于日志以二进制方式存储，不能直接读取，需要用 mysqlbinlog 工具来查看，语法如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqlbinlog log-file；\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("查看 STATEMENT 格式日志")])]),s._v(" "),t("p",[s._v("执行插入语句：")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" tb_book "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Lucene'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2088-05-01'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看日志文件 ：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024153401.png",alt:""}})]),s._v(" "),t("p",[t("code",[s._v("mysqlbin.index")]),s._v(": 该文件是日志索引文件，记录日志的文件名。")]),s._v(" "),t("p",[t("code",[s._v("mysqlbing.000001")]),s._v("：日志文件。")]),s._v(" "),t("p",[s._v("查看日志内容：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqlbinlog mysqlbing.000001；\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024153410.png",alt:""}})]),s._v(" "),t("p",[t("strong",[s._v("查看 ROW 格式日志")])]),s._v(" "),t("p",[s._v("配置:")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置开启 binlog 日志， ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志的文件前缀为 mysqlbin")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成的文件名如 : mysqlbin.000001，mysqlbin.000002")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("log_bin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("mysqlbin")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置二进制日志的格式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("binlog_format")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("ROW")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("插入数据 :")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" tb_book "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SpringCloud实战'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2088-05-05'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果日志格式是 ROW，直接查看数据，是查看不懂的，可以在 mysqlbinlog 后面加上参数 "),t("code",[s._v("-vv")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqlbinlog "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-vv")]),s._v(" mysqlbin.000002 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024153418.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"日志删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日志删除"}},[s._v("#")]),s._v(" 日志删除")]),s._v(" "),t("p",[s._v("对于比较繁忙的系统，由于每天生成日志量大，这些日志如果长时间不清楚，将会占用大量的磁盘空间。下面我们将会讲解几种删除日志的常见方法：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("方式一")])])]),s._v(" "),t("p",[s._v("通过 "),t("code",[s._v("Reset Master")]),s._v(" 指令删除全部 binlog 日志，删除之后，日志编号，将从 xxxx.000001 重新开始 。")]),s._v(" "),t("p",[s._v("查询之前，先查询下日志文件：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024153440.png",alt:""}})]),s._v(" "),t("p",[s._v("执行删除日志指令：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Reset Master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行之后，查看日志文件：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024153502.png",alt:""}})]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("方式二")])])]),s._v(" "),t("p",[s._v("执行指令 "),t("code",[s._v("purge master logs to 'mysqlbin.******'")]),s._v("，该命令将删除 "),t("code",[s._v("******")]),s._v(" 编号之前的所有日志。")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("方式三")])])]),s._v(" "),t("p",[s._v("执行指令："),t("code",[s._v("purge master logs before 'yyyy-mm-dd hh24:mi:ss'")])]),s._v(" "),t("p",[s._v("该命令将删除日志为 "),t("code",[s._v("yyyy-mm-dd hh24:mi:ss")]),s._v(" 之前产生的所有日志。")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("方式四")])])]),s._v(" "),t("p",[s._v("设置参数 "),t("code",[s._v("--expire_logs_days=#")]),s._v("，此参数的含义是设置日志的过期天数，过了指定的天数后日志将会被自动删除，这样将有利于减少 DBA 管理日志的工作量。")]),s._v(" "),t("p",[s._v("配置如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024153509.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"查询日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询日志"}},[s._v("#")]),s._v(" 查询日志")]),s._v(" "),t("p",[s._v("查询日志中记录了客户端的所有操作语句，而二进制日志不包含查询数据的 SQL 语句。")]),s._v(" "),t("p",[s._v("默认情况下，查询日志是未开启的。如果需要开启查询日志，可以设置以下配置：")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#该选项用来开启查询日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可选值：0 或者 1 ；0 代表关闭， 1 代表开启 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("general_log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置日志的文件名，如果没有指定，默认的文件名为 host_name.log ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("general_log_file")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("file_name")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("在 MySQL 的配置文件 "),t("code",[s._v("/usr/my.cnf")]),s._v(" 中配置如下内容：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024153516.png",alt:""}})]),s._v(" "),t("p",[s._v("配置完毕之后，在数据库执行以下操作：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tb_book"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tb_book "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" tb_book "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lucene入门指南'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tb_book "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("执行完毕之后， 再次来查询日志文件：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024153547.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"慢查询日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#慢查询日志"}},[s._v("#")]),s._v(" 慢查询日志")]),s._v(" "),t("p",[s._v("慢查询日志记录了所有执行时间超过参数 long_query_time 设置值并且扫描记录数不小于 min_examined_row_limit 的所有的 SQL 语句的日志。")]),s._v(" "),t("p",[s._v("long_query_time 默认为 10 秒，最小为 0，精度可以到微秒。")]),s._v(" "),t("h3",{attrs:{id:"文件位置和格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件位置和格式"}},[s._v("#")]),s._v(" 文件位置和格式")]),s._v(" "),t("p",[s._v("慢查询日志默认是关闭的。可以通过两个参数来控制慢查询日志：")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该参数用来控制慢查询日志是否开启")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可取值： 1 和 0 ， 1 代表开启， 0 代表关闭")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("slow_query_log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1 ")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该参数用来指定慢查询日志的文件名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("slow_query_log_file")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("slow_query.log")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该选项用来配置查询的时间限制")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#超过这个时间将认为值慢查询，将需要进行日志记录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认10s")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("long_query_time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("10")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"日志的读取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日志的读取"}},[s._v("#")]),s._v(" 日志的读取")]),s._v(" "),t("p",[s._v("和错误日志、查询日志一样，慢查询日志记录的格式也是纯文本，可以被直接读取。")]),s._v(" "),t("p",[s._v("1）查询 long_query_time 的值。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024153558.png",alt:""}})]),s._v(" "),t("p",[s._v("2）执行查询操作")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" title"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("num "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tb_item "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024153703.png",alt:""}})]),s._v(" "),t("p",[s._v("由于该语句执行时间很短，为 0s，所以不会记录在慢查询日志中。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tb_item "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" title "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%阿尔卡特 (OT-927) 炭黑 联通3G手机 双卡双待165454%'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024153714.png",alt:""}})]),s._v(" "),t("p",[s._v("该 SQL 语句，执行时长为 26.77s，超过 10s，所以会记录在慢查询日志文件中。")]),s._v(" "),t("p",[s._v("3）查看慢查询日志文件")]),s._v(" "),t("p",[s._v("直接通过 cat 指令查询该日志文件：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024153723.png",alt:""}})]),s._v(" "),t("p",[s._v("如果慢查询日志内容很多，直接查看文件，比较麻烦。")]),s._v(" "),t("p",[s._v("这个时候可以借助于 MySQL 自带的 mysqldumpslow 工具，来对慢查询日志进行分类汇总。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/MySQL/20211024153732.png",alt:""}})])])}),[],!1,null,null,null);t.default=n.exports}}]);