import React from 'react';
import { View, Text } from 'react-native';

export function Header() {
  return (
    <View className='h-24 w-full bg-zinc-900 flex-row'>
      <Text className='mt-5 ml-5 text-4xl font-bold color-white'>
        MyNotes
      </Text>
    </View>
  );
}