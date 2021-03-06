import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import my from './my'

Vue.use(VueRouter)

const routes = [...home, ...my]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 设置页面title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
