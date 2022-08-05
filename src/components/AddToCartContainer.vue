<template>
  <div class="add-cart-container">
   Hello {{id}}
  </div>
</template>

<script>
export default {
  name: 'AddToCartConatainer',
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>

</style>