//b3 
import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./reduxser"
const storee = configureStore({
    reducer:{
        cart:cartReducer,
    }
})
export default storee;