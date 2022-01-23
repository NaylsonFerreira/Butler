import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from '../screens/Home';
import {Menu} from '../screens/Menu';

const {Navigator, Screen} = createDrawerNavigator();

export function AuthRoutes() {
  return (
    <Navigator drawerContent={Menu} screenOptions={{headerShown: true}}>
      <Screen name="Home" component={Home} />
      <Screen name="Menu" component={Menu} />
    </Navigator>
  );
}
