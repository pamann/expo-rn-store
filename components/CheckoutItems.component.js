import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Button
} from 'react-native';
import CartItems  from './CartItems.component';
import { connect } from 'react-redux';
import { addOrder } from '../redux/actions/orderActions';
import { emptyCart } from '../redux/actions/cartActions';

class CheckoutItems extends Component {  
  backToProducts() {
    this.props.navigation.navigate('Products')
  }

  confirmPurchase() {
    const {cartItems, navigation, addOrder, emptyCart} = this.props;
    navigation.navigate('Receipt')
    addOrder({cartItems: cartItems})
    emptyCart()
  }

  render() {
    const { cartItems, cartTotal } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.missingItem}>
          <Text style={{fontSize: 20}}>Forget something?</Text>
          <Button 
            onPress={() => this.backToProducts()}
            title="Add more items"
            style={styles.button}/>
          <Text style={{fontSize: 15}}>or swipe to delete items</Text>
      </View>
      <View style={styles.ckitems}>
        <FlatList 
          data={cartItems}
          renderItem={({item, index}) => <CartItems item={item} index={index} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent= {()=> <View style={{height: .5, backgroundColor:'black'}}/> }
          />
          <Text style={styles.text}>Total: ${(cartTotal).toFixed(2)}</Text>  
          <Button 
            title="Confirm Purchase"
            onPress={() => this.confirmPurchase()}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  ckitems: {
    height: 500
  },
  heading:{
    padding: 15,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'red'
  },
  anncText: {
    textAlign: 'center',
    color: '#fff'  
  },
  missingItem: {
    padding: 15,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 15,
    borderWidth: 1,
  }
});

const mapStateToProps = (state) => ({
  cartItems: state.cart.cart
})
export default connect(mapStateToProps, {addOrder, emptyCart})(CheckoutItems);