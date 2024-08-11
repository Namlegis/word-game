import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { getHighScores } from "../scoreStorage";
import { useGameContext } from "./GameContext";
import { lightTheme, darkTheme, createStyles } from "./styles/styles";

const HighScoresPage = () => {
    const [highScores, setHighScores] = useState([]);
    const { isDarkMode } = useGameContext();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    useEffect(() => {
        const loadHighScores = async () => {
            const scores = await getHighScores();
            setHighScores(scores);
        };
        loadHighScores();
    }, []);

    const renderScoreItem = ({ item, index }) => (
        <View style={styles.scoreItem}>
            <Text style={styles.rank}>{index + 1}</Text>
            <Text style={styles.score}>{item}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
          <View style={styles.boardBar}></View>
          <Text style={styles.title}>High Scores</Text>
          <View style={styles.boardBar}></View>
          <FlatList
              data={highScores}
              renderItem={renderScoreItem}
              keyExtractor={(item, index) => index.toString()}
          />
        </View>
    );
};

export default HighScoresPage;
