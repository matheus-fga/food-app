<template>
  <div class="cart">
    <router-link to="/" class="cart--back">←️ Voltar</router-link>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "CartContainer"
}
</script>

<style lang="less" scoped>

.cart {
  width: 600px;
  min-width: 600px;
  height: 100vh;
  padding: 50px;
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  &--back {
    display: none;
  }

  @media @tablet {
    width: 100%;
    min-width: unset;
    padding: 50px 20px 20px;

    &--back {
      display: block;
      font-weight: 600;
      font-size: 18px;
      text-decoration: none;
      color: #111;
    }
  }
}
</style>