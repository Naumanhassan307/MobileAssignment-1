//import liraries
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import InvertirStyles from './InvertirStyle';


const image = {
  uri: 'http://www.chifudesign.com/wp-content/uploads/2019/10/1569870187_maxresdefault.jpg',
};

// create a component
function Invertir() {
  return (
    <View style={InvertirStyles.container}>
      <View style={InvertirStyles.parent}>
        <View style={InvertirStyles.topChild}>
          <View style={InvertirStyles.topChildL}>
            <Text style={{fontWeight: 'bold', fontSize: 22, padding: 7}}>
              Desarrollo Alfa
            </Text>
            <Text style={{marginLeft: 7}}>Por Desarrollo 1</Text>
          </View>
          <View style={InvertirStyles.topChildR}>
            <Text style={{paddingRight: 15, fontWeight: 'bold'}}>
              Quedan 39 dias
            </Text>
          </View>
        </View>

        <View style={InvertirStyles.mdlChild}>
          <Text
            style={{
              flex: 0.17,
              backgroundColor: '#227BFF',
              color: '#FFFFFF',
              textAlign: 'center',
              justifyContent: 'center',
              fontSize: 18,
            }}>
            Deuda
          </Text>
          <View style={{flex: 1.08}}>
            <Image source={image} style={{height: "100%", width:"100%"}}/>
          </View>
          <View style={{flex: 0.09, backgroundColor: '#227BFF'}}></View>
        </View>
        <View style={InvertirStyles.mdl2Child}>
          <View style={InvertirStyles.mdl2Childtxt}>
            <Text>$ 1.5MM recaudado</Text>
          </View>
          <View style={InvertirStyles.mdl2Childtxt}>
            <Text>Min $ 4.5MM</Text>
          </View>
          <View style={InvertirStyles.mdl2Childtxt}>
            <Text>Max $ 4.5MM</Text>
          </View>
        </View>
        <View style={InvertirStyles.btmChild}>
          <View style={InvertirStyles.btmChildtxt}>
            <Text style={{fontSize: 18}}>Tasa anual fija</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>12.32 %</Text>
          </View>
          <View style={InvertirStyles.btmChildtxt}>
            <Text style={{fontSize: 18}}>Min de inversion</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>$ 54,000 MXN</Text>
          </View>
          <View style={InvertirStyles.btmChildtxt}>
            <Text style={{fontSize: 18}}>Plazo</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>12 meses</Text>
          </View>
        </View>
      </View>

      <View style={InvertirStyles.paren}></View>
    </View>
  );
}

//make this component available to the app
export default Invertir;
