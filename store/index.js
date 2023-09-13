
export const state = () => ({
  isCoverVideo: false,
  current: null,
  isMenu: false,
  chooseSite: false,
  choice: null,
  isPopupOnce: false,
  isPopupActive: false,
  smoothEffects: null,
})

export const getters = {

}

export const mutations = {

  smoothEffects: function(state, payload) {
    state.smoothEffects = payload;
  },
  isPopupOnce: function(state, payload) {
    state.isPopupOnce = payload;
  },
  isPopupActive: function(state, payload) {
    state.isPopupActive = payload;
  },
  chooseSite: function(state, payload) {
    state.chooseSite = payload;
  },
  choice: function(state, payload) {
    state.choice = payload;
  },


  setIsCoverVideo(state, payload) {
    state.isCoverVideo = payload
  },

  setIsMenu(state, payload) {
    state.isMenu = payload
  },

  setCurrent(state, payload) {

    if (payload.indexOf("/digital") >= 0)
      state.current = 'digital'
    else if (payload.indexOf("/icon-plus") >= 0)
      state.current = 'icon plus'
    else if (payload.indexOf("/branding-studio") >= 0)
      state.current = 'brandingstudio'
    else if (payload == "/")
      state.current = 'advertising'

  }
}

export const actions = {

  // async checkCurrentTopNav(state) {

  // }

}
