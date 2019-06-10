import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';
import {
  connect
} from 'react-redux';

export class Cart extends Component {
  constructor(props) {
    super(props);
  }

  onPress = () => {
    this.props.navigation.navigate('Checkout');
  }
  render() {
    const { cartItems } = this.props;
    return (
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.cart}>Cart: {(cartItems).length}</Text>
        </TouchableOpacity>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.cart
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cart: {
    fontSize: 14,
    padding: 10
  }
})
export default connect(mapStateToProps, null)(Cart);