import {StyleSheet} from 'react-native';
// define your styles
const LoginFormStyles = StyleSheet.create({
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
    justifyContent: 'flex-start',
    textAlign: "center",
    
  },
});
export default LoginFormStyles;
