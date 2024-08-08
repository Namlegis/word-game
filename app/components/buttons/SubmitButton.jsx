import React from "react";
import { TouchableOpacity, Text } from "react-native";
import submitLogic from "../logic/submitLogic.jsx";
import { useGameContext } from "../../GameContext.jsx";
import { lightTheme, darkTheme, createStyles } from "../../styles/styles.jsx";

const SubmitButton = () => {
    const { isDarkMode } = useGameContext();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);
    const { handleSubmit } = submitLogic();

    return (
        <TouchableOpacity
            style={[styles.button, styles.gameButton]}
            onPress={handleSubmit}
        >
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
    );
};

export default SubmitButton;
