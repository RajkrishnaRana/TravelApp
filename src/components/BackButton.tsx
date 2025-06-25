import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import { navigation } from '../hooks/useNavigation';

export default function BackButton({ customStyle }: { customStyle?: StyleProp<ViewStyle> }) {
  return (
    <TouchableOpacity style={[styles.backButtonContainer, customStyle]} onPress={() => navigation.goBack()}>
      <OcticonsIcons name="chevron-left" size={wp(6)} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButtonContainer: {
    position: 'absolute',
    top: hp(2),
    left: wp(8),
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    height: wp(10),
    width: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(5),
  },
});
