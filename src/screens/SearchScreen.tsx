import { ActivityIndicator, FlatList, Modal, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import { color } from '../common/color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { navigation } from '../hooks/useNavigation';
import { font } from '../common/font';
import BackButton from '../components/BackButton';
import { debounce } from 'lodash';
import LinearGradient from 'react-native-linear-gradient';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>('');

  const handlePress = (text: string): void => {
    setSelectedItem(text);
    setIsPopupVisible(true);
  };

  const handleClosePopup = (): void => {
    setIsPopupVisible(false);
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        onPress={() => handlePress(item.title)}
        style={{ paddingVertical: hp(2), borderBottomWidth: 0.5, borderBottomColor: color.grey, paddingHorizontal: wp(2) }}
      >
        <Text style={styles.searchText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  // Debounced fetch function
  const fetchData = useMemo(
    () =>
      debounce(async (query: string) => {
        if (!query.trim()) {
          setSearchData([]);
          setLoading(false);
          return;
        }
        try {
          setLoading(true);
          const url = `https://dummyjson.com/posts/search?q=${encodeURIComponent(query)}`;
          const response = await fetch(url).then(res => res.json());
          if (response?.posts) {
            setSearchData(response.posts);
            console.log('API response:', response);
          }
        } catch (error) {
          console.log('Fetch error:', error);
          ToastAndroid.show('Failed to fetch results', ToastAndroid.SHORT);
        } finally {
          setLoading(false);
        }
      }, 300),
    [],
  );

  // Trigger debounced fetch when searchQuery changes
  useEffect(() => {
    fetchData(searchQuery);
    return () => {
      fetchData.cancel(); // Cancel debounce on unmount
    };
  }, [searchQuery, fetchData]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBoxContainer}>
        <BackButton customStyle={{ top: hp(1.5), left: wp(0) }} />
        <TextInput
          placeholder="Search Places"
          placeholderTextColor={color.grey}
          autoFocus
          style={styles.textInput}
          value={searchQuery}
          onChangeText={(text: string) => setSearchQuery(text)}
        />
      </View>
      <FlatList
        data={searchData ? searchData : []}
        renderItem={renderItem}
        keyboardShouldPersistTaps="always"
        ListEmptyComponent={
          isLoading ? (
            <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.loaderContainer}>
              <ActivityIndicator size="large" color={color.navyBlue} />
              <Text style={[styles.searchText, { fontFamily: font.InterBold, textAlign: 'center' }]}>Loading...</Text>
            </Animated.View>
          ) : (
            <Animated.Text
              entering={FadeIn.duration(300)}
              exiting={FadeOut.duration(300)}
              style={[styles.searchText, { fontFamily: font.InterBold, textAlign: 'center' }]}
            >
              No Data Available
            </Animated.Text>
          )
        }
      />

      {/* Popup Modal */}
      <Modal visible={isPopupVisible} transparent={true} animationType="fade" onRequestClose={handleClosePopup}>
        <View style={styles.modalContainer}>
          <LinearGradient colors={['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.95)']} style={styles.modalContent}>
            <View>
              <Text style={[styles.modalText, { fontFamily: font.InterBold }]}>{selectedItem} selected!</Text>
              <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup} activeOpacity={0.7}>
                <Text style={[styles.closeButtonText, { fontFamily: font.InterBold }]}>Close</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: wp(5),
    paddingTop: hp(5),
  },
  searchBoxContainer: {
    borderBottomWidth: 1,
    borderRadius: wp(5),
    borderColor: color.grey,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp(4),
    marginBottom: hp(1),
    paddingHorizontal: wp(3),
  },
  textInput: {
    color: color.black,
    padding: wp(2),
    paddingHorizontal: wp(5),
    width: wp(70),
    fontFamily: font.InterBold,
    marginLeft: wp(5),
  },
  searchText: { color: color.grey, fontFamily: font.InterBold, lineHeight: hp(2.5), fontSize: wp(3.5) },
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(5),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dimmed background
  },
  modalContent: {
    width: wp(80),
    padding: wp(5),
    borderRadius: wp(5),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: wp(4.5),
    color: color.black,
    textAlign: 'center',
    marginBottom: hp(3),
  },
  closeButton: {
    backgroundColor: color.black,
    borderRadius: wp(3),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    alignItems: 'center',
  },
  closeButtonText: {
    color: color.white,
    fontSize: wp(4),
    fontWeight: '600',
  },
});
