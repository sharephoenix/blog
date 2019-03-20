const mixin = {
  data () {
    return {
      flag: 0
    }
  },
  filters: {},
  mounted () {
    let u = navigator.userAgent
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1

    let userInfo = navigator.userAgent
    let patt = /DawnBlackBoard/
    let patt1 = /4\.8\.0/
    if (patt.test(userInfo) && patt1.test(userInfo) && isAndroid) {
      this.connectWebViewJavascriptBridge(function (bridge) {
        bridge.init(function (message, responseCallback) {})
      })
    }
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
