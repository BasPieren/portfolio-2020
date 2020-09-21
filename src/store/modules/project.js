const getDefaultState = () => {
	return {
		isActive: false,
		name: '',
		payOff: '',
		description: '',
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
	updateActiveProject(state, payload) {
		state.isActive = true
		state.name = payload.name
		state.payOff = payload['pay-off']
		state.description = payload.description
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