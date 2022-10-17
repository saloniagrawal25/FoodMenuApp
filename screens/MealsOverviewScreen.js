import {useLayoutEffect} from 'react';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import {StyleSheet} from 'react-native';
import MealsList from '../components/MealList/MealsList';

const MealsOverviewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId,
    ).title;

    navigation.setOptions({title: categoryTitle});
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
