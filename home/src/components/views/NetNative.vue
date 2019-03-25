<template>
  <div class="body">
    <div class="log-cls">{{log}}</div>
    <el-input v-model="puturl" placeholder="输入url"></el-input>
    <el-input v-model="xxxparams" placeholder="输入 json 参数"></el-input>
    <div class="content">
      <div @click="get" class="content-div">
        get
      </div>
      <div @click="post" class="content-div">
        post
      </div>
      <div @click="deleteAction" class="content-div">
        delete
      </div>
      <div @click="putAction" class="content-div">
        put
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      log: 'NetworkNatives',
      xxxparams: {
        columnId: '5c934dd7725c2c1b70db4f15',
        page: 1
      },
      puturl: '/api/knowing/5b5973d6f284de7fd137ffc5'
    }
  },
  methods: {
    get () {
      window.WebViewJavascriptBridge.callHandler('XHBNetworkModule',
        {reqId: '110',
          module: 'XHBNetworkModule',
          event: 'requestData',
          params: {
            method: 'get',
            url: this.puturl,
            reqParams: this.xxxparams
          }
        }, (dataFromOC) => {
          this.log = '方法回调成功' + JSON.stringify(dataFromOC)
        })
    },
    post () {
      window.WebViewJavascriptBridge.callHandler('XHBNetworkModule',
        {reqId: '110',
          module: 'XHBNetworkModule',
          event: 'requestData',
          params: {
            method: 'post',
            url: this.puturl,
            reqParams: this.xxxparams
          }
        }, (dataFromOC) => {
          this.log = '方法回调成功' + JSON.stringify(dataFromOC)
        })
    },
    deleteAction () {
      window.WebViewJavascriptBridge.callHandler('XHBNetworkModule',
        {reqId: '110',
          module: 'XHBNetworkModule',
          event: 'requestData',
          params: {
            method: 'delete',
            url: this.puturl,
            reqParams: this.xxxparams
          }
        }, (dataFromOC) => {
          this.log = '方法回调成功' + JSON.stringify(dataFromOC)
        })
    },
    putAction () {
      window.WebViewJavascriptBridge.callHandler('XHBNetworkModule',
        {reqId: '110',
          module: 'XHBNetworkModule',
          event: 'requestData',
          params: {
            method: 'put',
            url: this.puturl,
            reqParams: this.xxxparams
          }
        }, (dataFromOC) => {
          this.log = '方法回调成功' + JSON.stringify(dataFromOC)
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
  width: 70px;
  height: 44px;
  background-color: #f2f2f2;
  color: #000;
  border: 1px solid gray;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 44px;
  border-radius: 3px;
  word-break: break-all;
  word-wrap: break-word;
}

.content-div:active {
  background-color: aqua;
}
.log-cls {
  width: 100%;
  background-color: beige;
  word-break: break-all;
  word-wrap: break-word;
}
</style>
