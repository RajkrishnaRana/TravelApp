import { ButtonDataType, PlaceImageDataType } from '../types';

export const buttonData: ButtonDataType[] = [
  {
    id: 1,
    title: 'Most Viewed',
    isActive: true,
  },
  {
    id: 2,
    title: 'Nearby',
    isActive: false,
  },
  {
    id: 3,
    title: 'Viewed',
    isActive: false,
  },
];

export const placeImages: PlaceImageDataType[] = [
  {
    id: 1,
    imgSrc: require('../assets/Images/mountFuji.jpg'),
    isFavourite: false,
    name: 'Mount Fuji',
    location: 'Tokyo',
    rating: 4.5,
    price: '$100',
    description: 'dovadovanv adlfie aeofa',
    country: 'Japan',
  },
  {
    id: 2,
    imgSrc: require('../assets/Images/mountAndes.webp'),
    isFavourite: false,
    name: 'Mount Fuji',
    location: 'Japan',
    rating: 4.5,
    price: '$100',
    description: 'dovadovanv adlfie aeofa',
    country: 'Japan',
  },
  {
    id: 3,
    imgSrc: require('../assets/Images/mountEverest.jpg'),
    isFavourite: false,
    name: 'Mount Fuji',
    location: 'Japan',
    rating: 4.5,
    price: '$100',
    description: 'dovadovanv adlfie aeofa',
    country: 'Japan',
  },
  {
    id: 4,
    imgSrc: require('../assets/Images/andes.jpg'),
    isFavourite: false,
    name: 'Mount Fuji',
    location: 'Japan',
    rating: 4.5,
    price: '$100',
    description: 'dovadovanv adlfie aeofa',
    country: 'Japan',
  },
];
