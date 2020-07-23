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

const Child1Screen: React.FC<{}> = () => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Child1Screen</Text>
      <View style={styles.buttonArea}>
        <Button title="Go back" onPress={goBack} />
      </View>
    </SafeAreaView>
  );
};

export default Child1Screen;
