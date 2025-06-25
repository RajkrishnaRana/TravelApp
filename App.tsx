/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Orientation from 'react-native-orientation-locker';

function App() {
  useEffect(() => {
    Orientation.lockToPortrait();

    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
