//import liraries
import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, TextInput} from 'react-native';
import SignUpStyles from './SignUpStyle';

import BlueBtn from '../../commonComponents/blueButton/BlueButton';

const image = {
  uri: 'https://lh5.googleusercontent.com/proxy/d4YNByH-VjKPQaK27RwB4pQ7TnHI41clqrvBdU9zoU3V4ryul4FoSkR0R3ACZJRDhi00wELtR-4yT5loUrW8pAjZUNCtQcUxCfmH6ya0AH7LY5-3eXJrTCo3NRLU-IVJlqmHHD17tDRN6Bh5i6ActnFD73mvYlr4Zl4VzNyXtg=s0-d',
};
// create a component
function SignUp() {
  return (
    <View style={SignUpStyles.container}>
      <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
        <View style={SignUpStyles.parent1}>
          <Image source={require('../../assets/logo.png')} />
        </View>
        <View style={SignUpStyles.form}>
          <Text style={SignUpStyles.head}>Abrir cuenta</Text>
          <View style={SignUpStyles.inp1}>
            <Text style={SignUpStyles.txt}> Email*</Text>
            <TextInput
              placeholder="Nomber(s)"
              placeholderTextColor="#A4A9A0"
              style={SignUpStyles.frm}
            />
            <Text style={SignUpStyles.txt}>Contrasena*</Text>
            <TextInput
              placeholder="Apellido Paterno"
              placeholderTextColor="#A4A9A0"
              style={SignUpStyles.frm}
            />
            <Text style={SignUpStyles.txt}> Repiter Contrasena*</Text>
            <TextInput
              placeholder="Apellido Paterno"
              placeholderTextColor="#A4A9A0"
              style={SignUpStyles.frm}
            />

            <View style={SignUpStyles.bt}>
              <BlueBtn txt="Abrir cuenta" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

//make this component available to the app
export default SignUp;
