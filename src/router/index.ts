import { createWebHistory, createRouter as _createRoute } from 'vue-router'
import { useAuthInfoStore } from '@/stores/auth'
const modules = import.meta.glob('../pages/**/*.vue')
const routes = Object.keys(modules).map((path) => {
  // 格式化route 路径
  const key = path.match(/\.\.\/pages(.*)\.vue$/)![1].toLowerCase()
  return {
    path: key,
    component: modules[path]
  }
})
console.log(JSON.stringify(routes))

export function createRouter() {
  const router = _createRoute({
    history: createWebHistory(),
    routes
  })
  router.beforeEach((to) => {
    const store = useAuthInfoStore()
    if (to.meta.requiresAuth && !store.token) return '/login'
  })
  return router
}
