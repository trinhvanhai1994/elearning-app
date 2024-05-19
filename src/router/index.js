import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/chapter1',
			component: () => import('../views/Chapter1.vue')
		},
		{
			path: '/chapter2',
			component: () => import('../views/Chapter2.vue')
		},
        {
			path: '/chapter3',
			component: () => import('../views/Chapter3.vue')
		},
        {
			path: '/chapter4',
			component: () => import('../views/Chapter4.vue')
		},
		{
			path: '/settings',
			component: () => import('../views/Setting.vue')
		},
	],
})

export default router;