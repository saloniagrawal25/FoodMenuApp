import {useLayoutEffect} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import MealDetail from '../components/MealDetail';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import {MEALS} from '../data/dummy-data';
import IconButton from '../components/IconButton';

const MealsDetailsScreen = ({route, navigation}) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meals => meals.id === mealId);

  const headerButtonPressHandler = () => {
    alert('clicked');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={'star'}
          color={'white'}
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>{'Ingredients'}</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>{'Steps'}</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    height: 350,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 8,
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});

export default MealsDetailsScreen;
