//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './IntroStyle';

// create a component
function Intro ()  {
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Text>Hello 1</Text>
      </View>
      <View style={styles.two}>
        <Text>Hello 1</Text>
      </View>
      <View style={styles.three}>
        <Text>Hello 1</Text>
      </View>
    </View>
  );
};

// define your styles


//make this component available to the app
export default Intro;
