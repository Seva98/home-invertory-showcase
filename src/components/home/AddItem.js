import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { borderRadius, buttonColor, gradientColor } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CommonActions, useNavigation } from '@react-navigation/native';

const AddItem = () => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => navigate('Detail', { from: 'new-item', name: 'New Item' })}>
      <View style={styles.container}>
        <LinearGradient style={styles.gradient} colors={gradientColor} />
        <Text style={styles.title}>ADD ITEM</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddItem;

const { width } = Dimensions.get('window');
const itemWidth = width * 0.66;
const height = 200;
const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    height,
    backgroundColor: buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius,
  },
  gradient: {
    position: 'absolute',
    width: itemWidth,
    height,
    borderRadius,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800',
  },
});
