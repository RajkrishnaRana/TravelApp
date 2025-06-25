import { Image, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { font } from '../common/font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../common/color';

export default function HeaderSection() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Hi, David 👋</Text>
        <Text style={styles.subText}>Explore the world</Text>
      </View>

      <Image source={require('../assets/Images/person.jpg')} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    alignItems: 'center',
  },
  headerText: {
    fontFamily: font.MontserratSemiBold,
    fontSize: wp(6.5),
    alignItems: 'center',
  },
  subText: {
    fontFamily: font.Inter,
    fontSize: wp(4.5),
    color: color.grey,
  },
  img: {
    height: wp(10),
    width: wp(10),
    resizeMode: 'cover',
    borderRadius: wp(5),
  },
});
