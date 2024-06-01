// components/Board.js
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Tile from "./Tile";

const Board = ({ onTilePress }) => {
    // Selected Tiles -> visual representation
    const [selectedTiles, setSelectedTiles] = useState([]);

    const handleTilePress = (index, letter, value, modifier) => {
        // Check if the tile is adjacent to the last selected tile (if any)
        const isAdjacent = isAdjacentTile(index, selectedTiles);

        if (selectedTiles.length === 0 || isAdjacent) {
            setSelectedTiles([...selectedTiles, index]);
            onTilePress(index, letter, value, modifier);
            console.log(`Tile ${index} pressed`);
        }
    };

    const isAdjacentTile = (index, selectedTiles) => {
        // Logic to check if the tile is adjacent to the last selected tile
        // ...
        return true
    };

    // TODO: GetTiles component to populate the tilesData
    const tilesData = [
        { letter: "A", value: 1 },
        { letter: "B", value: 3 },
        { letter: "C", value: 3, modifier: "double letter" },
        { letter: "D", value: 2 },
        { letter: "E", value: 1 },
        { letter: "F", value: 4 },
        { letter: "G", value: 2 },
        { letter: "H", value: 4 },
        { letter: "I", value: 1 },
        { letter: "J", value: 8, modifier: "double word" },
        { letter: "K", value: 5 },
        { letter: "L", value: 1 },
        { letter: "M", value: 3 },
        { letter: "N", value: 1 },
        { letter: "O", value: 1 },
        { letter: "P", value: 3 },
    ];

    const renderTiles = () => {
        return tilesData.map((tile, index) => (
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

    return <View style={styles.board}>{renderTiles()}</View>;
};

const styles = StyleSheet.create({
    board: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: 250,
        height: 200,
    },
});

export default Board;
