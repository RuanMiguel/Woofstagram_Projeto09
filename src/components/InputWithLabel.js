import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function InputWithLabel({
  label,
  placeholder,
  value,
  onChangeText,
  onBlur,
  secureTextEntry,
  error
}) {
  return (
    <View style={styles.container}>
      
      {/* Label */}
      <Text style={styles.label}>{label}</Text>

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
      />

      {/* Erro */}
      {error && <Text style={styles.error}>{error}</Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fafafa',
  },
  error: {
    color: 'red',
    marginTop: 5,
    fontSize: 12,
  },
});