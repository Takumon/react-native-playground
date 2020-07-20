import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useFocusEffect} from '@react-navigation/native';
import Function1MainScreen from './Function1MainScreen';
import Function1SubScreen from './Function1SubScreen';
import Function1Modal from './Function1Modal';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreen: React.FC<{}> = () => {
  useFocusEffect(() => {
    console.log('Now Function1 is focused!');

    return () => {
      console.log('Now Function1 is blued!!!!');
    };
  });

  return (
    <MainStack.Navigator initialRouteName="Main">
      <MainStack.Screen name="Main" component={Function1MainScreen} />
      <MainStack.Screen name="Sub" component={Function1SubScreen} />
    </MainStack.Navigator>
  );
};

const RootStackScreen = () => {
  return (
    <RootStack.Navigator mode="modal" screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Main" component={MainStackScreen} />
      <RootStack.Screen name="MyModal" component={Function1Modal} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
