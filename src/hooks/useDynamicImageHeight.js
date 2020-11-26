import { useAppState } from '@react-native-community/hooks';
import { useEffect } from 'react';
import { Animated, Keyboard } from 'react-native';

const useDynamicImageHeight = (image, height) => {
  const appState = useAppState();
  const IMAGE_HEIGHT = height * 0.4;
  const imageHeight = new Animated.Value(IMAGE_HEIGHT);
  useEffect(() => {
    const keyboardWillShow = Keyboard.addListener('keyboardWillShow', (e) => {
      const keyboardHeight = e.endCoordinates.height;
      const headerHeight = 65.3;
      const inputsHeight = 53.3 * 3;
      const safeAreaHeight = 60;
      const maxImageHeight = height - keyboardHeight - headerHeight - inputsHeight - safeAreaHeight;

      Animated.timing(imageHeight, {
        duration: e.duration,
        toValue: maxImageHeight,
        useNativeDriver: false,
      }).start();
    });

    const keyboardWillHide = Keyboard.addListener('keyboardWillHide', (e) => {
      Animated.timing(imageHeight, {
        duration: e.duration,
        toValue: IMAGE_HEIGHT,
        useNativeDriver: false,
      }).start();
    });

    return () => {
      keyboardWillShow.remove();
      keyboardWillHide.remove();
    };
  }, [appState, image]);
  return imageHeight;
};

export default useDynamicImageHeight;
