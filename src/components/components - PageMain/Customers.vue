<script>
  import { store } from '../../store.js';  

export default {
    name:'Customers',

    data() {

return {
   customers :[
                {title: 'Adam',
                 image: '../src/assets/img/man1.png',
                 description: 'We are a gallery vehicle dealer. Before we met this site, our sales were sluggish'

                },
                {title: 'Robert',
                 image: '../src/assets/img/man2.png',
                 description: 'One of the quality websites I apply to rent a car. There are hundreds of different tools'


                },
                {title: 'Annah',
                 image: '../src/assets/img/woman1.png',
                 description: 'I was trying to sell my car. And i put it here and sold it for more than it was worth'


                },
                {title: 'Elizabeth',
                 image: '../src/assets/img/woman2.png',
                 description: 'A fast and reliable vehicle selling site. Rare quality website with hunreds of model vehicles'

                },

            ]
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
  <section>

      <!--TITLE-->
      <div class="text-center p-4">
        <img class="img-like" src="../../assets/img/like.jpg" alt="">
        <h2 class="p-3">What Are Our Customers Saying?</h2>
        <p>Opinion from our happy customers.</p>
      </div>
      
      <!--CARDS CUSTOMERS-->
      <div class="d-flex justify-content-between container p-5">
        <div v-for="card in customers" class="card text-bg-light d-flex mb-3 p-4" style="max-width: 18rem;">   
    
          <p class="card-text ">{{ card.description }}</p>

          <div class="card-body d-flex flex-column align-items-center">
            <img class="img-rounded" :src="card.image" alt="">        
          </div>

          <p class="card-text text-center p-2">{{ card.title }}</p>

        </div>
    </div>

  </section>
</template>

<style scoped lang="scss">
@use '../src/assets/style/generic' as *;
@use '../src/assets/style/partials/variables' as *;


    section{
      background-image: url('src/assets/img/comment-bg-autocar.jpg');
      background-size: cover;
      color: $white-primary;

        .img-like {width: 50px;}
      
  }
  .img-rounded {
          width: 120px;
        }

        
   
</style>