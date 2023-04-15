import { StatusBar } from 'expo-status-bar'
import store from './Src/Store/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './Src/Navigations/Tabs'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
      <StatusBar />
    </Provider>
  );
}