webpackJsonp([1],{"+4tc":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(t){n("qf9G")},null,null).exports,o=n("/ocq"),c=n("mvHQ"),r=n.n(c),d={name:"WeexBasic",prototype:function(){return[]},data:function(){return{log:"normal"}},watch:{},methods:{getStorage:function(){var t=this;window.WebViewJavascriptBridge.callHandler("storage",{reqId:"110",module:"storage",event:"getItem",params:"name"},function(e){t.log="方法回调成功"+r()(e)})},setStorage:function(){var t=this;window.WebViewJavascriptBridge.callHandler("storage",{module:"storage",event:"setItem",reqId:"111",params:{name:"this is my webname"}},function(e){t.log="方法回调成功"+r()(e)})}},mounted:function(){var t=this;window.setupWebViewJavascriptBridge(function(e){e.registerHandler("storage",function(e,n){var i=e.module,a=e.event,s=e.params,o=e.reqId;t.log={module:i,event:a,params:s,reqId:o};n({"Javascript Says":"Right back atcha!"})})})}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("div",[t._v(t._s(t.log))]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"content-div",on:{click:t.setStorage}},[t._v("\n      set storage\n    ")]),t._v(" "),n("div",{staticClass:"content-div",on:{click:t.getStorage}},[t._v("\n      get storage\n    ")])])])},staticRenderFns:[]};var l=n("VU/8")(d,u,!1,function(t){n("Vwz8")},"data-v-106bf864",null).exports,v={data:function(){return{log:"AudioNatives"}},methods:{play:function(){this.customAction({module:"XHBAudioPlayerModule",event:"play",params:{url:"http://www.baidu.com"}})},pause:function(){this.customAction({module:"XHBAudioPlayerModule",event:"pause",params:{url:"http://www.baidu.com"}})},resume:function(){this.customAction({module:"XHBAudioPlayerModule",event:"resume",params:{url:"http://www.baidu.com"}})},stop:function(){this.customAction({module:"XHBAudioPlayerModule",event:"stop",params:{url:"http://www.baidu.com"}})},next:function(){this.customAction({module:"XHBAudioPlayerModule",event:"next",params:{url:"http://www.baidu.com"}})},last:function(){this.customAction({module:"XHBAudioPlayerModule",event:"last",params:{url:"http://www.baidu.com"}})},customAction:function(t){var e=this,n=t.module,i=t.event,a=t.params;window.WebViewJavascriptBridge.callHandler(n,{reqId:"110",module:n,event:i,params:a},function(t){e.log="log:"+r()(t)})}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("div",[t._v(t._s(t.log))]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"content-div",on:{click:t.play}},[t._v(" play ")]),t._v(" "),n("div",{staticClass:"content-div",on:{click:t.pause}},[t._v(" pause ")]),t._v(" "),n("div",{staticClass:"content-div",on:{click:t.resume}},[t._v(" resume ")]),t._v(" "),n("div",{staticClass:"content-div",on:{click:t.stop}},[t._v(" stop ")]),t._v(" "),n("div",{staticClass:"content-div",on:{click:t.next}},[t._v(" next ")]),t._v(" "),n("div",{staticClass:"content-div",on:{click:t.last}},[t._v(" last ")])])])},staticRenderFns:[]};var p=n("VU/8")(v,m,!1,function(t){n("wnBR")},"data-v-54ce1563",null).exports,f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body"},[e("div",[this._v(this._s(this.log))]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"content-div"},[this._v("\n      get\n    ")]),this._v(" "),e("div",{staticClass:"content-div"},[this._v("\n      post\n    ")]),this._v(" "),e("div",{staticClass:"content-div"},[this._v("\n      delete\n    ")])])}]};var w=n("VU/8")({data:function(){return{log:"AudioNatives"}}},f,!1,function(t){n("+4tc")},"data-v-4dce9b13",null).exports,h={data:function(){return{name:"this is my name"}},methods:{testfuncion:function(){console.log("test")}},components:{"weex-basic":{render:function(t){return t(l)}},"audio-native":{render:function(t){return t(p)}},"net-native":{render:function(t){return t(w)}}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body"},[e("div",[this._v("Weex 组件 测试")]),this._v(" "),e("el-tabs",{attrs:{type:"border-card"}},[e("el-tab-pane",{attrs:{label:"基础组件"},on:{click:this.testfuncion}},[e("weex-basic")],1),this._v(" "),e("el-tab-pane",{attrs:{label:"播放器"},on:{click:this.testfuncion}},[e("audio-native")],1),this._v(" "),e("el-tab-pane",{attrs:{label:"网络请求"},on:{click:this.testfuncion}},[e("net-native")],1)],1)],1)},staticRenderFns:[]};var g=n("VU/8")(h,_,!1,function(t){n("zBIh")},"data-v-3d46ca2a",null).exports;i.default.use(o.a);var b=new o.a({routes:[{path:"/",name:"Main",component:g},{path:"/weexbasic",name:"WeexBasic",component:l}]}),B=n("zL8q"),V=n.n(B),C=(n("tvR6"),{data:function(){return{flag:0,log:"kkk"}},mounted:function(){window.setupWebViewJavascriptBridge=function(t){var e=navigator.userAgent,n=e.indexOf("Android")>-1||e.indexOf("Adr")>-1,i=!!e.match(/\(i[^;]+;(U;)? CPU.+Mac OS X/);if(window.WebViewJavascriptBridge)return t(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(t);window.WVJBCallbacks=[t];var a=document.createElement("iframe");a.style.display="none",n?a.src="wvjbscheme://__BRIDGE_LOADED__":i&&(a.src="https://__BRIDGE_LOADED__"),document.documentElement.appendChild(a),setTimeout(function(){document.documentElement.removeChild(a)},0)}},methods:{validateMobile:function(t){return/1(3|4|5|6|7|8|9)\d{9}/.test(t)},getImage:function(t){return t=(""+t).indexOf("http")>-1?t:Object({NODE_ENV:"production"}).VUE_APP_FILE+"/"+t+".png"},connectWebViewJavascriptBridge:function(t){window.WebViewJavascriptBridge?t(WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",function(){t(WebViewJavascriptBridge)},!1)},setupWebViewJavascriptBridge:function(t){if(window.WebViewJavascriptBridge)return t(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(t);window.WVJBCallbacks=[t];var e=document.createElement("iframe");e.style.display="none",e.src="wvjbscheme://__BRIDGE_LOADED__",document.documentElement.appendChild(e),setTimeout(function(){document.documentElement.removeChild(e)},0)}}});i.default.mixin(C),i.default.config.productionTip=!1,i.default.use(V.a),new i.default({el:"#app",router:b,components:{App:s},template:"<App/>"})},Vwz8:function(t,e){},qf9G:function(t,e){},tvR6:function(t,e){},wnBR:function(t,e){},zBIh:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7978e737370958be5ad3.js.map