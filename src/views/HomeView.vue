<template>
  <div class="home">
    <CategoryMenu />
    <ItemsContainer />
    <CartContainer />
  </div>
</template>

<script>
import CategoryMenu from '@/components/CategoryMenu.vue';
import ItemsContainer from '@/components/ItemsContainer.vue';
import CartContainer from '@/components/CartContainer.vue';

export default {
  name: 'HomeView',
  components: {
    CategoryMenu,
    ItemsContainer,
    CartContainer
}
}
</script>

<style lang="less" scoped>

.home {
  display: flex;
  
  @media @tablet {
    flex-direction: column;
  }
}

</style>
