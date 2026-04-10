import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Title from './Title';

export default function WoofPost({ image, title, description }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.content}>
        <Title>{title}</Title>
        <Text numberOfLines={2} style={styles.desc}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  content: {
    flex: 2,
    marginLeft: 10,
  },
  desc: {
    color: '#666',
    marginTop: 5,
  },
});