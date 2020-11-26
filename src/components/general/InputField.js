import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Dimensions, StyleSheet } from 'react-native';
import useFontColor from 'react-native-font-color-hook';
import InputScrollView from 'react-native-input-scroll-view';
import { margin } from '../../constants';

const InputField = ({ value, placeholder, onChangeText, keyboardType, multiline, first }) => {
  const fontColor = useFontColor();

  return (
    <View style={[styles.container, first && styles.marginTop]}>
      <TextInput
        style={[styles.input, fontColor]}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
        defaultValue={value || ''}
        keyboardType={keyboardType || 'default'}
        multiline={false}
      />
      <Text style={[styles.inputName, fontColor]}>{placeholder}</Text>
    </View>
  );
};

export default InputField;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  marginTop: {
    marginTop: 17,
  },
  input: {
    width: width - margin,
    height: 40,
    borderColor: 'rgba(0,0,0,0)',
    borderBottomColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    fontSize: 20,
    paddingHorizontal: margin / 2,
    alignSelf: 'center',
  },
  inputName: {
    fontWeight: '200',
    fontSize: 13,
    paddingHorizontal: margin / 2,
    alignSelf: 'flex-end',
    color: 'gray',
  },
});
