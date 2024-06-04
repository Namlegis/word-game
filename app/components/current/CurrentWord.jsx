import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrentWord = ({ word }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.word}>{word}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    word: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });

  export default CurrentWord;