import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChupAnh from './B42';
import ChonAnh from './B43';
import NgheNhac from './Bai1L4';
import B1 from './B1';
import B2 from './B2';
import B3 from './B3';
import AppDemo5 from './Demo5/AppDemo5';
import YourComponent from './B43';

export default function App() {
  return (
    <View >
      <YourComponent/>
      {/* <AppDemo5/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  
});


// import { View, Text, Button } from 'react-native'
// import React, {useState, useMemo} from 'react'


// const App = () => {
//  const [so, setSo] = useState(0);
//  // const tangSo = useMemo ( hàm xử lý , phần phụ thuộc);


//  const tangSo = useMemo ( ()=>{
//      console.log("Thay đổi số: ");
//      return so +2; // mỗi lần tăng 2 đơn vị
//  } , [so]);




//  return (
//    <View style={{justifyContent: 'center', alignContent:'center', alignItems:'center', alignSelf: 'center'}}>
//      <Text>App </Text>
//      <Text>Số: {so} </Text>
//      <Text>Số có sử dụng hàm: {tangSo}</Text>
//      <Button title='Tăng số' onPress={()=> setSo(so + 5)} />
//    </View>
//  )
// }


// export default App



