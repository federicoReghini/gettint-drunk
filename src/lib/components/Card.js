import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import burny from '../assets/img/cardIcon/barney_drunk.jpg';
import burnynt from '../assets/img/cardIcon/barney_ntdrunk.jpg';




const Card = () => {

  animatedValue = new Animated.Value(0);
  frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  })

  backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
  })

  const flipCard = () => {
    Animated.timing(animatedValue, {
      toValue: 180,
      duration: 800
    }).start();
  }

  const frontAnimatedStyle = {
    transform: [
      { rotateY: frontInterpolate }
    ]
  }

  const backAnimatedStyle = {
    transform: [
      { rotateY: backInterpolate }
    ]
  }

  return (
    <View style={styles.container}>
      <View>
        <Animated.Image style={[styles.flipCard, frontAnimatedStyle]}
          source={burnynt}
        />

        <Animated.Image style={[backAnimatedStyle, styles.flipCard, styles.flipCardInner]}
          source={burny}
        />
      </View>
      <TouchableOpacity onPress={() => flipCard()}>
        <Text>click</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  flipCard: {
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    backfaceVisibility: 'hidden',
  },
  flipCardInner: {
    position: 'absolute',
    // backgroundColor: 'red',
    textAlign: 'center',
    top: 0,
    left: 0
  }
})