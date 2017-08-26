const state = {
  folder: 'folder'
}

const mutations = {
  SET_FOLDER (state, data) {
    state.folder = data.folder
  }
}

const actions = {
  setFolder ({ commit }, data) {
    commit('SET_FOLDER', {
      folder: data.folder
    })
  }
}

export default {
  state,
  mutations,
  actions
}
