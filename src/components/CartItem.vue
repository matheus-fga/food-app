<template>
  <div class="item">
    <ItemQuantity class="item--quantity" :item="item" />
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
import ItemQuantity from './ItemQuantity.vue';
import Mixin from '@/mixins/mixins';

export default {
    name: "CartItem",
    components: { ItemQuantity },
    props: {
      item: {
          type: Object,
          required: true
      }
    },
    computed: {
        imagePath() {
            return require(`../assets/images/${this.item.id}.png`);
        }
    },
    mixins: [Mixin],
}
</script>

<style lang="less" scoped>

.item {
  padding: 20px 0;
  border-bottom: 1px solid @light-grey;

  display: flex;
  align-items: center;

  h3, p {
    margin: 0;
    font-weight: 600;
    font-size: 18px;
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

  @media @tablet {
    display: grid;
    row-gap: 10px;
    grid-template-columns: 80px 1fr;
    grid-template-areas: 
      "img content"
      "quantity price"
    ;

    &--img-container {
      grid-area: img;
    }

    .content {
      grid-area: content;
    }

    &--quantity {
      padding: 0;
      grid-area: quantity;
    }

    &--price {
      padding: 0 20px;
      grid-area: price;
    }
  }
}
</style>