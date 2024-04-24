<script>
  import { store } from '../../store.js'; 

export default {
    name:'RecentArticles',

    data() {

    return {

      articles :[
                {title: 'Why is BMW loved?',
                 image: '../src/assets/img/news-autocar-1-300x180.jpg',
                 description: 'BMWs have different line with their designs and almost [...]'

                },
                {title: 'How solid is Audi?',
                 image: '../src/assets/img/news-autocar-2-300x180.jpg',
                 description: 'According to Euro NCAP data with different test organiztions, there [...]'

                },
                {title: 'What brand is Skoda?',
                 image: '../src/assets/img/news-autocar-5-300x180.jpg',
                 description: 'Skoda is one of the leading automotive manufacturers on the  [...]'

                },
                {title: 'Is the Auris diesel?',
                 image: '../src/assets/img/news-autocar-6-300x180.jpg',
                 description: 'You will have a quiter vehicle that burns less than [...]'
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

    <div class="text-center">
      <img class="img-like" src="../../assets/img/like-black.png" alt="">
      <h3 class="p-3">Recent Articles</h3>
      <p class="mb-3">Useful information about car.</p>
    </div>

    <div class="container d-flex justify-content-between mb-4">
      <div v-for="article in articles" class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-body d-flex flex-column justify-content-between">
          <img :src="article.image" alt="">
          <p>06.07.2022</p>
          <h5 class="card-title">{{article.title}}</h5>
          <p class="card-text p-2">{{article.description}}</p>
          <div class="d-flex justify-content-center">
            <button class="mt-3">More</button>
          </div>
        </div>
      </div>
    </div>
  
  </section>

</template>

<style scoped lang="scss">
@use '../src/assets/style/generic' as *;
@use '../src/assets/style/partials/variables' as *;

  .img-like {width: 50px;
             margin-top: 30px;
            }

            h3{font-weight: 700;}

            p{color: grey;}

  .card {
    line-height: 26px;

      button {
              color: white;
              background-color: $black-primary;
              border: none;
              font-weight: 600;
              padding: 16px 32px 16px 32px;         
      }
    }
    
</style>