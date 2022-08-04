<template>
  <div class="cart">
    <router-link to="/" class="cart--back">←️ Voltar</router-link>
    <h2 class="cart--title">Seu pedido</h2>
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
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from './CartItem.vue';
import Mixin from '@/mixins/mixins';

export default {
    name: "CartContainer",
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
      }
    },
    mixins: [Mixin]
}
</script>

<style lang="less" scoped>

.cart {
  width: 600px;
  min-width: 600px;
  height: 100vh;
  padding: 50px;
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  &--back {
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    color: #111;
  }

  &--title {
    font-weight: 600;
  }

  &--total {
    font-weight: 600;
    font-size: 18px;
    text-align: right;
    margin-top: 20px;

    .price {
      color: @yellow;
    }
  }

  @media @tablet {
    width: 100%;
    min-width: unset;
    padding: 50px 20px 20px;
  }
}
</style>