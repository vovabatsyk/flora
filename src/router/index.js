import Vue from 'vue'
import VueRouter from 'vue-router'
import authGuard from './auth-guard'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/registration',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    beforeEnter: authGuard,
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('../views/Orders.vue'),
    beforeEnter: authGuard,
  },
  {
    path: '/new',
    name: 'NewAd',
    component: () => import('../views/NewAd.vue'),
    beforeEnter: authGuard,
  },
  {
    path: '/list',
    name: 'MyAds',
    component: () => import('../views/MyAds.vue'),
    beforeEnter: authGuard,
  },
  {
    path: '/ad/:id',
    props: true,
    name: 'Ad',
    component: () => import('../views/Ad.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
