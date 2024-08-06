import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";
import { GameProvider } from "./GameContext"; // Adjust the path if necessary

const RootLayout = () => {
    return (
        <GameProvider>
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{ title: "Home", headerShown: false }}
                />
                <Stack.Screen
                    name="game-screen"
                    options={{ title: "Word Game", headerShown: false }}
                />
            </Stack>
        </GameProvider>
    );
};

export default RootLayout;
