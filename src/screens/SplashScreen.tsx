import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { font } from '../common/font';
import LinearGradient from 'react-native-linear-gradient';
import { color } from '../common/color';
import Animated, {
  FadeInDown,
  FadeOut,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { navigation } from '../hooks/useNavigation';

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function SplashScreen() {
  const imageOffset = useSharedValue(0);
  const textOpacity = useSharedValue(0);

  useEffect(() => {
    // Animation sequence: move left, move back, then navigate
    imageOffset.value = withSequence(
      withTiming(wp(15), { duration: 700 }), // Move to the left
      withDelay(
        700,
        withTiming(0, { duration: 700 }, () => {
          runOnJS(navigation.replace)('Home');
        }),
      ),
    );
    textOpacity.value = withSequence(
      withDelay(200, withTiming(1, { duration: 700 })), // Opacity Increased
      withDelay(300, withTiming(0, { duration: 700 })),
    );
  }, [navigation]);

  const imageAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: imageOffset.value }],
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  return (
    <LinearGradient colors={[color.navyBlue, color.darkBlue]} style={styles.container}>
      {/* Header Section */}
      <Animated.Text style={[styles.focusText, textAnimatedStyle]}>Travel</Animated.Text>
      <AnimatedImage source={require('../assets/icons/globe.png')} style={[styles.img, imageAnimatedStyle]} />

      {/* Gap Height */}
      <View style={{ height: hp(3) }} />

      {/* Description Text */}
      <Animated.Text style={styles.description} entering={FadeInDown} exiting={FadeOut}>
        Find Your Dream
      </Animated.Text>
      <Animated.Text style={styles.description} entering={FadeInDown.delay(200)} exiting={FadeOut}>
        Destination With Us
      </Animated.Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusText: {
    fontFamily: font.LobsterRegular,
    fontSize: wp(10),
    color: color.white,
    position: 'absolute',
    top: hp(42),
    left: wp(33),
  },
  img: {
    height: wp(10),
    width: wp(10),
    resizeMode: 'contain',
    marginBottom: hp(1),
  },
  description: {
    color: color.white,
    fontSize: wp(4.5),
    fontWeight: '500',
    marginBottom: hp(0.5),
  },
});
