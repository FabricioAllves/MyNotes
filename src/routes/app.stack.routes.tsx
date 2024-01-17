import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsNote } from '../screens/DetailsNote';
import { Home } from '../screens/Home';
import { AppRoutes } from './app.topTab.routes';


type Stack = {
  detailsNotes: undefined,
  Home: undefined,
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
    </Navigator>
  )
}