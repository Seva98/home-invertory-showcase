import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import useFontColor from 'react-native-font-color-hook';

const SaveIcon = () => {
  const navigation = useNavigation();
  const { color } = useFontColor();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Entypo name="save" size={32} color={color} style={{ alignSelf: 'flex-end' }} />
    </TouchableOpacity>
  );
};

export default SaveIcon;
