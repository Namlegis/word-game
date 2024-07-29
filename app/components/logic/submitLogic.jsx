// components/logic/submitLogic.jsx

import { useEffect } from "react";
import axios from "axios";
import { useGameContext } from "../../GameContext";
import { saveScore } from "../../../scoreStorage";
import generateTileData from "../board/TileCreator";

const submitLogic = () => {
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
        selectedTiles,
        setIsGameEnd,
        isGameEnd,
        totalScore,
    } = useGameContext();

    useEffect(() => {
        const saveGameScore = async () => {
            if (isGameEnd) {
                await saveScore(totalScore);
                console.log("Game Over!");
            }
        };
        saveGameScore();
    }, [isGameEnd]);

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

    return { handleSubmit };
};

export default submitLogic;