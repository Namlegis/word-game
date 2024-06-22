import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import { GameProvider } from "./GameContext";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
                <View className="flex-1 items-center justify-center bg-white">
                    <Text className="text-3xl">Word Game!</Text>
                    <StatusBar style="auto" />
                    <Link href="/game-screen" style={{ color: "blue" }}>
                        Let's Play
                    </Link>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
});
