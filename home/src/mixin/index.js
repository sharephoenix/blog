const mixin = {
  data () {
    return {
      flag: 0,
      log: 'kkk'
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

    // window.setupWebViewJavascriptBridge((bridge) => {
    //   bridge.registerHandler('updateStatus', (data, responseCallback) => {
    //     this.log = '收到 Native 的方法调用'
    //     alert(this.log)
    //     var responseData = { 'Javascript Says': 'Right back atcha!' }
    //     responseCallback(responseData)
    //   })
    // })
  },
  methods: {
    /**
     * 验证手机
     */
    validateMobile (mobile) {
      return /1(3|4|5|6|7|8|9)\d{9}/.test(mobile)
    },
    /**
     * 用户头像兼容处理
     * @param {*} url
     */
    getImage (url) {
      url = `${url}`.indexOf('http') > -1 ? url : `${process.env.VUE_APP_FILE}/${url}.png`

      return url
    },
    connectWebViewJavascriptBridge (callback) {
      if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge) /* eslint-disable-line */
      } else {
        document.addEventListener(
          'WebViewJavascriptBridgeReady',
          function () {
            callback(WebViewJavascriptBridge) /* eslint-disable-line */
          },
          false
        )
      }
    },
    setupWebViewJavascriptBridge (callback) {
      if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge) /* eslint-disable-line */
      }
      if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback)
      }
      window.WVJBCallbacks = [callback]
      var WVJBIframe = document.createElement('iframe')
      WVJBIframe.style.display = 'none'
      WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
      document.documentElement.appendChild(WVJBIframe)
      setTimeout(function () {
        document.documentElement.removeChild(WVJBIframe)
      }, 0)
    }
  }
}

export default mixin
