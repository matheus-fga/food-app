<template>
  <div class="home">
    <router-link to="/cart" class="cart-icon">
      <CartIcon />
    </router-link>
    <CategoryMenu />
    <ItemsContainer />
    <CartContainer class="cart-container">
      <component :is="child_component"></component>
    </CartContainer>
  </div>
</template>

<script>
import CategoryMenu from '@/components/CategoryMenu.vue';
import ItemsContainer from '@/components/ItemsContainer.vue';
import CartContainer from '@/components/CartContainer.vue';
import CartListContainer from '@/components/CartListContainer.vue';

import CartIcon from '@/assets/icons/cart.svg';

export default {
  name: 'HomeView',
  components: {
    CategoryMenu,
    ItemsContainer,
    CartContainer,
    CartIcon,
    CartListContainer
  },
  data() {
    return {
      child_component: CartListContainer
    }
  }
}
</script>

<style lang="less" scoped>

.home {
  display: flex;

  .cart-icon {
    display: none;
  }
  
  @media @tablet {
    flex-direction: column;

    .cart-icon {
      width: 40px;
      height: 40px;
      margin: 20px 20px 20px auto;
      border-radius: 50%;
      background: @pink;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .cart-container {
      display: none;
    }
  }
}

</style>
