import Vue from 'vue'
import Vuex from 'vuex'
import windowSize from './modules/window-size'
import activeRoute from './modules/route'
import heroState from './modules/hero'
import headerState from './modules/header'
import projectState from './modules/project'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		windowSize: windowSize,
		activeRoute: activeRoute,
		hero: heroState,
		header: headerState,
		project: projectState
	}
})

export default store