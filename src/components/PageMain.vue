<script>
  import { store } from '../store.js'; 
  import AppHero from '../components/AppHero.vue';

export default {
    name:'PageMain',
    
    components: {
        AppHero
    }
}

</script>

<template>
  
    <main>
        <AppHero></AppHero>


    </main>


</template>

<style scoped lang="scss">
@use '../src/assets/style/generic' as *;
   
</style>