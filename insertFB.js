import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { FIRESTORE_DB } from './firebaseConfig1';
// import { firebaseConfig } from './firebaseConfig1';
import { FIRESTORE_DB, firebaseConfig } from './firebaseConfig1';

// Assuming FIREBASE_APP has already been initialized

const App71 = () => {
  const [text, setText] = useState('');

  const handleAddData = async () => {
    try {
      const docRef = await addDoc(collection(FIRESTORE_DB, 'items'), {
        text: text
      });
      console.log('Document written with ID: ', docRef.id);
      setText('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <View style={{justifyContent: 'center'}}>
      <TextInput
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
      />
      <Button
        title="Add Data"
        onPress={handleAddData}
      />
    </View>
  );
};

export default App71;
