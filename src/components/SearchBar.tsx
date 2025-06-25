import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../common/color';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search places" placeholderTextColor={color.grey} style={styles.textInput} />

      <View style={styles.verticalLine} />
      <Image source={require('../assets/icons/sort.png')} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginHorizontal: wp(5),
    borderRadius: wp(5),
    borderColor: color.grey,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp(4),
  },
  textInput: {
    color: color.black,
    padding: 0,
    paddingHorizontal: wp(5),
    width: wp(70),
  },
  verticalLine: {
    height: '70%',
    width: 1,
    backgroundColor: color.grey,
  },
  img: {
    height: wp(5),
    width: wp(5),
    resizeMode: 'contain',
    marginLeft: wp(7),
  },
});
