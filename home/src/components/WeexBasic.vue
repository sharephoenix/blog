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
      <el-menu-item index="1">weex set storage</el-menu-item>
      <el-menu-item index="2">weex get storage</el-menu-item>
      <el-menu-item index="3">weex modal</el-menu-item>
      <el-menu-item index="4">weex locale</el-menu-item>
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
      activeIndex2: '1'
    }
  },
  watch: {
    log (value) {
      alert('watch:::' + value)
    }
  },
  methods: {
    testfuncion () {
      console.log('testfunciontestfunciontestfuncion')
    },
    handleSelect (key, keyPath) {
      this.selectedIndex = key
      this.selectedKeyPath = keyPath
      // alert(window.WebViewJavascriptBridge)
      if (key === '1') {
        window.WebViewJavascriptBridge.callHandler(
          'storage',
          {module: 'storage',
            event: 'setItem',
            reqId: '111',
            params: {
              name: 'this is my webname'}
          },
          (dataFromOC) => {
            this.log = '方法回调成功'
          })
      }
      if (key === '2') {
        window.WebViewJavascriptBridge.callHandler('storage', {reqId: '110', module: 'storage', event: 'getItem', params: 'name'}, (dataFromOC) => {
          this.log = '方法回调成功' + JSON.stringify(dataFromOC)
        })
      }
    }
  },
  mounted () {
    window.setupWebViewJavascriptBridge((bridge) => {
      bridge.registerHandler('storage', (data, responseCallback) => {
        const {module, event, params, reqId} = data
        this.log = {module, event, params, reqId}
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
