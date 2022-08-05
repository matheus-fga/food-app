<template>
  <div class="cart-list">
    <h2 class="cart--title">Seu pedido</h2>
    <p v-if="hasNoItemInCart">Seu carinho está vazio</p>
    <div v-else class="cart-content">
      <CartItem
        v-for="item in cart" 
        :key="item.id" 
        :item="item"
       />
      <div class="cart--total">
        <span>Total: </span>
        <span class="price">{{ getCartTotal | currency }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from './CartItem.vue';
import Mixin from '@/mixins/mixins';

export default {
  name: 'CartListContainer',
  components: { 
      CartItem 
    },
    computed: {
      ...mapGetters([
        'getCartTotal'
      ]),
      cart: {
        get() {
            return this.$store.state.cartList;
        },
        set() {
        }
      },
      hasNoItemInCart() {
        return !this.cart.length
      }
    },
    mixins: [Mixin]
}
</script>

<style lang="less" scoped>

  .cart--title {
    font-weight: 600;
  }

  .cart--total {
    font-weight: 600;
    font-size: 18px;
    text-align: right;
    margin-top: 20px;

    .price {
      color: @yellow;
    }
  }
</style>