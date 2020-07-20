import React, {useCallback, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeChild2Screen: React.FC<{}> = () => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      console.log('Now HomeChild2Screen is focused!');
    });
    const unsubscribeBlur = navigation.addListener('blur', () => {
      console.log('Now HomeChild2Screen is blued!');
    });

    return () => {
      unsubscribeFocus && unsubscribeFocus();
      unsubscribeBlur && unsubscribeBlur();
    };
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeChild2Screen</Text>
      <Button title="Go back" onPress={goBack} />
    </SafeAreaView>
  );
};

export default HomeChild2Screen;
