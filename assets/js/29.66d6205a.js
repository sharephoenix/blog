(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{211:function(a,s,t){"use strict";t.r(s);var e=t(6),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"j2objc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#j2objc","aria-hidden":"true"}},[a._v("#")]),a._v(" j2objc")]),a._v(" "),t("h2",{attrs:{id:"什么是-j2objc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-j2objc","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是 j2objc?")]),a._v(" "),t("p",[a._v("j2objc 是 google 研发，可以将 java 的逻辑代码翻译成 oc 代码的工具，可以实现 android ios 网络，数据库等服务的，代码公用。")]),a._v(" "),t("h2",{attrs:{id:"j2bojc-安装准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#j2bojc-安装准备","aria-hidden":"true"}},[a._v("#")]),a._v(" j2bojc 安装准备")]),a._v(" "),t("p",[a._v("将 j2objc 下载到本地，并配置好环境变量")]),a._v(" "),t("h2",{attrs:{id:"编译脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译脚本","aria-hidden":"true"}},[a._v("#")]),a._v(" 编译脚本")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# https://stackoverflow.com/questions/29365645/how-to-translate-an-entire-folder-or-package-from-java-to-objective-c")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" -f "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Users/apple/Library/j2objc-2.3/j2objc"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"J2OBJC_HOME is not correctly defined, currently set to '"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${J2OBJC_HOME}")]),a._v("'\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("exit")]),a._v(" 1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nexcommand"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Users/apple/Library/j2objc-2.3/j2objc"')]),a._v("\njavaSource"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Users/apple/MyClientRemote/j2objc/CocoaPodsTest/CocoaPodsTest/JavaSource/src"')]),a._v("\nresultSource"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Users/apple/MyClientRemote/j2objc/CocoaPodsTest/CocoaPodsTest/JavaSource/src"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"start"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" /Users/apple/Library/j2objc-2.3/\nj2objc -h\n\nj2objc -d "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${resultSource}")]),a._v("/oc -sourcepath "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${javaSource}")]),a._v("  --swift-friendly \\\n-classpath "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$J2OBJC")]),a._v("/lib/javax-inject.jar \\\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("javaSource"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" -name "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'*.java'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${resultSource}")]),a._v("/oc\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"finish"')]),a._v("\n")])])]),t("h2",{attrs:{id:"demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/sharephoenix/j2objc",target:"_blank",rel:"noopener noreferrer"}},[a._v("demo"),t("OutboundLink")],1)])])},[],!1,null,null,null);s.default=r.exports}}]);