import React, {
  Component
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert
} from 'react-native';
import {
  connect
} from 'react-redux';
import Swipeout from 'react-native-swipeout';
import {
  removeItem
} from '../redux/actions/cartActions';
class CartItems extends Component {
  state = {
    activeRowKey: null
  }
  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: () => {
        this.setState({
          activeRowKey: null
        })
      },
      onOpen: () => {
        this.setState({
          activeRowKey: this.props.item.id
        })
      },
      right: [{
        onPress: () => {
          Alert.alert(
            'Alert',
            'Delete item from cart?',
            [{
                text: 'No',
                onPress: () => {},
                style: 'cancel'
              },
              {
                text: 'Yes',
                onPress: () => {
                  this.props.removeItem({
                    index: this.props.index,
                    item: this.props.item
                  })
                }
              },
            ], {
              cancelable: true
            }
          )
        },
        text: 'Delete',
        type: 'delete'
      }],
      rowId: this.props.index,
      sectionId: 1
    }
    const {
      item,
      index
    } = this.props;
    return (
      <Swipeout {...swipeSettings}>
        <View style={styles.container}>
          <View style={styles.productDes}>
            <Image source={item.picture} style={{height: 40, width: 40}}/>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>${(item.cost).toFixed(2)}</Text>
          </View>
        </View>
      </Swipeout>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  productDes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontSize: 14,
    padding: 10
  }
});
export default connect(null, {
  removeItem
})(CartItems);