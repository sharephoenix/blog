(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{205:function(t,a,n){"use strict";n.r(a);var s=n(6),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"golang-的学习记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#golang-的学习记录","aria-hidden":"true"}},[t._v("#")]),t._v(" golang 的学习记录")]),t._v(" "),n("h2",{attrs:{id:"关于-内存重排"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于-内存重排","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于 内存重排")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/jbGBBvMFHUKWBMnC4p7Rww",target:"_blank",rel:"noopener noreferrer"}},[t._v("内存重排链接"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"mac-go-build"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mac-go-build","aria-hidden":"true"}},[t._v("#")]),t._v(" mac go build")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('go build -ldflags "-w" user.go\n')])])]),n("h2",{attrs:{id:"mac-交叉编译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mac-交叉编译","aria-hidden":"true"}},[t._v("#")]),t._v(" mac 交叉编译")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://my.oschina.net/u/3305368/blog/1853733",target:"_blank",rel:"noopener noreferrer"}},[t._v("交叉编译"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build user.go\n")])])]),n("h2",{attrs:{id:"工程结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工程结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 工程结构")]),t._v(" "),n("ol",[n("li",[t._v("model 表的查询，每张表都有一个文件")]),t._v(" "),n("li",[t._v("tojson 读取数据库中的数据，转化为 json 数据")]),t._v(" "),n("li",[t._v("tomysql 从 json 中读取数据，导数数据库")]),t._v(" "),n("li",[t._v("data 从数据库中读取数据的结果")]),t._v(" "),n("li",[t._v("logic 所有 api 的查询")])]),t._v(" "),n("h2",{attrs:{id:"读取本地json-并序列化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#读取本地json-并序列化","aria-hidden":"true"}},[t._v("#")]),t._v(" 读取本地json, 并序列化")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('package main\n\nimport (\n\t"encoding/json"\n\t"fmt"\n\t"io/ioutil"\n)\n\ntype Result struct {\n\tCode int\t\t`json:"code"`\n\tMsg string\t\t`json:"msg"`\n\tData []Module \t`json:"data"`\n}\n\ntype Module struct {\n\tModuleId\tstring\t\t`json:"module_id"`\n\tModuleName\tstring\t\t`json:"module_name"`\n\tModuleDisplayName string \t`json:"module_display_name"`\n\tModuleIndex string\t\t`json:"module_index"`\n\tEvents []Event `json:"events"`\n}\n\ntype Event struct {\n\tModuleId string `json:"module_id"`\n\tEventId string `json:"event_id"`\n\tEventName string`json:"event_name"`\n\tEventDisplayName string\t`json:"event_display_name"`\n\tEventParamsParse string\t`json:"event_params_parse"`\n\tEventParams string `json:"event_params"`\n\tIsEnable bool `json:"is_enable"`\n\tEventDes string `json:"event_des"`\n}\n\nfunc main() {\n\n\tv := Result{}\n\tjsb := NewJsonStruct()\n\tjsb.Load("./main/demo.json", &v)\n\n\tfmt.Println(v.Data[0].Events[0].EventDisplayName)\n\tfmt.Println("finish!!!")\n}\n\ntype JsonStruct struct {\n}\n\nfunc NewJsonStruct() *JsonStruct {\n\treturn &JsonStruct{}\n}\n\nfunc (jst *JsonStruct) Load(filename string, v interface{}) {\n\t//ReadFile函数会读取文件的全部内容，并将结果以[]byte类型返回\n\tdata, err := ioutil.ReadFile(filename)\n\tif err != nil {\n\t\tfmt.Println(err.Error())\n\t\treturn\n\t}\n\n\t//读取的数据为json格式，需要进行解码\n\terr = json.Unmarshal(data, v)\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n}\n\n')])])]),n("h2",{attrs:{id:"数据库建表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据库建表","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据库建表")]),t._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" WeexDemo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" WeexDemo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Modules"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  module_id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  module_name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  module_display_name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  module_index "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" WeexDemo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  module_id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  event_id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  event_name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  event_display_name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  event_params_parse "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  event_params "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  is_enable "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  event_des "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("module_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"golang-代码规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#golang-代码规范","aria-hidden":"true"}},[t._v("#")]),t._v(" golang 代码规范")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("go fmt ./...\n")])])]),n("h2",{attrs:{id:"golang-错误检测"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#golang-错误检测","aria-hidden":"true"}},[t._v("#")]),t._v(" golang 错误检测")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("go test -race ./...\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);