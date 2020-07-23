import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ParentScreen from './ParentScreen';

const Stack = createStackNavigator();

const HomeStack: React.FC<{}> = () => {
  return (
    <Stack.Navigator initialRouteName="Parent">
      <Stack.Screen name="Parent" component={ParentScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
