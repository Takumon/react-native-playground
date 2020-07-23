import React, {useCallback} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonArea: {
    margin: 20,
  },
});

const ParentScreen: React.FC<{}> = () => {
  const navigation = useNavigation();

  const toChild1 = useCallback(() => {
    console.log('child1');
    navigation.navigate('Child1');
  }, [navigation]);

  const toChild2 = useCallback(() => {
    console.log('child1');
    navigation.navigate('Child2');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>ParentScreen</Text>
      <View style={styles.buttonArea}>
        <Button title="Go to Child1" onPress={toChild1} />
      </View>

      <View style={styles.buttonArea}>
        <Button title="Go to Child2" onPress={toChild2} />
      </View>
    </View>
  );
};

export default ParentScreen;
