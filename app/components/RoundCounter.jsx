import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useGameContext } from '../GameContext.jsx';

const RoundCounter = () => {
    const { round } = useGameContext();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Round: {round}/7</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default RoundCounter;