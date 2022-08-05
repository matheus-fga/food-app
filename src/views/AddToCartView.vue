<template>
  <div class="add-to-cart">
    <CartContainer>
      <component :is="child_component" :id="id"></component>
    </CartContainer>
  </div>
</template>
<script>
import AddToCartContainer from '@/components/AddToCartContainer.vue'
import CartContainer from '@/components/CartContainer.vue';

export default {
  name: 'AddToCartView',
  props: ['id'],
  components: {
    AddToCartContainer,
    CartContainer
},
  data() {
    return {
      child_component: AddToCartContainer
    }
  },
}
</script>
