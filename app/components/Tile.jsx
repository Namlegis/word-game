// components/Tile.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Tile = ({ letter = 'A', value = 1, modifier = null, onPress }) => {
  // Determine the tile and text styles based on the modifier
  const tileStyle = [styles.tile];
  const textStyle = [styles.letter];

  if (modifier === 'double letter') {
    tileStyle.push(styles.doubleLetterTile);
    textStyle.push(styles.doubleLetterText);
  } else if (modifier === 'double word') {
    tileStyle.push(styles.doubleWordTile);
    textStyle.push(styles.doubleWordText);
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
    width: 50, // Adjust as needed
    height: 50, // Adjust as needed
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
  modifier: {
    fontSize: 10,
    color: 'red',
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
});

export default Tile;
