// components/CurrentScore.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useGameContext } from "../../GameContext";
import { lightTheme, darkTheme, createStyles } from "../../styles/styles";

const CurrentScore = () => {
    const { currentScore, currentMods, isDarkMode } = useGameContext();

    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    return (
            <Text style={styles.word}>Current Score: {currentScore}</Text>
    );
};

export default CurrentScore;
