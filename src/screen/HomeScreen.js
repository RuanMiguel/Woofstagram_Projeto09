import React, { useEffect, useState } from 'react';
import { ScrollView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Heading from '../components/Heading';
import WoofCard from '../components/WoofCard';
import WoofPost from '../components/WoofPost';

export default function HomeScreen({ navigation }) {

  const [pet, setPet] = useState(null);

  useEffect(() => {
    const carregar = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) setPet(JSON.parse(user));
    };
    carregar();
  }, []);


  const sair = async () => {
    await AsyncStorage.removeItem('user');

    navigation.getParent()?.getParent()?.reset({
      index: 0,
      routes: [{ name: 'SignIn' }],
    });
  };

  return (
    <ScrollView style={{ padding: 15 }}>

      <Heading>Meu Pet</Heading>

      {pet && (
        <WoofCard
          name={pet.nomePet}
          avatar="https://images.unsplash.com/photo-1517849845537-4d257902454a"
        />
      )}

      <Heading>New Woof Posts</Heading>

      <WoofPost
        title="Passeio no parque"
        description="Hoje foi um dia incrível!"
        image="https://images.unsplash.com/photo-1507149833265-60c372daea22"
      />

      <WoofPost
        title="Hora da soneca"
        description="Depois de brincar muito 😴"
        image="https://images.unsplash.com/photo-1517849845537-4d257902454a"
      />

      <Button 
        title="Sair" 
        onPress={() => navigation.navigate('SignIn')}
      />

    </ScrollView>
  );
}