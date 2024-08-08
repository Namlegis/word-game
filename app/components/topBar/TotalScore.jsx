import React from "react";
import { View, Text } from "react-native";
import { lightTheme, darkTheme, createStyles } from "../../styles/styles";
import { useGameContext } from "../../GameContext";

const TotalScore = ({ score }) => {
    const { isDarkMode } = useGameContext();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);
    return (
        <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total Score:</Text>
            <Text style={styles.totalScore}>{score}</Text>
        </View>
    );
};

export default TotalScore;
