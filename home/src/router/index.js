import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import WeexBasic from '@/components/WeexBasic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WeexBasic',
      component: WeexBasic
    },
    {
      path: '/weexbasic',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
