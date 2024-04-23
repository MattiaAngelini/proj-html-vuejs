
<script>
  import { store } from '../store.js'; 
  import AppHero from './components - PageMain/AppHero.vue';
  import AppResearch from './components - PageMain/AppResearch.vue';
  import SellVehicle from './components - PageMain/SellVehicle.vue';
  import Customers from './components - PageMain/Customers.vue';
  import RecentArticles from './components - PageMain/RecentArticles.vue';

  export default {
    name: 'PageMain',
    components: {
      AppHero,
      AppResearch,
      SellVehicle,
      Customers,
      RecentArticles
    }
  }
</script>

<template>
  
    <main>
        <AppHero></AppHero>
        <AppResearch></AppResearch>
        <SellVehicle></SellVehicle>
        <Customers></Customers>
        <RecentArticles></RecentArticles>

    </main>
</template>

<style scoped lang="scss">
@use '../src/assets/style/generic' as *;
   
</style>