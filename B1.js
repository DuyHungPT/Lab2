import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

const playlist = [
    {
        uri: 'http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3',
        title: 'Cello Concerto in D Major'
    },
    {
        uri: 'http://svn.code.sf.net/p/soundhelix/code/trunk/soundhelix soundhelix-current',
        title: 'SoundHelix Song 1'
    },
    // Add more songs to the playlist here
];

export default function B1() {
    const [sound, setSound] = useState(null);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    useEffect(() => {
        loadSound();
    }, [currentTrackIndex]);

    const loadSound = async () => {
        if (sound) {
            await sound.unloadAsync();
        }

        const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: playlist[currentTrackIndex].uri }
        );

        setSound(newSound);
    };

    const playSound = async () => {
        if (sound) {
            await sound.playAsync();
        }
    };

    const handlePreviousTrack = async () => {
        if (currentTrackIndex > 0) {
            setCurrentTrackIndex(currentTrackIndex - 1);
        }
    };

    const handleNextTrack = async () => {
        if (currentTrackIndex < playlist.length - 1) {
            setCurrentTrackIndex(currentTrackIndex + 1);
        }
    };

    const handleStop = async () => {
        if (sound) {
            await sound.stopAsync();
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{playlist[currentTrackIndex].title}</Text>
            <TouchableOpacity style={styles.button} onPress={playSound}>
                <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
            <View style={styles.controls}>
                <TouchableOpacity style={styles.button} onPress={handlePreviousTrack}>
                    <Text style={styles.buttonText}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleStop}>
                    <Text style={styles.buttonText}>Stop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleNextTrack}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});
