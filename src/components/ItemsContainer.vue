<template>
  <div class="items-container">
    <ItemCard 
      v-for="item in itemsList" 
      :key="item.id" 
      :item="item" 
    />
  </div>
</template>

<script>
import ItemCard from './ItemCard.vue';
import axios from 'axios';

export default {
  name: "itemsContainer",
  components: { ItemCard },
  data() {
      return {
          itemsList: []
      };
  },
  mounted() {
    this.getItemsList();
  },
  methods: {
    getItemsList() {
      axios.get(`http://localhost:3000/${this.selectedCategory}`)
          .then(response => {
          this.itemsList = response.data;
      });
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
  margin: 50px;
  display: flex;

  @media @tablet {
    margin: 10px;
    flex-wrap: wrap;
  }
}

</style>