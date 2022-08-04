<template>
  <div class="item-quantity">
    <button 
      type="button" 
      @click="updateQuantity({ action: 'dec', id: item.id })"
      :disabled="item.quantity === 0"
    >
      -
    </button>
    <span class="number">{{ item.quantity }}</span>
    <button type="button" @click="updateQuantity({ action: 'inc', id: item.id })">+</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ItemQuantity',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions([
      'updateQuantity'
    ])
  }
}
</script>

<style lang="less" scoped>

.item-quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 35px;

    button {
      margin: 0;
      font-weight: 600;
      font-size: 18px;
      background: transparent;
      border: none;
      cursor: pointer;

     &:disabled {
      cursor: not-allowed;
     }
    }

    .number {
      width: 20px;
      font-weight: 500;
      font-size: 18px;
      text-align: center;
      color: @yellow;
    }
  }
</style>