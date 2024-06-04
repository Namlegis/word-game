import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TotalScore = ({ score }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total Score:</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TotalScore;