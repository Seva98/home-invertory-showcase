import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaView, Text, useColorScheme } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import MainView from './src/views/HomeView';
import DetailsView from './src/views/DetailsView';
import { AppearanceProvider } from 'react-native-appearance';
import { createStackNavigator } from '@react-navigation/stack';
import useFirebase from './src/helpers/firebase';

enableScreens();
const Stack = createStackNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'light' ? 'white' : 'black';

  // useEffect(() => {
  //   initFirebase();
  // }, []);
  return (
    <AppearanceProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={{ backgroundColor }} />
      <NavigationContainer>
        <Stack.Navigator
          headerMode="none"
          screenOptions={{
            cardStyle: { backgroundColor },
          }}
        >
          <Stack.Screen name="Home Invertory" component={MainView} />
          <Stack.Screen name="Detail" component={DetailsView} options={({ route }) => ({ title: route.params.name })} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
