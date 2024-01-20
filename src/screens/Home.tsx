import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { CardNote } from '../components/CardNote';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigatorRoutesProps } from '../routes/app.stack.routes';

export function Home() {
  const [memorie, setMemorie] = useState([
    {
      id: 1,
      title: 'Título da memória',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing. Orci eu lobortis elementum nibh tellus. Quis enim lobortis scelerisque fermentum dui faucibus',
      url: 'https://th.bing.com/th/id/R.8a43e144d69919a48d8cb585bd9bd17f?rik=3oa0TLYvX663qw&riu=http%3a%2f%2fempurraozin.com.br%2fwp-content%2fuploads%2f2020%2f02%2fimg08.jpg&ehk=dQvW%2fFZdoSaPXnn99PCJ0yecPHr1uG0%2bZQcjwzxiim4%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 2,
      title: 'Título da memória',
      description: 'In mollis nunc sed id semper. Vel risus commodo viverra maecenas accumsan. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Ac turpis egestas sed tempus urna. Hendrerit dolor magna eget est lorem ipsum dolor. Sed sed risus pretium quam.',
      url: ''
    },
  ]);

  const { navigate } = useNavigation<StackNavigatorRoutesProps>()

  return (
    <>
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
          renderItem={({ item }) => <CardNote data={item} onPress={() => navigate('detailsNotes', {data: item})} />}
        />
      </View>

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