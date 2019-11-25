/*
路由器
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'

Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
