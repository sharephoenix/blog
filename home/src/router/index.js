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
      name: 'Main',
      component: Main
    },
    {
      path: '/weexbasic',
      name: 'WeexBasic',
      component: WeexBasic
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
