// components/Board.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useGameContext } from '../../GameContext.jsx';
import Tile from './Tile';

const Board = () => {
    const {
        tileData,
        gridSize,
        selectedTiles,
        setSelectedTiles,
        isFirstWord,
        setIsFirstWord
    } = useGameContext();

    const isAdjacentTile = (index) => {
        if (selectedTiles.length === 0) return true;
        const lastSelectedTile = selectedTiles[selectedTiles.length - 1];
        const lastRow = Math.floor(lastSelectedTile / gridSize);
        const lastCol = lastSelectedTile % gridSize;
        const currentRow = Math.floor(index / gridSize);
        const currentCol = index % gridSize;
        return Math.abs(currentRow - lastRow) <= 1 && Math.abs(currentCol - lastCol) <= 1;
    };

    const handleTilePress = (index, letter, value, modifier) => {
        if (!selectedTiles.includes(index) && (isAdjacentTile(index) || isFirstWord)) {
            setSelectedTiles(prev => [...prev, index]);
            if (isFirstWord) setIsFirstWord(false);
        }
    };

    // Ensure gridSize is a number
    const numericGridSize = Number(gridSize) || 6;
    const boardWidth = numericGridSize * 54;

    return (
        <View style={[styles.board, { width: boardWidth }]}>
            {tileData.map((tile, index) => (
                <Tile
                    key={index}
                    letter={tile.letter}
                    value={tile.value}
                    modifier={tile.modifier}
                    onPress={() => handleTilePress(index, tile.letter, tile.value, tile.modifier)}
                    isSelected={selectedTiles.includes(index)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});

export default Board;