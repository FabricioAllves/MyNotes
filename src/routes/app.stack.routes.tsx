import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsNote } from '../screens/DetailsNote';
import { AppRoutes } from './app.topTab.routes';
import { CreateMemorie } from '../screens/CreateMemorie';
import { Memorie } from '../dto/Memmorie';


type Stack = {
  detailsNotes: { data: Memorie},
  Home: undefined,
  CreateMemorie: undefined
}

export type StackNavigatorRoutesProps = NativeStackNavigationProp<Stack>

const { Navigator, Screen } = createNativeStackNavigator();
export function AppRoutesTabs() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>

      <Screen
        name="Home"
        component={AppRoutes}
      />

      <Screen
        name="detailsNotes"
        component={DetailsNote}
      />

      <Screen
        name="CreateMemorie"
        component={CreateMemorie}
      />
    </Navigator>
  )
}