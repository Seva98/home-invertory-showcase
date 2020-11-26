import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useFontColor from 'react-native-font-color-hook';
import GoBackIcon from './GoBackIcon';
import SaveIcon from './SaveIcon';

const Header = ({ title, subtitle, backIcon, saveIcon }) => {
  const fontColor = useFontColor();
  return (
    <View style={styles.container}>
      {backIcon && (
        <View>
          <GoBackIcon />
        </View>
      )}
      <View>
        <Text style={[styles.title, fontColor]}>{title}</Text>
        {subtitle && <Text style={[styles.subtitle, fontColor]}>{subtitle}</Text>}
      </View>
      {saveIcon && (
        <View style={{ justifyContent: 'flex-end', flexGrow: 1, marginRight: 10 }}>
          <SaveIcon />
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    flexDirection: 'row',
    height: 52,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: 'white',
    paddingLeft: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    color: 'white',
    paddingLeft: 10,
  },
});
