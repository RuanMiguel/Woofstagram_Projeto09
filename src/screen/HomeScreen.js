import React from 'react';
import { ScrollView, View, Button } from 'react-native';
import Heading from '../components/Heading';
import WoofCard from '../components/WoofCard';
import WoofPost from '../components/WoofPost';

const dados = {
  woofs: [
    { nome: 'Rex', avatar: 'https://images.unsplash.com/photo-1517849845537-4d257902454a' },
    { nome: 'Luna', avatar: 'https://images.unsplash.com/photo-1507149833265-60c372daea22' },
  ],
  posts: [
    {
      title: 'Passeio no parque',
      description: 'Hoje foi um dia incrível!',
      image: 'https://images.unsplash.com/photo-1507149833265-60c372daea22',
    },
    {
      title: 'Hora da soneca',
      description: 'Depois de brincar muito 😴',
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
    },
  ],
};

export default function HomeScreen({ sair }) {
  return (
    <ScrollView style={{ padding: 15 }}>
      
      <Heading>Trending Woofs</Heading>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dados.woofs.map((item, index) => (
          <WoofCard key={index} name={item.nome} avatar={item.avatar} />
        ))}
      </ScrollView>

      <Heading>New Woof Posts</Heading>

      {dados.posts.map((post, index) => (
        <WoofPost
          key={index}
          title={post.title}
          description={post.description}
          image={post.image}
        />
      ))}

      <Button title="Sair" onPress={() => navigation.navigate('SignIn')} />

    </ScrollView>
  );
}