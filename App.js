import React from 'react';
import {
  StatusBar,
  useColorScheme,
  View
} from 'react-native';
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import MainScreen from './src/screens/MainScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <MainScreen />
      </Provider>
    </View>
  );
};

export default App;
