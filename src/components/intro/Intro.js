//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './IntroStyle';

// import logo from "../../assets/logo.png"

// create a component
function Intro ()  {
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Text>Hello 1</Text>
        <Image
          source={require('../../assets/logo.png')}
          style={{height: 72, width: 302, position: 'absolute'}}
        />
      </View>
      <View style={styles.two}>
        <TextInput
          placeholderTextColor="white"
          placeholder="carreo electronico"
          style={styles.inp1}
        />
        <TextInput
          placeholderTextColor="white"
          placeholder="contrasefia"
          style={styles.inp1}
        />
        <View>
          <Text style={styles.text}>¿Olvidaste tu contraseña? </Text>
        </View>
      </View>
      <View style={styles.three}>
        <View style={{width: '100%'}}>
          <TouchableOpacity style={styles.logbtn}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// define your styles


//make this component available to the app
export default Intro;
