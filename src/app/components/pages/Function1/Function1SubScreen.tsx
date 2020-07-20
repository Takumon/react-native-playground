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

const Function1SubScreen: React.FC<{}> = () => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const toChild = useCallback(() => {
    navigation.navigate('Home', {screen: 'Child1'});
  }, [navigation]);

  const toModal = useCallback(() => {
    navigation.navigate('MyModal');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Function1SubScreen</Text>
      <View style={styles.buttonArea}>
        <Button title="Go back" onPress={goBack} />
      </View>

      <View style={styles.buttonArea}>
        <Button title="toChild" onPress={toChild} />
      </View>
      <View style={styles.buttonArea}>
        <Button title="toModal" onPress={toModal} />
      </View>
    </SafeAreaView>
  );
};

export default Function1SubScreen;
