import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import Function1Screen from './Function1';
import AnimationScreen from './Animation';
import ContextScreen from './Context';

const Tab = createBottomTabNavigator();

const Navigator: React.SFC<{}> = () => {
  return (
    <Tab.Navigator initialRouteName="Context">
      <Tab.Screen name="Context" component={ContextScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Function1" component={Function1Screen} />
      <Tab.Screen name="Animation" component={AnimationScreen} />
    </Tab.Navigator>
  );
};

export default Navigator;
