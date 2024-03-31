import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import {useDispatch} from "react-redux"
import { addItem } from './actions';



const ProductList = ({products}) => {
    const dispatch = useDispatch()
  return (
    <View>
      {
        products.map(product=>(
            <View key={product.id}>
                <Text>{product.name}</Text>
                <Button title='ADD to cart' onPress={() => dispatch(addItem(product))} />

                </View>
        ))
      }

    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({})