import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/**
 * ダミーapi https://api.myjson.com/bins/ov9z9
 * ↑にアクセスすればdummy.jsonの中身を返してくれる
 * @see http://myjson.com/ これバカ便利
 */

export default new Vuex.Store({
  state: {
    items: []
  },
  getters: {
    items: state => {
      return state.items
    }
  },
  mutations: {
    getItems(state, payload) {
      state.items = payload.items
    }
  },
  actions: {
    async getItemsAction({ commit }, { height, weight }) {
      const payload = {
        items: ''
      }
      console.log(height, weight)
      try {
        const response = await axios.get('https://api.myjson.com/bins/ov9z9')
        payload.items = response.data.items
      } catch (e) {
        payload.items = '情報が取得できませんでした。'
      }
      commit('getItems', payload)
    }
  }
})
