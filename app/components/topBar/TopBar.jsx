// components/TopBar.js
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TotalScore from "./TotalScore";
import { useGameContext } from "../../GameContext";
import { lightTheme, darkTheme, createStyles } from "../../styles/styles";

const TopBar = () => {
    const { isPaused, setIsPaused, totalScore, isDarkMode } = useGameContext();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    return (
        <View style={styles.topBar}>
            <TotalScore score={totalScore} />
            <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
                <Ionicons name="pause" size={36} color={theme.textColor} />
            </TouchableOpacity>
        </View>
    );
};

export default TopBar;
