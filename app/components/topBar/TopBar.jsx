// components/TopBar.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Settings from './Settings';
import TotalScore from './TotalScore';

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