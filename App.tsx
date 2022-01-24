import React from 'react';
import {LogBox} from 'react-native';
import {Routes} from './src/routes';
import {StatusBar} from 'react-native';
import {AuthProvider} from './src/hooks/auth';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
