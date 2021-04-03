import images from '../assests/constants';

//dummy data for the Top Trips
export default TopTrips = [
  {
    id: 1,
    name: 'Fort Worden',
    rating: '4.8',
    categories: [1],
    categorieName: 'Camp',
    photo: images.camp1,
    price: '120',

    location: {
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
    },
  },
  {
    id: 2,
    name: 'Green Island',
    rating: '4.8',
    categories: [2],
    categorieName: 'Island',
    photo: images.island1,
    price: '180',
    location: {
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
    },
  },
  {
    id: 3,
    name: 'King Island',
    rating: '4.8',
    categories: [2],
    categorieName: 'Island',
    photo: images.island2,
    price: '100',
    location: {
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
    },
  },

  {
    id: 4,
    name: 'Molle Islands',
    rating: '4.8',
    categories: [2],
    photo: images.island3,
    price: '160',
    location: {
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
    },
  },

  {
    id: 5,
    name: 'Kangaroo Island',
    rating: '4.8',
    categories: [2],
    categorieName: 'Island',
    photo: images.island3,
    price: '124',
    location: {
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
    },
  },

  {
    id: 6,
    name: 'Maria Island',
    rating: '4.8',
    categories: [2],
    categorieName: 'Island',
    photo: images.island4,
    price: '165',
    location: {
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
    },
  },
  {
    id: 7,
    name: 'Mount Karisimbi',
    rating: ' 4.8',
    categories: [3],
    categorieName: 'Mountain',
    photo: images.mountain1,
    price: '120',
    location: {
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
    },
  },
  {
    id: 8,
    name: 'Mount Mikeno',
    rating: '4.8',
    categories: [3],
    categorieName: 'Mountain',
    photo: images.mountain2,
    price: '178',
    location: {
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
    },
  },
];
