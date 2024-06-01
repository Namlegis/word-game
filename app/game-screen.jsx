import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Board from "./components/board";
import CurrentWord from "./components/CurrentWord";
import CurrentScore from "./components/CurrentScore";
import SubmitButton from "./components/SubmitButton";
import DeleteButton from "./components/DeleteButton";
import TopBar from "./components/TopBar";

import axios from "axios";

const GameScreen = () => {
    // Define state variables for current word, modifiers, and score
    const [currentWord, setCurrentWord] = useState("");
    const [currentMods, setCurrentMods] = useState("");
    const [currentScore, setCurrentScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [selectedTiles, setSelectedTiles] = useState([]);
    const [isWordInvalid, setIsWordInvalid] = useState(false);

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
            setCurrentWord((prevWord) => prevWord.slice(0, -1));

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
            {/* Render the TopBar component */}
            <TopBar totalScore={totalScore} />
            {/* Display current word */}
            <CurrentWord word={currentWord} />
            {/* Display current score and modifiers */}
            <CurrentScore
                currentScore={currentScore}
                currentMods={currentMods}
            />
            {/* Render the game board */}
            <Board onTilePress={handleTilePress} />
            {/* Render the submit button */}
            <SubmitButton
                onPress={handleSubmit}
                isWordInvalid={isWordInvalid}
            />
            <DeleteButton onPress={handleDelete} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default GameScreen;
