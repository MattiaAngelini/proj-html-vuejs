<script>

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
                 image: '../src/assets/img/bars-solid.png'

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

        <section class="d-flex justify-content-center gap-3">

            <!--LOGO-->
            <div>
                <img src="../assets/img/loader-autocar.png" alt="">
                <span>Autocar</span>
            </div>
            
            <!--NAV-->
            <ul class="d-flex align-items-center gap-3" v-for="link in nav">
                <li>{{ link.title }}</li>
            </ul>
            
            <!--ACCOUNT-->
            <ul class="d-flex align-items-center gap-3">
                <li v-for="link in navIcons">   
                    <img :src="link.image" alt="">   
                    {{ link.title }} 
                </li>
                
            </ul>
            
        </section>


    </header>

</template>

<style scoped lang="scss">
@use '../src/assets/style/generic' as *;

img {
    width: 50px;
}


</style>