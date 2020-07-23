import React, {useRef, useState, useEffect, useCallback, useMemo} from 'react';
import {StyleSheet, View, TouchableHighlight, Button, Text, TextInput, Animated, Easing} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 12,
  },
  subTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    opacity: 0.8,
  },
  button: {
    marginTop: 25,
    backgroundColor: '#ddd',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  input: {
    backgroundColor: '#ededed',
    height: 50,
    marginHorizontal: 15,
    marginTop: 10,
    paddingHorizontal: 9,
  },
});

const ParallelAnimationScreen: React.FC<{}> = () => {
  const animatedTitleRef = useRef(new Animated.Value(-200));
  const animatedSubTitleRef = useRef(new Animated.Value(600));
  const animatedButtonRef = useRef(new Animated.Value(800));

  const animate = useCallback(() => {
    Animated.stagger(100, [
      Animated.timing(animatedTitleRef.current, {
        toValue: 200,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(animatedSubTitleRef.current, {
        toValue: 0,
        duration: 1400,
        useNativeDriver: true,
      }),
      Animated.timing(animatedButtonRef.current, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    animate();
  }, [animate]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, {translateY: animatedTitleRef.current}]}>Welcome</Animated.Text>
      <Animated.Text style={[styles.subTitle, {translateX: animatedSubTitleRef.current}]}>Thanks for visiting our app!</Animated.Text>
      <Animated.View style={[{translateY: animatedButtonRef.current}]}>
        <TouchableHighlight style={styles.button}>
          <Text>Get Started</Text>
        </TouchableHighlight>
      </Animated.View>
    </View>
  );
};

export default ParallelAnimationScreen;
