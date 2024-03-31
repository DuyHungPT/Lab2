// b2 
import { createReducer } from "@reduxjs/toolkit";
import { addItem, removeItem } from "./actions";

// Khởi tạo trạng thái 
const initState = { items: [] };

// Tạo reducer được gọi khi thực hiện hành động
const cartReducer = createReducer(initState, builder => {
  builder
    .addCase(addItem, (state, action) => {
      // Xử lí khi sản phẩm đã tồn tại trong giỏ hàng
      const tontaiItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );

      // Xử lí khi chưa có sản phẩm trong giỏ hàng
      if (tontaiItemIndex !== -1) {
        state.items[tontaiItemIndex].quantity++;
      } else {
        state.items.push({...action.payload, quantity: 1 });
      }
    })
    .addCase(removeItem, (state, action) => {
      const tontaiItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );

      if (tontaiItemIndex !== -1) {
        state.items[tontaiItemIndex].quantity--;
      }
        if (state.items[tontaiItemIndex].quantity == 0) {
          state.items.splice(tontaiItemIndex, 1);
        }
      
    });
});

export default cartReducer;
