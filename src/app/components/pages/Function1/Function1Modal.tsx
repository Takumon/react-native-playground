import React, {useCallback} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonArea: {
    margin: 20,
  },
});

const Function1Modal: React.FC<{}> = () => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <View style={styles.buttonArea}>
        <Button onPress={goBack} title="Dismiss" />
      </View>
    </View>
  );
};

export default Function1Modal;
