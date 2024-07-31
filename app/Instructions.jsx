// Instructions.jsx
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { lightTheme, darkTheme, createStyles } from "./styles/styles";
import { useGameContext } from "./GameContext";

const Instructions = () => {
    const { isDarkMode } = useGameContext();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    return (
        <ScrollView contentContainerStyle={styles.instructionsPageContainer}>
            <Text style={styles.title}>How to Play!</Text>

            <View style={styles.instructionsContainer}>
                <Text style={styles.sectionTitle}>Objective</Text>
                <Text style={styles.instructionsText}>
                    Create 7 words to get the highest possible score.
                </Text>

                <Text style={styles.sectionTitle}>Game Rules</Text>
                <Text style={styles.instructionsText}>
                    1. Select letters by tapping tiles.
                </Text>
                <Text style={styles.instructionsText}>
                    2. Letters must be adjacent (including diagonally).
                </Text>
                <Text style={styles.instructionsText}>
                    3. Each letter has an individual point value based on the letter and a random bonus between 0 and 6 points.
                </Text>
                <Text style={styles.instructionsText}>
                    4. Colored tiles have special bonuses:                      
                </Text>
                <Text style={[styles.instructionsText, styles.blue]}>     Blue = Double Letter (DL)</Text>
                <Text style={[styles.instructionsText, styles.purple]}>     Purple = Triple Letter (TL)</Text>
                <Text style={[styles.instructionsText, styles.green]}>     Green = Double Word (DW)</Text>
                <Text style={styles.instructionsText}>
                    5. Words longer than 4 letters get additional bonuses.
                </Text>
                <Text style={styles.instructionsText}>
                    6. Randomly generated tiles replace used letters.
                </Text>
                <Text style={styles.instructionsText}>
                    7. You have 7 words per game.
                </Text>
            </View>
        </ScrollView>
    );
};

export default Instructions;
