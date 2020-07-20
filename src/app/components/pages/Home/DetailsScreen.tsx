import React, {useCallback} from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonArea: {
    margin: 20,
  },
});

const DetailsScreen: React.SFC<{}> = ({}) => {
  const {
    params: {itemId, otherParam},
  } = useRoute();
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const goToOtherDetailsScreen = useCallback(() => {
    navigation.push('Details', {
      itemId: Math.floor(Math.random() * 100),
      otherParam: `${Math.floor(Math.random() * 100)} anything you want here`,
    });
  }, [navigation]);

  const goHomeWithParams = useCallback(() => {
    navigation.navigate('Child2', {
      itemId: Math.floor(Math.random() * 100),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <View style={styles.buttonArea}>
        <Button title="Go to Details... again" onPress={goToOtherDetailsScreen} />
      </View>
      <View style={styles.buttonArea}>
        <Button title="go back" onPress={goBack} />
      </View>
      <View style={styles.buttonArea}>
        <Button title="go Home with params" onPress={goHomeWithParams} />
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
