<script>
  import { store } from '../../store.js'; 

export default {
    name:'SellVehicle'
}

</script>

<template>

    <section class="container d-flex p-4">
        <div class="row">

            <!--LEFT COL-->
            <div class="col-6">
                <img src="" alt="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed est aspernatur nostrum minima nobis error totam doloribus dolorum suscipit ratione commodi, fugit nihil, illo, eligendi quaerat assumenda culpa blanditiis pariatur!
            </div>

            <!--RIGHT COL-->
            <div class="col-6">
                
                <div>
                    <h5>Want to buy ore sell a vehicle?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eaque odit nostrum aliquid nulla, obcaecati quae inventore sit odio porro iure iste at dolores sunt minima ullam temporibus similique laborum!</p>
                </div>
                
                <div class="d-flex">
                    
                    <span>IMMAGINE</span>
                    <div>
                        <h6>Model Vehicles</h6>
                        <p>We are sure that you will find vehicles of suitable models on our website</p>

                    </div>
                </div>

                <div class="d-flex">
                    
                    <span>IMMAGINE</span>
                    <div>
                        <h6>2nd hand Vehicles</h6>
                        <p>We are sure that you will find vehicles of suitable models on our website</p>

                    </div>
                </div>

                <button>Get to know us <i>--></i></button>
                
            </div>
       </div>

    </section>

</template>

<style scoped lang="scss">
@use '../src/assets/style/generic' as *;
   
</style>