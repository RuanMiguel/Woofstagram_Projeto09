import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import Title from './Title';

export default function WoofCard({ name, avatar }) {
  return (
    <View style={styles.card}>
      <Avatar source={avatar} size={70} />
      <Title>{name}</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    marginRight: 10,
    alignItems: 'center',
  },
});