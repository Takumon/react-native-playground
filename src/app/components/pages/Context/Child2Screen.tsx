import React, {useCallback} from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useThemeContext} from './ThemeProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonArea: {
    margin: 20,
    padding: 20,
  },
});

const Child1Screen: React.FC<{}> = () => {
  const {themeValue, toggleThemeValue} = useThemeContext();
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Child1Screen</Text>
      <View style={[styles.buttonArea, {backgroundColor: themeValue === 'dark' ? 'black' : 'white'}]}>
        <Button title="Go back" onPress={goBack} />
      </View>
      <View style={[styles.buttonArea, {backgroundColor: themeValue === 'dark' ? 'black' : 'white'}]}>
        <Button title="Toggle theme" onPress={toggleThemeValue} />
      </View>
    </SafeAreaView>
  );
};

export default Child1Screen;
