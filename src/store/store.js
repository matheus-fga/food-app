import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectedCategory: 'pizza',
    cartList: []
  },
  mutations: {
    changeCategory(state, id) {
      state.selectedCategory = id;
    },
    addToCart(state, item) {
      state.cartList.push({...item, quantity: 1});
    },
    increaseQuantity(state, index) {
      state.cartList[index].quantity++;
    }

  },
  actions: {
    changeCategory(context, id) {
      context.commit('changeCategory', id);
    },
    addToCart({ state, commit }, item) {
      let itemIndex = null;
      const hasItemInCart = state.cartList.find((cartItem, index) => {
        if (cartItem.id === item.id) {
          itemIndex = index;
          return true;
        }
      });

      if (!hasItemInCart) {
        commit('addToCart', item);
        return;
      }
      
      commit('increaseQuantity', itemIndex);
    }
  }
})