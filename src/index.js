// Import
import Vue from 'vue'
import App from './App.vue'
import VueSvgIcon from 'vue-svgicon'
import VueScrollTo from 'vue-scrollto'
import 'Assets/app.scss'
import 'Components/icons/index.js'
import router from 'Router/index.js'

Vue.config.productionTip = false

// Vue Use
Vue.use(VueSvgIcon, {
	tagName: 'svgicon'
})
Vue.use(VueScrollTo)

// Vue Instance
new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
