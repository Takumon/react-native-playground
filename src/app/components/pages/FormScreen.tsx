import React, {useCallback} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const FormScreen: React.SFC<{}> = ({}) => {
  const navigation = useNavigation();

  const back = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>FormPage</Text>
      <Button title="back to Home screen" onPress={back} />
    </View>
  );
};

export default FormScreen;
