<template>
  <div class="body">
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">weex storage</el-menu-item>
      <el-menu-item index="2">weex modal</el-menu-item>
      <el-menu-item index="3">weex locale</el-menu-item>
    </el-menu>
    <div>{{selectedIndex}}</div>
    <div>{{selectedKeyPath}}</div>
    <div>{{log}}</div>
  </div>
</template>

<script>
export default {
  name: 'WeexBasic',
  prototype () {
    return []
  },
  data () {
    return {
      moduleList: [
        {
          index: 0,
          content: 'test'
        }
      ],
      selectedIndex: 10,
      selectedKeyPath: 10,
      content: 'test',
      activeIndex: '1',
      activeIndex2: '1',
      log: 'loglog'
    }
  },
  methods: {
    testfuncion () {
      console.log('testfunciontestfunciontestfuncion')
    },
    handleSelect (key, keyPath) {
      this.selectedIndex = key
      this.selectedKeyPath = keyPath
      alert(window)
      alert(window.WebViewJavascriptBridge)
      window.WebViewJavascriptBridge.callHandler('shareWeb', {event: 'voice'}, (dataFromOC) => {
        this.log = '方法回调成功'
      })
    }
  },
  mounted () {
    window.setupWebViewJavascriptBridge = function (callback) {
      let u = navigator.userAgent
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
      let isiOS = !!u.match(/\(i[^;]+;(U;)? CPU.+Mac OS X/)

      if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge) }
      if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback) }
      window.WVJBCallbacks = [callback]
      var WVJBIframe = document.createElement('iframe')
      WVJBIframe.style.display = 'none'

      if (isAndroid) {
        WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
      } else if (isiOS) {
        WVJBIframe.src = 'https://__BRIDGE_LOADED__'
      }
      document.documentElement.appendChild(WVJBIframe)
      setTimeout(function () { document.documentElement.removeChild(WVJBIframe) }, 0)
    }

    window.setupWebViewJavascriptBridge((bridge) => {
      bridge.registerHandler('updateStatus', (data, responseCallback) => {
        this.log = '收到 Native 的方法调用'
        var responseData = { 'Javascript Says': 'Right back atcha!' }
        responseCallback(responseData)
      })
    })
  }
}
</script>

<style scoped>
.body {
  background-color: #f2f2f2;
}
</style>
