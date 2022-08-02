<template>
  <div class="item">
    <div class="img-container">
      <div class="item--tag" v-if="item.offer">Oferta</div>
      <img class="item--img" src="@/assets/images/0001.png" alt="item image">
    </div>
    <div class="content">
      <h2 class="item--name">{{ item.name }}</h2>
      <p class="item--description">{{ item.description }}</p>
      <p class="item--price">{{ item.price | currency }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    item: {}
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
  position: relative;
  width: 215px;
  height: 290px;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: column;

  p, h2 {
    margin: 4px 0;
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
      margin: 0 0 10px 0;
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
      margin-top: 5px;
    }
  }
}

</style>