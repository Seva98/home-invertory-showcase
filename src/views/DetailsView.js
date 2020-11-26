import { useAppState } from '@react-native-community/hooks';
import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, Keyboard, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Header from '../components/general/Header';
import InputField from '../components/general/InputField';
import * as ImagePicker from 'expo-image-picker';
import ScaleableImage from '../components/details/ScaleableImage';

const DetailsView = ({ route }) => {
  const { params } = route;

  const [name, setName] = useState(params.title);
  const [price, setPrice] = useState(params.price);
  const [notes, setNotes] = useState(params.notes);

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handlePriceChange = (newPrice) => {
    setPrice(newPrice);
  };

  const handleNotesChange = (newNotes) => {
    setNotes(newNotes);
  };

  return (
    <React.Fragment>
      <Header title={route.params.name} backIcon saveIcon />
      <ScrollView style={[styles.container]}>
        <ScaleableImage uri={params.uri} />
        <InputField value={name && `${name}`} placeholder="ITEM NAME" onChangeText={(newName) => handleNameChange(newName)} first={true} />
        {(params.from === 'item' || params.from === 'new-item') && (
          <InputField value={price && `${price}`} placeholder="PRICE" onChangeText={(newPrice) => handlePriceChange(newPrice)} keyboardType="numeric" />
        )}
        <InputField value={notes && `${notes}`} placeholder="NOTES" onChangeText={(newNotes) => handleNotesChange(newNotes)} />
      </ScrollView>
    </React.Fragment>
  );
};

export default DetailsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 20,
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },
  firstInput: {
    marginTop: 50,
  },
});
