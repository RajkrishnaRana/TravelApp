import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { BottomTabImagesData } from '../types';
import { bottomTabImages } from '../constants';

export default function BottomTabOptions() {
  return (
    <View style={styles.container}>
      {bottomTabImages.map((item: BottomTabImagesData, index: number) => (
        <View key={index} style={{ alignItems: 'center', gap: hp(1) }}>
          <Image source={item.imgSrc} style={styles.img} />
          {item.isActive && <View style={styles.redDot} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: hp(2),
    width: wp(100),
  },
  img: {
    height: wp(5.5),
    width: wp(5.5),
    resizeMode: 'contain',
  },
  redDot: {
    height: wp(1.5),
    width: wp(1.5),
    borderRadius: hp(1),
    backgroundColor: 'red',
  },
});
