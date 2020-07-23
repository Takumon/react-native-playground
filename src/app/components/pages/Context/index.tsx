import React, {useState, useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from './ThemeProvider';

import Child1Screen from './Child1Screen';
import Child2Screen from './Child2Screen';
import ParentScreen from './ParentScreen';

const Stack = createStackNavigator();

const HomeStack: React.FC<{}> = () => {
  const [themeValue, setThemeValue] = useState('light');

  const toggleThemeValue = useCallback(() => {
    setThemeValue((v) => {
      console.log(v);
      const newV = v === 'dark' ? 'light' : 'dark';
      console.log(newV);
      return newV;
    });
  }, [setThemeValue]);

  return (
    <ThemeProvider
      value={{
        themeValue,
        toggleThemeValue,
      }}>
      <Stack.Navigator initialRouteName="Parent">
        <Stack.Screen name="Parent" component={ParentScreen} />
        <Stack.Screen name="Child1" component={Child1Screen} />
        <Stack.Screen name="Child2" component={Child2Screen} />
      </Stack.Navigator>
    </ThemeProvider>
  );
};

export default HomeStack;
