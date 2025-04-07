import { createWebHistory, createRouter as _createRoute } from 'vue-router'

const modules = import.meta.glob('../pages/**/*.vue')
const routes = Object.keys(modules).map((path) => {
  // 格式化route 路径
  const key = path.match(/\.\.\/pages(.*)\.vue$/)![1].toLowerCase()
  return {
    path: key,
    component: modules[path]
  }
})

export function createRouter() {
  return _createRoute({
    history: createWebHistory(),
    routes
  })
}
