import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import WeexBasic from '@/components/views/WeexBasic'
import NetNative from '@/components/views/NetNative'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/weexbasic',
      name: 'WeexBasic',
      component: WeexBasic
    },
    {
      path: '/network',
      name: 'NetNative',
      component: NetNative
    }
  ]
})
