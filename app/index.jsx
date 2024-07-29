import { StatusBar } from "expo-status-bar";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { useGameContext } from "./GameContext.jsx";
import generateTileData from "./components/board/TileCreator";

export default function App() {
    const {
        isGameEnd,
        restart,
    } = useGameContext();
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
                    style={styles.button}
                    onPress={handleHighScores}
                >
                    <Text style={styles.buttonText}>High Scores</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 30,
    },
    button: {
        backgroundColor: "#4CAF50",
        padding: 15,
        marginVertical: 10,
        width: 200,
        alignItems: "center",
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
    },
});
