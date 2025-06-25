import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PlaceImageDataType } from '../types';

export type RootStackParamList = {
  Home: undefined;
  Details: { id: number };
};

export const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
