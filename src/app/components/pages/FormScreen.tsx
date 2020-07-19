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

const FormScreen: React.SFC<{}> = ({}) => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const openOtherFormScreen = useCallback(() => {
    navigation.push('Form');
  }, [navigation]);

  const goBackHome = useCallback(() => {
    navigation.popToTop();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Form</Text>
      <View style={styles.buttonArea}>
        <Button title="go back" onPress={goBack} />
      </View>
      <View style={styles.buttonArea}>
        <Button title="open other form screen" onPress={openOtherFormScreen} />
      </View>
      <View style={styles.buttonArea}>
        <Button title="back to home screen" onPress={goBackHome} />
      </View>
    </View>
  );
};

export default FormScreen;
