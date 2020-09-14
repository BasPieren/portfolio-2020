import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Components
var home = Vue.component('home', require('@/App.vue'))

// Router
const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: home }
	]
})

export default router