<script>
  import { store } from '../../store.js'; 

export default {
    name:'AppHero',

    data() {

        return {

            carousel :[
                {title: 'Buy And Sell Your Car At its Value',
                 image: '../src/assets/img/slider-autocar-5.jpg',
                 text: 'Find the right price and dealer.'
                },

                {title: 'Rev Up Your Ride!',
                 image: '../src/assets/img/slider-autocar-6.jpg',
                 text: 'Discover the perfect match for your wheels.'
                },
            ],
            
            activeImage: 0
        };
        },

        methods: {
        //SHOW NEXT IMAGE
        nextImage() {  

            if (this.activeImage < this.carousel.length - 1) {
                this.activeImage++;
            } else {
                this.activeImage = 0;
            }
        },
        //SHOW PREV IMAGE
        prevImage() {
            if (this.activeImage > 0) {
                this.activeImage--;
            } else {
                this.activeImage = this.carousel.length - 1;
            }
        },

        },
        mounted() {
        //

        }
}

</script>

<template>
    
    <section class="ms-carousel">
       
        <div>
            <img class="position-relative" :src="carousel[activeImage].image" alt="">  
            
            <div class="ms-container position-absolute text-white">
                <h3> {{carousel[activeImage].title }}</h3>
                <p>  {{carousel[activeImage].text}} </p>
                <a href="http://" target="_blank" >Learn more</a>
            </div>
        </div> 

        <i @click="prevImage()" class="text-white fa-solid fa-chevron-left position-absolute"></i>
        <i @click="nextImage()" class="text-white fa-solid fa-chevron-right position-absolute"></i>
     
    </section>

</template>

<style scoped lang="scss">
@use '../src/assets/style/generic' as *;

   .ms-carousel {
   
        .ms-container {
            top: 50%;
            left: 20%;
        }

        img {        
            width: 100%;
            object-fit: cover;          
        }

        .fa-chevron-left {
            left: 0;
            top: 50%;
            padding: 40px;
            cursor: pointer;
        }

        .fa-chevron-right{
            right: 0;
            top: 50%;
            padding: 40px;
            cursor: pointer;
        }
   }

</style>