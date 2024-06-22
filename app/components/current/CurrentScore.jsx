// components/CurrentScore.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useGameContext } from '../../GameContext';

const CurrentScore = () => {
    const { currentScore, currentMods } = useGameContext();

    return (
        <View style={styles.container}>
            <Text style={styles.score}>Current Score: {currentScore}</Text>
            <Text style={styles.mods}>Modifiers: {currentMods}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    score: {
        fontSize: 18,
    },
    mods: {
        fontSize: 14,
        color: 'gray',
    },
});

export default CurrentScore;