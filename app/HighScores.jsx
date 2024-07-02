// HighScores.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getHighScores } from '../scoreStorage';

const HighScoresPage = () => {
  const [highScores, setHighScores] = useState([]);

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
      <Text style={styles.title}>High Scores</Text>
      <FlatList
        data={highScores}
        renderItem={renderScoreItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scoreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rank: {
    fontWeight: 'bold',
  },
  score: {
    fontSize: 16,
  },
});

export default HighScoresPage;