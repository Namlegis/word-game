import { StyleSheet } from "react-native";

export const lightTheme = {
    backgroundColor: "#FFFFFF",
    textColor: "#000000",
    primaryColor: "#4CAF50",
    secondaryColor: "#FFA000",
    tileColor: "#E0E0E0",
    tileBorderColor: "#BDBDBD",
    doubleLetterColor: "lightblue",
    doubleLetterTextColor: "blue",
    doubleWordColor: "lightgreen",
    doubleWordTextColor: "green",
    selectedTileColor: "yellow",
    buttonTextColor: "#FFFFFF",
};

export const darkTheme = {
    backgroundColor: "#121212",
    textColor: "#FFFFFF",
    primaryColor: "#81C784",
    secondaryColor: "#FFD54F",
    tileColor: "#424242",
    tileBorderColor: "#616161",
    doubleLetterColor: "#1565C0",
    doubleLetterTextColor: "#90CAF9",
    doubleWordColor: "#2E7D32",
    doubleWordTextColor: "#A5D6A7",
    selectedTileColor: "#FBC02D",
    buttonTextColor: "#000000",
};

export const createStyles = (theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.backgroundColor,
        },
        title: {
            fontSize: 32,
            fontWeight: "bold",
            marginBottom: 30,
            color: theme.textColor,
        },
        button: {
            backgroundColor: theme.primaryColor,
            padding: 15,
            marginVertical: 10,
            width: 200,
            alignItems: "center",
            borderRadius: 5,
        },
        buttonText: {
            color: theme.buttonTextColor,
            fontSize: 18,
        },
        tile: {
            width: 50,
            height: 50,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 2,
            backgroundColor: theme.tileColor,
            borderColor: theme.tileBorderColor,
        },
        letter: {
            fontSize: 20,
            fontWeight: "bold",
            color: theme.textColor,
        },
        value: {
            fontSize: 12,
            color: theme.textColor,
        },
        overlay: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            justifyContent: "center",
            alignItems: "center",
        },
        gameContainer: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
        },
        gameContent: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
        },
        gameButtonContainer: {
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            marginTop: 20,
        },
        tile: {
            width: 50,
            height: 50,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 2,
            backgroundColor: theme.tileColor,
            borderColor: theme.tileBorderColor,
        },
        letter: {
            fontSize: 20,
            fontWeight: "bold",
            color: theme.textColor,
        },
        value: {
            fontSize: 12,
            color: theme.textColor,
        },
        doubleLetterTile: {
            backgroundColor: theme.doubleLetterColor,
        },
        doubleLetterText: {
            color: theme.doubleLetterTextColor,
        },
        doubleWordTile: {
            backgroundColor: theme.doubleWordColor,
        },
        doubleWordText: {
            color: theme.doubleWordTextColor,
        },
        selectedTile: {
            backgroundColor: theme.selectedTileColor,
        },
        currentScoreContainer: {
            marginBottom: 10,
        },
        score: {
            fontSize: 18,
            color: theme.textColor,
        },
        mods: {
            fontSize: 14,
            color: theme.textColor,
        },
    });
