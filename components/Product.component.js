import React, { Component } from 'react';
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity 
} from 'react-native';

class Product extends Component {
    addToCart = () => {
        this.props.addItemsToCart(this.props.item)
    }
    render() {
        const { product } = this.props;
            return (
        <View style={styles.container}>
            <Image source={product.picture} style={{width:150,height:150}}/>
            <View style={styles.productDes}>
                <Text>{product.title}</Text>
                <Text>${(product.cost).toFixed(2)}</Text>
                <Text>{product.brand}</Text>
                <TouchableOpacity onPress={this.addToCart} >
                    <Text style={styles.text}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        margin: 10,
    },
    productDes: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    addBtn: {
        borderRadius: 30,
        margin: 10,
    },
    text: {
        fontSize: 16,
        padding: 10
    }
});
export default Product;