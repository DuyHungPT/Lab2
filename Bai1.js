// import React,{useState,useRef,useEffect} from "react";
// import { Text,View,Animated,StyleSheet,Dimensions } from "react-native";
// const CRO31 = () =>{
//     const position=useRef(new Animated.ValueXY()).current;//lay vi tri hien tai
//     const windowHeight= Dimensions.get('window').height;//lay chieu cao
//     useEffect(()=>{
//         startAnimation();
//     });
//     const startAnimation=()=>{
//         const randomY=Math.floor(Math.random()*windowHeight);//vi tri bat ky theo Y
//         Animated.timing(position,{
//             toValue: {x:0,y:randomY},
//             duration: 3000,
//             useNativeDriver: false,
//         }).start(()=>startAnimation());//lap di lap lai
//     };
//     return(
//         <View style={styles.container}>
//             <Animated.View style={[styles.box, position.getLayout()]} />
//         </View>
//     );
   
// }
// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems:'center',
//         justifyContent:'center',
//     },
//     box:{
//         width:50,
//         height:50,
//         backgroundColor:'red',
//     },
// });
// export default CRO31; 
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

const MovingComponent = () => {
  const moveComponent = () => {
    // Triggers animation when button is pressed
    this.componentView.slideInUp(10000); // Slide the component in an upward direction
    // You can also use other animation types like bounce, fadeIn, zoomIn, etc. as per your preference
  };

  const moveComponent2 = () => {
    // Triggers animation when button is pressed
    this.componentView2.slideInDown(1000); // Slide the component in a downward direction
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={moveComponent}>
        <Animatable.View
          ref={ref => (this.componentView = ref)}
          style={styles.square}
          duration={1000}
        />
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={moveComponent2}>
        <Animatable.View
          ref={ref => (this.componentView2 = ref)}
          style={styles.square}
          duration={1000}
        />
      </TouchableOpacity> */}

      <TouchableOpacity onPress={moveComponent} style={styles.button}>
        <Text style={styles.buttonText}>Move</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  square: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    marginVertical: 60, // Add some vertical margin between the squares
  },
  button: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    // marginTop: 20,
      marginBottom: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  
  },
});

export default MovingComponent;





