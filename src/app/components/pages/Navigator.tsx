import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import Function1Screen from './Function1';

const Tab = createBottomTabNavigator();

const Navigator: React.SFC<{}> = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Function1" component={Function1Screen} />
    </Tab.Navigator>
  );
};

export default Navigator;
