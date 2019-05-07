import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#69696969'
  },
  icon: {
    height: 30,
    tintColor: '#69696969'
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }
});

export const Separator = () => <View style={styles.separator} />

const ListItem = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Image
        source={require('../assets/icons/ios-star-outline.png')}
        style={styles.icon}
        resizeMode="contain"
      />
    </View>
  )
}

export default ListItem;
