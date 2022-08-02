import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectedCategory: 'pizza'
  },
  mutations: {
    changeCategory(state, id) {
      state.selectedCategory = id;
    }
  },
  actions: {
    changeCategory(context, id) {
      context.commit('changeCategory', id);
    }
  }
})