import {CATEGORIES} from '../data/dummy-data';
import {FlatList, StyleSheet} from 'react-native';
import CategoryGridTile from '../components/CategoriyGridTile';

const CategoriesScreen = () => {
  const renderCategoriesItem = ({item}) => {
    return <CategoryGridTile title={item.title} color={item.color} />;
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
