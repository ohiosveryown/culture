import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import list from '@/components/list'
import terris from '@/components/ppl/terris'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
    {
      path: '/terris',
      name: 'terris',
      component: terris
    }
  ]
})
