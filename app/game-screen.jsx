// app/game-screen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { useGameContext } from './GameContext.jsx';
import Board from './components/board/board.jsx';
import CurrentWord from './components/current/CurrentWord.jsx';
import CurrentScore from './components/current/CurrentScore.jsx';
import SubmitButton from './components/buttons/SubmitButton.jsx';
import DeleteButton from './components/buttons/DeleteButton.jsx';
import TopBar from './components/topBar/TopBar.jsx';

const GameScreen = () => {
    const { totalScore } = useGameContext();

    return (
        <View style={styles.container}>
            <TopBar totalScore={totalScore} />
            <View style={styles.content}>
                <CurrentWord />
                <CurrentScore />
                <Board />
                <View style={styles.buttonContainer}>
                    <SubmitButton />
                    <DeleteButton />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
});

export default GameScreen;