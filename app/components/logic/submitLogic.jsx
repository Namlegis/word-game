// components/logic/submitLogic.jsx

import { useEffect, useMemo } from "react";
import { useGameContext } from "../../GameContext";
import { saveScore } from "../../../scoreStorage";
import generateReplacementTiles from "../board/TileCreator";
import wordList from "../../../wordList.json";

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

    const wordSet = useMemo(() => {
        return new Set(wordList.map((item) => item.word.toLowerCase()));
    }, []);

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
        const newTiles = generateReplacementTiles(selectedTiles.length);
        selectedTiles.forEach((index, i) => {
            newTileData[index] = newTiles[i];
        });
        setTileData(newTileData);
    };

    const handleSubmit = () => {
        if (wordSet.has(currentWord.toLowerCase())) {
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
        } else {
            setIsWordInvalid(true);
            setSelectedTiles([]);
            setTimeout(() => {
                setIsWordInvalid(false);
            }, 500);
        }
    };

    return { handleSubmit };
};

export default submitLogic;
