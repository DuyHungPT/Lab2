import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface HeaderProps {
  headerText: string;
}

const Header: React.FC<HeaderProps> = ({ headerText }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../image/image.png')}  style={{width: 50,height: 50,justifyContent: 'center',alignItems: 'center',padding :10,marginLeft: 10,}}/>
      <Text style={styles.text}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'lightblue',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});

export default Header;
