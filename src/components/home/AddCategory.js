import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { borderRadius, buttonColor, gradientColor, margin } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const AddCategory = () => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => navigate('Detail', { from: 'new-category', name: 'New Category' })}>
      <View style={styles.container}>
        <LinearGradient style={styles.gradient} colors={gradientColor} />
        <Text style={styles.title}>ADD CATEGORY</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddCategory;

const { width } = Dimensions.get('window');
const height = 100;
const styles = StyleSheet.create({
  container: {
    width: width - margin,
    height,
    marginHorizontal: margin / 2,
    marginBottom: 24,
    borderRadius,
    backgroundColor: buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {},
  gradient: {
    position: 'absolute',
    width: width - margin,
    height,
    borderRadius,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800',
  },
});
