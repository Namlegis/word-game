import AsyncStorage from '@react-native-async-storage/async-storage';

const SCORES_KEY = '@high_scores';

export const saveScore = async (score) => {
  try {
    const existingScoresJSON = await AsyncStorage.getItem(SCORES_KEY);
    let scores = existingScoresJSON ? JSON.parse(existingScoresJSON) : [];
    
    // Make sure the new score is part of the top 10
    scores.push(score);
    scores.sort((a, b) => b - a);
    scores = scores.slice(0, 10); 

    await AsyncStorage.setItem(SCORES_KEY, JSON.stringify(scores));
  } catch (error) {
    console.error('Error saving score:', error);
  }
};

export const getHighScores = async () => {
  try {
    const scoresJSON = await AsyncStorage.getItem(SCORES_KEY);
    return scoresJSON ? JSON.parse(scoresJSON) : [];
  } catch (error) {
    console.error('Error getting high scores:', error);
    return [];
  }
};