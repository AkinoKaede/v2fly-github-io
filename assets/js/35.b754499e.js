(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{394:function(a,s,t){"use strict";t.r(s);var e=t(18),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"配置开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置开发环境"}},[a._v("#")]),a._v(" 配置开发环境")]),a._v(" "),t("p",[a._v("V2Ray 使用 "),t("a",{attrs:{href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Golang"),t("OutboundLink")],1),a._v(" 作为主要编程语言。团队发布流程上使用 "),t("a",{attrs:{href:"https://bazel.build/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Bazel"),t("OutboundLink")],1),a._v("作为构建工具。推荐使用 Mac OS 或 Linux 进行开发，少量的脚本可能无法在 Windows 上正常运行。")]),a._v(" "),t("h2",{attrs:{id:"前序工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前序工作"}},[a._v("#")]),a._v(" 前序工作")]),a._v(" "),t("ul",[t("li",[a._v("安装 Golang: "),t("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[a._v("golang.org/doc/install"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("安装 Bazel: "),t("a",{attrs:{href:"https://docs.bazel.build/versions/master/install.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("docs.bazel.build/install"),t("OutboundLink")],1),a._v(" （手工/脚本编译方式无需）")])]),a._v(" "),t("h2",{attrs:{id:"拉取-v2ray-源代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取-v2ray-源代码"}},[a._v("#")]),a._v(" 拉取 V2Ray 源代码")]),a._v(" "),t("div",{staticClass:"language-go extra-class"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("go")]),a._v(" get "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("u v2ray"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("core"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\n")])])]),t("p",[a._v("注意在无法正常访问 google 的网络环境，这个命令无法完成，需要先配置好一个本地的 HTTP 代理服务器，并配置本地环境变量，比如")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("http_proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://localhost:1080\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("https_proxy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://localhost:1080\n")])])]),t("p",[a._v("go 将会使用本地的 1080 端口的 HTTP 代理进行源码拉取。")]),a._v(" "),t("h2",{attrs:{id:"手工构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手工构建"}},[a._v("#")]),a._v(" 手工构建")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOPATH"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/src/v2ray.com/core/main\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CGO_ENABLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" go build -o "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/v2ray -ldflags "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-s -w"')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOPATH"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/src/v2ray.com/core/infra/control/main\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CGO_ENABLED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" go build -o "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/v2ctl -tags confonly -ldflags "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-s -w"')]),a._v("\n")])])]),t("p",[a._v("以上命令在当前用户的"),t("code",[a._v("$HOME")]),a._v("目录下生成刚新构建的"),t("code",[a._v("v2ray")]),a._v(" 、"),t("code",[a._v("v2ctl")]),a._v("执行文件，即可正常使用。")]),a._v(" "),t("p",[a._v("构建其他 CPU 架构、其他系统（windows/macos）的过程属于 golang 的交叉编译流程，主要是控制"),t("code",[a._v("GOOS")]),a._v("/"),t("code",[a._v("GOARCH")]),a._v("两个变量，这里不再重复，查阅 golang 相关文档。")]),a._v(" "),t("h2",{attrs:{id:"脚本构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚本构建"}},[a._v("#")]),a._v(" 脚本构建")]),a._v(" "),t("p",[a._v("以上手工构建的只是 v2ray 可执行程序本身，发行包 zip 内还包含了地址库等其他文件。使用打包脚本可方便地制作出的发布包。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://raw.githubusercontent.com/v2ray/v2ray-core/master/release/user-package.sh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("755")]),a._v(" user-package.sh\n")])])]),t("p",[a._v("以上脚本直接执行即可在当前目录生成类似"),t("code",[a._v("v2ray-custom-linux-amd64-20190710-000000.zip")]),a._v("的文件，即为发布包。")]),a._v(" "),t("p",[a._v("这个脚本可用一些参数编译出自行定制的发布包：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("windows")]),a._v(" 构建 windows 版本的发布包")]),a._v(" "),t("li",[t("code",[a._v("darwin")]),a._v(" 构建 darwin（MacOS）版本的发布包")]),a._v(" "),t("li",[t("code",[a._v("tgz")]),a._v(" 最后打包成"),t("code",[a._v("tar.gz")]),a._v("而不是 zip 格式")]),a._v(" "),t("li",[t("code",[a._v("386")]),a._v(" 构建成 32 位程序")]),a._v(" "),t("li",[t("code",[a._v("arm")]),a._v(" 构建适合 arm 架构 CPU 的程序，arm arm64")]),a._v(" "),t("li",[t("code",[a._v("mips")]),a._v(" 同上，参照 golang 的交叉编译文档")]),a._v(" "),t("li",[t("code",[a._v("nodat")]),a._v(" 不要包含地址库"),t("code",[a._v("geoip.dat")]),a._v(" "),t("code",[a._v("geosite.dat")]),a._v("， 可以减小发布包的大小")]),a._v(" "),t("li",[t("code",[a._v("noconf")]),a._v(" 不要包括范例 json, systemd/systemv 等配置文件")]),a._v(" "),t("li",[t("code",[a._v("nosource")]),a._v(" 不要执行"),t("code",[a._v("go get ...")]),a._v("，避免已经拉取到本地的 v2ray 源码被覆盖")])]),a._v(" "),t("p",[a._v("以上参数没有次序要求，只需要按需传给脚本，比如构建一个适合 windows 32 位，不带地址库，不带样例配置的发布包：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./user-package.sh windows "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("386")]),a._v(" nodat noconf\n")])])]),t("p",[a._v("脚本编译的 v2ray，其启动信息会变成用户编译的时间，以做区分：")]),a._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("V2Ray 4.20.0 (user) 20190710-010000\nA unified platform for anti-censorship.\n")])])]),t("p",[a._v("用户还可修改脚本内的信息，定制属于自己的版本。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CODENAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BUILDNAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NOW")]),a._v("\n")])])]),t("h2",{attrs:{id:"自动构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动构建"}},[a._v("#")]),a._v(" 自动构建")]),a._v(" "),t("p",[a._v("bazel 构建工具主要是发布团队使用。")]),a._v(" "),t("p",[a._v("如果只需要构建某个特定平台的安装包，如 Linux / AMD64:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GOPATH")]),a._v("/src/v2ray.com/core\nbazel build --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(" --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SPWD"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PWD")]),a._v(" --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GOPATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOPATH"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GOCACHE"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOCACHE"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" --spawn_strategy "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" //release:v2ray_linux_amd64_package\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Output: bazel-bin/release/v2ray-linux-64.zip")]),a._v("\n")])])]),t("p",[a._v("构建所有安装包:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GOPATH")]),a._v("/src/v2ray.com/core\nbazel build --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(" --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SPWD"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PWD")]),a._v(" --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GOPATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOPATH"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" --action_env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GOCACHE"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOCACHE"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" --spawn_strategy "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" //release:all\n")])])]),t("h2",{attrs:{id:"安装构建完成的安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装构建完成的安装包"}},[a._v("#")]),a._v(" 安装构建完成的安装包")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GOPATH")]),a._v("/src/v2ray.com/core/release/install-release.sh --local "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path/to/zip/file"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);