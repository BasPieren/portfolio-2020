const getDefaultState = () => {
	return {
		title: 'Hallo. &#x1f468;&#x1F3FB;&#x200d;&#x1f4bb;‍',
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
	updateHeader(state) {
		state.title = '&#x1F448;&#x1F3FB Terug.'
	}
}
export default {
	state,
	getters: {},
	actions,
	mutations
}