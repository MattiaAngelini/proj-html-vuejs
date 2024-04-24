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
                <h1> {{carousel[activeImage].title }}</h1>
                <p>  {{carousel[activeImage].text}} </p>
                <a href="http://" target="_blank" >Learn more <i class="fas fa-arrow-right p-2"></i></a>
            </div>
        </div> 

        <i @click="prevImage()" class="text-white fa-solid fa-chevron-left position-absolute"></i>
        <i @click="nextImage()" class="text-white fa-solid fa-chevron-right position-absolute"></i>
     
    </section>

</template>

<style scoped lang="scss">
@use '../src/assets/style/generic' as *;

.ms-carousel {
    position: relative;
    .ms-container {
        position: absolute;
        top: 60%;
        left: 30%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    h1 {
        font-size: 5vw; 
        font-weight: 700;
        max-width: 80%; 
        margin: 0 auto; 
    }

    p {
        font-size: 3vw;
        max-width: 80%; 
        margin: 0 auto 20px; 
    }

    .fa-chevron-left {
        left: 0;
        top: 40%;
        padding: 2vw; 
        cursor: pointer;
    }

    .fa-chevron-right {
        right: 0;
        top: 40%;
        padding: 2vw; 
        cursor: pointer;
    }

    img {
        width: 100%;
        object-fit: cover;
    }
}

//media queries

@media only screen and (max-width: 576px) {
    
}

@media only screen and (max-width: 768px) {
    .ms-carousel 
        .ms-container h1 {
        font-size: 4vw; 
    }
    
    .ms-carousel 
        .ms-container p, a {
        font-size: 3vw; 
    }
}


</style>