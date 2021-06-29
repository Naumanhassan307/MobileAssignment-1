//import liraries
import React, {Component} from 'react';
import {Text} from 'react-native';
import Login from './src/components/login/Login';
import Intro from "./src/components/intro/Intro"
import LoginForm from './src/components/loginForm/LoginForm';
import SignUp from "./src/components/signUp/SignUp"
import SignUp2 from './src/components/SignUp2/SignUp2';
import Invertir from "./src/commonComponents/invertir/Invertir"

// create a component
function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Intro /> */}
      {/* <LoginForm /> */}
      {/* <SignUp /> */}
      {/* <SignUp2 /> */}
      <Invertir />
    </>
  );
}

// define your styles

//make this component available to the app
export default App;
