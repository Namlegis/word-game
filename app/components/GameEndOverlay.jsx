// components/GameEndOverlay.jsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useGameContext } from "../GameContext";
import generateTileData from "./board/TileCreator";
import { router } from "expo-router";

const EndGameOverlay = () => {
    const {
        setIsPaused,
        setTotalScore,
        setRound,
        setSelectedTiles,
        setIsFirstWord,
        setIsGameEnd,
        setTileData,
        gridSize,
        totalScore,
        isGameEnd,
        restart,
    } = useGameContext();

    const handleRestart = () => {
        restart;
    };

    const handleMainMenu = () => {
        console.log("Main Menu clicked");
        router.replace("/");
    };

    if (!isGameEnd) return null;

    return (
        <View style={styles.overlay}>
            <Text style={styles.title}>Game Over!</Text>
            <Text style={styles.title}>Your Score was {totalScore}</Text>
            <TouchableOpacity style={styles.button} onPress={handleRestart}>
                <Text style={styles.buttonText}>Restart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleMainMenu}>
                <Text style={styles.buttonText}>Main Menu</Text>
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
        backgroundColor: "rgba(0, 0, 0, 0.9)",
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

export default EndGameOverlay;
