// components/Board.js
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useGameContext } from "../../GameContext.jsx";
import Tile from "./Tile";
import { lightTheme, darkTheme, createStyles } from "../../styles/styles.jsx";

const Board = () => {
    const {
        tileData,
        gridSize,
        selectedTiles,
        setSelectedTiles,
        isFirstWord,
        setIsFirstWord,
        handleDelete,
        isDarkMode
    } = useGameContext();

    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);


    // FOR POSSIBLE OTHER MODES -----
    useEffect(() => {
        console.log("tileData useEffect");
    }, [tileData]);
    // ------------------------------

    const isAdjacentTile = (index) => {
        if (selectedTiles.length === 0) return true;
        const lastSelectedTile = selectedTiles[selectedTiles.length - 1];
        const lastRow = Math.floor(lastSelectedTile / gridSize);
        const lastCol = lastSelectedTile % gridSize;
        const currentRow = Math.floor(index / gridSize);
        const currentCol = index % gridSize;
        return (
            Math.abs(currentRow - lastRow) <= 1 &&
            Math.abs(currentCol - lastCol) <= 1
        );
    };

    const handleTilePress = (index) => {
        if (
            !selectedTiles.includes(index) &&
            (isAdjacentTile(index) || isFirstWord)
        ) {
            setSelectedTiles((prev) => [...prev, index]);
            if (isFirstWord) setIsFirstWord(false);
        }
        if (index === selectedTiles[selectedTiles.length - 1]) {
            handleDelete();
        }
    };

    return (
        <View style={styles.board}>
            {tileData.map((tile, index) => (
                <Tile
                    key={index}
                    letter={tile.letter}
                    value={tile.value}
                    modifier={tile.modifier}
                    onPress={() => handleTilePress(index)}
                    isSelected={selectedTiles.includes(index)}
                />
            ))}
        </View>
    );
};

export default Board;
