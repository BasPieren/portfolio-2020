const getDefaultState = () => {
	return {
		homeIsActive: true,
	}
}
const state = getDefaultState()
const actions = {
	resetWindowState({ commit }) {
		commit('resetState')
	},
}
const mutations = {
	resetState(state) {
		Object.assign(state, getDefaultState())
	},
	homeNotActive(state) {
		state.homeIsActive = false
	}
}
export default {
	state,
	getters: {},
	actions,
	mutations
}