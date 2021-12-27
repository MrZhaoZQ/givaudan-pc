import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Scenelist from '../views/Scenelist.vue'
import Scene from '../views/Scene.vue'
import Prodlist from '../views/Prodlist.vue'
import Submit from '../views/Submit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/scenelist',
    name: 'scenelist',
    component: Scenelist
  },
  {
    path: '/scene',
    name: 'scene',
    component: Scene
  },
  {
    path: '/prodlist',
    name: 'prodlist',
    component: Prodlist
  },
  {
    path: '/submit',
    name: 'submit',
    component: Submit
  }
  // 按需加载
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
