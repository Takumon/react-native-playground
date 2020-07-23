import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SimpleAnimationScreen from './SimpleAnimationScreen';
import FormAnimationScreen from './FormAnimationScreen';
import ParallelAnimationScreen from './ParallelAnimationScreen';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="ParallelAnimation">
      <Stack.Screen name="ParallelAnimation" component={ParallelAnimationScreen} />
      <Stack.Screen name="FormAnimatin" component={FormAnimationScreen} />
      <Stack.Screen name="SimpleAnimation" component={SimpleAnimationScreen} />
    </Stack.Navigator>
  );
};

export default StackScreen;
