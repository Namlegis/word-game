import { Stack } from "expo-router";
import { GameProvider } from "./GameContext";

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
