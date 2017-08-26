const state = {
  showScriptError: {
    type: Boolean,
    text: 'showScriptError',
    state: false
  },
  world: {
    type: Boolean,
    text: 'world="empty"',
    value: 'empty',
    state: false
  }
}

const mutations = {
  SET_OPTION (state, data) {
    state[data.option].state = data.state
  }
}

const actions = {
  setOption ({ commit }, data) {
    commit('SET_OPTION', {
      option: data.option,
      state: data.state
    })
  }
}

export default {
  state,
  mutations,
  actions
}
