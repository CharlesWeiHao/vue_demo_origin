import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 新闻列表
    lists: []
  },
  mutations: {
    // 添加新闻到列表中
    addItem (state, value) {
      state.lists.push(value);
    }
  },
  actions: {

  }
})
