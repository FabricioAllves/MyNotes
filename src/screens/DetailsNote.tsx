import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image, LogBox } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import colors from 'tailwindcss/colors';
import { Memorie } from '../dto/Memmorie';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

type RouteParamsProps = {
  data: Memorie
}


export function DetailsNote() {
  const route = useRoute();
  const { data } = route.params as RouteParamsProps
  const navigation = useNavigation();


  const currentDate = format(data.date, 'd MMM, yy', {
    locale: ptBR,
  });


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

      <Text className="text-zinc-400 pr-5 mb-10 text-justify">
        {currentDate}
      </Text>

      {/* {
        data && data.url &&
        <View>
          <Image className="w-24 h-24 rounded-sm" source={{ uri: data.url[0].uri }} />
        </View>
      } */}

      <View className="w-[100%] flex-row items-center gap-5">
        {data.url.map((photo, index) => (
          <View className="bg-slate-400 items-center w-[100px] h-[100px] rounded-md" key={index}>

            <Image className="bg-slate-200 w-[100px] h-[100px] rounded-md" source={{ uri: data.url[index].uri }} />

            {/* <TouchableOpacity className="bg-yellow-500 w-[23px] h-[23px] rounded-full absolute top-1 right-1 items-center" onPress={() => handleRemovePhotoDeleted(photo)}>
              <Text>x</Text>
            </TouchableOpacity> */}
          </View>
        ))}

      </View>
    </View>
  );
}