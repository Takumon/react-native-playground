import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from './DetailScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const Navigator: React.SFC<{}> = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Form" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
