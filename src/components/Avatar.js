import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Avatar({ source, size = 60 }) {
  return (
    <Image
      source={{ uri: source }}
      style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    marginBottom: 5,
  },
});