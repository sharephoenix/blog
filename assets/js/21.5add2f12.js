(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{202:function(n,a,e){"use strict";e.r(a);var t=e(6),s=Object(t.a)({},function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"什么是集群-分布式-微服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是集群-分布式-微服务","aria-hidden":"true"}},[n._v("#")]),n._v(" 什么是集群,分布式,微服务?")]),n._v(" "),e("p",[e("imageX")],1),n._v(" "),e("p",[n._v("什么是集群\n集群技术特点：\n通过多台计算机完成同一个工作，达到更高的效率。\n两机或多机内容、工作过程等完全一样。如果一台死机，另一台可以起作用。\n在维基百科上说得也挺明白的了，我来举个例子吧。")]),n._v(" "),e("div",{staticClass:"language-txt extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("小周在公司写Java程序，但公司业务在发展，一个Java开发者可能忙不过来，小周有的时候也得请个假呀。于是请了3y过去一起做Java开发。平时小周和3y就写Java程序，但3y可能有事要回学校一趟。没事，公司还有小周做Java开发呢，公司开发还能继续运作。\n\n3y跟小周都是做Java开发。\n3y来了，小周的工作可以分担一些。\n3y请假了，还有小周在呢。\n\n\n\n我写了一个910便利网发布到服务器去了，现在越来越多的人访问了，访问有点慢，怎么办？？？很简单，(只有充钱才能变强)，加配置吧(加cpu，加内存)。升级完配置之后，访问人数越来越多，于是发现又不禁用啦，在这台机器上加配置已经解决不了了，怎么办？？？很简单，(只有充钱才能变强)，我再买一台服务器，将910便利网也发布到新买的这台服务器上去。\n\n")])])]),e("p",[n._v("特点: 这两台服务器都是运行同一个系统---\x3e910便利网\n好处:\n本来只有一台机器处理访问，现在有两台机器处理访问了，分担了压力。\n如果其中一台忘记缴费了，暂时用不了了。没关系，还有另一台可以用呢。\n集群：同一个业务，部署在多个服务器上(不同的服务器运行同样的代码，干同一件事)\n什么是分布式\n以下内容来源维基百科")]),n._v(" "),e("p",[n._v("分布式系统是一组计算机，通过网络相互连接传递消息与通信后并协调它们的行为而形成的系统。组件之间彼此进行交互以实现一个共同的目标。")]),n._v(" "),e("p",[n._v("我也来举个例子来说明一下吧：")]),n._v(" "),e("div",{staticClass:"language-txt extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("现在公司有小周和3y一起做Java开发，做Java开发一般jQuery，AJAX都能写一点，所以这些活都由我们来干。可是呢，3y对前端不是很熟，有的时候调试半天都调不出来。老板认为3y是真的菜！于是让小周专门来处理前端的事情。这样3y就高兴了，可以专心写自己的Java，前端就专门交由小周负责了。于是，小周和3y就变成了协作开发。\n\n3y对前端不熟(能写出来)，但在调试的时候可能会花费很多时间\n小周来专门做前端的事，3y可以专心写自己的Java程序了。\n都是为了项目正常运行以及迭代。\n\n\n\n我的910便利网已经部署到两台服务器去了，但是越来越多的人去访问。现在也逐渐承受不住啦。那现在怎么办啊？？那继续充钱变强？？作为一个理智的我，肯定得想想是哪里有问题。现在910便利网的模块有好几个，全都丢在同一个Tomcat里边。\n其实有些模块的访问是很低的(比如后台管理)，那我可不可以这样做：将每个模块抽取独立出来，访问量大的模块用好的服务器装着，没啥人访问的模块用差的服务器装着。这样的好处是：一、资源合理利用了(没人访问的模块用性能差的服务器，访问量大的模块单独提升性能就好了)。二、耦合度降低了：每个模块独立出来，各干各的事(专业的人做专业的事)，便于扩展\n")])])]),e("p",[n._v("特点：\n将910便利网的功能拆分，模块之间独立，在使用的时候再将这些独立的模块组合起来就是一个系统了。\n好处：\n模块之间独立，各做各的事，便于扩展，复用性高\n高吞吐量。某个任务需要一个机器运行10个小时，将该任务用10台机器的分布式跑(将这个任务拆分成10个小任务)，可能2个小时就跑完了\n分布式：一个业务分拆多个子业务，部署在不同的服务器上(不同的服务器，运行不同的代码，为了同一个目的)\n集群/分布式\n其实我认为分布式/微服务/SOA这三个概念是差不多的，了解了其中的一个，然后将自己的理解往上面套就好了。没必要细分每个的具体概念~~")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://www.jianshu.com/p/d4fb16fafc2e",target:"_blank",rel:"noopener noreferrer"}},[n._v("友情链接"),e("OutboundLink")],1)]),n._v(" "),e("h2",{attrs:{id:"go-jenkins-docker-k8s-构建过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#go-jenkins-docker-k8s-构建过程","aria-hidden":"true"}},[n._v("#")]),n._v(" go jenkins docker k8s 构建过程")]),n._v(" "),e("ol",[e("li",[n._v("jenkins 拉去远端代码")]),n._v(" "),e("li",[n._v("jenkins 构建执行文件")]),n._v(" "),e("li",[n._v("jenkins 创建镜像并推向远端")]),n._v(" "),e("li",[n._v("jenkins 调用 k8s api")]),n._v(" "),e("li",[n._v("k8s 拉去远端镜像并运行到集群中")]),n._v(" "),e("li",[n._v("k8s 最少有 3台服务器。2台叫主备。")])])])},[],!1,null,null,null);a.default=s.exports}}]);