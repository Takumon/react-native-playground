import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FormScreen from './FormScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const Navigator: React.SFC<{}> = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Form" component={FormScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
