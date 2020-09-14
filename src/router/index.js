import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = Vue.component('home', require('@/App.vue'))

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
			component: home
		},
		{
			path: '/jan',
			name: 'jan',
			component: home
		},
		{
			path: '/gyow',
			name: 'gyow',
			component: home
		}
	]
})

export default router