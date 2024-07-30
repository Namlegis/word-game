// components/Tile.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { lightTheme, darkTheme, createStyles } from "../../styles/styles.jsx";
import { useGameContext } from "../../GameContext.jsx";

const Tile = ({ letter, value, modifier, onPress, isSelected }) => {
    const { isDarkMode } = useGameContext();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    const tileStyle = StyleSheet.compose(
        styles.tile,
        modifier === "DL"
            ? styles.doubleLetterTile
            : modifier === "DW"
            ? styles.doubleWordTile
            : isSelected
            ? styles.selectedTile
            : {}
    );

    const letterStyle = StyleSheet.compose(
        styles.letter,
        modifier === "DL"
            ? styles.doubleLetterText
            : modifier === "DW"
            ? styles.doubleWordText
            : {}
    );

    if (isSelected) {
        tileStyle.push(styles.selectedTile);
    }

    return (
        <TouchableOpacity style={tileStyle} onPress={onPress}>
            <Text style={letterStyle}>{letter}</Text>
            <Text style={styles.value}>{value}</Text>
        </TouchableOpacity>
    );
};

// const styles = StyleSheet.create({
//   tile: {
//     width: 50,
//     height: 50,
//     borderWidth: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 2,
//   },
//   letter: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   value: {
//     fontSize: 12,
//   },
//   doubleLetterTile: {
//     backgroundColor: 'lightblue',
//   },
//   doubleLetterText: {
//     color: 'blue',
//   },
//   doubleWordTile: {
//     backgroundColor: 'lightgreen',
//   },
//   doubleWordText: {
//     color: 'green',
//   },
//   selectedTile: {
//     backgroundColor: 'yellow', // or any color to indicate selection
//   },
// });

export default Tile;
