import { createStackNavigator, createAppContainer } from 'react-navigation';

import CurrentList from '../screens/CurrentList';
import ItemDetails from '../screens/ItemDetails';

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

export default createAppContainer(CurrentListStack);
