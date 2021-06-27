//import liraries
import React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';

// create a component
const ButtonBlue = () => {
    return (
      <View style={styles.container}>
          <Text>Button</Text>
          <Button title="helo"/>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'blue',
        // height: "20",
        // width: "100%"
    },
});

//make this component available to the app
export default ButtonBlue;
