import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import { useNavigation } from '@react-navigation/native';
import { useNoteStore } from '../store/notes.store';

export function CreateMemorie() {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const navigation = useNavigation();
  const store = useNoteStore((state) => state.addNotes)

  const handleConfirmNewMemorie = () => {
    if (title === '' || description === '') {
      return
    }
    const currentDate = new Date();

    store({
      title,
      description,
      date: currentDate
    })

    setTitle('')
    setDescription('')
    navigation.goBack()
  }

  return (
    <>
      <TouchableWithoutFeedback>
        <View className="bg-zinc-950 flex-1 p-4 pb-0">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="flex-row items-center">
              <TouchableOpacity onPress={() => navigation.goBack()} className="w-10 h-10 mr-5 items-center justify-center">
                <Feather name='arrow-left' color={colors.yellow[500]} size={22} />
              </TouchableOpacity>

              <TextInput
                className="bg-zinc-900 flex-1 h-[50px] rounded-md  placeholder:text-gray-500 px-5 text-gray-500"
                placeholder='Título da memória'
                value={title}
                onChangeText={setTitle}
                
              />
            </View>

            <TextInput
              className="bg-zinc-900 h-[40%] rounded-md my-7 p-5 placeholder:text-gray-500 text-gray-500"
              multiline
              numberOfLines={8}
              textAlignVertical='top'
              placeholder='Descrição da memória'
              value={description}
              onChangeText={setDescription}
            />

            <TouchableOpacity className="h-28 w-28 border-zinc-800 rounded-sm border-dashed border-2 justify-center items-center">
              <Feather name='camera' color={'#28282c'} size={30} />
            </TouchableOpacity>
          </ScrollView>

        </View>
      </TouchableWithoutFeedback>

      <View className='h-24 w-[100%] bg-zinc-950 justify-center'>
        <TouchableOpacity
          className="h-16 bg-yellow-500 rounded-md mx-4 justify-center items-center flex-row gap-2"
          onPress={handleConfirmNewMemorie}
        >
          <Feather name='coffee' color={'#28282c'} size={22} />
          <Text className="font-bold text-base">Salvar memória</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}