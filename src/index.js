import Vue from 'vue'
import App from './App.vue'
import SvgIcon from 'vue-svgicon'
import VueScrollTo from 'vue-scrollto'
import '../src/assets/app.scss'
import './components/icons/index.js'

Vue.config.productionTip = false

Vue.use(SvgIcon, {
	tagName: 'svgicon'
})
Vue.use(VueScrollTo)

new Vue({
	render: (h) => h(App)
}).$mount('#app')
