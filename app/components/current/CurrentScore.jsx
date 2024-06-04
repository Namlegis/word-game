import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrentScore = ({ currentScore, currentMods }) => {
    return (
      <View style={styles.container}>
        {/* Display current modifiers */}
        <Text style={styles.word}>{currentMods}</Text>
         {/* Display current score */}
        <Text style={styles.word}>{currentScore}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', // Arrange items in a row
      justifyContent: 'space-between', // Add space between items
      alignItems: 'center', // Center items vertically
      marginBottom: 10,
      paddingHorizontal: 20, // Add horizontal padding
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  export default CurrentScore;