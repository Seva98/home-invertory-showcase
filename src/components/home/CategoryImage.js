import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { borderRadius, margin, gradientColor } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CommonActions, useNavigation } from '@react-navigation/native';

const CategoryImage = ({ uri, title }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => navigate('Detail', { uri, title, from: 'category', name: 'Edit Category' })}>
      <View style={styles.container}>
        <Image
          source={{
            width: width - margin,
            height,
            uri,
          }}
          resizeMode="cover"
          style={styles.image}
        />
        <LinearGradient style={styles.gradient} colors={gradientColor} />
        <Text style={styles.title}>{title.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryImage;

const { width } = Dimensions.get('window');
const height = 100;
const styles = StyleSheet.create({
  container: {
    width,
    height,
    marginBottom: margin,
    alignItems: 'center',
  },
  image: {
    borderRadius,
  },
  gradient: {
    position: 'absolute',
    width: width - margin,
    borderRadius,
    height,
  },
  title: {
    position: 'absolute',
    top: 70,
    left: 8,
    color: 'white',
    fontSize: 32,
    fontWeight: '800',
  },
});
