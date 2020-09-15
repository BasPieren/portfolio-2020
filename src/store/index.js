import Vue from 'vue'
import Vuex from 'vuex'
import heroState from './modules/hero'
import headerState from './modules/header'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		hero: heroState,
		header: headerState
	}
})

export default store