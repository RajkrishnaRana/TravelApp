import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { color } from '../common/color';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { buttonData } from '../constants';

interface Props {
  item: ButtonDataType;
  setPlacesData: React.Dispatch<React.SetStateAction<ButtonDataType[]>>;
}

export default function PlacesCard({ item, setPlacesData }: Props) {
  const handlePress = (id: number) => {
    setPlacesData(
      buttonData.map(place => {
        if (place.id === id) {
          return { ...place, isActive: true };
        }
        return { ...place, isActive: false };
      }),
    );
  };
  return (
    <TouchableOpacity
      onPress={() => handlePress(item.id)}
      style={[styles.container, item?.isActive && { backgroundColor: color.black, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }]}
    >
      <Text style={[styles.text, { color: item.isActive ? color.white : color.lightGrey }]}>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: wp(4.5),
    padding: wp(4),
    color: color.white,
    width: wp(30),
    alignItems: 'center',
  },
  text: {
    fontSize: wp(3.6),
    fontWeight: '600',
  },
});
