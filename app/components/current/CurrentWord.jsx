// components/CurrentWord.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useGameContext } from '../../GameContext';
import { lightTheme, darkTheme, createStyles } from "../../styles/styles";

const CurrentWord = () => {
    const { currentWord, isDarkMode } = useGameContext();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    return (
        <View style={styles.currentContainer}>
            <Text style={styles.word}>{currentWord} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    currentContainer: {
        marginBottom: 10,
    },
    word: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default CurrentWord;