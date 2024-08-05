import React from "react";
import { View, Text, Switch, TouchableOpacity, FlatList } from "react-native";
import { useGameContext } from "./GameContext";
import { lightTheme, darkTheme, createStyles } from "./styles/styles";
import { resetScore } from "../scoreStorage";

const SettingsPage = () => {
    const { toggleTheme, isDarkMode, toggleSubmitSide, submitIsRight } =
        useGameContext();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    return (
        <View style={styles.settingsContainer}>
            <Text style={styles.settingsTitle}>Settings</Text>
            <View style={styles.settingsContentContainer}>
                <View style={styles.settingCont}>
                    <Text style={styles.settingText}>Dark Mode</Text>
                    <Switch
                        trackColor={{
                            false: lightTheme.primaryColor,
                            true: darkTheme.primaryColor,
                        }}
                        thumbColor={
                            isDarkMode
                                ? darkTheme.secondaryColor
                                : lightTheme.secondaryColor
                        }
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleTheme}
                        value={isDarkMode}
                    />
                </View>

                <View style={styles.settingCont}>
                    <Text style={styles.settingText}>Submit Side</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSubmitSide}
                        value={submitIsRight}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={resetScore}>
                    <Text style={styles.buttonText}>Reset Scores</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SettingsPage;
