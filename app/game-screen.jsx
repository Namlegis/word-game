// app/game-screen.js
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGameContext } from "./GameContext.jsx";
import Board from "./components/board/board.jsx";
import CurrentWord from "./components/current/CurrentWord.jsx";
import CurrentScore from "./components/current/CurrentScore.jsx";
import SubmitButton from "./components/buttons/SubmitButton.jsx";
import DeleteButton from "./components/buttons/DeleteButton.jsx";
import TopBar from "./components/topBar/TopBar.jsx";
import RoundCounter from "./components/RoundCounter.jsx";
import PauseOverlay from "./components/overlays/PauseOverlay.jsx";
import EndGameOverlay from "./components/overlays/GameEndOverlay.jsx";
import InvalidWordOverlay from "./components/overlays/InvalidWordOverlay.jsx";
import { lightTheme, darkTheme, createStyles } from "./styles/styles.jsx";

const GameScreen = () => {
    const { isDarkMode, submitIsRight } = useGameContext();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    return (
        <SafeAreaView style={styles.gameContainer}>
            <TopBar />

            <View style={styles.gameContent}>
                <View style={styles.gameInfoContainer}>
                    <RoundCounter />
                    <CurrentWord />
                    <CurrentScore />
                </View>
                <View style={styles.boardBar}></View>
                <Board />
                <View style={styles.boardBar}></View>

                <View style={styles.gameButtonContainer}>
                    {submitIsRight ? (
                        <>
                            <DeleteButton />
                            <SubmitButton />
                        </>
                    ) : (
                        <>
                            <SubmitButton />
                            <DeleteButton />
                        </>
                    )}
                </View>
            </View>
            <PauseOverlay />
            <EndGameOverlay />
            <InvalidWordOverlay />
        </SafeAreaView>
    );
};

export default GameScreen;
