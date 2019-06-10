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
    "revision": "392f1aab068988ab9229573263c100aa"
  },
  {
    "url": "arithmetic/home.html",
    "revision": "49482da8c48f7a938388f67282ade73d"
  },
  {
    "url": "arithmetic/java.html",
    "revision": "d0cbe0c6a9f730a83ab287676337a3d2"
  },
  {
    "url": "arithmetic/js.html",
    "revision": "d5fc6f4cfb1dd9f4628848b0f4cee90e"
  },
  {
    "url": "arithmetic/swift.html",
    "revision": "024872f34649ff36d31dd4f662d91706"
  },
  {
    "url": "assets/css/0.styles.05c040d9.css",
    "revision": "36e11705f1bd8c27c1cad724c0777f63"
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
    "url": "assets/js/app.8cd8c203.js",
    "revision": "6d3494affa59138a83a13407b1c1fa7e"
  },
  {
    "url": "index.html",
    "revision": "6f56de21ce00e3f6eb3a2b31d7008eda"
  },
  {
    "url": "issue/golang.html",
    "revision": "4b9c5cc0421c02baa21d0b26c8d164ae"
  },
  {
    "url": "issue/vue.html",
    "revision": "a8ec2523f4388cecab3b3c3d929d89aa"
  },
  {
    "url": "javaoc/javaoc.html",
    "revision": "6e8e5eda33438581f751540dff511c8f"
  },
  {
    "url": "peddle_self/dashboard/database.html",
    "revision": "f608f091936e6e3bfe8e8a891f034dd5"
  },
  {
    "url": "peddle_self/dashboard/golang.html",
    "revision": "63fe268e0349d08727d0b326b92639be"
  },
  {
    "url": "peddle_self/dashboard/mogodb.html",
    "revision": "1f63c38bf11d9b1c171fb95464daacc7"
  },
  {
    "url": "peddle_self/dashboard/redis.html",
    "revision": "844e1deb8508632dba12edaf479ad758"
  },
  {
    "url": "peddle_self/dashboard/web.html",
    "revision": "f86dcc21bfeaa7b4932d960e1da63017"
  },
  {
    "url": "peddle_self/production/document.html",
    "revision": "94b0c8434282cf858f242d249cc4bef7"
  },
  {
    "url": "weekpapers/2019.05.27-2019.05.31.html",
    "revision": "fa4633e0265858995e844adfaee0438f"
  },
  {
    "url": "weekpapers/2019.06.03-2019.06.07.html",
    "revision": "77e04d98dc4cfb7eb503148385237229"
  },
  {
    "url": "weekpapers/thisweek.html",
    "revision": "6a1beea92245325b0a8d7e7d0cada2a9"
  },
  {
    "url": "weekpapers/weekpaper.html",
    "revision": "2d381417d49b58793c01d08bce964f63"
  },
  {
    "url": "xp-review/index.html",
    "revision": "f45c3751320f639ccb1bdb1c84a989da"
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
