import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '@/modules/home.vue'
import project from '@/modules/project.vue'

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
			path: '/gyow',
			name: 'gyow',
			component: project
		}
	]
})

export default router