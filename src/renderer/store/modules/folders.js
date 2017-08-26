const state = ["test", "trestd2"]

const mutations = {
	ADD_MOD_FOLDER (state, playload) {
		state.push(playload.modFolder)
	},

	DELETE_MOD_FOLDER (state, playload) {
		state.splice(playload.index, 1)
	}
}

const actions = {
	addModFolder ({ commit }, data) {
		commit('ADD_MOD_FOLDER', {
			modFolder: data.modFolder
		})
	},

	deleteModFolder ({ commit }, data) {
		commit('DELETE_MOD_FOLDER', {
			index: data.index
		})
	}
}

export default {
	state,
	mutations,
	actions
}
