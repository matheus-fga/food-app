<template>
  <div class="home">
    <CategoryMenu />
    <ItemsContainer />
    <CartContainer v-if="isDesktop"/>
  </div>
</template>

<script>
import CategoryMenu from '@/components/CategoryMenu.vue';
import ItemsContainer from '@/components/ItemsContainer.vue';
import CartContainer from '@/components/CartContainer.vue';

import Mixin from '@/mixins/mixins';

export default {
  name: 'HomeView',
  components: {
    CategoryMenu,
    ItemsContainer,
    CartContainer
  },
  mixins: [Mixin]
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
