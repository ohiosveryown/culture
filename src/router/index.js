import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import list from '@/components/list'
import tracey from '@/components/ppl/tracey'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
    {
      path: '/tracey',
      name: 'tracey',
      component: tracey
    }
  ]
})
