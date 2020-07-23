import React, {useCallback} from 'react';
import {StyleSheet, View, Button, Text, Alert} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonArea: {
    margin: 20,
  },
});

const ParentScreen: React.FC<{}> = () => {
  const hello = useCallback(() => {
    Alert.alert('Hello');
  }, []);

  return (
    <View style={styles.container}>
      <Text>ParentScreen</Text>
      <View style={styles.buttonArea}>
        <Button title="Hello" onPress={hello} />
      </View>
    </View>
  );
};

export default ParentScreen;
