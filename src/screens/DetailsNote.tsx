import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function DetailsNote() {

  const navigation = useNavigation();

  return (
    <View className="bg-zinc-950 flex-1 p-4">
      <View className="flex-row gap-5 items-center mb-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name='arrow-left' color={'white'} size={22} />
        </TouchableOpacity>

        <Text className="font-bold text-white text-lg  leading-none flex-1">Create app using Expo</Text>

        <TouchableOpacity>
          <Feather name='edit-2' color={'white'} size={20} />
        </TouchableOpacity>
      </View>

      <Text className="text-zinc-400 pr-5 mb-10 text-justify">
        Hi, let's have a meeting tomorrow to discuss the project.
        Hi, let's have a meeting tomorrow to discuss the project.
        I've been reviewing the project details an the project details an the proje
        Hi, let's have a meeting tomorrow to discuss the project.
        I've been reviewing the project details an the project details an the proje
        I've been reviewing the project details an the project details an the project details an the project details and have some
      </Text>

      <View>
          <Image className="w-24 h-24 rounded-sm" source={{ uri: "https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png" }} />
      </View>
    </View>
  );
}