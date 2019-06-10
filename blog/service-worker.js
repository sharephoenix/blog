/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2982103ecd7e9a0a0222279bbb0611ea"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "851f81bdcd567dadcc27265f35e9c55f"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "66c7bee9bb0cd7441cf77335b8e923ed"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "0545c1b6b8bdb60fbef01124e7653f59"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "15089f1b9448ebf851c7e5209ab4a738"
  },
  {
    "url": "assets/css/0.styles.a68f3170.css",
    "revision": "8824d50b78bc883efc0bf5690ce6e9ca"
  },
  {
    "url": "assets/img/070012140173654.6179cb30.png",
    "revision": "6179cb30c5646d739e53b8720e16558c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b50f8c70.js",
    "revision": "cc60fadb2c1b5dba9b8c85bea11bd513"
  },
  {
    "url": "assets/js/11.e9034936.js",
    "revision": "d7b8ba61a0a461183bb807f1e6163c34"
  },
  {
    "url": "assets/js/12.5d616419.js",
    "revision": "7de98e6c211a909c59cae832bdeb54c3"
  },
  {
    "url": "assets/js/13.08dbace9.js",
    "revision": "67a1e0cbe4a31cfe008c9a8bfd0955cb"
  },
  {
    "url": "assets/js/14.15892687.js",
    "revision": "92837a4afa6ac2a097aba003a27de6aa"
  },
  {
    "url": "assets/js/15.f03b0fe1.js",
    "revision": "0c50529541c5238d1edd514bea1f7d92"
  },
  {
    "url": "assets/js/16.251ecc63.js",
    "revision": "a11ae134839bd398a58b9758e4089ec6"
  },
  {
    "url": "assets/js/17.14d42261.js",
    "revision": "a69e36b8b8fdbee250495a626714c194"
  },
  {
    "url": "assets/js/18.9a229c5c.js",
    "revision": "4c479ec3c90763277d803324ff4342da"
  },
  {
    "url": "assets/js/19.6a01df28.js",
    "revision": "6b1c5cdb49c1149559c2237674755475"
  },
  {
    "url": "assets/js/2.b9bd59f6.js",
    "revision": "161c8515cfd2cba06d6c071313efb93f"
  },
  {
    "url": "assets/js/20.315d39fb.js",
    "revision": "75928554dbbad4cf53ef940552604c29"
  },
  {
    "url": "assets/js/21.10f97b60.js",
    "revision": "f798b0854a9a706941b12ef421379f2b"
  },
  {
    "url": "assets/js/22.257104fa.js",
    "revision": "80ce9c082a3540b04f19f679e3c4ad60"
  },
  {
    "url": "assets/js/3.b258ecb7.js",
    "revision": "ecd14cfdf5a0f758b32a8e16c506ce37"
  },
  {
    "url": "assets/js/4.15d24cf6.js",
    "revision": "6c8f1308bea76d0bc7927f42ea6dbc94"
  },
  {
    "url": "assets/js/5.d7b09753.js",
    "revision": "1681093ac71b465ec1ce3f5a0dec4619"
  },
  {
    "url": "assets/js/6.fbf09a7f.js",
    "revision": "299b28ebb94005b99fd4dcfc9a51e506"
  },
  {
    "url": "assets/js/7.b5eaa290.js",
    "revision": "05e3f732a0ff3de0c0904092c263837a"
  },
  {
    "url": "assets/js/8.35330730.js",
    "revision": "26c91eaf6973ec7cfbaf6fea6dc4a85f"
  },
  {
    "url": "assets/js/9.e5270dfa.js",
    "revision": "5a8c517aab77646df996053734f702b7"
  },
  {
    "url": "assets/js/app.3b50ecba.js",
    "revision": "5e98283567cd49a40f76bc8ed7a93e39"
  },
  {
    "url": "index.html",
    "revision": "dfbe61b72e45d5eb973ebfb0340cde04"
  },
  {
    "url": "issue/golang.html",
    "revision": "ede452a6f7543b388e6838c1bda3d422"
  },
  {
    "url": "issue/vue.html",
    "revision": "fade0531311996c950ca5cf57ae73ee3"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "dd82efd96ac03f25ab0e1b33bc604cc0"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "30bbe346fb8d5589d2db048bcb64b3eb"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "ab87288fb5313053f65d5777c6f62624"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "2e4a53db4a9abfcd3d7333d41d1e6097"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "b65023252cd1f67c50e239c023ab3708"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "94a3afe2de20cfc7067176cfbcd2d612"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "0f19f8ce7c594ff7c1347986ed562e1e"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "55a4d0d2e96412dad86cf4ebb4deca24"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "dcc0963e38ff5309bf301a7293257144"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "872cd79141751962ea89b9e35cbe1069"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "00d9c64cbeaa5e902bfbef89d78a420d"
  },
  {
    "url": "xp-review/index.html",
    "revision": "69a02fae355e03ba705781a487b9be42"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
