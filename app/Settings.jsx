import React from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
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
            <View style={styles.boardBar}></View>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.boardBar}></View>
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
                        onValueChange={toggleSubmitSide}
                        value={submitIsRight}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={resetScore}>
                <Text style={styles.buttonText}>Reset Scores</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsPage;
