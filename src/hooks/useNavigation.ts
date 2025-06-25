import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  // other screens...
};

export const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
