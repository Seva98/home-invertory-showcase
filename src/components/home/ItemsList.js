import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AddCategory from './AddCategory';
import CategoryImage from './CategoryImage';
import CategoryItems from './CategoryItems';

const ItemsList = ({ data }) => {
  return (
    <ScrollView style={styles.container}>
      <React.Fragment>
        {data.map(({ uri, title, items }, i) => (
          <React.Fragment key={`category-${i}`}>
            <CategoryImage uri={uri} title={title} />
            <CategoryItems items={items} category={title} />
          </React.Fragment>
        ))}
        <AddCategory />
      </React.Fragment>
    </ScrollView>
  );
};

export default ItemsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
