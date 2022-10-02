import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="star" size={24} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default IconButton;
