import Vue from 'vue'
import Vuex from 'vuex'
import heroState from './modules/hero'
import headerState from './modules/header'
import projectState from './modules/project'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		hero: heroState,
		header: headerState,
		project: projectState
	}
})

export default store