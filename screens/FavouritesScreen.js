import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import MealsList from '../components/MealList/MealsList';
import {MEALS} from '../data/dummy-data';
import {FavouritesContext} from '../store/context/favourites-context';

const FavouritesScreen = () => {
  const favouriteMealContext = useContext(FavouritesContext);
  const favouriteItems = MEALS.filter(meal =>
    favouriteMealContext.ids.includes(meal.id),
  );

  return <MealsList items={favouriteItems} />;
};

const styles = StyleSheet.create({});

export default FavouritesScreen;
