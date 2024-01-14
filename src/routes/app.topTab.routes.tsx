import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from 'tailwindcss/colors'
import { Home } from '../screens/Home';
import { ToDo } from '../screens/ToDo';

const { Navigator, Screen } = createMaterialTopTabNavigator();

export function AppRoutes() {
  return (
  <Navigator
  screenOptions={{
    tabBarStyle: { backgroundColor: colors.zinc[900]},
    tabBarActiveTintColor: colors.yellow[500],
    tabBarInactiveTintColor: colors.zinc[500],
    tabBarIndicatorStyle: {backgroundColor: colors.yellow[500], borderRadius: 5},
    tabBarLabelStyle: {
      fontWeight: 'bold' 
    }
  }}
  >
    <Screen name='Memories' component={Home} />
    <Screen name='to do' component={ToDo} />
  </Navigator>
)
}