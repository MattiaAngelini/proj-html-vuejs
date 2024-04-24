<script>
  import { store } from '../../store.js'; 

export default {
    name:'SellVehicle'
}

</script>

<template>

    <section class="container d-flex p-5">
        <div class="row">


            <!--LEFT COL-->
            <div class="col-6 position-relative">
                
                <div class="container-img">  
                    <img class="ms-img  position-absolute" src="../../assets/img/about-1.png" alt="">
                    <img class="ms-wrap" src="../../assets/img/circle-auto-car-1.png" alt="">
                </div>

                <div class="ms-circle circle-1 text-center p-4">
                   <div class="number">24</div>
                   <div>Years Of Experience</div>
                </div>

                <div class="ms-circle circle-2 text-center p-4">
                   <div class="number">240</div>
                   <div>Special Expert Team</div>
                </div>
  
            </div>

            <!--RIGHT COL-->
            <div class="offset-1 col-5">
                
                <div class="mb-4">
                    <h3 class="text-center p-2">Want to buy ore sell a vehicle?</h3>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eaque odit nostrum aliquid nulla, obcaecati quae inventore sit odio porro iure iste at dolores sunt minima ullam temporibus similique laborum!</p>
                </div>
                
                <div class="d-flex gap-4 mb-4">
                    
                    <span><img class="img-fluid" src="../../assets/img/ferrari.png" alt=""></span>
                    <div class="mt-4">
                        <h6>Model Vehicles</h6>
                        <p>We are sure that you will find vehicles of suitable models on our website</p>

                    </div>
                </div>

                <div class="d-flex gap-4 mb-4">
                    
                    <span><img class="img-fluid" src="../../assets/img/ferrari.png" alt=""></span>
                    <div class="mt-4">
                        <h6>2nd hand Vehicles</h6>
                        <p>We are sure that you will find vehicles of suitable models on our website</p>

                    </div>
                </div>

                <button>Get to know us <i class="fas fa-arrow-right"></i></button>

                <img src="../../assets/img/free-fa-solid-900.svg-fonta.svg" alt="">
                
            </div>
       </div>

    </section>

</template>

<style scoped lang="scss">
@use '../src/assets/style/generic' as *;
@use '../src/assets/style/partials/variables' as *;

    .ms-circle {
        background-color: $black-primary;
        color: white;
        border-radius: 100%;
        max-height: 160px;
        max-width: 160px;
        font-weight: 700;

            .number{
                font-size: 34px;
            }
    }

    .circle-1 {
        position: absolute;
        top: 20px;
    }

    .circle-2 {
        position: absolute;
        top: 60%;
        right: 0;
    }

    .position-relative img {
        max-width: 100%; 
        height: auto;
    }

    .offset-1 {
        line-height: 26px;
            
    }

    button {
        color: white;
        background-color: $black-primary;
        border: none;
        font-weight: 600;
        padding: 16px;
        width: 200px;
    }

    p {color: grey;}
    
</style>