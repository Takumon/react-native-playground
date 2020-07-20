import React, {useCallback} from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonArea: {
    margin: 20,
  },
});

const HomeChild1Screen: React.FC<{}> = () => {
  const navigation = useNavigation();

  const toDetails = useCallback(() => {
    navigation.navigate('Details', {
      itemId: 86,
      otherParam: 'anything you want here',
    });
  }, [navigation]);

  const HomeMainScreen = (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <Button title="Go to form details" onPress={toDetails} />
    </SafeAreaView>
  );

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeChild1Screen</Text>
      <View style={styles.buttonArea}>
        <Button title="Go back" onPress={goBack} />
      </View>
      <View style={styles.buttonArea}>
        <Button title="Go to details" onPress={toDetails} />
      </View>
    </SafeAreaView>
  );
};

export default HomeChild1Screen;
