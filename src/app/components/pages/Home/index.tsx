import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/core';

import HomeChild1Screen from './HomeChild1Screen';
import HomeChild2Screen from './HomeChild2Screen';
import DetailsScreen from './DetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab: React.SFC<{}> = () => {
  return (
    <Tab.Navigator initialRouteName="Child2">
      <Tab.Screen name="Child1" component={HomeChild1Screen} />
      <Tab.Screen name="Child2" component={HomeChild2Screen} />
    </Tab.Navigator>
  );
};

const HomeStack: React.FC<{}> = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      console.log('Now HomeStack is focused!');
    });
    const unsubscribeBlur = navigation.addListener('blur', () => {
      console.log('Now HomeStack is blued!');
    });

    return () => {
      unsubscribeFocus && unsubscribeFocus();
      unsubscribeBlur && unsubscribeBlur();
    };
  }, [navigation]);

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeTab} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
