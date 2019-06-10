import { createStackNavigator, createAppContainer } from 'react-navigation';
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';

const Navigator = createStackNavigator(
{
  Products: { screen: Products},
  Checkout: { screen: Checkout},
  Receipt: { screen: Receipt}
},
{
 navigationOptions: {
    headerStyle: {
        paddingHorizontal: 10,
    },
 }
}
);

let Route = createAppContainer(Navigator)

export default Route;