// components/SubmitButton.js
import React from "react";
import { Button } from "react-native";
import { useGameContext } from "../../GameContext";
import axios from "axios";
import generateTileData from "../board/TileCreator";

const SubmitButton = () => {
    const {
        currentWord,
        currentScore,
        setTotalScore,
        setSelectedTiles,
        setIsFirstWord,
        setIsWordInvalid,
        round,
        setRound,
        tileData,
        setTileData,
        gridSize,
        selectedTiles,
        setIsGameEnd,
        isGameEnd
    } = useGameContext();

    const replaceUsedTiles = () => {
        const newTileData = [...tileData];
        const newTiles = generateTileData(selectedTiles.length);
        selectedTiles.forEach((index, i) => {
            newTileData[index] = newTiles[i];
        });
        setTileData(newTileData);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${currentWord}`
            );
            if (response.data && response.data.length > 0) {
                setTotalScore((prev) => prev + currentScore);
                setSelectedTiles([]);
                setIsFirstWord(true);
                if (round < 7) {
                    setRound((prev) => prev + 1);
                    replaceUsedTiles();
                    console.log("TileData set");
                } else {
                    // end game
                    setIsGameEnd(true);
                    console.log({isGameEnd})
                    console.log("Game Over!");
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setIsWordInvalid(true);
                setTimeout(() => {
                    setIsWordInvalid(false);
                }, 1000);
            } else {
                console.error("Error:", error);
            }
        }
    };

    return <Button title="Submit" onPress={handleSubmit} />;
};

export default SubmitButton;
