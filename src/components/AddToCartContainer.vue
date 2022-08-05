<template>
  <div class="add-cart-container">
    <LoadingCircle v-if="isLoading"/>
    <div v-else class="content">
      <ItemCard class="content--item" :item="item" />
      <div class="content--quantity-container">
        <span>Quantidade</span>
        <ItemQuantity class="item-quantity" :item="item" :useStore="false"/>
      </div>
      <p>Observações:</p>
      <textarea v-model="obsevation" rows="7"></textarea>
      <button type="button" class="primary-button">Adicionar ao carinho</button> 
    </div>
  </div>
</template>

<script>
import ItemCard from './ItemCard.vue';
import LoadingCircle from './LoadingCircle.vue';
import ItemQuantity from './ItemQuantity.vue';

import axios from 'axios';

export default {
  name: 'AddToCartConatainer',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    ItemCard,
    LoadingCircle,
    ItemQuantity
},
  data() {
    return {
      item: {},
      isLoading: true,
      obsevation: ''
    }
  },
  mounted() {
    if (this.itemInCart) {
      this.item = this.itemInCart;
      this.isLoading = false;
      return;
    }

    setTimeout(() => {
      axios.get(`http://localhost:3000/${this.selectedCategory}/${this.id}`)
        .then(response => {
          this.item = { ...response.data, quantity: 1 };
        })
        .finally(() => {
          this.isLoading = false;
        });
    }, 1000);
  },
  computed: {
    selectedCategory: {
      get() {
        return this.$store.state.selectedCategory;
      }
    },
    itemInCart() {
      return this.$store.getters.getItemById(this.id);
    }
  }
}
</script>

<style lang="less" scoped>

.add-cart-container {
  margin-top: 20px;
  font-weight: 600;
  font-size: 16px;

  display: flex;
  justify-content: center;

  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;

    &--item {
      margin: 0;
    }

    &--quantity-container {
      width: 100%;
      height: fit-content;
      padding: 10px 20px;
      border: 1px solid @light-grey;
      border-radius: 8px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

      display: flex;
      justify-content: space-between;

      .item-quantity {
        padding: 0;
      }
    }

    p {
      margin: 0;
    }

    textarea {
      width: 100%;
      padding: 15px;
      border-radius: 8px;
      border: 1px solid #dadada;
    }

    .primary-button {
      flex: 1
    }
  }
}
</style>