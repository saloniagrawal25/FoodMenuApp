import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import FavouritesContextProvider from './store/context/favourites-context';

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
          drawerContentStyle: {backgroundColor: '#351401'},
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#351401',
          drawerActiveBackgroundColor: '#e4baa1',
        }}>
        <Drawer.Screen
          component={CategoriesScreen}
          name="MealsCategories"
          options={{
            title: 'All Categories',
            drawerIcon: ({size, color}) => {
              return <Icon size={size} color={color} name="list" />;
            },
          }}
        />
        <Drawer.Screen
          component={FavouritesScreen}
          name="Favourites"
          options={{
            title: 'Favourites',
            drawerIcon: ({size, color}) => {
              return <Icon size={size} color={color} name="star" />;
            },
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <FavouritesContextProvider>
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
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealsDetails"
              component={MealsDetailsScreen}
              options={{
                title: 'About the Meal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
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
