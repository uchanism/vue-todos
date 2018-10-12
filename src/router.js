import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Example from '@/components/Example.vue'
import TodoPage from '@/components/TodoPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/example',
          name: 'Example',
          component: Example
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/todos',
      name: 'TodoPage',
      component: TodoPage
    },
    
  ]
})
