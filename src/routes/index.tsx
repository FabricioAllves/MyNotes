import {NavigationContainer} from '@react-navigation/native';
import { AppRoutes } from './app.topTab.routes';
import { Header } from '../components/Header';
import { StatusBar } from 'react-native';

export function Routes(){
  return(
    <NavigationContainer>
      <StatusBar
        barStyle='dark-content'
        translucent={false}
        backgroundColor="#18181b"
      />
      <Header />
      <AppRoutes/>
    </NavigationContainer>
  )
}

