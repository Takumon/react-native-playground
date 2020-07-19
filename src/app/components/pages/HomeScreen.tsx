import React, {useCallback} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const FormScreen: React.FC<{}> = () => {
  const navigation = useNavigation();

  const toForm = useCallback(() => {
    navigation.navigate('Form');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Go to form screen" onPress={toForm} />
    </View>
  );
};

export default FormScreen;
