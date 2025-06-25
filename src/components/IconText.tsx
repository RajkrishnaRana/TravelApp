import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import { color } from '../common/color';

interface Props {
  title: string | number;
  type: 'time' | 'temperature' | 'rating';
}

const iconMap = {
  time: require('../assets/icons/clock_fill.png') as ImageSourcePropType,
  rating: require('../assets/icons/star.png') as ImageSourcePropType,
  temperature: require('../assets/icons/cloud.png') as ImageSourcePropType,
};

export default function IconText({ title, type }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={iconMap[type]} style={styles.img} />
      </View>

      <Text style={{ color: color.lightBlack, fontSize: wp(3.5) }}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
  },
  imgContainer: {
    backgroundColor: color.lightGrey,
    padding: wp(2),
    borderRadius: 10,
  },
  img: {
    height: wp(3.5),
    width: wp(3.5),
    resizeMode: 'contain',
    tintColor: color.black,
  },
});
