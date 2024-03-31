//b4 
import React from "react";
import {View,Text,Button} from "react-native"
import {useSelector,useDispatch} from "react-redux"
import { removeItem } from "./actions";

const Cart = () => {
    const cartItem = useSelector(state=>state.cart.items);
    const dispatch=useDispatch();

    return (
        <View>
            {
               cartItem.map(item => {
                return (
                  <View key={item.id}>
                    <Text>{item.name} - {item.quantity}</Text>
                    <Button title="Xoa" onPress={() => dispatch(removeItem(item))} />
                  </View>
                );
              })
            }
        </View>
    )

}
export default Cart;