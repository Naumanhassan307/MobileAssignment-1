//import liraries
import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import IntroStyles from './IntroStyle';

import BlueBtn from '../../commonComponents/blueButton/BlueButton';
import BlackBtn from '../../commonComponents/blackButton/BlackButton';
const image = {
  uri: 'https://lh5.googleusercontent.com/proxy/d4YNByH-VjKPQaK27RwB4pQ7TnHI41clqrvBdU9zoU3V4ryul4FoSkR0R3ACZJRDhi00wELtR-4yT5loUrW8pAjZUNCtQcUxCfmH6ya0AH7LY5-3eXJrTCo3NRLU-IVJlqmHHD17tDRN6Bh5i6ActnFD73mvYlr4Zl4VzNyXtg=s0-d',
};
// create a component
function Intro() {
  return (
    <View style={IntroStyles.container}>
      <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
        <View style={IntroStyles.parent1}>
          <Image source={require('../../assets/logo.png')} />
        </View>
        <View style={IntroStyles.parent2}>
          <Text style={IntroStyles.txt}>CROWDFUNDING</Text>
          <Text style={IntroStyles.txt}>INMOBILIARIO</Text>
        </View>
        <View style={IntroStyles.parent3}>
         <BlueBtn txt="Iniciar sesion"/>
         <BlackBtn txt="Crear cuenta"/>
        </View>
      </ImageBackground>
    </View>
  );
}

//make this component available to the app
export default Intro;
