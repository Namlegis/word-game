import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HighScoresPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>High Scores</Text>
      <Text>High scores will be displayed here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HighScoresPage;