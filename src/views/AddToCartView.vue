<template>
  <div class="add-to-cart">
    <AddToCartContainer :id="id" />
  </div>
</template>
<script>
import AddToCartContainer from '@/components/AddToCartContainer.vue'

export default {
  name: 'AddToCartView',
  props: ['id'],
  components: {
    AddToCartContainer
  }
}
</script>
