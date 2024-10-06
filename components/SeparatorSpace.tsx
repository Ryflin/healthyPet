import React from 'react';
import { View, StyleSheet } from 'react-native';

interface SeparatorSpaceProps {
    height?: number;
}

const SeparatorSpace: React.FC<SeparatorSpaceProps> = ({ height = 10 }) => {
    return <View style={[styles.separator, { height }]} />;
};

const styles = StyleSheet.create({
    separator: {
        width: '100%',
    },
});

export default SeparatorSpace;