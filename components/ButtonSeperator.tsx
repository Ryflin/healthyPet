import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ButtonSeparator: React.FC = () => {
    return (
        <View style={styles.container}>
            <Button title="Button 1" onPress={() => {}} />
            <Button title="Button 2" onPress={() => {}} />
            <Button title="Button 3" onPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
});

export default ButtonSeparator;