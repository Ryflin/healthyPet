import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface ElipseWithImageProps {
    imageSource: any; // Change to any to support require
}

const ElipseWithImage: React.FC<ElipseWithImageProps> = ({ imageSource }) => {
    return (
        <View style={styles.container}>
            <View style={styles.ellipse} />
            <Image source={imageSource} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 100,
    },
    ellipse: {
        width: 200,
        height: 100,
        backgroundColor: '#ccc',
        borderRadius: 100,
        position: 'absolute',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});

export default ElipseWithImage;