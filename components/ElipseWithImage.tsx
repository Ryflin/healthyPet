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


const imgheight = 100
const imgWidth = 100

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 100,
    },
    ellipse: {
        width: imgWidth * 2,
        height: imgheight / 2,
        backgroundColor: '#ccc',
        borderRadius: 100,
        position: 'absolute',
    },
    image: {
        width: imgWidth,
        height: imgheight,
        borderRadius: 50,
    },
});

export default ElipseWithImage;