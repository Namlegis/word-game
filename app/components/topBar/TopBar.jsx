// components/TopBar.js
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TotalScore from "./TotalScore";
import { useGameContext } from "../../GameContext";
import { lightTheme, darkTheme, createStyles } from "../../styles/styles";


const TopBar = () => {
    const {isPaused, setIsPaused, totalScore, isDarkMode} = useGameContext();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    return (
        <View style={styles.topBar}>
            {/* Render the TotalScore component */}
            <TotalScore score={totalScore} />

            {/* Render the onPause component */}
            <TouchableOpacity onPress={()=> setIsPaused(!isPaused)}>
                <Ionicons name="pause" size={36} color="black" />
            </TouchableOpacity>
        </View>
    );
};

export default TopBar;
