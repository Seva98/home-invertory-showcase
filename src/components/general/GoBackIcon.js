import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import useFontColor from 'react-native-font-color-hook';

const GoBackIcon = () => {
  const navigation = useNavigation();
  const { color } = useFontColor();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Entypo name="chevron-left" size={40} color={color} style={{ alignSelf: 'flex-end' }} />
    </TouchableOpacity>
  );
};

export default GoBackIcon;
