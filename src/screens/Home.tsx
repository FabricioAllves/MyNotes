import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { CardNote } from '../components/CardNote';
import { Feather } from '@expo/vector-icons';

export function Home() {
  return (
    <>
      <View className="flex-1 bg-zinc-950 p-5">
        <FlatList
          data={['1', '2']}
          renderItem={({ item }) => <CardNote />}
        />
      </View>

      <View className="h-20 bg-zinc-950 px-5 justify-center flex-row">
        <TouchableOpacity className="h-12 w-12 mr-5 bg-zinc-800 rounded-md items-center justify-center">
          <Feather name='plus' size={24} color={'#9ca3af'}/>
        </TouchableOpacity>

        <View className="flex-1">
          <TextInput className="bg-zinc-800 placeholder:text-base h-12 rounded pl-3 text-lg placeholder:text-gray-500" placeholder='Pesquisar por palavras chaves'>
         
          </TextInput>
        </View>
      </View>
    </>
  );
}