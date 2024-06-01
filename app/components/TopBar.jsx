// components/TopBar.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TotalScore from './TotalScore';
import Settings from './Settings';

const TopBar = ({ totalScore }) => {
  return (
    <View style={styles.container}>
      {/* Render the TotalScore component */}
      <TotalScore score={totalScore} />
      
      {/* Render the Settings component */}
      <Settings />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
  },
});

export default TopBar;