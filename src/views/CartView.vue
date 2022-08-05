<template>
  <div class="cart">
    <CartContainer>
      <component :is="child_component"></component>
    </CartContainer>
  </div>
</template>
<script>
import CartContainer from '@/components/CartContainer.vue';
import CartListContainer from '@/components/CartListContainer.vue';

export default {
  name: 'CartView',
  components: {
    CartContainer
  },
  data() {
    return {
      child_component: CartListContainer
    }
  }
}
</script>
