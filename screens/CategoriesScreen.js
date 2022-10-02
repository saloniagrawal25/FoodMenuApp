import {CATEGORIES} from '../data/dummy-data';
import {FlatList, StyleSheet, View} from 'react-native';
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
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategoriesItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});

export default CategoriesScreen;
