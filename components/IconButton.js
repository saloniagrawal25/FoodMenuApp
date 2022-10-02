import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconButton = ({icon, color, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={icon} size={24} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default IconButton;
