const getDefaultState = () => {
	return {
		isMobile: false,
	}
}
const state = getDefaultState()
const actions = {
	resetWindowState({ commit }) {
		commit('resetWindowSizeState')
	},
}
const mutations = {
	resetWindowSizeState(state) {
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