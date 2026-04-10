import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Heading({ children }) {
  return <Text style={styles.heading}>{children}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
});