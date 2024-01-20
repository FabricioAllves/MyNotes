import React from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function CreateMemorie() {
  const navigation = useNavigation();

  return (
    <View className="bg-zinc-950 flex-1 p-4">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name='arrow-left' color={'rgb(234, 179, 8)'} size={22} />
      </TouchableOpacity>

      <TextInput
        className="bg-zinc-900 h-[50px] rounded-md mt-8 placeholder:text-gray-500 px-5 text-gray-500"
        placeholder='Título da memória'
      />

      <TextInput
        className="bg-zinc-900 h-[40%] rounded-md my-7 p-5 placeholder:text-gray-500 text-gray-500"
        multiline
        numberOfLines={8}
        textAlignVertical='top'
        placeholder='Descrição da memória'
      />

      <TouchableOpacity className="h-28 w-28 border-zinc-800 border-dashed border-2 justify-center items-center">
        <Feather name='camera' color={'#28282c'} size={30} />
      </TouchableOpacity>

      <TouchableOpacity
        className="h-16 bg-yellow-500 rounded-md absolute bottom-5 w-[100%] mx-4 justify-center items-center flex-row gap-2"
      >
        <Feather name='coffee' color={'#28282c'} size={22} />
        <Text className="font-bold text-base">Confirmar memória</Text>
      </TouchableOpacity>
    </View>
  );
}