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
        status: ['New','Used'],


        carsAvalaibles:
       [
            {category: 'Cabrio',
             brand: 'Bmw',
             model: 'M-9',
             fueltype: 'Electric',
             transimission: 'Automatic',
             status: 'Used',
             location: 'Milano',
             price: '34.000',
             image: '../src/assets/img/images-AppResearch/carsAvalaible/bmw88-400x300.jpg'
            },

            {category: 'Cabrio',
             brand: 'Bmw',
             model: 'M-8',
             fueltype: 'Diesel',
             transimission: 'Automatic',
             status: 'Used',
             location: 'Torino',
             price: '34.000',
             image:'../src/assets/img/images-AppResearch/carsAvalaible/bmw-8-series-convertible-technical-data-sp-desktop-400x300.jpg'
            },

            {category: 'Cabrio',
             brand: 'Bmw',
             model: 'M-4',
             fueltype: 'Gasoline',
             transimission: 'Manual',
             status: 'New',
             location: 'Milano',
             price: '36.000',
             image:'../src/assets/img/images-AppResearch/carsAvalaible/bmw442-400x300.jpg'             
            },

            {category: 'Hatchback',
             brand: 'Seat',
             model: 'Ibiza',
             fueltype: 'Electric',
             transimission: 'Automatic',
             status: 'Used',
             location: 'Bari',
             price: '27.000',
             image: '../src/assets/img/images-AppResearch/carsAvalaible/yeni-ibiza-2-400x300.jpg'
            },

            {category: 'Suv',
             brand: 'Seat',
             model: 'Arona',
             fueltype: 'Gasoline',
             transimission: 'Automatic',
             status: 'New',
             location: 'Roma',
             price: '68.000',
             image:'../src/assets/img/images-AppResearch/carsAvalaible/makyajli-2022-seat-arona-1-400x300.jpg'
             
            },

            {category: 'Suv',
             brand: 'Volkswagen',
             model: 'Taigo',
             fueltype: 'Electric',
             transimission: 'Automatic',
             status: 'Used',
             location: 'Milano',
             price: '54.000',
             image:'../src/assets/img/images-AppResearch/carsAvalaible/vw-taigo3832-400x300.jpg'           
            },

            {category: 'Suv',
             brand: 'Volkswagen',
             model: 'T-cross',
             fueltype: 'Diesel',
             transimission: 'Manual',
             status: 'New',
             location: 'Milano',
             price: '47.000',
             image:'../src/assets/img/images-AppResearch/carsAvalaible/2019-vw-t-cross-400x300.jpg'
             
            },

            {category: 'Sedan',
             brand: 'Volkswagen',
             model: 'Passat',
             fueltype: 'Diesel',
             transimission: 'Automatic',
             status: 'Used',
             location: 'Milano',
             price: '32.000',
             image:'../src/assets/img/images-AppResearch/carsAvalaible/volkswagen-passat-1280x720-1-400x300.jpg'
            },

            {category: 'Cabrio',
             brand: 'BMW',
             model: 'M-9',
             fueltype: 'Gasoline',
             transimission: 'Manual',
             status: 'Used',
             location: 'Milano',
             price: '30.000',
             image: '../src/assets/img/images-AppResearch/carsAvalaible/bmw88-400x300.jpg'
            },

            {category: 'Cabrio',
             brand: 'BMW',
             model: 'M-4',
             fueltype: 'Diesel',
             transimission: 'Automatic',
             status: 'New',
             location: 'Milano',
             price: '54.000',
             image:'../src/assets/img/images-AppResearch/carsAvalaible/bmw442-400x300.jpg'  
            },

            {category: 'Sedan',
             brand: 'Volskwagen',
             model: 'Passat',
             fueltype: 'Gasoline',
             transimission: 'Automatic',
             status: 'Used',
             location: 'Bari',
             price: '24.000',
             image:'../src/assets/img/images-AppResearch/carsAvalaible/volkswagen-passat-1280x720-1-400x300.jpg'
            },

            {category: 'Suv',
             brand: 'Volkswagen',
             model: 'T-cross',
             fueltype: 'Electric',
             transimission: 'Automatic',
             status: 'New',
             location: 'Roma',
             price: '64.000',
             image:'../src/assets/img/images-AppResearch/carsAvalaible/2019-vw-t-cross-400x300.jpg'
            },  
        ],
        showAllResults: false,
   
      };
      },
      methods: {  
        toggleShowAll() {
      this.showAllResults = !this.showAllResults;
      
      //FUNZIONE PER FILTRARE LE AUTO:
      // Ho a disposizione un array di oggetti di auto disponibili.
      // Ho bisogno di salvare (v-model) le scelte dell'utente (input e select) in un array.
      // Se le selezioni dell'utente sono comprese tra le chiavi dell'oggetto , mostra solo gli oggetti con quelle chiavbi.


    },
      },
      mounted() {
      //

      }

}

</script>

<template>
   
   <section class="container p-3">

    <!----------------------------------FILTERS INPUT----------------------------------------->
    <div class="container-input p-4">
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
        <button class="ms-button" @click="">Search</button>

      </div>
  </div>

    <!-----------------TYPE CARS AVALAIBLE---------------------------->
    <div class="d-flex justify-content-between gap-2">

      <div v-for="category in categories"  class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div  class="card-body text-center">

          
          <img :src="category.image" alt="">
          <p class="card-text"> {{ category.type }} </p>
          <p class="card-text"> 3 listings</p>
        </div>
      </div>

    </div>

    <!--RESULTS CARDS CARS-->
    <div class="d-flex flex-wrap gap-2 justify-content-between">
      <!-- CARDS -->
      <div
        v-for="(car, index) in (showAllResults ? carsAvalaibles : carsAvalaibles.slice(0, 8))"
        :key="index"
        class="card text-bg-light mb-3"
        style="max-width: 18rem;"
      >
        <div class="card-body">
          <img class="img-fluid" :src="car.image" alt="">
          <p class="card-text">{{ car.brand}} {{ car.model }}<i class="fa-solid fa-circle-check m-2"></i> </p>
          <p class="card-text"> {{ car.category }}</p>
          <div class="d-flex gap-2">
            <span><i class="fa-solid fa-dollar-sign"></i>{{car.price}}</span>
            <span><i class="fa-solid fa-car"></i>{{car.brand}}</span>
            <span><i class="fa-solid fa-gas-pump"></i>{{car.fueltype}}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- BUTTON SHOW ALL -->
    <div class="d-flex justify-content-center"><button class="ms-button " @click="toggleShowAll">Show All Cars <i class="fas fa-arrow-right p-2"></i> </button></div>

   </section>


</template>

<style scoped lang="scss">
@use '../src/assets/style/generic' as *;
@use '../src/assets/style/partials/variables' as *;



  .container-input {

      input{
        border-radius: 6px;
        border: 1px solid grey;
        text-align: center;
      }

      button {
        background-color: $white-primary;
        color: grey;
        height: 60px;
      }
      .ms-button {
              color: white;
              background-color: $black-primary;
              border: none;
              font-weight: 600;
              padding: 16px 32px 16px 32px;         
      }

  }

  .ms-button {
              color: white;
              background-color: $black-primary;
              border: none;
              font-weight: 600;
              padding: 16px 32px 16px 32px;         
      }


      .card-body {
        line-height: 30px;
        font-size: 14px;
        color: grey;

          i {
            color: $black-primary;
            margin-right: 6px;
          }       
      }
 
</style>