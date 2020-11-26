import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native';
import Header from '../components/general/Header';
import ItemsList from '../components/home/ItemsList';
import { writeNewCategory } from '../helpers/firebase';

const data = [
  {
    id: 'living-room',
    title: 'Living Room',
    uri: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    items: [
      {
        id: 'living-room-1',
        title: 'TV',
        price: 799,
        uri: 'https://images.unsplash.com/photo-1571415060716-baff5f717c37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80',
      },
      {
        id: 'living-room-2',
        title: 'PlayStation',
        price: 399,
        uri: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2284&q=80',
      },
      {
        id: 'living-room-3',
        title: 'Sonos',
        price: 199,
        uri: 'https://images.unsplash.com/photo-1594991523303-a54f2722dc3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      },
    ],
  },
  {
    id: 'living-room',
    title: 'Bedroom',
    uri: 'https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    items: [
      {
        id: 'living-room-2',
        title: 'PlayStation',
        price: 399,
        uri: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2284&q=80',
      },
      {
        id: 'living-room-3',
        title: 'Sonos',
        price: 199,
        uri: 'https://images.unsplash.com/photo-1594991523303-a54f2722dc3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      },
      {
        id: 'living-room-1',
        title: 'TV',
        price: 799,
        uri: 'https://images.unsplash.com/photo-1571415060716-baff5f717c37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80',
      },
    ],
  },
  {
    id: 'living-room',
    title: 'Bedroom',
    uri: 'https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    items: [
      {
        id: 'living-room-2',
        title: 'PlayStation',
        price: 399,
        uri: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2284&q=80',
      },
      {
        id: 'living-room-3',
        title: 'Sonos',
        price: 199,
        uri: 'https://images.unsplash.com/photo-1594991523303-a54f2722dc3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      },
      {
        id: 'living-room-1',
        title: 'TV',
        price: 799,
        uri: 'https://images.unsplash.com/photo-1571415060716-baff5f717c37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80',
      },
    ],
  },
];

const MainView = ({ navigation }) => {
  const totalCost = data
    .map((d) => d.items)
    .flat(1)
    .reduce((p, c) => p + (c.price || 0), 0);

  useEffect(() => {
    (async () => {
      //     await writeNewCategory();
    })();
  }, []);

  return (
    <React.Fragment>
      <Header title="Home Invertory" subtitle={`Total value: $${totalCost}`} />
      <ItemsList data={data} />
    </React.Fragment>
  );
};

export default MainView;
