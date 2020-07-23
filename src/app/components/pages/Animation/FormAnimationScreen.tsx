import React, {useRef, useState, useEffect, useCallback, useMemo} from 'react';
import {StyleSheet, View, Button, Text, TextInput, Animated, Easing} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  input: {
    backgroundColor: '#ededed',
    height: 50,
    marginHorizontal: 15,
    marginTop: 10,
    paddingHorizontal: 9,
  },
});

const FormAnimationScreen: React.FC<{}> = () => {
  const [loading, setLoading] = useState(true);

  const animatedRotation = useRef(new Animated.Value(0)).current;

  const animate = useCallback(() => {
    Animated.loop(
      Animated.timing(animatedRotation, {
        toValue: 1,
        duration: 600,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [animatedRotation]);

  const rotation = useMemo(() => {
    return animatedRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
  }, [animatedRotation]);

  useEffect(() => {
    animate();
    setTimeout(() => setLoading(false), 5000);
  }, [animate]);

  const input = useRef();

  return (
    <View style={styles.container}>
      <Text>FormAnimationScreen</Text>
      {loading ? (
        <Animated.Image source={require('../../../images/loading.png')} style={{width: 40, height: 40, transform: [{rotate: rotation}]}} />
      ) : (
        <Text>Welcome</Text>
      )}
    </View>
  );
};

export default FormAnimationScreen;
