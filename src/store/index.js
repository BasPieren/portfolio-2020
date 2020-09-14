import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hero: {
			title: 'Bas Pieren',
			copy: `Hi! Ik ben <span>Bas</span>, Front-end Developer, recent afgestudeerd <span>Communication and Multimedia Design</span>
			aan de HvA en opzoek naar een nieuwe uitdaging.`
		}
	},
	mutations: {
		updateHero(state, payload) {
			state.hero.title = payload.name
			state.hero.copy = payload['pay-off']
		}
	}
})

export default store