import {NavigationContainer} from '@react-navigation/native';
import { Header } from '../components/Header';
import { StatusBar, View } from 'react-native';
import { AppRoutesTabs } from './app.stack.routes';

export function Routes(){
  return(
    <View className="flex-1 bg-zinc-950">
      <NavigationContainer>
      <StatusBar
        barStyle='dark-content'
        translucent={false}
        backgroundColor="#18181b"
      />
      <Header />
      <AppRoutesTabs/>
    </NavigationContainer>
    </View>
  )
}

