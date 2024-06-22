// components/Tile.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Tile = ({ letter, value, modifier, onPress, isSelected }) => {
  const tileStyle = [styles.tile];
  const textStyle = [styles.letter];

  if (modifier === 'double letter') {
    tileStyle.push(styles.doubleLetterTile);
    textStyle.push(styles.doubleLetterText);
  } else if (modifier === 'double word') {
    tileStyle.push(styles.doubleWordTile);
    textStyle.push(styles.doubleWordText);
  }

  if (isSelected) {
    tileStyle.push(styles.selectedTile);
  }

  return (
    <TouchableOpacity style={tileStyle} onPress={onPress}>
      <Text style={textStyle}>{letter}</Text>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    width: 50,
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  letter: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 12,
  },
  doubleLetterTile: {
    backgroundColor: 'lightblue',
  },
  doubleLetterText: {
    color: 'blue',
  },
  doubleWordTile: {
    backgroundColor: 'lightgreen',
  },
  doubleWordText: {
    color: 'green',
  },
  selectedTile: {
    backgroundColor: 'yellow', // or any color to indicate selection
  },
});

export default Tile;