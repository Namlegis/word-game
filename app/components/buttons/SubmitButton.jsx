// components/SubmitButton.js
import React, {useEffect} from "react";
import { Button } from "react-native";
import { useGameContext } from "../../GameContext";
import axios from "axios";
import generateTileData from "../board/TileCreator";
import { saveScore } from "../../../scoreStorage";

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
        isGameEnd,
        totalScore,
        isWordInvalid,
    } = useGameContext();

    const replaceUsedTiles = () => {
        const newTileData = [...tileData];
        const newTiles = generateTileData(selectedTiles.length);
        selectedTiles.forEach((index, i) => {
            newTileData[index] = newTiles[i];
        });
        setTileData(newTileData);
    };

    useEffect(() => {
        const saveGameScore = async () => {
            if (isGameEnd) {
                await saveScore(totalScore);
                console.log("Game Over!");
            }
        };
        saveGameScore();
    }, [isGameEnd]);

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
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setIsWordInvalid(true);
                setTimeout(() => {
                    setIsWordInvalid(false);
                }, 500);
            } else {
                console.error("Error:", error);
            }
        }
    };

    return <Button title="Submit" onPress={handleSubmit} />;
};

export default SubmitButton;
