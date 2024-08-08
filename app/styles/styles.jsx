import { StyleSheet, Dimensions } from "react-native";

// Get window width
const windowWidth = Dimensions.get("window").width;

// Create variable for board width, based on window width (This works well for phones in vertical orientation)
const boardWidth = windowWidth * 0.9;

// Define color themes
export const lightTheme = {
    backgroundColor: "#DFF6EC",
    textColor: "#000000",
    primaryColor: "#279061",
    secondaryColor: "#348AA7",
    tertiaryColor: "#FF5733",
    tileColor: "rgba(191,237,217, 0.2)",
    tileBorderColor: "#BDBDBD",
    doubleLetterColor: "#B1DAE7",
    doubleLetterTextColor: "black",
    tripleLetterColor: "#CBC3E3",
    tripleLetterTextColor: "black",
    doubleWordColor: "#FF9785",
    doubleWordTextColor: "black",
    selectedTileColor: "#FFD700",
    buttonTextColor: "#FFFFFF",
    completedRoundColor: "#3498db",
    currentRoundColor: "#279061",
    futureRoundColor: "#bdc3c7",
    instructionsButton: "#301934",
    barColor: "rgba(39,144,97,0.5)",
};

export const darkTheme = {
    backgroundColor: "#1E2E2A",
    textColor: "#FFFFFF",
    primaryColor: "#348AA7",
    secondaryColor: "#5DD39E",
    tertiaryColor: "#B33B24",
    tileColor: "rgba(52,138,167, 0.2)",
    tileBorderColor: "#A5A5A5",
    doubleLetterColor: "#6E9CAF",
    doubleLetterTextColor: "#FFFFFF",
    tripleLetterColor: "#7E6B9E",
    tripleLetterTextColor: "#FFFFFF",
    doubleWordColor: "#B35E4E",
    doubleWordTextColor: "#FFFFFF",
    selectedTileColor: "#B8860B",
    buttonTextColor: "#FFFFFF",
    completedRoundColor: "#3498db",
    currentRoundColor: "#2ecc71",
    futureRoundColor: "#7F8C8D",
    instructionsButton: "#7E6B9E",
    barColor: "rgba(39,144,97,0.5)",
};

export const createStyles = (theme) =>
    StyleSheet.create({
        // General Styles
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.backgroundColor,
        },
        title: {
            fontSize: 32,
            fontWeight: "bold",
            margin: 10,
            color: theme.textColor,
        },
        button: {
            backgroundColor: theme.primaryColor,
            padding: 15,
            marginVertical: 10,
            width: windowWidth * 0.5,
            alignItems: "center",
            borderRadius: 5,
        },
        buttonText: {
            color: theme.buttonTextColor,
            fontSize: 18,
        },
        instructionsButton: {
            backgroundColor: theme.instructionsButton,
        },

        // Game Screen Style
        gameContainer: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
        },
        gameContent: {
            flex: 1,
            alignItems: "center",
            justifyContent: "space-evenly",
        },
        board: {
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignContent: "space-evenly",
            width: boardWidth,
            aspectRatio: 1,
        },
        boardBar: {
            width: boardWidth,
            height: 5,
            backgroundColor: theme.barColor,
            borderRadius: 5,
        },
        gameButtonContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: boardWidth,
        },
        gameButton: {
            maxWidth: windowWidth * 0.4,
            backgroundColor: theme.primaryColor,
        },
        deleteButton: {
            backgroundColor: theme.tertiaryColor,
        },

        // Top Bar Styles
        topBar: {
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: theme.backgroundColor,
        },
        totalContainer: {
            flexDirection: "row",
            alignItems: "center",
        },
        totalLabel: {
            fontSize: 16,
            fontWeight: "bold",
            marginRight: 8,
            color: theme.textColor,
        },
        totalScore: {
            fontSize: 18,
            fontWeight: "bold",
            color: theme.textColor,
        },

        // Tile Styles
        tile: {
            width: boardWidth / 6 - 6,
            height: boardWidth / 6 - 6,
            borderWidth: 0,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
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
        tripleLetterText: {
            color: theme.tripleLetterTextColor,
        },
        tripleLetterTile: {
            backgroundColor: theme.tripleLetterColor,
        },
        selectedTile: {
            backgroundColor: theme.selectedTileColor,
        },

        // Game Information Styles
        currentContainer: {
            marginVertical: 10,
            width: windowWidth * 0.9,
            alignItems: "center",
        },
        gameInfoContainer: {
            justifyContent: "space-between",
            alignItems: "center",
        },
        score: {
            fontSize: 18,
            color: theme.textColor,
        },
        roundContainer: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
        },
        word: {
            fontSize: 24,
            fontWeight: "bold",
            color: theme.textColor,
            margin: 10,
        },

        // Round Counters
        counter: {
            width: 20,
            height: 20,
            borderRadius: 10,
            marginHorizontal: 5,
        },
        completedCounter: {
            backgroundColor: theme.completedRoundColor,
        },
        currentCounter: {
            backgroundColor: theme.currentRoundColor,
        },
        notCompCounter: {
            backgroundColor: theme.futureRoundColor,
        },

        // Instructions Styles
        instructionsPageContainer: {
            flexGrow: 1,
            alignItems: "center",
            backgroundColor: theme.backgroundColor,
            paddingVertical: 10,
        },
        instructionsContainer: {
            margin: 20,
        },
        sectionTitle: {
            fontSize: 24,
            fontWeight: "bold",
            color: theme.textColor,
        },
        instructionsText: {
            fontSize: 18,
            color: theme.textColor,
            paddingVertical: 5,
        },
        blue: {
            color: darkTheme.doubleLetterColor,
        },
        purple: {
            color: darkTheme.tripleLetterColor,
        },
        red: {
            color: darkTheme.doubleWordColor,
        },

        // Settings Styles
        settingsContainer: {
            flex: 1,
            alignItems: "center",
            backgroundColor: theme.backgroundColor,
            paddingVertical: 10
        },
        settingsContentContainer: {
            justifyContent: "center",
            width: '100%',
            paddingHorizontal: 20,
        },
        settingCont: {
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: 10,
        },
        settingText: {
            color: theme.textColor,
            fontSize: 24,
        },

        // Overlay Styles
        overlay: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(200, 100, 100, 0.95)",
            justifyContent: "center",
            alignItems: "center",
        },
    });
