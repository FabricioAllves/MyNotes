import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import {Feather} from '@expo/vector-icons';

type ButtonProps = TouchableOpacityProps &{

}


export function CardNote({...rest}: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} className='h-40 w-full mb-4 rounded border border-zinc-800 p-2' {...rest}>
      <View className='flex-row justify-between mb-2'>
        <Text className='font-bold text-white text-lg  leading-none'>
          Create app using Expo
        </Text>

        <Text className='text-white text-xs align-middle'>
          01, Jan, 2024
        </Text>
      </View>

      <View className="flex-row items-center">
        <View className="w-12 flex-1">
          <Text className="text-zinc-400 line-clamp-3 pr-5">
            Hi, let's have a meeting tomorrow to discuss the project.
            I've been reviewing the project details an the project details an the project details an the project details and have some
          </Text>
        </View>

        <View className="w-16 h-16">
          <Image className="w-16 h-16 rounded-sm" source={{ uri: "https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png" }} />
          </View>
      </View>

      <View className='flex-row justify-between mt-4'>
        <Text className='text-zinc-600 text-xs align-middle'>
          #Js, Javascript, expo
        </Text>

        <TouchableOpacity className="h-8 w-24 bg-white rounded justify-center items-center flex-row">
          <Feather name='award'/>
          <Text className="align-middle justify-center leading-4 font-medium text-sm">
            Favorito
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}