import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { font } from '../common/font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { buttonData } from '../constants';
import PlacesCard from './PlacesCard';
import { color } from '../common/color';

export default function PopularPlaces() {
  const [placesData, setPlacesData] = useState(buttonData);

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Popular Places</Text>
        <Text style={{ color: color.lightBlack }}>View all</Text>
      </View>

      <View style={styles.placesCardContainer}>
        {placesData.map(item => (
          <PlacesCard key={item?.id} item={item} setPlacesData={setPlacesData} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp(5) },
  headerText: {
    fontFamily: font.PoppinsSemiBold,
    fontSize: wp(5),
    alignItems: 'center',
  },
  placesCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    marginTop: hp(3),
  },
});
