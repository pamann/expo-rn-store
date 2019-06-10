import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import OrderSummary from '../components/OrderSummary.component';
import BackToProducts from '../components/BackToProducts.component';
import Cart from '../components/Cart.component';
import { BorderlessButton } from 'react-native-gesture-handler';

class Receipt extends Component {
 static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Receipt',
      headerLeft: <BackToProducts navigation={navigation}/>,
      headerRight: <Cart navigation={navigation}/>
    }
  }
  getTotal(){
    let total = 0;
    const { items } = this.props;
    for (let i = 0; i < items.length; i++) {
        total = total + items[i].cost
    }
    return <Text style={styles.totText}>Total: ${(total).toFixed(2)}</Text>
  }
  render() {
    const { items } = this.props;
    return (
      <View style={styles.container}>
        
        <View style={styles.headings}>
          <Text style={styles.receipt}>Here's your receipt!</Text>
        </View>
        <View style={styles.orderSumm}>
            <Text style={styles.billtext}>Order summary</Text>
            <FlatList
            data={items}
            renderItem={({item}) => <OrderSummary item={item}/>}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{height:0.5, backgroundColor:'#34495e90'}} />}
            />
            {this.getTotal()}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    headings: {
      padding: 12,
      borderRadius: 5,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    orderSumm: {
      flex: 1,
      margin: 10,
      backgroundColor: '#fff'
    },
    billtext: {
      padding: 6,
      justifyContent: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    text: {
      margin: 5
    },
    billings: {
      height: 130,
      margin: 10
    },
    totText: {
      textAlign: 'center',
      color: 'red',
      padding: 30,
      fontSize: 25
    },
    receipt: {
      fontSize: 30,
    }
});
const mapStateToProps = (state) => ({
  items: state.order.order.items
})
export default connect(mapStateToProps)(Receipt);