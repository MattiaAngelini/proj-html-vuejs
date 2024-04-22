<script>
  
  import { store } from './store.js'; 
  import PageHeader from './components/PageHeader.vue';
  import PageMain from './components/PageMain.vue';
  import PageFooter from './components/PageFooter.vue';

  export default {
    // COMPONENTI
    components: {
      PageHeader,
      PageMain,
      PageFooter,
    },
    // DATI
    data() {
      return {
        store
      };
    },
    // METODI
    methods: {
   
    },
    mounted() {
     
    }
  }
</script>

<template>

  <PageHeader></PageHeader>
  <PageMain></PageMain>
  <PageFooter></PageFooter>

</template>

<style scoped lang="scss">
 
  @use '../src/assets/style/generic' as *;
</style>
