import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../common/color';
import { font } from '../common/font';
import { navigation } from '../hooks/useNavigation';

export default function SearchBar() {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.push('Search')}>
      <Text style={styles.textInput}>Search places</Text>

      <View style={styles.verticalLine} />
      <Image source={require('../assets/icons/sort.png')} style={styles.img} />
    </TouchableOpacity>
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
    color: color.grey,
    padding: 0,
    paddingHorizontal: wp(5),
    width: wp(70),
    fontFamily: font.InterBold,
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
