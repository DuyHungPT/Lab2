
// import React, { useState } from "react"; // Import React and useState
// import { View, TextInput, Button } from 'react-native';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// import { getFirestore, collection, addDoc } from 'firebase/firestore'; 
// const AppDemo71 = () => {
//     const [text, setText] = useState('');

//     const handleInsert = async () => {
//         try {
//             const tailieu = await addDoc(collection(FIRESTORE_DB, 'SinhViens'), {
//                 text: text,
//             });
//             console.log("tai lieu duoc gi voi ID=", tailieu.id);
//             setText('');
//         } catch (error) {
//             console.log("Loi ghi du lieu: ", error);
//         }
//     };

//     return (
//         <View>
//             <TextInput
//                 placeholder="Nhap ten sinh vien"
//                 value={text}
//                 onChangeText={setText}
//             />
//             <Button title="Them du lieu" onPress={handleInsert} />
//         </View>
//     );
// };

// export default AppDemo71;