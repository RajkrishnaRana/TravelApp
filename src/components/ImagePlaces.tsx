import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PlaceImageDataType } from '../types';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FabouriteButton from './FabouriteButton';
import { color } from '../common/color';
import { font } from '../common/font';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { navigation } from '../hooks/useNavigation';
import { useSelector } from 'react-redux';
import { AnimatedTouchableOpacity } from './AnimatedTouchableOpacity';
import { FadeInDown } from 'react-native-reanimated';

export default function ImagePlaces() {
  const places = useSelector((state: any) => state.places.places);

  const renderItem = ({ item }: { item: PlaceImageDataType }) => {
    const handlePress = () => {
      navigation.push('Details', { id: item.id });
    };

    return (
      <AnimatedTouchableOpacity style={styles.imageContainer} activeOpacity={0.7} onPress={handlePress} entering={FadeInDown}>
        <Image source={item.imgSrc} style={styles.img} />
        <FabouriteButton item={item} />

        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>
            {item.name}, <Text style={{ fontSize: wp(3.5), fontFamily: font.Inter }}>{item.location}</Text>
          </Text>

          <View style={styles.subSection}>
            <View style={styles.iconWithTextContainer}>
              <SimpleLineIcons name="location-pin" color={color.white} size={wp(3)} />
              <Text style={{ color: color.white }}>
                {item.location}, {item.country}
              </Text>
            </View>
            <View style={styles.iconWithTextContainer}>
              <FontAwesomeIcon name="star-o" size={wp(3)} color={color.white} />
              <Text style={{ color: color.white }}>{item.rating}</Text>
            </View>
          </View>
        </View>
      </AnimatedTouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={places}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={wp(65) + wp(6)} // Image width + gap
        snapToAlignment="start"
        pagingEnabled
        decelerationRate="fast"
        contentContainerStyle={{ paddingLeft: wp(2) }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: hp(40),
    width: wp(65),
    borderRadius: wp(7),
    marginHorizontal: wp(3),
    boxShadow: '0px 12px 20px rgba(0, 0, 0, 0.25)',
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: wp(7),
    resizeMode: 'cover',
  },
  detailsContainer: {
    position: 'absolute',
    bottom: hp(3.5),
    left: wp(2),
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    width: wp(60),
    borderRadius: wp(5),
  },
  nameText: {
    color: color.white,
    fontSize: wp(4),
    fontFamily: font.InterBold,
  },
  subSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1),
  },
  iconWithTextContainer: { flexDirection: 'row', alignItems: 'center', gap: wp(1) },
});
