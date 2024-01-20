import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { CardNote } from '../components/CardNote';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigatorRoutesProps } from '../routes/app.stack.routes';



export function Home() {
  const {navigate} = useNavigation<StackNavigatorRoutesProps>()
  
  return (
    <>
      <View className="flex-1 bg-zinc-950 p-5">
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity className="h-10 bg-zinc-900 w-[48%] rounded-md justify-center items-center border border-yellow-500">
            <Text className="text-yellow-400 font-medium">Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity className="h-10 bg-zinc-900 w-[48%] rounded-md justify-center items-center">
            <Text className="text-zinc-600 font-medium">Favoritos</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={['1', '2', '3', '4', '5', '6']}
          renderItem={({ item }) => <CardNote onPress={() => navigate('detailsNotes')}/>}
        />
      </View>

      <View className="h-20 bg-zinc-950 px-5 justify-center items-center flex-row border-t border-zinc-900">
        <TouchableOpacity
        className="h-12 w-12 mr-5 bg-zinc-800 rounded-md items-center justify-center"
        onPress={() => navigate('CreateMemorie')}
        >
          <Feather name='plus' size={24} color={'rgb(234, 179, 8)'} />
        </TouchableOpacity>

        <View className="flex-1">
          <TextInput className="bg-zinc-800 placeholder:text-base h-12 rounded pl-3 text-lg placeholder:text-gray-500" placeholder='Pesquisar por palavras chaves'/>
        </View>
      </View>
    </>
  );
}