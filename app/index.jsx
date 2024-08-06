import { StatusBar } from "expo-status-bar";
import {
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useGameContext } from "./GameContext.jsx";
import { lightTheme, darkTheme, createStyles } from "./styles/styles.jsx"


export default function App() {
    const { isGameEnd, restart, isDarkMode } = useGameContext();

    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    const router = useRouter();

    const handleResumeGame = () => {
        router.push("/game-screen");
    };

    const handleNewGame = () => {
        restart();
        router.push("/game-screen");
    };

    const handleSettings = () => {
        router.push("/Settings");
    };
    const handleInstructions = () => {
        router.push("/Instructions");
    };

    const handleHighScores = () => {
        router.push("/HighScores");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Word Game</Text>
                {!isGameEnd && (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleResumeGame}
                    >
                        <Text style={styles.buttonText}>Resume Game</Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity style={styles.button} onPress={handleNewGame}>
                    <Text style={styles.buttonText}>New Game</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSettings}
                >
                    <Text style={styles.buttonText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.instructionsButton]}
                    onPress={handleInstructions}
                >
                    <Text style={styles.buttonText}>Instructions</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleHighScores}
                >
                    <Text style={styles.buttonText}>High Scores</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}