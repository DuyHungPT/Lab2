import React from "react";
import { Text,View,Button } from "react-native";

import {useDispatch,useSelector} from "react-redux"

import {tang,giam} from "./store" 

const Dem = ()=> {
    const count = useSelector(state=>state.dem);
    const dispatch = useDispatch();
    return (
        <View style={{flex: 1,justifyContent:"center",alignItems:'center',marginLeft: 200}} >
            <Text>Dem : {count}</Text>
            <Button title="Tang" onPress={()=> dispatch(tang())}/>
            <Button title="Giam" onPress={()=> dispatch(giam())}/>
        </View>
    )
}
export default Dem;