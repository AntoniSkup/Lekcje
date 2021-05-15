import * as React from 'react';

import { View,  } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Navigation from './navigation/index'



function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar/>
      <Navigation/> 
    </View>
    
  );
}

export default App;