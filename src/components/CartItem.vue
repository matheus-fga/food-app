<template>
  <div class="item">
    <div class="item--quantity">
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
    <div class="item--img-container">
      <img class="item--img" :src="imagePath" alt="item image" />
    </div>
    <div class="content">
      <h3 class="item--name">{{ item.name }}</h3>
      <a>Adicionar observação</a>
    </div>
    <p class="item--price">{{ item.price | currency }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartItem',
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
  },
  computed: {
    imagePath() {
      return require(`../assets/images/${this.item.id}.png`);
    }
  },
  filters: {
      currency(value) {
        return `R$ ${value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`;
      }
  }
}
</script>

<style lang="less" scoped>

.item {
  padding: 20px 0;
  border-bottom: 1px solid @light-grey;

  display: flex;
  align-items: center;

  h3, p, button {
    font-weight: 600;
    font-size: 18px;
    margin: 0;
  }

  &--quantity {
    display: flex;
    align-items: center;
    padding-right: 35px;

    button {
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

  &--img-container {
    width: 80px;
    height: 65px;
    border-radius: 8px;
    background: @light-yellow;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &--img {
    width: 65px;
  }

  .content {
    padding: 0 20px;
    flex-grow: 1;

    a {
      font-weight: 500;
      font-size: 12px;
      color: @dark-grey;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  &--price {
    color: @yellow;
  }
}
</style>