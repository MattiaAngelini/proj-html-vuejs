<script>
  import { store } from '../store.js'; 

export default {
    name:'PageFooter'
}

</script>

<template>

  <footer>

    <section class="container d-flex justify-content-between gap-3">

      <!--CONTACTS-->
      <div class="">
        <div class="d-flex">
          <img src="" alt="">
          <div>Autocar</div>
        </div>

        <div class="d-flex">
          <i>X</i>
          <div>New Jersey, USA</div>
        </div>

        <div class="d-flex">
          <i>X</i>
          <div>New Jersey, USA</div>
        </div>

        <div class="d-flex">
          <i>X</i>
          <div>New Jersey, USA</div>
        </div>

        <div class="d-flex">
          <i>X</i>
          <i>X</i>
          <i>X</i>
        </div>

      </div>

      <!--NEWSLETTER INPUT-->
      <div class="">
        <h5>Join Our Newsletter</h5>
        <p>Subscribe to be informed about our services and products</p>
        

        <label for="">
          <input type="text" name="" id="">
          <div>
            <button> Subscribe </button>
          </div>
          
        </label>
      </div>
      
      <!--MY ACCOUNT-->
      <div>
        <h5>My Account</h5>
        <ul>
          <li><span>-</span> My account</li>
        </ul>

      </div>
      
      <!--QUICK LINKS-->
      <div>
        <h5>My Account</h5>
        <ul>
          <li><span>-</span> My account</li>
        </ul>

      </div>

    </section>

    <div class="text-center">COPYRIGHT</div>

  </footer>


</template>

<style scoped lang="scss">
@use '../src/assets/style/generic' as *;
@use '../src/assets/style/partials/variables' as *;

  footer {
    background-color: $black-primary;
    color: $white-primary;
  }
   
</style>