import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Memorie } from '../dto/Memmorie';
import colors from 'tailwindcss/colors';
import { format } from 'date-fns';
import {ptBR} from 'date-fns/locale/pt-BR';

type ButtonProps = TouchableOpacityProps & {
  data: Memorie
}

export function CardNote({ data, ...rest }: ButtonProps) {

  const currentDate = format(data.date, 'd MMM, yy', {
    locale: ptBR,
  });

  return (
    <TouchableOpacity activeOpacity={0.7} className='h-40 w-full mb-4 rounded border-b-2 border-zinc-800 p-2' {...rest}>
      <View className='flex-row justify-between mb-2'>
        <Text className='font-bold text-white text-lg  leading-none'>
          {data.title}
        </Text>

        <Text className='text-white text-xs align-middle'>
          {currentDate}
        </Text>
      </View>

      <View className="flex-row  flex-1">
        <View className="w-12 flex-1">
          <Text className="text-zinc-400 line-clamp-3 pr-5 mt-1">
            {data.description}
          </Text>
        </View>

        {
          data.url &&
          <View className="w-16 h-16">
            <Image className="w-16 h-16 rounded-sm" source={{ uri: data.url[0].uri ? data.url[0].uri : null }} resizeMode='cover' />
          </View>
        }
      </View>

      <View className='flex-row justify-between mt-3'>
        <Text className='text-zinc-600 text-xs align-middle'>
          #Js, Javascript, expo
        </Text>

        <TouchableOpacity className="h-8 w-10 bg-zinc-900  rounded justify-center items-center flex-row">
          <MaterialCommunityIcons name='cards-heart' color={colors.yellow[500]} size={22}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}