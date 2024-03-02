import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/index.vue'
import MessageBoard from '@/views/MessageBoard/index.vue'
import ContactMe from '@/views/ContactMe/index.vue'
import NotFound from '@/views/NotFound/index.vue'
import More from '@/views/MoreView/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
  
    {
      path: '/MessageBoard',
      name: 'MessageBoard',
      component:MessageBoard
    },
    {
      path: '/ContactMe',
      name: 'ContactMe',
      component:ContactMe
    },
    {
      path: '/:pathMach(.*)*',
      redirect: '/404',
      name: 'any',
    },
    {
      path: '/404',
      name: '404NotFound',
      component:NotFound
    },
    {
      path: '/More',
      name: 'More',
      component:More
    },
  ]
})

export default router
