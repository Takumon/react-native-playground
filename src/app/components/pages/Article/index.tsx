import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Articles from './containers/Articles';
import AddArticle from './components/AddArticle/AddArticle';
import ArticleProvider from './context/articleContext';

const MainScreen: React.SFC<{}> = () => {
  return (
    <ArticleProvider>
      <AddArticle />
      <Articles />
    </ArticleProvider>
  );
};

const Stack = createStackNavigator();

const MainStack: React.FC<{}> = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
