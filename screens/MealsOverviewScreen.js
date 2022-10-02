import {useLayoutEffect} from 'react';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import {StyleSheet, View, FlatList} from 'react-native';
import MealItem from '../components/MealItem';

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

  const RenderMealItem = ({item}) => {
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
    };

    const pressHandler = () => {
      navigation.navigate('MealsDetails', {mealId: item.id});
    };

    return <MealItem {...mealItemProps} onPress={pressHandler} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={RenderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
