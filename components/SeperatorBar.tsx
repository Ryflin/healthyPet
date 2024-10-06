import React from 'react';
import { View, StyleSheet } from 'react-native';

const SeparatorBar: React.FC = () => {
    return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE',
        marginVertical: 10,
    },
});

export default SeparatorBar;