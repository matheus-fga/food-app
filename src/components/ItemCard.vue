<template>
  <div class="item">
    <div class="item--tag" v-if="item.offer">Oferta</div>
    <img class="item--img" src="@/assets/images/0001.png" alt="item image">
    <h2 class="item--name">{{ item.name }}</h2>
    <p class="item--description">{{ item.description }}</p>
    <p class="item--price">{{ item.price | currency }}</p>
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
    color: @yellow;
  }
}

</style>