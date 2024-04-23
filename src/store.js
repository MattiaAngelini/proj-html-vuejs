import { reactive } from "vue";

export const store = reactive({

    userChoices: [],

    carsAvalaible:
    [
            {category: 'Cabrio',
             brand: 'Bmw',
             model: 'M-9',
             fueltype: 'Electric',
             transimission: 'Automatic',
             status: 'Used',
             location: 'Milano',
             price: '34.000',
             image: ''
            },

            {category: 'Cabrio',
             brand: 'Bmw',
             model: 'M-8',
             fueltype: 'Diesel',
             transimission: 'Automatic',
             status: 'Used',
             location: 'Torino',
             price: '34.000',
             image:''
            },

            {category: 'Cabrio',
             brand: 'Bmw',
             model: 'M-4',
             fueltype: 'Gasoline',
             transimission: 'Manual',
             status: 'New',
             location: 'Milano',
             price: '36.000',
             image:''
            },

            {category: 'Hatchback',
             brand: 'Seat',
             model: 'Ibiza',
             fueltype: 'Electric',
             transimission: 'Automatic',
             status: 'Used',
             location: 'Bari',
             price: '27.000'
            },

            {category: 'Suv',
             brand: 'Seat',
             model: 'Arona',
             fueltype: 'Gasoline',
             transimission: 'Automatic',
             status: 'New',
             location: 'Roma',
             price: '68.000',
             image:''
            },

            {category: 'Suv',
             brand: 'Volkswagen',
             model: 'Taigo',
             fueltype: 'Electric',
             transimission: 'Automatic',
             status: 'Used',
             location: 'Milano',
             price: '54.000',
             image:''
            },

            {category: 'Suv',
             brand: 'Volkswagen',
             model: 'T-cross',
             fueltype: 'Diesel',
             transimission: 'Manual',
             status: 'New',
             location: 'Milano',
             price: '47.000',
             image:''
            },

            {category: 'Sedan',
             brand: 'Volkswagen',
             model: 'Passat',
             fueltype: 'Diesel',
             transimission: 'Automatic',
             status: 'Used',
             location: 'Milano',
             price: '32.000'
            },

            {category: 'Cabrio',
             brand: 'BMW',
             model: 'M-9',
             fueltype: 'Gasoline',
             transimission: 'Manual',
             status: 'Used',
             location: 'Milano',
             price: '30.000'
            },

            {category: 'Cabrio',
             brand: 'BMW',
             model: 'M-4',
             fueltype: 'Diesel',
             transimission: 'Automatic',
             status: 'New',
             location: 'Milano',
             price: '54.000'
            },

            {category: 'Sedan',
             brand: 'Volskwagen',
             model: 'Passat',
             fueltype: 'Gasoline',
             transimission: 'Automatic',
             status: 'Used',
             location: 'Bari',
             price: '24.000'
            },

            {category: 'Suv',
             brand: 'Volkswagen',
             model: 'T-cross',
             fueltype: 'Electric',
             transimission: 'Automatic',
             status: 'New',
             location: 'Roma',
             price: '64.000'
            },

    
        ],
   
});
