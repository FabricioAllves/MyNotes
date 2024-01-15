import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { CardNote } from '../components/CardNote';

export function Home() {
  return (
    <View className="flex-1 bg-zinc-950 p-5">
      <FlatList
      data={['1','2']}
      renderItem={({item}) => <CardNote />}
      />
    </View>
  );
}