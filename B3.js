import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const B3 = () => {
    const [selectedImage, setselectedImage] = useState(null);
    const [imageSelected, setImageSelected] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        
        if (!result.cancelled) {
            setselectedImage(result.assets[0].uri);
            setImageSelected(true);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, {  }]} onPress={pickImage}>
                <Text style={styles.buttonText}>Chọn ảnh từ thư viện</Text>
            </TouchableOpacity>
            {selectedImage && imageSelected ? (
                <Image style={styles.image} source={{ uri: selectedImage }} />
            ) : (
                <Image style={styles.image} source={require('./assets/icon.png')} />
                // Đường dẫn của hình ảnh mặc định thay thế './assets/defaultImage.jpg' bằng đường dẫn của hình ảnh mặc định của bạn
            )}
        </View>
    )
}

export default B3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center'

    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
        marginLeft: 500
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
       
    
    
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        alignSelf: 'center',
        marginLeft: 100,
    },
});
