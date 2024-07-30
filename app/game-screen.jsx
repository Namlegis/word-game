// app/game-screen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { useGameContext } from "./GameContext.jsx";
import Board from "./components/board/board.jsx";
import CurrentWord from "./components/current/CurrentWord.jsx";
import CurrentScore from "./components/current/CurrentScore.jsx";
import SubmitButton from "./components/buttons/SubmitButton.jsx";
import DeleteButton from "./components/buttons/DeleteButton.jsx";
import TopBar from "./components/topBar/TopBar.jsx";
import RoundCounter from "./components/RoundCounter.jsx";
import PauseOverlay from "./components/topBar/PauseOverlay.jsx";
import EndGameOverlay from "./components/GameEndOverlay.jsx";
import InvalidWordOverlay from "./components/InvalidWordOverlay.jsx";
import { lightTheme, darkTheme, createStyles } from "./styles/styles.jsx";

const GameScreen = () => {
    const { totalScore, isDarkMode, submitIsLeft } = useGameContext();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    return (
        <View style={styles.gameContainer}>
            <TopBar totalScore={totalScore} />
            <View style={styles.gameContent}>
                <RoundCounter />
                <CurrentWord />
                <CurrentScore />
                <Board />
                <View style={styles.gameButtonContainer}>
                    {submitIsLeft ? (
                        <>
                            <SubmitButton />
                            <DeleteButton />
                        </>
                    ) : (
                        <>
                            <DeleteButton />
                            <SubmitButton />
                        </>
                    )}
                </View>
            </View>
            <PauseOverlay />
            <EndGameOverlay />
            <InvalidWordOverlay />
        </View>
    );
};

export default GameScreen;
