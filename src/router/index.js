import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/pages/Home.vue'
import AboutDetail from '../components/pages/AboutDetail.vue'
import BlogDetail from '../components/pages/BlogDetail.vue'
import WorksDetail from '../components/pages/WorksDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutDetail',
    component: AboutDetail
  },
  {
    path: '/blog/:slug',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/works/:id',
    name: 'WorksDetail',
    component: WorksDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router 