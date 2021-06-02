import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AppNavigation from './app/navigation/AppNavigation';
import Provider from './app/redux/Provider';
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
        <Provider>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
