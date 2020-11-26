import React from 'react';
import { Alert, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import AddItem from './AddItem';
import { borderRadius, margin, gradientColor } from '../../constants';
import { CommonActions, useNavigation } from '@react-navigation/native';
import useFirebase from '../../helpers/firebase';

const CategoryItems = ({ items, category }) => {
  const { navigate } = useNavigation();

  const firebase = useFirebase();

  const deleteAlert = (item) =>
    Alert.alert(
      `Delete ${item.title} from ${category}`,
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log(firebase.readCategories().then((v) => console.log(v))),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () =>
            firebase.writeNewCategory({
              title: 'Living Room',
              uri: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            }),
          style: 'destructive',
        },
      ],
      { cancelable: true },
    );

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} contentContainerStyle={{ width: itemWidth * (items.length + 1) + margin / 2 }} scrollEventThrottle={200}>
        <React.Fragment>
          {items.map((item) => (
            <TouchableOpacity key={item.id} activeOpacity={0.6} onPress={() => navigate('Detail', { ...item, from: 'item', name: 'Edit Item' })} onLongPress={() => deleteAlert(item)}>
              <View key={item.id} style={styles.view}>
                <Image
                  source={{
                    width: itemWidth - margin,
                    height,
                    uri: item.uri,
                  }}
                  resizeMode="cover"
                  style={styles.image}
                />
                <LinearGradient style={styles.gradient} colors={gradientColor} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>${item.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <AddItem />
        </React.Fragment>
      </ScrollView>
    </View>
  );
};

export default CategoryItems;

const { width } = Dimensions.get('window');
const itemWidth = width * 0.66;
const height = 200;
const styles = StyleSheet.create({
  container: {
    marginBottom: margin,
    marginLeft: margin / 2,
  },
  view: {
    width: itemWidth,
    height,
  },
  image: {
    borderRadius,
  },
  gradient: {
    position: 'absolute',
    width: itemWidth - margin,
    height,
    borderRadius,
  },
  title: {
    position: 'absolute',
    top: 176,
    left: 4,
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
    width: itemWidth,
    height,
  },
  subtitle: {
    position: 'absolute',
    top: 160,
    left: 4,
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
    width: itemWidth,
    height,
  },
});
