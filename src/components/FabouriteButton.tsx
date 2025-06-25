import { StyleSheet, Text, TouchableOpacity, ToastAndroid, View } from 'react-native';
import React, { useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BlurView } from '@react-native-community/blur';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export default function FabouriteButton() {
  const [isfabourite, setIsfabourite] = useState(false);
  const scale = useSharedValue(1);

  const handleHeartPress = async () => {
    // Bounce animation
    scale.value = withSpring(0.8, { damping: 2, stiffness: 150 }, () => {
      scale.value = withSpring(1, { damping: 3, stiffness: 200 });
    });

    setIsfabourite(!isfabourite);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={styles.container}>
      <AnimatedTouchableOpacity onPress={handleHeartPress} style={[animatedStyle]} activeOpacity={0.7}>
        {isfabourite ? (
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
