//import liraries
import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

import InvertirStyles from './InvertirStyle';


// create a component
function Invertir(){
    return (
      <View style={InvertirStyles.container}>
        <View style={InvertirStyles.parent}>
          <Text>hello</Text>
        </View>
        <View style={InvertirStyles.paren}>
          <Text>hello1</Text>
        </View>
      </View>
    );
};



//make this component available to the app
export default Invertir;
