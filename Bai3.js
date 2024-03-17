// import React,{useState} from "react";
// import { Text,View,StyleSheet,Animated,TouchableOpacity } from "react-native";
// export default function L33(){
//     const [expanded,setExpanded]=useState(false);
//     const [animation] = useState(new Animated.Value(60));//chieu cao ban dau header

//     const thaydoiHeader=()=>{
//         const initialValue = expanded ? 200 : 60;
//         const finalValue = expanded ? 60 : 200;
//         setExpanded(!expanded);
//         animation.setValue(initialValue);
//         Animated.spring(animation,{
//             toValue: finalValue,
//             useNativeDriver: false,
//         }).start();
//     };
//     return(
//         <View style={styles.container}>
//             <Animated.View style={[styles.header,{height: animation}]}>
//                 <Text style={styles.headerText}>Mo rong header</Text>
//             </Animated.View>
//             <TouchableOpacity onPress={thaydoiHeader} style={styles.button}>
//                 <Text>{expanded ? 'Thu hep' : 'mo rong'}</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }
// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     header:{
//         width: '100%',
//         backgroundColor:'blue',
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     button:{
//         marginTop: 20,
//         padding:10,
//         backgroundColor:'#000CCC',
//     },
//     headerText:{
//         fontSize:20,
//         fontWeight:'bold',
//     },
// });
import React, { Component } from 'react';
import { ScrollView, Text, View, Image, Animated } from 'react-native';

class MyScrollHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  render() {
    const { scrollY } = this.state;
    const headerHeight = scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [200, 0],
      extrapolate: 'clamp',
    });
    const headerOpacity = scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [1, 0.5],
      extrapolate: 'clamp',
    });
    const imageScale = scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [1, 0.5],
      extrapolate: 'clamp',
    });

    return (
      <View style={{  }}>
        <Animated.View style={{ height: headerHeight, opacity: headerOpacity, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
          <Animated.Image source={require('../image/image.png')} style={{ width: 100, height: 100, transform: [{ scale: imageScale }] }} />
          <Text style={{ fontSize: 20 }}>Avatar & Title</Text>
        </Animated.View>
        <ScrollView
          scrollEventThrottle={15}
          onScroll={
            Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
              { useNativeDriver: false }
            )
          }
        >
          <View style={{ paddingTop: 20 ,justifyContent: 'center',alignItems: 'center',backgroundColor: 'red'}}>
            {/* Nội dung cuộn */}
            <Text style={{fontSize: 30}}>Hay Cuon Len Nhe</Text>
            <Text style={{fontSize: 30}}>Lab 3 react-native </Text>
            <Text style={{fontSize: 30}}>Hungbdph43753</Text>
            <Text style={{fontSize: 30}}>Hay Cuon Len Nhe</Text>
            <Text style={{fontSize: 30}}>Lab 3 react-native </Text>
            <Text style={{fontSize: 30}}>Hungbdph43753</Text>
            <Text style={{fontSize: 30}}>Hay Cuon Len Nhe</Text>
            <Text style={{fontSize: 30}}>Lab 3 react-native </Text>
            <Text style={{fontSize: 30}}>Hungbdph43753</Text>
            <Text style={{fontSize: 30}}>Hay Cuon Len Nhe</Text>
            <Text style={{fontSize: 30}}>Lab 3 react-native </Text>
            <Text style={{fontSize: 30}}>Hungbdph43753</Text>
            <Text style={{fontSize: 30}}>Hay Cuon Len Nhe</Text>
            <Text style={{fontSize: 30}}>Lab 3 react-native </Text>
            <Text style={{fontSize: 30}}>Hungbdph43753</Text>
            <Text style={{fontSize: 30}}>Hay Cuon Len Nhe</Text>
            <Text style={{fontSize: 30}}>Lab 3 react-native </Text>
            <Text style={{fontSize: 30}}>Hungbdph43753</Text>
            <Text style={{fontSize: 30}}>Hay Cuon Len Nhe</Text>
            <Text style={{fontSize: 30}}>Lab 3 react-native </Text>
            <Text style={{fontSize: 30}}>Hungbdph43753</Text>
            <Text style={{fontSize: 30}}>Hay Cuon Len Nhe</Text>
            <Text style={{fontSize: 30}}>Lab 3 react-native </Text>
            <Text style={{fontSize: 30}}>Hungbdph43753</Text>
            <Text style={{fontSize: 30}}>Lab 3 react-native </Text>
            <Text style={{fontSize: 30}}>Hungbdph43753</Text>
            <Text style={{fontSize: 30}}>Hay Cuon Len Nhe</Text>
            <Text style={{fontSize: 30}}>Lab 3 react-native </Text>
            <Text style={{fontSize: 30}}>Hungbdph43753</Text>
            <Text style={{fontSize: 30}}>Hay Cuon Len Nhe</Text>
            <Text style={{fontSize: 30}}>Lab 3 react-native </Text>
            <Text style={{fontSize: 30}}>Hungbdph43753</Text>
            <Text style={{fontSize: 30}}>Lab 3 react-native </Text>
            <Text style={{fontSize: 30}}>Hungbdph43753</Text>
            <Text style={{fontSize: 30}}>Hay Cuon Len Nhe</Text>
            <Text style={{fontSize: 30}}>Lab 3 react-native </Text>
            <Text style={{fontSize: 30}}>Hungbdph43753</Text>
            
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default MyScrollHeader;




















