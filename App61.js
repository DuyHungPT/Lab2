import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Provider } from 'react-redux';

import Cart from './Cart';
import ProductList from './ProductList';
import storee from './storee'

const products = [
  {id:1, name: 'Product 1'},
  {id:2, name: 'Product 2'},
  {id:3, name: 'Product 3'},
]
  

const App61 =()=> {
    return (
        <Provider store={storee}>
           <View>
            <ProductList products={products} />
            <Cart/>
           </View>
        </Provider>
    )
}

export default App61

const styles = StyleSheet.create({
   
})