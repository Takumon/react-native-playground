import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SimpleAnimationScreen from './SimpleAnimationScreen';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="SimpleAnimation">
      <Stack.Screen name="SimpleAnimation" component={SimpleAnimationScreen} />
    </Stack.Navigator>
  );
};

export default StackScreen;
