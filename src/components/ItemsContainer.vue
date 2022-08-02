<template>
  <div 
    class="items-container"
    :class="{ 'center': isLoading }"
  >
    <LoadingCircle v-if="isLoading" />
    <ItemCard
      v-else
      v-for="item in itemsList" 
      :key="item.id" 
      :item="item" 
    />
  </div>
</template>

<script>
import ItemCard from './ItemCard.vue';
import LoadingCircle from './LoadingCircle.vue';
import axios from 'axios';

export default {
  name: "itemsContainer",
  components: { 
    ItemCard, 
    LoadingCircle 
  },
  data() {
      return {
          itemsList: [],
          isLoading: true,
      };
  },
  mounted() {
    this.getItemsList();
  },
  methods: {
    getItemsList() {
      this.isLoading = true;
      setTimeout(() => {
        axios.get(`http://localhost:3000/${this.selectedCategory}`)
          .then(response => {
            this.itemsList = response.data;
          })
          .finally(() => {
            this.isLoading = false;
          });
      }, 2000);
      
    }
  },
  computed: {
    selectedCategory: {
      get() {
        return this.$store.state.selectedCategory;
      }
    }
  },
  watch: {
    selectedCategory() {
      this.getItemsList();
    }
  }
}
</script>

<style lang="less" scoped>

.items-container {
  width: 100%;
  margin: 50px;
  display: flex;
  justify-content: flex-start;

  &.center {
    justify-content: center;
  }

  @media @tablet {
    margin: 10px;
    flex-wrap: wrap;
  }
}

</style>