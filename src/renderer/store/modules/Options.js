const state = {
  showScriptError: false,
  otherOption: false
}

const mutations = {
  SET_OPTION (state, data) {
    state[data.option] = data.value
  }
}

const actions = {
  setOption ({ commit }, data) {
    commit('SET_OPTION', {
      option: data.option,
      value: data.value
    })
  }
}

export default {
  state,
  mutations,
  actions
}
