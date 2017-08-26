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
  },
  nosplash: {
    type: Boolean,
    text: 'nosplash',
    state: false
  },
  noLogs: {
    type: Boolean,
    text: 'noLogs',
    state: false
  },
  noPause: {
    type: Boolean,
    text: 'noPause',
    state: false
  },
  filePatching: {
    type: Boolean,
    text: 'filePatching',
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
