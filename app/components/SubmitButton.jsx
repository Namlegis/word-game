import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SubmitButton = ({ onPress, isWordInvalid }) => {
  const buttonStyle = [
    styles.button,
    isWordInvalid && styles.invalidButton,
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  invalidButton: {
    backgroundColor: 'red',
  },
});

export default SubmitButton;