import React from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native';

import AppStack from './src/navigation/AppStack';
function App() {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}

export default App;
