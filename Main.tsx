// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import Header from './Header';
// import Body from './Body';
// import Footer from './Footer';

// const Main: React.FC = () => {
//   const [headerText, setHeaderText] = useState('');
//   const [footerText, setFooterText] = useState('');
//   const [footerColor, setFooterColor] = useState('lightgreen');

//   const handleUpdateHeader = (text: string) => {
//     setHeaderText(text);
//   };

//   const handleUpdateFooter = (text: string) => {
//     setFooterText(text);
//   };

//   const handleButtonClick = () => {
//     // Hàm này sẽ random màu sắc mới cho footer
//     const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
//     setFooterColor(randomColor);
//   };

//   return (
//     <View style={styles.container}>
//       <Header headerText={headerText} />
//       <Body onUpdateHeader={handleUpdateHeader} onUpdateFooter={handleUpdateFooter} />
//       <Footer footerText={footerText} color={footerColor} onPress={handleButtonClick} /> {/* Truyền hàm xử lý sự kiện vào footer */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default Main;
