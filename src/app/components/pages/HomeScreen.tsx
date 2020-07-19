import React, {useCallback} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen: React.FC<{}> = () => {
  const navigation = useNavigation();

  const toDetail = useCallback(() => {
    navigation.navigate('Form');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Go to form detail" onPress={toDetail} />
    </View>
  );
};

export default HomeScreen;
