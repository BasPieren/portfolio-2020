import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '@/components/modules/home.vue'
import project from '@/components/modules/project.vue'

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: home
		},
		{
			path: '/rideout',
			name: 'rideout',
			component: project
		},
		{
			path: '/jan',
			name: 'jan',
			component: project
		},
		{
			path: '/oliva',
			name: 'oliva',
			component: project
		}
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	}
})

export default router