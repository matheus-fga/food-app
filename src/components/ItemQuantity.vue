<template>
  <div class="item-quantity">
    <button 
      type="button" 
      @click="handleQuantityButtonClick('dec')"
      :disabled="isDisabled"
    >
      -
    </button>
    <span class="number">{{ useStore ? item.quantity : quantity }}</span>
    <button type="button" @click="handleQuantityButtonClick('inc')">+</button>
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
    },
    useStore: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      quantity: this.item.quantity
    }
  },
  methods: {
    ...mapActions([
      'updateQuantity'
    ]),
    handleQuantityButtonClick(action) {
      if (this.useStore) {
        this.updateQuantity({ action, id: this.item.id })
        return;
      }

      if (action === 'inc') {
        this.quantity++;
      } else if (action === 'dec' && this.quantity > 1) {
        this.quantity--;
      }
    }
  },
  computed: {
    isDisabled() {
      if (this.useStore) {
        return this.item.quantity < 1;
      }
        return this.quantity <= 1;
    }
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