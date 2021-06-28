//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  
} from 'react-native';
import LoginFormStyles from './LoginFormStyle';


const image = {
  uri: 'https://lh5.googleusercontent.com/proxy/d4YNByH-VjKPQaK27RwB4pQ7TnHI41clqrvBdU9zoU3V4ryul4FoSkR0R3ACZJRDhi00wELtR-4yT5loUrW8pAjZUNCtQcUxCfmH6ya0AH7LY5-3eXJrTCo3NRLU-IVJlqmHHD17tDRN6Bh5i6ActnFD73mvYlr4Zl4VzNyXtg=s0-d',
};
// create a component
function LoginForm() {
  return (
    <View style={LoginFormStyles.container}>
      <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
        <View style={LoginFormStyles.parent1}>
          <Image source={require('../../assets/logo.png')} />
        </View>
        <View style={LoginFormStyles.form}>
          <Text style={LoginFormStyles.head}>Iniciar sesion</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

//make this component available to the app
export default LoginForm;
