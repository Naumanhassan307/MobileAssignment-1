//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  
  TouchableOpacity,
} from 'react-native';

import BlueBtnStyles from "./BlueButtonStyle"

// create a component
function BlueBtn({txt}) {
  return (
   
      <TouchableOpacity style={BlueBtnStyles.btn}>
        <Text style={BlueBtnStyles.btntxt}>{txt}</Text>
      </TouchableOpacity>
   
  );
}

//make this component available to the app
export default BlueBtn;
