const getDefaultState = () => {
	return {
		isMobile: false,
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
	setWindowSizeMobile(state) {
		state.isMobile = true
	}
}
export default {
	state,
	getters: {},
	actions,
	mutations
}