/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import images from "../assests/constants";

export default TripsData = [
  {
    id: 1,
    name: "",
    rating: 4.8,
    categories: [5, 7],

    location: {
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
    },

    Tour: [
      {
        TourID: 1,
        name: "Crispy Chicken Burger",
        photo: images.camp1,
        description: "Burger with crispy chicken, cheese and lettuce",
        calories: 200,
        price: 10,
      },
      {
        TourID: 2,
        name: "Crispy Chicken Burger with Honey Mustard",
        photo: images.camp2,
        description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
        calories: 250,
        price: 15,
      },
      {
        TourID: 3,
        name: "Crispy Baked French Fries",
        photo: images.camp3,
        description: "Crispy Baked French Fries",
        calories: 194,
        price: 8,
      },
      {
        TourID: 4,
        name: "Crispy Baked French Fries",
        photo: images.camp4,
        description: "Crispy Baked French Fries",
        calories: 194,
        price: 8,
      },
    ],
  },
  {
    id: 2,
    name: "Pizza",
    rating: 4.8,
    categories: [2, 4, 6],

    photo: images.mountain1,

    location: {
      latitude: 1.556306570595712,
      longitude: 110.35504616746915,
    },

    Tour: [
      {
        TourID: 4,
        name: "Hawaiian Pizza",
        photo: images.mountain2,
        description: "Canadian bacon, homemade pizza crust, pizza sauce",

        price: 15,
      },
      {
        TourID: 5,
        name: "Tomato & Basil Pizza",
        photo: images.mountain3,
        description:
          "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
        price: 20,
      },
      {
        TourID: 6,
        name: "Tomato Pasta",
        photo: images.mountain4,
        description: "Pasta with fresh tomatoes",
        calories: 100,
        price: 10,
      },
      {
        TourID: 7,
        name: "Mediterranean Chopped Salad ",
        photo: images.mountain2,
        description: "Finely chopped lettuce, tomatoes, cucumbers",
        calories: 100,
        price: 10,
      },
    ],
  },
  {
    id: 3,
    name: "Hotdogs",
    rating: 4.8,
    categories: [3],

    photo: images.rainforest1,

    location: {
      latitude: 1.5238753474714375,
      longitude: 110.34261833833622,
    },

    Tour: [
      {
        TourID: 8,
        name: "Chicago Style Hot Dog",
        photo: images.rainforest2,
        description: "Fresh tomatoes, all beef hot dogs",

        price: 20,
      },
    ],
  },
  {
    id: 4,
    name: "Sushi",
    rating: 4.8,
    categories: [8],

    photo: images.rainforest3,
    location: {
      latitude: 1.5578068150528928,
      longitude: 110.35482523764315,
    },

    Tour: [
      {
        TourID: 9,
        name: "Sushi sets",
        photo: images.rainforest4,
        description: "Fresh salmon, sushi rice, fresh juicy avocado",

        price: 50,
      },
    ],
  },
  {
    id: 5,
    name: "Camping",
    rating: 4.8,
    categories: [1, 2],

    photo: images.sunbed1,
    location: {
      latitude: 1.558050496260768,
      longitude: 110.34743759630511,
    },

    Tour: [
      {
        TourID: 10,
        name: "Kolo Mee",
        photo: images.sunbed2,
        description: "Noodles with char siu",
        price: 5,
      },
      {
        TourID: 11,
        name: "Sarawak Laksa",
        photo: images.sunbed3,
        description: "Vermicelli noodles, cooked prawns",

        price: 8,
      },
      {
        TourID: 12,
        name: "Nasi Lemak",
        photo: images.sunbed4,
        description: "A traditional Malay rice dish",

        price: 8,
      },
      {
        TourID: 13,
        name: "Nasi Briyani with Mutton",
        photo: images.sunbed5,
        description: "A traditional Indian rice dish with mutton",

        price: 8,
      },
    ],
  },
];
