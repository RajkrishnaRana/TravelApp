import { StyleSheet, Text, TouchableOpacity, ToastAndroid, View, StyleProp, ViewStyle, Vibration } from 'react-native';
import React, { useState } from 'react';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { toggleFavourite } from '../slices/placesSlices';
import { PlaceImageDataType } from '../types';
import { AnimatedTouchableOpacity } from './AnimatedTouchableOpacity';

export default function FabouriteButton({ customStyles, item }: { customStyles?: StyleProp<ViewStyle>; item: PlaceImageDataType }) {
  const scale = useSharedValue(1);
  const dispatch = useDispatch();

  const handleHeartPress = async () => {
    // Bounce animation
    scale.value = withSpring(0.8, { damping: 2, stiffness: 150 }, () => {
      scale.value = withSpring(1, { damping: 3, stiffness: 200 });
    });

    Vibration.vibrate(20);
    dispatch(toggleFavourite(item.id));
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={[styles.container, customStyles]}>
      <AnimatedTouchableOpacity onPress={handleHeartPress} style={[animatedStyle]} activeOpacity={0.7}>
        {item?.isFavourite ? (
          <MaterialCommunityIcons name="cards-heart" size={wp(5.5)} color="red" />
        ) : (
          <MaterialCommunityIcons name="cards-heart-outline" size={wp(5.5)} color="white" />
        )}
      </AnimatedTouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  blur: { position: 'absolute', height: hp(8), width: wp(8), right: wp(4), top: hp(2) },
  container: {
    position: 'absolute',
    top: hp(2),
    right: wp(4),
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    height: wp(10),
    width: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(5),
  },
});
