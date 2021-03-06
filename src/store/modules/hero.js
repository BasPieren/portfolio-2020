const getDefaultState = () => {
	return {
		heading: 'Bas Pieren',
		copy: `Hi! Ik ben <span class="font-weight--bold color--purple">Bas</span>, Front-end Developer, recent afgestudeerd <span class="font-weight--bold color--purple">Communication and Multimedia Design</span>
		aan de HvA en opzoek naar een nieuwe uitdaging.`
	}
}
const state = getDefaultState()
const actions = {
	resetHeroState({ commit }) {
		commit('resetState')
	},
}
const mutations = {
	resetState(state) {
		Object.assign(state, getDefaultState())
	},
	updateHero(state, payload) {
		state.heading = payload.name
		state.copy = payload['pay-off']
	}
}
export default {
	state,
	getters: {},
	actions,
	mutations
}