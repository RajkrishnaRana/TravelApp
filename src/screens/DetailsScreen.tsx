import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { color } from '../common/color';
import { RouteProp, useRoute } from '@react-navigation/native';
import { navigation, RootStackParamList } from '../hooks/useNavigation';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FabouriteButton from '../components/FabouriteButton';
import { font } from '../common/font';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import IconText from '../components/IconText';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { PlaceImageDataType } from '../types';

type DetailsScreenProps = RouteProp<RootStackParamList, 'Details'>;

export default function DetailsScreen() {
  const { id } = useRoute<DetailsScreenProps>().params;
  const item = useSelector((state: any) => state.places.places.find((place: PlaceImageDataType) => place.id === id));

  return (
    <View style={{ flex: 1, backgroundColor: color.white }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: StatusBar.currentHeight, gap: hp(3) }}>
        {/* Image Section */}
        <View>
          <Image source={item.imgSrc} style={styles.img} />
          <FabouriteButton customStyles={{ right: wp(8) }} item={item} />

          {/* Back Button */}
          <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
            <OcticonsIcons name="chevron-left" size={wp(6)} color="white" />
          </TouchableOpacity>

          {/* Details Section */}
          <View style={styles.detailsContainer}>
            <View style={{ gap: hp(1) }}>
              <Text style={styles.nameText}>{item.name}</Text>
              <View style={styles.iconWithTextContainer}>
                <SimpleLineIcons name="location-pin" color={color.white} size={wp(3)} />
                <Text style={{ color: color.white }}>
                  {item.location}, {item.country}
                </Text>
              </View>
            </View>

            <View style={{ gap: hp(0.5), alignItems: 'center' }}>
              <Text style={{ color: color.white }}>Price</Text>
              <Text style={{ color: color.white, fontWeight: '600', fontSize: wp(5.5) }}>
                <Text style={{ color: color.grey, fontSize: wp(4) }}>$</Text>
                {item.price}
              </Text>
            </View>
          </View>
        </View>

        {/* Details Section */}
        <Text style={styles.overViewText}>
          Overview {'     '}
          <Text style={{ fontSize: wp(3.5), color: color.grey }}>Details</Text>
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(8) }}>
          <IconText title={item.time} type="time" />
          <IconText title={item.temperature} type="temperature" />
          <IconText title={item.rating} type="rating" />
        </View>

        <Text style={styles.description}>{item.description}</Text>
        <View style={{ height: hp(20) }} />
      </ScrollView>

      <LinearGradient colors={['rgba(255, 255, 255, 0.5)', color.white, color.white]} style={styles.buttonContainer}>
        <TouchableOpacity style={styles.bookNowButton} onPress={() => {}} activeOpacity={0.7}>
          <Text style={styles.bookNowText}>Book Now</Text>
          <Image source={require('../assets/icons/send.png')} style={{ width: wp(4), height: wp(4) }} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: hp(50),
    width: wp(88),
    marginHorizontal: wp(6),
    borderRadius: wp(5),
    boxShadow: '0px 12px 20px rgba(0, 0, 0, 0.25)',
  },
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
  detailsContainer: {
    position: 'absolute',
    bottom: hp(3),
    left: wp(8),
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    width: wp(84),
    borderRadius: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameText: {
    color: color.white,
    fontSize: wp(6),
    fontFamily: font.InterBold,
  },
  subSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1),
  },
  iconWithTextContainer: { flexDirection: 'row', alignItems: 'center', gap: wp(1) },
  overViewText: {
    fontFamily: font.InterBold,
    fontSize: wp(5),
    color: color.black,
    paddingHorizontal: wp(5),
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: wp(5),
    paddingBottom: hp(2),
    paddingTop: hp(8),
    width: '100%',
  },
  description: { marginHorizontal: wp(5), color: color.grey, fontSize: wp(3.5), fontWeight: '500', lineHeight: hp(2.5), textAlign: 'justify' },
  bookNowButton: {
    flexDirection: 'row',
    gap: wp(3),
    alignItems: 'center',
    width: '100%',
    borderRadius: wp(4),
    paddingVertical: hp(2),
    justifyContent: 'center',
    backgroundColor: color.black,
  },
  bookNowText: {
    color: color.white,
    fontSize: wp(4.5),
    fontWeight: '600',
  },
});
