// components/Tile.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Tile component represents a single tile in the word game
// Props:
// - letter: the letter to display on the tile (default: 'abc')
// - value: the number value of the letter (default: 0)
// - modifier: special modifier for the tile (e.g., 'double letter' or 'double word')
// - onPress: function to call when the tile is pressed

const Tile = ({ letter = 'abc', value = 0, modifier = null, onPress }) => {
  // Initialize tile and text styles
  const tileStyle = [styles.tile];
  const textStyle = [styles.letter];

  // Apply specific styles based on the modifier
  if (modifier === 'double letter') {
    tileStyle.push(styles.doubleLetterTile);
    textStyle.push(styles.doubleLetterText);
  } else if (modifier === 'double word') {
    tileStyle.push(styles.doubleWordTile);
    textStyle.push(styles.doubleWordText);
  }

  return (
    // TouchableOpacity allows the tile to be pressed
    <TouchableOpacity style={tileStyle} onPress={onPress}>
      {/* Display the letter */}
      <Text style={textStyle}>{letter}</Text>
      {/* Display the value */}
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
};

// Styles for the Tile component
const styles = StyleSheet.create({
  tile: {
    width: 50, // Width of the tile
    height: 50, // Height of the tile
    borderWidth: 1, // Border width around the tile
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    margin: 2, // Margin around the tile
  },
  letter: {
    fontSize: 20, // Font size for the letter
    fontWeight: 'bold', // Bold text for the letter
  },
  value: {
    fontSize: 12, // Font size for the value
  },
  doubleLetterTile: {
    backgroundColor: 'lightblue', // Background color for double letter tiles
  },
  doubleLetterText: {
    color: 'blue', // Text color for double letter tiles
  },
  doubleWordTile: {
    backgroundColor: 'lightgreen', // Background color for double word tiles
  },
  doubleWordText: {
    color: 'green', // Text color for double word tiles
  },
});

export default Tile;
