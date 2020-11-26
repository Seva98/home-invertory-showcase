import { useAppState } from '@react-native-community/hooks';
import React, { useEffect, useState } from 'react';
import { Alert, Animated, Dimensions, Keyboard, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import useDynamicImageHeight from '../../hooks/useDynamicImageHeight';

const ScaleableImage = ({ uri }) => {
  const [image, setImage] = useState(uri);
  const dynamicImageHeight = useDynamicImageHeight(image, height);

  const requestCameraRollPermissionsAsync = async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  };
  const requestCameraPermissionsAsync = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
    }
  };

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      await requestCameraRollPermissionsAsync();
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takePhoto = async () => {
    if (Platform.OS !== 'web') {
      await requestCameraPermissionsAsync();
    }
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const selectNewPhoto = () => {
    Alert.alert(
      'Replace photo',
      'Select from gallery or take a new photo',
      [
        { text: 'New from gallery', onPress: () => pickImage() },
        { text: 'Take a new photo', onPress: () => takePhoto() },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <TouchableOpacity onPress={() => selectNewPhoto()} style={[styles.container]}>
      {image ? <Animated.Image style={[styles.image, { height: dynamicImageHeight }]} source={{ uri: image }} /> : <Text style={[styles.text]}>📷</Text>}
    </TouchableOpacity>
  );
};

export default ScaleableImage;

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width,
  },
  text: {
    color: 'white',
    marginVertical: 40,
    fontSize: 96,
  },
});
