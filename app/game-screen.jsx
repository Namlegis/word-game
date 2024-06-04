import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Board from "./components/board/board";
import CurrentWord from "./components/current/CurrentWord";
import CurrentScore from "./components/current/CurrentScore";
import SubmitButton from "./components/buttons/SubmitButton";
import DeleteButton from "./components/buttons/DeleteButton";
import TopBar from "./components/topBar/TopBar";

import axios from "axios";

const GameScreen = () => {
    // Define state variables for current word, modifiers, and score
    const [currentWord, setCurrentWord] = useState("");
    const [currentMods, setCurrentMods] = useState("");
    const [currentScore, setCurrentScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [selectedTiles, setSelectedTiles] = useState([]);
    const [isWordInvalid, setIsWordInvalid] = useState(false);
    const [isFirstWord, setIsFirstWord] = useState(true);

    const handleTilePress = (index, letter, value, modifier) => {
        // Update the current word
        setCurrentWord((prevWord) => prevWord + letter);

        // Update the selected tiles array
        setSelectedTiles((prevTiles) => [
            ...prevTiles,
            { index, letter, value, modifier },
        ]);

        // Update the current score
        let score = value;
        if (modifier === "double letter") {
            score *= 2;
        } else if (modifier === "double word") {
            // Double the entire word score (implemented later)
        }
        setCurrentScore((prevScore) => prevScore + score);

        // Update the current modifiers
        if (modifier) {
            setCurrentMods((prevMods) => prevMods + modifier + " ");
        }
        setIsFirstWord(false);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${currentWord}`
            );
            if (response.data && response.data.length > 0) {
                // Word is valid
                console.log("Valid word:", currentWord);
                setTotalScore(
                    (prevTotalScore) => prevTotalScore + currentScore
                );
                // Clear the current word, modifiers, and score
                setCurrentWord("");
                setCurrentMods("");
                setCurrentScore(0);
                setSelectedTiles([]);
                setIsFirstWord(true);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                // Word is invalid
                console.log("Invalid word:", currentWord);
                setIsWordInvalid(true);
                setTimeout(() => {
                    setIsWordInvalid(false);
                }, 1000);
            } else {
                // Other error occurred while making the API request
                console.error("Error:", error);
                // Handle other errors appropriately
            }
        }
    };

    const handleDelete = () => {
        if (selectedTiles.length > 0) {
            const deletedTile = selectedTiles[selectedTiles.length - 1];

            // Update the current word
            setCurrentWord((prevWord) => {
                const updatedWord = prevWord.slice(0, -1);
                if (updatedWord.length === 0) {
                    setIsFirstWord(true);
                }
                return updatedWord;
            });

            // Update the selected tiles array
            setSelectedTiles((prevTiles) => prevTiles.slice(0, -1));

            // Update the current score
            let scoreToSubtract = deletedTile.value;
            if (deletedTile.modifier === "double letter") {
                scoreToSubtract *= 2;
            }
            setCurrentScore((prevScore) => prevScore - scoreToSubtract);

            // Update the current modifiers
            if (deletedTile.modifier) {
                setCurrentMods((prevMods) => {
                    const modifiersArray = prevMods.trim().split(" ");
                    const updatedModifiers = modifiersArray
                        .slice(0, -2)
                        .join(" ");
                    return updatedModifiers;
                });
            }
        }
    };

    return (
        <View style={styles.container}>
            <TopBar style={styles.topBar} totalScore={totalScore} />
            <View style={styles.content}>
                {/* Display current word */}
                <CurrentWord style={styles.currentWord} word={currentWord} />
                {/* Display current score and modifiers */}
                <CurrentScore
                    currentScore={currentScore}
                    currentMods={currentMods}
                />
                {/* Render the game board */}
                <Board
                    onTilePress={handleTilePress}
                    gridSize={5}
                    isFirstWord={isFirstWord}
                />
                {/* Render the submit button */}
                <SubmitButton
                    onPress={handleSubmit}
                    isWordInvalid={isWordInvalid}
                />
                <DeleteButton onPress={handleDelete} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        alignItems: "center",
    },
    content: {
        maxWidth: 400,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    // topBar: {
    //     position: "absolute",
    //     top: 0,
    // },
    // currentWord: {
    //     height: 800, // Adjust the height as needed
    //     justifyContent: "center",
    //     alignItems: "center",
    // },
});

export default GameScreen;
