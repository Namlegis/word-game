// components/Board.js
import React from "react";
import { View } from "react-native";
import { useGameContext } from "../../GameContext.jsx";
import Tile from "./Tile";
import { lightTheme, darkTheme, createStyles } from "../../styles/styles.jsx";
import { tilePressLogic } from "../logic/tilePressLogic.jsx";

const Board = () => {
    const { tileData, selectedTiles, isDarkMode } = useGameContext();
    const {handleTilePress} = tilePressLogic() 

    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    return (
        <View style={styles.board}>
            {tileData.map((tile, index) => (
                <Tile
                    key={index}
                    letter={tile.letter}
                    value={tile.value}
                    modifier={tile.modifier}
                    onPress={() => handleTilePress(index)}
                    isSelected={selectedTiles.includes(index)}
                />
            ))}
        </View>
    );
};

export default Board;
