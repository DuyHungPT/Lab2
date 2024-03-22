import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'; //Thêm Dimensions từ react-native
import { Camera } from "expo-camera";

const B2 = () => {
    const [hasPer, sethasPer] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const cameraRef = useRef();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            sethasPer(status === 'granted');
        })();
    }, []);

    const chup = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setCapturedImage(photo.uri);
            console.log('anh da chup thanh cong', photo.uri);
        }
    }

    return (
        <View style={styles.container}>
            {hasPer ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> {/* Thêm justifyContent và alignItems để căn giữa */}
                    <Camera
                        style={styles.camera}
                        ref={cameraRef}
                        type={Camera.Constants.Type.back}
                    />
                    {capturedImage && <Image source={{ uri: capturedImage }} style={styles.capturedImage} />}
                </View>
            ) : (
                <Text>Ko co quyen truy cap vao camera</Text>
            )}
            <TouchableOpacity style={styles.captureButton} onPress={chup}>
                <Text style={styles.captureText}>Chup</Text>
            </TouchableOpacity>
        </View>
    )
}

export default B2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        width: Dimensions.get('window').width, //Sử dụng chiều rộng của cửa sổ
        height: Dimensions.get('window').width * 0.75, //Chiều cao được thiết lập theo tỉ lệ 4:3
    },
    capturedImage: {
        width: 100,
        height: 100,
        marginTop: 20,
    },
    captureButton: {
        backgroundColor: 'red',
        padding: 10,
        margin: 10
    },
    captureText: {
        color: 'white',
    }
});
