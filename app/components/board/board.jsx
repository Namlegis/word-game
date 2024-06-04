import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Tile from "./Tile";
import generateTileData from "./TileCreator.jsx";


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
