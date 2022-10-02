import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
import FavouritesScreen from './screens/FavoritesScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          sceneContainerStyle: {backgroundColor: '#3f2f25'},
        }}>
        <Drawer.Screen
          component={CategoriesScreen}
          name="MealsCategories"
          options={{
            title: 'Categories',
          }}
        />
        <Drawer.Screen
          component={FavouritesScreen}
          name="Favourites"
          options={{
            title: 'Favourites',
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
          }}>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              title: 'All Categories',
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealsDetails" component={MealsDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default App;
