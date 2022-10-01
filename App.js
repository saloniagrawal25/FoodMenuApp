import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <CategoriesScreen />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});

export default App;
