<script>
  import { store } from '../../store.js'; 

export default {
    name:'AppResearch',

    data() {

      return {

       


        
      };
      },
      methods: {
      //
      },
      mounted() {
      //

      }


}

</script>

<template>
   
   <section class="container p-3">
    <!--INPUT FILTERS & BUTTON-->
    <div class="d-flex justify-content-center gap-3">
      <input type="text">    
      <input type="text">

      <select name="" id="">
        <option value=""></option>
      </select>

      <select name="" id="">
        <option value=""></option>
      </select>

      <select name="" id="">
        <option value=""></option>
      </select>

      <select name="" id="">
        <option value=""></option>
      </select>

      <select name="" id="">
        <option value=""></option>
      </select>

      <button>Search</button>

    </div>

    <!--TYPE CARS AVALAIBLE-->
    <div class="d-flex justify-content-between gap-2">

      <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-body">
          <img src="" alt="">
          
          <p class="card-text"> cabrio </p>
          <p class="card-text"> 3 listings</p>
        </div>
      </div>

    </div>

    <!--RESULTS CARDS CARS-->
    <div class="d-flex justify-content-between gap-2">

      <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-body">
          <img src="" alt="">
          
          <p class="card-text"> BMW M9<i>X</i> </p>
          <p class="card-text"> cabrio <i>X</i> </p>
          
          <div class="d-flex gap-2">
             <span><i>X</i>34.000</span>
             <span><i>X</i>BMW</span>
             <span><i>X</i>ELECTRIC</span>
          </div>
          
         
        </div>
      </div>

    </div>

    <!-- BUTTON SHOW ALL
    <div><button>Show All</button></div> -->

   </section>


</template>

<style scoped lang="scss">
@use '../src/assets/style/generic' as *;
   
</style>