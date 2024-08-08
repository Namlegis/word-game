import React from "react";
import { View, Text } from "react-native";
import { useGameContext } from "../../GameContext";
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

export default CurrentWord;
