import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class BackToProducts extends Component {
  backToProducts()  {
    this.props.navigation.navigate('Products')
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.backToProducts()}>
          <Text style={styles.products}>Products</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  products: {
    fontSize: 14,
    padding: 10
  }
})

export default BackToProducts;