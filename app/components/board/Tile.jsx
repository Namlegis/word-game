// components/board/Tile.js
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
            : modifier === "TL"
            ? styles.tripleLetterTile
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
            : modifier === "TL"
            ? styles.tripleLetterText
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

export default Tile;
