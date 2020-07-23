import React, {useRef, useCallback} from 'react';
import {StyleSheet, View, Button, Text, Animated} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
});

const SimpleAnimationScreen: React.FC<{}> = () => {
  const translateY = useRef(new Animated.Value(20)).current;

  const animate = useCallback(() => {
    Animated.timing(translateY, {
      toValue: 200,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  return (
    <View style={styles.container}>
      <Text>SimpleAnimationScreen</Text>
      <Animated.View style={[styles.box, {translateY}]}>
        <Button title="Animate Box" onPress={animate} />
      </Animated.View>
    </View>
  );
};

export default SimpleAnimationScreen;
