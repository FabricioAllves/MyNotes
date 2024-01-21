import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { CardNote } from '../components/CardNote';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigatorRoutesProps } from '../routes/app.stack.routes';
import { useNoteStore } from '../store/notes.store';
import colors from 'tailwindcss/colors';

export function Home() {
  const memorie = useNoteStore((state) => state.notes)
  const { navigate } = useNavigation<StackNavigatorRoutesProps>()

  return (
    <>
     <TouchableWithoutFeedback>
     <View className="flex-1 bg-zinc-950 p-5 pb-0">
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity className="h-10 bg-zinc-900 w-[48%] rounded-md justify-center items-center border border-yellow-500">
            <Text className="text-yellow-400 font-medium">Todos</Text>
          </TouchableOpacity>

          <TouchableOpacity className="h-10 bg-zinc-900 w-[48%] rounded-md justify-center items-center">
            <Text className="text-zinc-600 font-medium">Favoritos</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={memorie}
          renderItem={({ item }) => <CardNote data={item} onPress={() => navigate('detailsNotes', { data: item })} />}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View className=" h-52 justify-center items-center">
              <Feather name='file-text' size={50} color={colors.zinc[800]} />
              <Text className="text-zinc-800 font-medium mt-5 text-lg">Você ainda não possui notas</Text>
            </View>
          )}
        />
      </View>
     </TouchableWithoutFeedback>

      <View className="h-20 bg-zinc-950 px-5 justify-center items-center flex-row  border-zinc-900">
        <TouchableOpacity
          className="h-12 w-12 mr-5 bg-yellow-500 rounded-md items-center justify-center"
          onPress={() => navigate('CreateMemorie')}
        >
          <Feather name='plus' size={24} color={'black'} />
        </TouchableOpacity>

        <View className="flex-1">
          <TextInput className="bg-zinc-800 placeholder:text-base h-12 rounded pl-3 text-lg placeholder:text-gray-500" placeholder='Pesquisar por palavras chaves' />
        </View>
      </View>
    </>
  );
}