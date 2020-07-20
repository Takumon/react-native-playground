import React, {useCallback} from 'react';
import {StyleSheet, View, SafeAreaView, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonArea: {
    margin: 20,
  },
});

const Function1MainScreen: React.FC<{}> = () => {
  const navigation = useNavigation();
  const toSub = useCallback(() => {
    navigation.navigate('Sub');
  }, [navigation]);

  const toModal = useCallback(() => {
    navigation.navigate('MyModal');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Function1MainScreen</Text>
      <View style={styles.buttonArea}>
        <Button title="Go sub" onPress={toSub} />
      </View>
      <View style={styles.buttonArea}>
        <Button title="toModal" onPress={toModal} />
      </View>
    </SafeAreaView>
  );
};

export default Function1MainScreen;
