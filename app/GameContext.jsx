// GameContext.js
import React, { createContext, useState, useContext, useMemo } from "react";

import generateTileData from "./components/board/TileCreator.jsx";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [totalScore, setTotalScore] = useState(0);
    const [gridSize, setGridSize] = useState(6);
    const [isWordInvalid, setIsWordInvalid] = useState(false);
    const [isFirstWord, setIsFirstWord] = useState(true);
    const [tileData, setTileData] = useState(generateTileData(gridSize));
    const [selectedTiles, setSelectedTiles] = useState([]);
    const [round, setRound] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const [isGameEnd, setIsGameEnd] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [submitIsRight, setSubmitIsRight] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const toggleSubmitSide = () => {
        setSubmitIsRight((prevSide) => !prevSide);
    };

    const handleDelete = () => {
        if (selectedTiles.length > 0) {
            setSelectedTiles((prev) => prev.slice(0, -1));
            if (selectedTiles.length === 1) {
                setIsFirstWord(true);
            }
        }
    };

    const restart = () => {
        setIsGameEnd(false);
        setTileData(generateTileData(gridSize));
        setIsPaused(false);
        setTotalScore(0);
        setRound(1);
        setSelectedTiles([]);
        setIsFirstWord(true);
    };

    // get currentWord, currentScore, and currentMods from selectedTiles
    // useMemo saves the outcome of the function until one of the datasets changes
    const currentWord = useMemo(
        () => selectedTiles.map((index) => tileData[index].letter).join(""),
        [selectedTiles, tileData]
    );

    const currentMods = useMemo(
        () =>
            selectedTiles
                .map((index) => tileData[index].modifier)
                .filter(Boolean)
                .join(" "),
        [selectedTiles, tileData]
    );

    const currentScore = useMemo(() => {
        let wordMultiplier = 1;
        let score = 0;

        selectedTiles.forEach((index) => {
            const tile = tileData[index];
            let letterScore = tile.value;

            // Apply letter modifiers
            if (tile.modifier === "DL") letterScore *= 2;
            if (tile.modifier === "TL") letterScore *= 3;

            // Add to the score
            score += letterScore;

            // Check for word multipliers
            if (tile.modifier === "DW") wordMultiplier += 2;
            if (tile.modifier === "TW") wordMultiplier += 3;
        });

        score *= wordMultiplier;

        // Add multiplier for longer words
        if (selectedTiles.length >= 5) {
            score += (selectedTiles.length - 4) * 15;
        }

        // Apply word multiplier
        return Math.floor(score);
    }, [selectedTiles, tileData]);

    return (
        <GameContext.Provider
            value={{
                currentWord,
                currentMods,
                currentScore,
                totalScore,
                setTotalScore,
                gridSize,
                setGridSize,
                isWordInvalid,
                setIsWordInvalid,
                isFirstWord,
                setIsFirstWord,
                tileData,
                setTileData,
                selectedTiles,
                setSelectedTiles,
                round,
                setRound,
                setIsPaused,
                isPaused,
                isGameEnd,
                setIsGameEnd,
                restart,
                handleDelete,
                isDarkMode,
                toggleTheme,
                submitIsRight,
                toggleSubmitSide,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export const useGameContext = () => {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error("useGameContext must be used within a GameProvider");
    }
    return context;
};
