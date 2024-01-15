import React from 'react';
import { View, Text } from 'react-native';
import { CardNote } from '../components/CardNote';

export function Home() {
  return (
    <View className="flex-1 bg-zinc-950 p-5">
      <CardNote />
    </View>
  );
}