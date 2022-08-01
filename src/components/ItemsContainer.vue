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
    created() {
        axios.get("http://localhost:3000/burgers")
            .then(response => {
            this.itemsList = response.data;
        });
    }
}
</script>

<style lang="less" scoped>
  .items-container {
    margin: 50px;
    display: flex;
  }
</style>