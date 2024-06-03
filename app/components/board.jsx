import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Tile from "./Tile";

const generateTileData = (gridSize) => {
    const tileData = [];
    const totalTiles = gridSize * gridSize;

    // Define the distribution of tiles
    const distribution = {
        A: { count: 9, value: 1 },
        B: { count: 2, value: 3 },
        C: { count: 2, value: 3, modifier: "double letter" },
        D: { count: 4, value: 2 },
        E: { count: 12, value: 1 },
        F: { count: 9, value: 1 },
        G: { count: 2, value: 3 },
        H: { count: 2, value: 3, modifier: "double letter" },
        I: { count: 4, value: 2 },
        J: { count: 3, value: 1 },
        K: { count: 3, value: 1 },
        L: { count: 2, value: 3 },
        M: { count: 2, value: 3, modifier: "double letter" },
        N: { count: 4, value: 2 },
        O: { count: 12, value: 1 },
        P: { count: 9, value: 1 },
        Qu: { count: 2, value: 3 },
        R: { count: 2, value: 3, modifier: "double letter" },
        S: { count: 12, value: 2 },
        T: { count: 12, value: 1 },
        U: { count: 9, value: 1 },
        V: { count: 2, value: 3 },
        W: { count: 2, value: 3, modifier: "double letter" },
        X: { count: 2, value: 2 },
        Y: { count: 2, value: 1 },
        Z: { count: 2, value: 1 },        
    };

    // Flatten the distribution into an array of tiles
    const tiles = Object.entries(distribution).flatMap(
        ([letter, { count, value, modifier }]) =>
            Array(count).fill({ letter, value, modifier })
    );

    // Shuffle the tiles randomly
    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }

    // Take the required number of tiles based on the grid size
    tileData.push(...tiles.slice(0, totalTiles));

    return tileData;
};

const Board = ({ onTilePress, gridSize, isFirstWord }) => {
    // Selected tile -> Index , Letter , Value , Mod
    const [selectedTiles, setSelectedTiles] = useState([]);
    const [tileData, setTileData] = useState(generateTileData(gridSize));

    const handleTilePress = (index, letter, value, modifier) => {
        const isAdjacent = isAdjacentTile(index, selectedTiles);
        if (isAdjacent || isFirstWord) {
            setSelectedTiles([...selectedTiles, index]);
            onTilePress(index, letter, value, modifier);
            console.log(`Tile ${index} pressed`);
        }
    };

    const isAdjacentTile = (index, selectedTiles) => {
        const lastSelectedTile = selectedTiles[selectedTiles.length - 1];
        const lastSelectedRow = Math.floor(lastSelectedTile / gridSize);
        const lastSelectedCol = lastSelectedTile % gridSize;
        const currentRow = Math.floor(index / gridSize);
        const currentCol = index % gridSize;

        const rowDiff = Math.abs(lastSelectedRow - currentRow);
        const colDiff = Math.abs(lastSelectedCol - currentCol);

        const isAdjacent =
            rowDiff <= 1 && colDiff <= 1 && (rowDiff !== 0 || colDiff !== 0);

        return isAdjacent;
    };

    const renderTiles = () => {
        return tileData.map((tile, index) => (
            <Tile
                key={index}
                letter={tile.letter}
                value={tile.value}
                modifier={tile.modifier}
                onPress={() =>
                    handleTilePress(
                        index,
                        tile.letter,
                        tile.value,
                        tile.modifier
                    )
                }
            />
        ));
    };

    return (
        <View style={styles.boardContainer}>
            <View style={[styles.board, { width: gridSize * 54 }]}>
                {renderTiles()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    boardContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    board: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
});

export default Board;
