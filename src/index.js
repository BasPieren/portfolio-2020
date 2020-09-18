import Vue from 'vue'
import App from '@/App.vue'
import VueSvgIcon from 'vue-svgicon'
import VueScrollTo from 'vue-scrollto'
import router from '@/router/index.js'
import store from '@/store/index.js'
import '@/assets/app.scss'
import '@/components/icons/index.js'

Vue.config.productionTip = false

Vue.use(VueSvgIcon, { tagName: 'svgicon' })
Vue.use(VueScrollTo)

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
