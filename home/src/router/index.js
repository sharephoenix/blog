import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import WeexBasic from '@/components/views/WeexBasic'
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
    }
  ]
})
