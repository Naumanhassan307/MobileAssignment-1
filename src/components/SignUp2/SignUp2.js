//import liraries
import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, TextInput} from 'react-native';
import SignUp2Styles from './SignUpStyle2';

import BlueBtn from '../../commonComponents/blueButton/BlueButton';

const image = {
  uri: 'https://lh5.googleusercontent.com/proxy/d4YNByH-VjKPQaK27RwB4pQ7TnHI41clqrvBdU9zoU3V4ryul4FoSkR0R3ACZJRDhi00wELtR-4yT5loUrW8pAjZUNCtQcUxCfmH6ya0AH7LY5-3eXJrTCo3NRLU-IVJlqmHHD17tDRN6Bh5i6ActnFD73mvYlr4Zl4VzNyXtg=s0-d',
};
// create a component
function SignUp2() {
  return (
    <View style={SignUp2Styles.container}>
      <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
        <View style={SignUp2Styles.parent1}>
          <Image source={require('../../assets/logo.png')} />
        </View>
        <View style={SignUp2Styles.form}>
          <Text style={SignUp2Styles.head}>Ingresa tu Nomber</Text>
          <Image source={require('../../assets/kyc.png')}  style={SignUp2Styles.img}/>
          <View style={SignUp2Styles.inp1}>
            <Text style={SignUp2Styles.txt}>Nomber(s)</Text>
            <TextInput
              placeholder="Nomber(s)"
              placeholderTextColor="#A4A9A0"
              style={SignUp2Styles.frm}
            />
            <Text style={SignUp2Styles.txt}>Apellido Paterno*</Text>
            <TextInput
              placeholder="Apellido Paterno"
              placeholderTextColor="#A4A9A0"
              style={SignUp2Styles.frm}
            />
            <Text style={SignUp2Styles.txt}> Apellido Paterno*</Text>
            <TextInput
              placeholder="Apellido Paterno"
              placeholderTextColor="#A4A9A0"
              style={SignUp2Styles.frm}
            />

            <View style={SignUp2Styles.bt}>
              <BlueBtn txt="Continuar" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

//make this component available to the app
export default SignUp2;
