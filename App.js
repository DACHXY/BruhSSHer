import { StatusBar } from 'expo-status-bar'
import store from './Src/Store/store'
import { Provider } from 'react-redux'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import Tabs from './Src/Navigations/Tabs'
import { Colors } from './Src/Global/Colors'

const MyTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.mainColor,
    background: Colors.mainColor
  },
};

export default function App() {
  return (
    <Provider store={store} >
        <NavigationContainer theme={MyTheme}>
          <Tabs />
        </NavigationContainer>
        <StatusBar />
    </Provider>
  );
}