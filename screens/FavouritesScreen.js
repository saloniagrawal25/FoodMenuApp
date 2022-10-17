import {useContext} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import MealsList from '../components/MealList/MealsList';
import {MEALS} from '../data/dummy-data';
//import {FavouritesContext} from '../store/context/favourites-context';

const FavouritesScreen = () => {
  //const favouriteMealContext = useContext(FavouritesContext);
  // const favouriteItems = MEALS.filter(meal =>
  //   favouriteMealContext.ids.includes(meal.id),
  // );
  const favouriteMealIds = useSelector(state => state.favouriteMeals.ids);
  const favouriteItems = MEALS.filter(meal =>
    favouriteMealIds.includes(meal.id),
  );
  if (favouriteItems.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favouriteItems} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FavouritesScreen;
