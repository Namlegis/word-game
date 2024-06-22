// components/CurrentWord.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useGameContext } from '../../GameContext';

const CurrentWord = () => {
    const { currentWord } = useGameContext();

    return (
        <View style={styles.container}>
            <Text style={styles.word}>{currentWord}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    word: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default CurrentWord;