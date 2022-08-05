<template>
  <div class="item" @click="addToCart">
    <div class="img-container">
      <div class="item--tag" v-if="item.offer">Oferta</div>
      <img class="item--img" :src="imagePath" alt="item image">
    </div>
    <div class="content">
      <h2 class="item--name">{{ item.name }}</h2>
      <p class="item--description">{{ item.description }}</p>
      <p class="item--price">{{ item.price | currency }}</p>
    </div>
  </div>
</template>

<script>
import Mixin from '@/mixins/mixins';

export default {
  name: 'ItemCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      if (this.isDesktop()) {
          this.$store.dispatch('addToCart', this.item);
          return;
      }
      this.$router.push({ name: 'addToCart', params: { id: this.item.id } });
    }
  },
  computed: {
    imagePath() {
      return require(`../assets/images/${this.item.id}.png`);
    }
  },
  mixins: [Mixin]
}
</script>

<style lang="less" scoped>

.item {
  position: relative;
  width: 215px;
  height: 290px;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  cursor: pointer;

  display: flex;
  flex-direction: column;

  p, h2 {
    margin: 0;
    font-weight: 600;
    font-size: 18px;
  }

  &--tag {
    position: absolute;
    top: 15px;
    right: 15px;

    padding: 3px 8px;
    border-radius: 12px;
    font-weight: 500;
    font-size: 12px;
    background: @pink;
    color: #FFF;
  }

  &--img {
    display: block;
    margin: auto;
    width: 100%;
  }

  &--description {
    font-weight: 300 !important;
    font-size: 12px !important;
    color: @dark-grey;
  }

  &--price {
    text-align: right;
    color: @yellow;
  }

  .content {
    height: 100%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media @tablet {
    width: 100%;
    height: fit-content;
    margin: 10px;
    padding: 10px 20px 10px 5px;
    border: 1px solid @light-grey;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    flex-direction: row;

    &--tag {
      width: fit-content;
      position: static;
      order: 1;
    }

    &--img {
      width: 86px;
      margin: 0 0 5px 0;
      order: 0;
    }

    &--price {
      text-align: right;
      margin: 5px 0 0 auto !important;
    }

    .img-container {
      margin-right: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .content {
      flex: 1;
    }
  }
}

</style>