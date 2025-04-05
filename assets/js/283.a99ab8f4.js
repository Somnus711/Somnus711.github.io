(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{661:function(i,r,t){"use strict";t.r(r);var v=t(5),e=Object(v.a)({},(function(){var i=this,r=i._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[i._v("笔记")]),i._v(" "),r("p",[i._v("如果你需要一个强大的和高度可定制的身份验证和访问控制框架，那么 Spring Security 一定能满足你。")]),i._v(" "),r("div",{staticClass:"custom-block right"},[r("p",[i._v("2021-12-25 @Young Kbt")])])]),i._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#简介"}},[i._v("简介")])]),r("li",[r("a",{attrs:{href:"#历史"}},[i._v("历史")])]),r("li",[r("a",{attrs:{href:"#同款产品对比"}},[i._v("同款产品对比")]),r("ul",[r("li",[r("a",{attrs:{href:"#spring-security"}},[i._v("Spring Security")])]),r("li",[r("a",{attrs:{href:"#shiro"}},[i._v("Shiro")])])])]),r("li",[r("a",{attrs:{href:"#模块划分"}},[i._v("模块划分")])])])]),r("p"),i._v(" "),r("h2",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[i._v("#")]),i._v(" 简介")]),i._v(" "),r("p",[i._v("Spring 是非常流行和成功的 Java 应用开发框架，Spring Security 正是 Spring 家族中的成员。Spring Security 基于 Spring 框架，提供了一套 Web 应用安全性的完整解决方案。")]),i._v(" "),r("p",[i._v("正如你可能知道的关于安全方面的两个主要区域是「认证」和「授权」（或者访问控制），一般来说，Web 应用的安全性包括用户认证（Authentication）和用户授权（Authorization）两个部分，这两点也是 Spring Security 重要核心功能。")]),i._v(" "),r("ul",[r("li",[r("p",[i._v("用户认证指的是：验证某个用户是否为系统中的合法主体，也就是说用户能否访问该系统。用户认证一般要求用户提供用户名和密码。系统通过校验用户名和密码来完成认证过程。"),r("strong",[i._v("通俗点说就是系统认为用户是否能登录")])])]),i._v(" "),r("li",[r("p",[i._v("用户授权指的是验证某个用户是否有权限执行某个操作。在一个系统中，不同用户所具有的权限是不同的。比如对一个文件来说，有的用户只能进行读取，而有的用户可以进行修改。一般来说，系统会为不同的用户分配不同的角色，而每个角色则对应一系列的权限。"),r("strong",[i._v("通俗点讲就是系统判断用户是否有权限去做某些事情")])])])]),i._v(" "),r("h2",{attrs:{id:"历史"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#历史"}},[i._v("#")]),i._v(" 历史")]),i._v(" "),r("p",[i._v("「Spring Security 开始于 2003 年年底」，「spring 的 acegi 安全系统」。起因是 Spring 开发者邮件列表中的一个问题，有人提问是否考虑提供一个基于 spring 的安全实现。")]),i._v(" "),r("p",[i._v("Spring Security 以「The Acegi Secutity System for Spring」的名字始于 2013 年晚些时候。一个问题提交到 Spring 开发者的邮件列表，询问是否已经有考虑一个机遇 Spring 的安全性社区实现。那时候 Spring 的社区相对较小（相对现在）。实际上 Spring 自己在 2013 年只是一个存在于 ScourseForge 的项目，这个问题的回答是一个值得研究的领域，虽然目前时间的缺乏组织了我们对它的探索。")]),i._v(" "),r("p",[i._v("考虑到这一点，一个简单的安全实现建成但是并没有发布。几周后，Spring 社区的其他成员询问了安全性，这次这个代码被发送给他们。其他几个请求也跟随而来。到 2014 年一月大约有 20 万人使用了这个代码。这些创业者的人提出一个 SourceForge 项目，这是在 2004 三月正式成立。")]),i._v(" "),r("p",[i._v("在早些时候，这个项目没有任何自己的验证模块，身份验证过程依赖于容器管理的安全性和 Acegi 安全性。而不是专注于授权。开始的时候这很适合，但是越来越多的用户请求额外的容器支持。容器特定的认证领域接口的基本限制变得清晰。还有一个相关的问题增加新的容器的路径，这是最终用户的困惑和错误配置的常见问题。")]),i._v(" "),r("p",[i._v("Acegi 安全特定的认证服务介绍。大约一年后，Acegi 安全正式成为了 Spring 框架的子项目。1.0.0 最终版本是出版于 2006，在超过两年半的大量生产的软件项目和数以百计的改进和积极利用社区的贡献。 Acegi 安全 2007 年底正式成为了 Spring 组合项目，更名为「Spring Security」。")]),i._v(" "),r("h2",{attrs:{id:"同款产品对比"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#同款产品对比"}},[i._v("#")]),i._v(" 同款产品对比")]),i._v(" "),r("h3",{attrs:{id:"spring-security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-security"}},[i._v("#")]),i._v(" Spring Security")]),i._v(" "),r("p",[i._v("Spring 技术栈的组成部分。其特点：")]),i._v(" "),r("ul",[r("li",[r("p",[i._v("和 Spring 无缝整合")])]),i._v(" "),r("li",[r("p",[i._v("全面的权限控制")])]),i._v(" "),r("li",[r("p",[i._v("专门为 Web 开发而设计")]),i._v(" "),r("ul",[r("li",[i._v("旧版本不能脱离 Web 环境使用")]),i._v(" "),r("li",[i._v("新版本对整个框架进行了分层抽取，分成了核心模块和 Web 模块。单独 引入核心模块就可以脱离 Web 环境")])])]),i._v(" "),r("li",[r("p",[i._v("重量级")])])]),i._v(" "),r("h3",{attrs:{id:"shiro"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shiro"}},[i._v("#")]),i._v(" Shiro")]),i._v(" "),r("p",[i._v("Apache 旗下的轻量级权限控制框架。其特点：")]),i._v(" "),r("ul",[r("li",[i._v("轻量级。Shiro 主张的理念是把复杂的事情变简单。针对对性能有更高要求的互联网应用有更好表现")]),i._v(" "),r("li",[i._v("通用性。\n"),r("ul",[r("li",[i._v("好处：不局限于 Web 环境，可以脱离 Web 环境使用")]),i._v(" "),r("li",[i._v("缺陷：在 Web 环境下一些特定的需求需要手动编写代码定制")])])])]),i._v(" "),r("p",[i._v("Spring Security 是 Spring 家族中的一个安全管理框架，实际上，在 Spring Boot 出现之前，Spring Security 就已经发展了多年了，但是使用的并不多，安全管理这个领域，一直是 Shiro 的天下。")]),i._v(" "),r("p",[i._v("相对于 Shiro，在 SSM 中整合 Spring Security 都是比较麻烦的操作，所以 Spring  Security 虽然功能比 Shiro 强大，但是使用反而没有 Shiro 多（Shiro 虽然功能没有 Spring Security 多，但是对于大部分项目而言，Shiro 也够用了）。")]),i._v(" "),r("p",[i._v("自从有了 Spring Boot 之后，Spring Boot 对于 Spring Security 提供了自动化配置方案，可以使用更少的配置来使用 Spring Security。")]),i._v(" "),r("p",[i._v("因此，一般来说，常见的安全管理技术栈的组合是这样的：")]),i._v(" "),r("ul",[r("li",[i._v("SSM + Shiro")]),i._v(" "),r("li",[i._v("Spring Boot/Spring Cloud + Spring Security")])]),i._v(" "),r("p",[r("strong",[i._v("以上只是一个推荐的组合而已，如果单纯从技术上来说，无论怎么组合，都是可以运行的。")])]),i._v(" "),r("h2",{attrs:{id:"模块划分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#模块划分"}},[i._v("#")]),i._v(" 模块划分")]),i._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/spring/security/20211225011429.png",alt:"image-20211225011425406"}})])])}),[],!1,null,null,null);r.default=e.exports}}]);