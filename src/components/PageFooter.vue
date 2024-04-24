<script>
  import { store } from '../store.js'; 

export default {
    name:'PageFooter',

    data() {
    return {     
      MyAccountLinks :[
                {title: 'My Account',
               
                },
                {title: 'Checkout',
          
                },
                {title: 'Cart',
                
                },
                {title: 'Packages',
              
                },
                {title: 'Add Car',
              
            },
            ],

            QuickLinks :[
                {title: 'Home',
               
                },
                {title: 'About Us',
              
                },
                {title: 'Contact',
               
                },
                {title: 'Refund & Returns',
               
                },

            ],

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
  <footer>

    <section class="container d-flex flex-wrap justify-content-evenly gap-4">

      <!--CONTACTS-->
      <div class="">

        <div class="d-flex mb-3">
          <img src="../assets/img/logo-footer-autocar11.png" alt="">
          
        </div>

        <div class="d-flex gap-2 mb-3 align-items-center">
          <i class="fa-solid fa-location-dot"></i>
          <div>New Jersey, USA</div>
        </div>

        <div class="d-flex gap-2 mb-3 align-items-center">
          <i class="fa-solid fa-phone-volume"></i>
          <div>+ 1 (234) 567 89 10</div>
        </div>

        <div class="d-flex gap-2 mb-3 align-items-center">
          <i class="fa-regular fa-envelope"></i>
          <div>exampe@example.com</div>
        </div>

        <div class="ms-icons d-flex justify-content-evenly">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>

      <!--NEWSLETTER INPUT-->
      <div class="d-none d-lg-block">
        <h5 class="mb-3">Join Our Newsletter</h5>
        <p class="mb-3">Subscribe to be informed about our services and products</p>
        

        <label for="">
          <input class="p-3 mb-1" placeholder="Your E-mail Address" type="text" name="" id="">
          <div>
            <button class="p-3"> Subscribe </button>
          </div>
          
        </label>
      </div>
      
      <!--MY ACCOUNT-->
      <div>
        <h5 class="mb-3">My Account</h5>
        <ul>
          <li v-for="link in MyAccountLinks"><span class="p-1">-</span>{{ link.title }}</li>
        </ul>

      </div>
      
      <!--QUICK LINKS-->
      <div>
        <h5 class="mb-3 text-center">QuickLinks</h5>
        <ul>
          <li v-for="link in QuickLinks"><span class="p-1">-</span> {{ link.title }}</li>
        </ul>

      </div>

    </section>

    <div class="text-center p-3">© 2022 Autocar - All Rights Reserved.</div>

  </footer>


</template>

<style scoped lang="scss">
@use '../src/assets/style/generic' as *;
@use '../src/assets/style/partials/variables' as *;

  footer {
    background-color: $black-primary;
    color: $white-primary;

      section {
        padding: 30px 0 30px 0;
      }

      img {
        width: 160px;
      }

      label {
        min-width: 100%;

          input, button {
            width: 100%;
            color: $grey-primary;
            border: none;
            border-radius: 10px;
            
          }
      }

      ul {
        line-height: 30px;

          span {
            font-weight: 900;
          }
      }

     
  }

  
   
</style>