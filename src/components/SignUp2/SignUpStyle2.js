import {StyleSheet} from 'react-native';
// define your styles
const SignUp2Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  parent1: {
    flex: 1.5,
    // backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 5,
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  head: {
    flex: 1,
    justifyContent: 'flex-start',
    textAlign: 'center',
    fontFamily: 'Overpass',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 10,
  },
  img:{
      marginLeft: "30%",
      marginRight: "30%",
      flex:1,
      alignItems: "center",

  },
  inp1: {
    flex: 5,
    // backgroundColor: 'red',
  },
  frm: {
    color: '#000000',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 7,
    backgroundColor: 'transparent',
    width: '90%',
    height: 60,
    fontSize: 18,
    padding: 20,
    margin: 10,
    marginLeft: 20,
  },
  txt: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 2,
  },
  bt: {
    flex: 1,
    marginTop: 5,
  },
});
export default SignUp2Styles;
