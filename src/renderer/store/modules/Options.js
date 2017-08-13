const state = {
  option: false
}

const mutations = {
  SET_OPTION (state, value) {
    state.option = value
  },
}

const actions = {
  SetOption ({ commit }) {
    commit('SET_OPTION')
  }
}

export default {
  state,
  mutations,
  actions
}
