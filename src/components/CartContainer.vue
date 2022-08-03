<template>
  <div class="cart">
    <h2 class="cart--title">Seu pedido</h2>
    <CartItem 
      v-for="item in cart" 
      :key="item.id" 
      :item="item"
    />
  </div>
</template>

<script>
import CartItem from './CartItem.vue';

export default {
    name: "CartContainer",
    components: { 
      CartItem 
    },
    computed: {
      cart: {
        get() {
            return this.$store.state.cartList;
        },
        set() {
        }
      }
    },
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

  &--title {
    font-weight: 600;
  }
}
</style>