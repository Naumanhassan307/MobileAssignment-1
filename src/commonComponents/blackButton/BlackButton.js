//import liraries
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import BlackBtnStyles from './BlackButtonStyle';

// create a component
function BlackBtn({txt}) {
  return (
    
      <TouchableOpacity style={BlackBtnStyles.btn}>
        <Text style={BlackBtnStyles.btntxt}>{txt}</Text>
      </TouchableOpacity>
   
  );
}

//make this component available to the app
export default BlackBtn;
