import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import colors from 'tailwindcss/colors';
import { Memorie } from '../dto/Memmorie';

type RouteParamsProps = {
  data: Memorie
}

export function DetailsNote() {
  const route = useRoute();
  const { data } = route.params as RouteParamsProps
  const navigation = useNavigation();

  return (
    <View className="bg-zinc-950 flex-1 p-4">
      <View className="flex-row gap-5 items-center mb-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name='arrow-left' color={colors.yellow[500]} size={22} />
        </TouchableOpacity>

        <Text className="font-bold text-yellow-500 text-lg  leading-none flex-1">{data.title}</Text>

        <TouchableOpacity>
          <Feather name='edit-2' color={colors.yellow[500]} size={20} />
        </TouchableOpacity>
      </View>

      <Text className="text-zinc-400 pr-5 mb-10 text-justify">
        {data.description}
      </Text>

      {
        data.url &&
        <View>
          <Image className="w-24 h-24 rounded-sm" source={{ uri: data.url }} />
        </View>
      }
    </View>
  );
}