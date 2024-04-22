
<script>
  import { store } from '../store.js'; 
  import AppHero from './components - PageMain/AppHero.vue';
  import AppResearch from './components - PageMain/AppResearch.vue';
  import SellVehicle from './components - PageMain/SellVehicle.vue';
  import Customers from './components - PageMain/Customers.vue';
  import ResentArticles from './components - PageMain/ResentArticles.vue';

  export default {
    name: 'PageMain',
    components: {
      AppHero,
      AppResearch,
      SellVehicle,
      Customers,
      ResentArticles
    }
  }
</script>

<template>
  
    <main>
        <AppHero></AppHero>
        <AppResearch></AppResearch>
        <SellVehicle></SellVehicle>
        <Customers></Customers>
        <ResentArticles></ResentArticles>

    </main>
</template>

<style scoped lang="scss">
@use '../src/assets/style/generic' as *;
   
</style>