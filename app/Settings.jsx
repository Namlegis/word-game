import React from "react";
import { View, Text, Switch } from "react-native";
import { useGameContext } from "./GameContext";
import { lightTheme, darkTheme, createStyles } from "./styles/styles";
import { resetScore } from "../scoreStorage";

const SettingsPage = () => {
    const { toggleTheme, isDarkMode, toggleSubmitSide, submitIsLeft } =
        useGameContext();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleTheme}
                value={isDarkMode}
            />
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSubmitSide}
                value={submitIsLeft}
            />
            <TouchableOpacity
                    style={styles.button}
                    onPress={resetScore}
                >
                    <Text style={styles.buttonText}>Reset Scores</Text>
                </TouchableOpacity>
        </View>
    );
};

export default SettingsPage;
