// GameContext.js
import React, { createContext, useState, useContext, useMemo  } from "react";
import generateTileData from "./components/board/TileCreator.jsx";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    // const [currentWord, setCurrentWord] = useState("");
    // const [currentMods, setCurrentMods] = useState("");
    // const [currentScore, setCurrentScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [gridSize, setGridSize] = useState(6);
    const [isWordInvalid, setIsWordInvalid] = useState(false);
    const [isFirstWord, setIsFirstWord] = useState(true);
    const [tileData, setTileData] = useState(generateTileData(6));
    const [selectedTiles, setSelectedTiles] = useState([]);

    // Derive currentWord, currentScore, and currentMods from selectedTiles
    const currentWord = useMemo(
        () => selectedTiles.map((index) => tileData[index].letter).join(""),
        [selectedTiles, tileData]
    );

    const currentScore = useMemo(
        () =>
            selectedTiles.reduce(
                (sum, index) => sum + tileData[index].value,
                0
            ),
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
