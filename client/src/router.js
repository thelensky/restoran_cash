import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Menu from '@/components/Menu.vue'
import DishMenu from '@/components/DishMenu.vue'
import Basket from '@/components/Basket.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket,
    },
    {
      path: '/menu/:dish',
      name: 'dish',
      component: DishMenu,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
