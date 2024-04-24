<script>
  import { store } from '../store.js'; 

export default {
    name:'PageHeader',
    
 data() {

    return {

        nav: [
                { title: 'Home',
                 
                },
                { title: 'About Us',
                 
                },
                { title: 'Vehicles',
                  
                },
                { title: 'Dealers',
                  
                },
                { title: 'Packages',
                  
                },
                { title: 'Blog',
                 
                },
                { title: 'Contact',
                 
                },
            
            ],

            navIcons :[
                {title: 'My account',
                 image: '../src/assets/img/padlock.png'

                },
                {title: 'Add Car',
                 image: '../src/assets/img/add.png'

                },
                {title: null,
                 image: '../src/assets/img/bars-solid.svg'

                },
                {title: '+1(234) 567 89 10',
                 image: '../src/assets/img/headphones.png'

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
    <header>

        <section class="container d-flex justify-content-between gap-3">

            <!--LOGO-->
            <div class="d-flex align-items-center">
                <img src="../assets/img/loader-autocar.png" alt="">
                <span class="title-logo">Autocar</span>
            </div>
            
            <!--NAV-->
            <ul class="nav-link d-flex align-items-center justify-content-between gap-3 d-lg-flex d-none d-lg-flex" v-for="link in nav">
                <li>{{ link.title }}</li>
            </ul>
            
            <!--ACCOUNT-->
            <ul class="container-icons d-flex align-items-center gap-3">
                <li class="" v-for="link in navIcons">  
                    <span><img :src="link.image" alt="">  </span>
                    <span>{{ link.title }} </span>                                   
                </li>
                            
            </ul>
            
        </section>

    </header>

</template>

<style scoped lang="scss">
@use '../src/assets/style/generic' as *;
@use '../src/assets/style/partials/variables' as *;

    header{
        font-size: 10px;
        position: fixed;
        z-index: 999;
        background-color: white;
        width: 100%;
        border-bottom: 2px solid $black-primary;


                .title-logo {
                    font-weight: 900;
                    margin-left: 6px;
                }

                img {
                    width: 80px;
                }

                .nav-link {font-weight: 700;}

                .container-icons {
                
                    
                    li {
                        border: 2px solid black;
                        border-radius: 6px;
                        padding: 6px;
                        
                        img {
                        height: 40px;
                        width: 40px;
                        }

                        &:nth-child(3) { 
                        border: none; 
                        display: block;
                        }
                    }
                }


    }

        /* Extra small devices (phones, 576px and down) */
    @media only screen and (max-width: 576px) {
        .container-icons li {
            display: none;
        }
    
    }

    /* Large devices (desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        .container-icons li {
            display: block;
        }
    }

    /* Extra large devices (large desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        header {font-size: 16px;}
    }
    
</style>