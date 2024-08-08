import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useGameContext } from "../../GameContext";
import { router } from "expo-router";
import { lightTheme, darkTheme, createStyles } from "../../styles/styles"

const PauseOverlay = () => {
    const { isPaused, setIsPaused, restart, isDarkMode } = useGameContext();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    const handleResume = () => setIsPaused(false);

    const handleRestart = () => restart();

    const handleSettings = () => {
        router.push("/Settings");
    };

    const handleInstructions = () => {
        router.push("/Instructions");
    };

    const handleMainMenu = () => {
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
            <TouchableOpacity
                style={[styles.button, styles.instructionsButton]}
                onPress={handleInstructions}
            >
                <Text style={styles.buttonText}>Instructions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleMainMenu}>
                <Text style={styles.buttonText}>Save & Exit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PauseOverlay;
