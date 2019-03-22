<template>
  <div class="body">
    <div>{{log}}</div>
    <div class="content">
      <div class="content-div" @click="setStorage">
        set storage
      </div>
      <div class="content-div" @click="getStorage">
        get storage
      </div>
    </div>
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
      log: 'normal'
    }
  },
  watch: {
  },
  methods: {
    getStorage () {
      window.WebViewJavascriptBridge.callHandler('storage', {reqId: '110', module: 'storage', event: 'getItem', params: 'name'}, (dataFromOC) => {
        this.log = '方法回调成功' + JSON.stringify(dataFromOC)
      })
    },
    setStorage () {
      window.WebViewJavascriptBridge.callHandler(
        'storage',
        {module: 'storage',
          event: 'setItem',
          reqId: '111',
          params: {
            name: 'this is my webname'}
        },
        (dataFromOC) => {
          this.log = '方法回调成功' + JSON.stringify(dataFromOC)
        })
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
  background-color: #ffffff;
}
.content {
  height: 900px;
  background-color: bisque;
}
.content-div {
  display: inline-block;
  height: 44px;
  background-color: #f2f2f2;
  color: #000;
  border: 1px solid gray;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 44px;
  border-radius: 3px;
}
.content-div:active {
  background-color: aqua;
}
</style>
