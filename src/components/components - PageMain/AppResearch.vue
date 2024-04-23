<script>
  import { store } from '../../store.js'; 

export default {
    name:'AppResearch',

    data() {

      return {

        categories: [
          { type: 'Cabrio',
            image: '../src/assets/img/images-AppResearch/type/cabrio.jpg'
          },
          { type: 'Suv',
            image: '../src/assets/img/images-AppResearch/type/suv.jpg'
          },
          { type: 'Hatchback',
            image: '../src/assets/img/images-AppResearch/type/hatchback.jpg'
          },
          { type: 'Sedan',
            image: '../src/assets/img/images-AppResearch/type/sedan.jpg'
          },
          { type: 'Pick Up',
            image: '../src/assets/img/images-AppResearch/type/pickup.jpg'
          },
          { type: 'Coupè',
            image: '../src/assets/img/images-AppResearch/type/coupe.jpg'
          },
        ],

        brands:['Bmw','Seat','Volkswagen'],
        fueltype: ['Electric','Diesel','Gasoline'] ,
        transmission: ['Automatic','Manual'],
        status: ['New','Used']


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

    <!----------------------------------FILTERS BAR----------------------------------------->
    <div class="p-4">
      <!--INPUT FILTERS & BUTTON-->
      <div class="d-flex justify-content-center gap-3">
        <input type="text"  placeholder="Keywords">    
        <input type="text" placeholder="Location">

      
      <!--CATEGORIES-->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          All Categories
        </button>

        <ul class="dropdown-menu">
          <li v-for="category in categories" class="dropdown-item" >{{ category.type }}</li>

        </ul>
      </div>
      
      <!--BRAND-->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Brand
        </button>
        
        <ul class="dropdown-menu">
          <li v-for="brand in brands" class="dropdown-item" >{{ brand }}</li>

        </ul>
      </div>
      
      <!--FUELTYPE-->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Fuel Type
        </button>
        
        <ul class="dropdown-menu">
          <li v-for="type in fueltype" class="dropdown-item"> {{ type }} </li>

        </ul>
      </div>
      
      <!--TRANSMISSION-->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Transmission
        </button>
        
        <ul class="dropdown-menu">
          <li v-for="shift in transmission" class="dropdown-item" >{{ shift }}</li>

        </ul>
      </div>
      
      <!--STATUS-->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Status
        </button>
        
        <ul class="dropdown-menu">
          <li v-for="condition in status" class="dropdown-item" > {{ condition }}</li>
        </ul>
      </div>
        

        <!--BUTTON RESEARCH-->
        <button>Search</button>

      </div>
  </div>

    <!-----------------TYPE CARS AVALAIBLE---------------------------->
    <div class="d-flex justify-content-between gap-2">

      <div v-for="category in categories"  class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div  class="card-body">

          
          <img :src="category.image" alt="">
          <p class="card-text"> {{ category.type }} </p>
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