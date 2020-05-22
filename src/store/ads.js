import firebase from 'firebase/app'
class Ad {
  constructor(title, description, ownerId, url = '', promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.url = url
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    ads: [],
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload)
    },
    loadAds(state, payload) {
      state.ads = payload
    },
  },
  actions: {
    async createAd({ commit }, payload) {
      commit('clearError')
      commit('setLoading', true)

      try {
        await firebase
          .database()
          .ref('ads')
          .push(payload)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchAds({ commit }) {
      commit('clearError')
      commit('setLoading', true)

      const resAds = []

      try {
        const fbVal = await firebase
          .database()
          .ref('ads')
          .once('value')
        const ads = fbVal.val()
        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          resAds.push(
            new Ad(ad.title, ad.description, ad.ownerId, ad.url, ad.promo, key)
          )
        })
        commit('loadAds', resAds)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
  },
  getters: {
    ads(state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds(state) {
      return state.ads
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    },
  },
}
