

import { StyleSheet} from 'react-native';
// define your styles
const IntroStyles = StyleSheet.create({
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
  parent2: {
    flex: 2,
    // backgroundColor: 'green',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  parent3: {
    flex: 1.5,
    // backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: '#FFFFFF',
    padding: 5,
    fontSize: 24,
  },
  btn: {
    width: '95%',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
  },
});
export default IntroStyles;