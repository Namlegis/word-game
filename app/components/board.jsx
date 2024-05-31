// components/Board.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Tile from './Tile';

const Board = () => {
  const [selectedTiles, setSelectedTiles] = useState([]);

  const handleTilePress = (index) => {
    setSelectedTiles([...selectedTiles, index]);
    console.log(`Tile ${index} pressed`);
  };

  const tilesData = [
    { letter: 'A', value: 1 },
    { letter: 'B', value: 3 },
    { letter: 'C', value: 3, modifier: 'double letter' },
    { letter: 'D', value: 2 },
    { letter: 'E', value: 1 },
    { letter: 'F', value: 4 },
    { letter: 'G', value: 2 },
    { letter: 'H', value: 4 },
    { letter: 'I', value: 1 },
    { letter: 'J', value: 8, modifier: 'double word' },
    { letter: 'K', value: 5 },
    { letter: 'L', value: 1 },
    { letter: 'M', value: 3 },
    { letter: 'N', value: 1 },
    { letter: 'O', value: 1 },
    { letter: 'P', value: 3 },
  ];

  const renderTiles = () => {
    return tilesData.map((tile, index) => (
      <Tile
        key={index}
        letter={tile.letter}
        value={tile.value}
        modifier={tile.modifier}
        onPress={() => handleTilePress(index)}
      />
    ));
  };

  return (
    <View style={styles.board}>
      {renderTiles()}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 250, 
    height: 200, 
  },
});

export default Board;
