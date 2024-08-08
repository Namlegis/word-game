import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useGameContext } from "../../GameContext";
import { lightTheme, darkTheme, createStyles } from "../../styles/styles";

const DeleteButton = () => {
    const { handleDelete, isDarkMode } = useGameContext();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    return (
        <TouchableOpacity
            style={[styles.button, styles.gameButton, styles.deleteButton]}
            onPress={handleDelete}
        >
            <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
    );
};

export default DeleteButton;
