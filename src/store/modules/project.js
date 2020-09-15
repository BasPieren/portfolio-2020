const getDefaultState = () => {
	return {
		name: '',
		payOff: '',
		client: '',
		role: '',
		agency: '',
		images: []
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
		state.name = payload.name
		state.payOff = payload['pay-off']
		state.client = payload.client
		state.role = payload.role
		state.agency = payload.agency
		state.images = payload.images
	}
}
export default {
	state,
	getters: {},
	actions,
	mutations
}