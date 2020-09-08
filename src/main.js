import Vue from 'vue'
import App from './App.vue'
import SvgIcon from 'vue-svgicon'
import '../src/assets/app.scss'
import '../src/components/icons/index.js'

Vue.config.productionTip = false

Vue.use(SvgIcon, {
	tagName: 'svgicon'
})

new Vue({
	render: (h) => h(App)
}).$mount('#app')
