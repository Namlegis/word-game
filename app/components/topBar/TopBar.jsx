// components/TopBar.js
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TotalScore from "./TotalScore";
import { useGameContext } from "../../GameContext";

const TopBar = () => {
    const { totalScore } = useGameContext();
    const {isPaused, setIsPaused} = useGameContext();
    return (
        <View style={styles.container}>
            {/* Render the TotalScore component */}
            <TotalScore score={totalScore} />

            {/* Render the onPause component */}
            <TouchableOpacity onPress={()=> setIsPaused(!isPaused)}>
                <Ionicons name="pause" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: "#f0f0f0",
    },
});

export default TopBar;
