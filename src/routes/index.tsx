import {NavigationContainer} from '@react-navigation/native';
import { Header } from '../components/Header';
import { StatusBar } from 'react-native';
import { AppRoutesTabs } from './app.stack.routes';

export function Routes(){
  return(
    <NavigationContainer>
      <StatusBar
        barStyle='dark-content'
        translucent={false}
        backgroundColor="#18181b"
      />
      <Header />
      <AppRoutesTabs/>
    </NavigationContainer>
  )
}

