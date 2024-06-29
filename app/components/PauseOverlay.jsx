// components/PauseOverlay.jsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useGameContext } from "../GameContext";
import { router } from "expo-router";

const PauseOverlay = () => {
    const {
        isPaused,
        setIsPaused,
        setTotalScore,
        setRound,
        setSelectedTiles,
        setIsFirstWord,
    } = useGameContext();

    const handleResume = () => setIsPaused(false);

    const handleRestart = () => {
        setIsPaused(false);
        setTotalScore(0);
        setRound(1);
        setSelectedTiles([]);
        setIsFirstWord(true);
    };

    const handleSettings = () => {
        // TODO: Implement settings logic
        console.log("Settings clicked");
    };

    const handleMainMenu = () => {
        // TODO: Implement main menu navigation
        console.log("Main Menu clicked");
        setIsPaused(false);
        router.replace("/");
    };

    if (!isPaused) return null;

    return (
        <View style={styles.overlay}>
            <Text style={styles.title}>Paused</Text>
            <TouchableOpacity style={styles.button} onPress={handleResume}>
                <Text style={styles.buttonText}>Resume</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleRestart}>
                <Text style={styles.buttonText}>Restart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSettings}>
                <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleMainMenu}>
                <Text style={styles.buttonText}>Save & Exit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "white",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#4CAF50",
        padding: 10,
        marginVertical: 10,
        width: 200,
        alignItems: "center",
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
    },
});

export default PauseOverlay;
