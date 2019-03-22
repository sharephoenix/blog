<template>
  <div class="body">
    <div>{{log}}</div>
    <div class="content">
      <div @click="play" class="content-div"> play </div>
      <div @click="pause" class="content-div"> pause </div>
      <div @click="resume" class="content-div"> resume </div>
      <div @click="stop" class="content-div"> stop </div>
      <div @click="next" class="content-div"> next </div>
      <div @click="last" class="content-div"> last </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      log: 'AudioNatives'
    }
  },
  methods: {
    play () {
      this.customAction({
        module: 'XHBAudioPlayerModule',
        event: 'play',
        params: {url: 'http://www.baidu.com'}})
    },
    pause () {
      this.customAction({
        module: 'XHBAudioPlayerModule',
        event: 'pause',
        params: {url: 'http://www.baidu.com'}})
    },
    resume () {
      this.customAction({
        module: 'XHBAudioPlayerModule',
        event: 'resume',
        params: {url: 'http://www.baidu.com'}})
    },
    stop () {
      this.customAction({
        module: 'XHBAudioPlayerModule',
        event: 'stop',
        params: {url: 'http://www.baidu.com'}})
    },
    next () {
      this.customAction({
        module: 'XHBAudioPlayerModule',
        event: 'next',
        params: {url: 'http://www.baidu.com'}})
    },
    last () {
      this.customAction({
        module: 'XHBAudioPlayerModule',
        event: 'last',
        params: {url: 'http://www.baidu.com'}})
    },
    customAction ({module, event, params}) {
      window.WebViewJavascriptBridge.callHandler(module, {reqId: '110', module: module, event: event, params: params}, (dataFromOC) => {
        this.log = 'log:' + JSON.stringify(dataFromOC)
      })
    }
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
