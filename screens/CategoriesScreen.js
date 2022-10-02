import {CATEGORIES} from '../data/dummy-data';
import {FlatList, StyleSheet} from 'react-native';
import CategoryGridTile from '../components/CategoriyGridTile';

const CategoriesScreen = ({navigation}) => {
  const renderCategoriesItem = ({item}) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: item.id,
      });
    };
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoriesItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
