/*
 * @Author: your name
 * @Date: 2021-04-23 15:21:51
 * @LastEditTime: 2021-05-18 17:19:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\master\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/micro-juejin-home',
    name: "Home",
    component: Home
  },
  {
    path: "/people",
    name: "People",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "people" */ "@/views/People")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
