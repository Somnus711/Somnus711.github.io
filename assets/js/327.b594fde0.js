(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{706:function(s,t,a){"use strict";a.r(t);var e=a(5),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#认证"}},[s._v("认证")]),t("ul",[t("li",[t("a",{attrs:{href:"#service-accounts"}},[s._v("Service Accounts")])])])]),t("li",[t("a",{attrs:{href:"#授权-rbac"}},[s._v("授权（RBAC）")]),t("ul",[t("li",[t("a",{attrs:{href:"#role"}},[s._v("Role")])]),t("li",[t("a",{attrs:{href:"#clusterrole"}},[s._v("ClusterRole")])]),t("li",[t("a",{attrs:{href:"#rolebinding"}},[s._v("RoleBinding")])]),t("li",[t("a",{attrs:{href:"#clusterrolebinding"}},[s._v("ClusterRoleBinding")])])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#认证"}},[s._v("#")]),s._v(" 认证")]),s._v(" "),t("p",[s._v("所有 Kubernetes 集群有两类用户：由 Kubernetes 管理的 "),t("a",{attrs:{href:"http://docs.kubernetes.org.cn/84.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Service Accounts"),t("OutboundLink")],1),s._v(" （服务账户）和（Users Accounts） 普通账户。")]),s._v(" "),t("p",[s._v("普通账户是假定被外部或独立服务管理的，由管理员分配 keys，用户像使用 Keystone 或 google 账号一样，被存储在包含 usernames 和 passwords 的 list 的文件里。")]),s._v(" "),t("p",[s._v("需要注意：在 Kubernetes 中不能通过 API 调用将普通用户添加到集群中。")]),s._v(" "),t("ul",[t("li",[s._v("普通帐户是针对（人）用户的，服务账户针对 Pod 进程")]),s._v(" "),t("li",[s._v("普通帐户是全局性。在集群所有namespaces中，名称具有惟一性")]),s._v(" "),t("li",[s._v("通常，群集的普通帐户可以与企业数据库同步，新的普通帐户创建需要特殊权限。服务账户创建目的是更轻量化，允许集群用户为特定任务创建服务账户")]),s._v(" "),t("li",[s._v("普通帐户和服务账户的审核注意事项不同")]),s._v(" "),t("li",[s._v("对于复杂系统的配置包，可以包括对该系统的各种组件的服务账户的定义")])]),s._v(" "),t("h3",{attrs:{id:"service-accounts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-accounts"}},[s._v("#")]),s._v(" Service Accounts")]),s._v(" "),t("blockquote",[t("p",[s._v("Service Account Admission Controller")])]),s._v(" "),t("p",[s._v("通过 "),t("a",{attrs:{href:"http://docs.kubernetes.org.cn/144.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Admission Controller"),t("OutboundLink")],1),s._v(" 插件来实现对 pod 修改，它是 apiserver 的一部分。创建或更新 pod 时会同步进行修改 pod。当插件处于激活状态（在大多数发行版中都默认情况）创建或修改 pod 时，会按以下操作执行：")]),s._v(" "),t("ul",[t("li",[s._v("如果 pod 没有设置 ServiceAccount，则将 ServiceAccount 设置为 default")]),s._v(" "),t("li",[s._v("确保 pod 引用的 ServiceAccount 存在，否则将会拒绝请求")]),s._v(" "),t("li",[s._v("如果 pod 不包含任何 ImagePullSecrets，则将 ServiceAccount 的 ImagePullSecrets 会添加到 pod 中，即将 ImagePullSecrets 的验证交给 ServiceAccount，然后 Pod 只和 ServiceAccount 交互")]),s._v(" "),t("li",[s._v("为包含 API 访问的 Token 的 pod 添加了一个 volume")]),s._v(" "),t("li",[s._v("把 volumeSource 添加到安装在 pod 的每个容器中，挂载在 "),t("code",[s._v("/var/run/secrets/kubernetes.io/serviceaccount")])])]),s._v(" "),t("blockquote",[t("p",[s._v("Token Controller")])]),s._v(" "),t("p",[s._v("TokenController 作为 controller-manager 的一部分运行。异步行为:")]),s._v(" "),t("ul",[t("li",[s._v("观察 serviceAccount 的创建，并创建一个相应的 Secret 来允许 API 访问")]),s._v(" "),t("li",[s._v("观察 serviceAccount 的删除，并删除所有相应的 ServiceAccountToken Secret")]),s._v(" "),t("li",[s._v("观察 secret 添加，并确保关联的 ServiceAccount 存在，并在需要时向 secret 中添加一个 Token")]),s._v(" "),t("li",[s._v("观察 secret 删除，并在需要时对应 ServiceAccount 的关联")])]),s._v(" "),t("blockquote",[t("p",[s._v("Service Account Controller")])]),s._v(" "),t("p",[s._v("Service Account Controller 在 namespaces 里管理 ServiceAccount，并确保每个有效的 namespaces 中都存在一个名为 "),t("code",[s._v("default")]),s._v(" 的 ServiceAccount。")]),s._v(" "),t("h2",{attrs:{id:"授权-rbac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#授权-rbac"}},[s._v("#")]),s._v(" 授权（RBAC）")]),s._v(" "),t("p",[s._v("RBAC：基于角色的权限控制。")]),s._v(" "),t("h3",{attrs:{id:"role"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#role"}},[s._v("#")]),s._v(" Role")]),s._v(" "),t("p",[s._v("代表一个角色，会包含一组权限，没有拒绝规则，只是附加允许。它是 Namespace 级别的资源，只能作用与 Namespace 之内。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看已有的角色信息")]),s._v("\nkubectl get role "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" ingress-nginx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" yaml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("配置文件：")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" rbac.authorization.k8s.io/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Role\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app.kubernetes.io/name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ingress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("nginx\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app.kubernetes.io/part-of")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ingress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("nginx\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ingress\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ingress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("nginx\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 规则")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiGroups")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resources")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 权限控制的资源")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" configmaps\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" pods\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" secrets\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" namespaces\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("verbs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以执行的权限")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" get\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiGroups")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resourceNames")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ingress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("controller"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("label"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("nginx\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resources")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" configmaps\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("verbs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" get\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiGroups")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resources")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" configmaps\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("verbs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" create\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br")])]),t("h3",{attrs:{id:"clusterrole"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clusterrole"}},[s._v("#")]),s._v(" ClusterRole")]),s._v(" "),t("p",[s._v("功能与 Role 一样，区别是 ClusterRole 资源类型为集群类型，而 Role 只在 Namespace。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看某个集群角色的信息")]),s._v("\nkubectl get clusterrole view "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" yaml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"rolebinding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rolebinding"}},[s._v("#")]),s._v(" RoleBinding")]),s._v(" "),t("p",[s._v("Role 或 ClusterRole 只是用于制定权限集合，具体作用与什么对象上，需要使用 RoleBinding 来进行绑定。")]),s._v(" "),t("p",[s._v("作用于 Namespace 内，可以将 Role 或 ClusterRole 绑定到 User、Group、Service Account 上。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 rolebinding 信息")]),s._v("\nkubectl get rolebinding --all-namespaces\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定 rolebinding 的配置信息")]),s._v("\nkubectl get rolebinding "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("role_binding_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --all-namespaces "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" yam\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("配置文件：")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" rbac.authorization.k8s.io/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" RoleBinding\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ......")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("roleRef")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定的角色")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiGroup")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" rbac.authorization.k8s.io\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Role\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ingress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("role\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("subjects")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定的资源主体，一般在 Deployment 配置文件会配置一个 ServiceAccount")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ServiceAccount\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ingress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("serviceaccount\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ingress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"clusterrolebinding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clusterrolebinding"}},[s._v("#")]),s._v(" ClusterRoleBinding")]),s._v(" "),t("p",[s._v("与 RoleBinding 相同，但是作用于集群之上，可以绑定到该集群下的任意 User、Group 或 Service Account。")])])}),[],!1,null,null,null);t.default=n.exports}}]);