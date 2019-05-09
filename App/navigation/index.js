import React from 'react';
import { Image, Platform } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import CurrentList from '../screens/CurrentList';
import ItemDetails from '../screens/ItemDetails';
import FavoritesList from '../screens/FavoritesList';

const CurrentListStack = createStackNavigator({
  CurrentList: {
    screen: CurrentList,
    navigationOptions: {
      headerTitle: 'Shopping List'
    },
  },
  ItemDetails: {
    screen: ItemDetails,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("item", {}).name
    }),
  },
});

const FavoritesListStack = createStackNavigator({
  FavoritesList: {
    screen: FavoritesList,
    navigationOptions: {
      headerTitle: 'Favorites List',
    }
  }
});

const Tabs = createBottomTabNavigator({
  CurrentList: {
    screen: CurrentListStack,
    navigationOptions: {
      tabBarLabel: 'Current',
    }
  },
  FavoritesList: {
    screen: FavoritesListStack,
    navigationOptions: {
      tabBarLabel: 'Favorites',
    }
  },
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor, focused }) => {
      let image;
      const { routeName } = navigation.state;

      if (routeName === 'CurrentList') {
        image = Platform.select({
          ios: require('../assets/icons/ios-list.png'),
          android: require('../assets/icons/md-list.png')
        });
      } else if (routeName === 'FavoritesList') {
        image = Platform.select({
          ios: focused
            ? require('../assets/icons/ios-star.png')
            : require('../assets/icons/ios-star-outline.png'),
          android: focused
            ? require('../assets/icons/md-star.png')
            : require('../assets/icons/md-star-outline.png')
        })
      }

      return (
        <Image
          source={image}
          resizeMode="contain"
          style={{ width: 25, tintColor }}
        />
      )
    },
  })
});

export default createAppContainer(Tabs);
