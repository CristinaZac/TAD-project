import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/learn',
    name: 'Learn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "learn" */ '../views/Learn')
  },
  {
    path: '/hello/giochi',
    name: 'Giochi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "giochi" */ '../views/Giochi')
  },
  {
    path: '/hello/vocabolario',
    name: 'Vocabolario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "vocabolario" */ '../views/Vocabolario')
  },
  {
    path: '/hello/IntroVocabolario',
    name: 'IntroVocabolario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "IntroVocabolario" */ '../views/IntroVocabolario')
  },
  {
    path: '/MemoryGame',
    name: 'MemoryGame',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "MemoryGame" */ '../views/MemoryGame')
  },
  {
    path: '/foodquiz',
    name: 'FoodQuiz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "animalquiz" */ '../views/FoodQuiz')
  },
  {
    path: '/AnimalMemory',
    name: 'AnimalMemory',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FoodMemory" */ '../views/AnimalMemory')
  },
  {
    path: '/PreGame',
    name: 'PreGame',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FoodMemory" */ '../views/PreGame')
  },
  {
    path: '/AMemoryMedium',
    name: 'AMemoryMedium',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FoodMemory" */ '../views/AMemoryMedium')
  },
  {
    path: '/AMemoryDiff',
    name: 'AMemoryDiff',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FoodMemory" */ '../views/AMemoryDiff')
  },
  {
    path: '/PreGameAction',
    name: 'PreGameAction',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FoodMemory" */ '../views/PreGameAction')
  },
  {
    path: '/ActionMedium',
    name: 'ActionMedium',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FoodMemory" */ '../views/ActionMedium')
  },
  {
    path: '/ActionDiff',
    name: 'ActionDiff',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FoodMemory" */ '../views/ActionDiff')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
