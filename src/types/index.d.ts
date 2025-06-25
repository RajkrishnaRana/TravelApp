import { ImageSourcePropType } from 'react-native';

export interface ButtonDataType {
  id: number;
  title: string;
  isActive: boolean;
}

export interface PlaceImageDataType {
  id: number;
  imgSrc: ImageSourcePropType;
  isFavourite: boolean;
  name: string;
  location: string;
  price: string;
  rating: number;
  description: string;
  country: string;
  temperature: string;
  time: string;
}

export interface BottomTabImagesData {
  imgSrc: ImageSourcePropType;
  isActive: boolean;
}
