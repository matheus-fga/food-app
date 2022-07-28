<template>
  <div class="category-menu">
    <ul>
      <li
        v-for="category in categoriesList" 
        :key="category.id" 
        :class="{ 'active': isActive(category.id)}"
        @click="handleCategoryClick(category.id)"
      >
        <component :is="category.icon" />
        <p>{{ category.label }}</p>
      </li>
      
    </ul>
  </div>
</template>

<script>
import Pizza from '@/assets/icons/pizza.svg';
import Burger from '@/assets/icons/food.svg';
import Fries from '@/assets/icons/french-fries.svg';
import Smoothie from '@/assets/icons/smoothie.svg';
import IceCream from '@/assets/icons/ice-cream.svg';

export default {
  name: 'CategoryMenu',
  components: {
    Pizza,
    Burger,
    Fries,
    Smoothie,
    IceCream
  },
  data() {
    return {
      categoriesList: [
        { label: 'Pizza', icon: Pizza, id: 'pizza' },
        { label: 'Burgers', icon: Burger, id: 'burger' },
        { label: 'Combos', icon: Fries, id: 'combo' },
        { label: 'Bebidas', icon: Smoothie, id: 'drinks' },
        { label: 'Sorvetes', icon: IceCream, id: 'deserts' },
      ],
      selectedCategory: 'pizza'
    }
  },
  methods: {
    handleCategoryClick(id) {
      this.selectedCategory = id;
    },
    isActive(id) {
      return this.selectedCategory === id;
    }
  }
}
</script>

<style lang="less" scoped>

.category-menu {
  width: 130px;
  height: 100vh;
  background: white;
  position: fixed;

  display: flex;
  align-items: center;

  ul {
    width: 100%;
    list-style: none;
    padding: 0;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100px;
      cursor: pointer;

      svg {
          path {
            fill: @dark-grey;
          }
        }

      p {
        margin-bottom: 0;
        font-weight: 500;
        font-size: 14px;
        color: @dark-grey;
      }

      &.active {
        background: @yellow;
        border-radius: 8px;

        svg {
          path {
            fill: black;
          }
        }

        p {
          color: black;
        }
      }
    }
  }

  @media @tablet {
    width: 100%;
    height: fit-content;

    ul {
      display: flex;
      justify-content: center;
      margin: 10px;
      overflow-x: scroll;

      li {
        min-width: 80px;
        margin: 0 10px;
        border: 1px solid @light-grey;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
      }
    }

    @media @smartphone {
      ul {
        justify-content: space-between;
      }
    }
  }
}

</style>