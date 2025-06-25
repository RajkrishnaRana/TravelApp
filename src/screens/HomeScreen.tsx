import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { color } from '../common/color';
import HeaderSection from '../components/HeaderSection';
import SearchBar from '../components/SearchBar';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PopularPlaces from '../components/PopularPlaces';
import ImagePlaces from '../components/ImagePlaces';
import BottomTabOptions from '../components/BottomTabOptions';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <HeaderSection />
      <SearchBar />
      <PopularPlaces />
      <ImagePlaces />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    gap: hp(5),
  },
});
