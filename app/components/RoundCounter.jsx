import React from "react";
import { View } from "react-native";
import { useGameContext } from "../GameContext.jsx";
import { lightTheme, darkTheme, createStyles } from "../styles/styles.jsx";

const RoundCounter = () => {
    const { round, isDarkMode } = useGameContext();
    const theme = isDarkMode ? darkTheme : lightTheme;
    const styles = createStyles(theme);

    const renderCounters = () => {
        const counters = [];
        for (let i = 1; i <= 7; i++) {
            let counterStyle;
            if (i < round) {
                counterStyle = [styles.counter, styles.completedCounter];
            } else if (i === round) {
                counterStyle = [styles.counter, styles.currentCounter];
            } else {
                counterStyle = [styles.counter, styles.notCompCounter];
            }
            counters.push(<View key={i} style={counterStyle} />);
        }
        return counters;
    };

    return <View style={styles.roundContainer}>{renderCounters()}</View>;
};

export default RoundCounter;
