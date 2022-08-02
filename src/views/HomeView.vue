<template>
  <div class="home">
    <CategoryMenu />
    <ItemsContainer />
  </div>
</template>

<script>
import CategoryMenu from '@/components/CategoryMenu.vue';
import ItemsContainer from '@/components/ItemsContainer.vue';

export default {
  name: 'HomeView',
  components: {
    CategoryMenu,
    ItemsContainer
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
