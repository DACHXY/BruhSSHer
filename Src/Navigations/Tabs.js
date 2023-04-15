import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Pages/HomePage';
import NavigationBar from '../Components/NavigationBar';

const Tab = createBottomTabNavigator();

const screenOptions = {
    headerShown: false
}


function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBar={props => <NavigationBar {...props} />}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Add" component={HomePage} />
        <Tab.Screen name="Settings" component={HomePage} />
        <Tab.Screen name="Server" component={HomePage} />
    </Tab.Navigator>
  );
}

export default Tabs;