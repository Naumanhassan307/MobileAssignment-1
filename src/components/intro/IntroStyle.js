
import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#0C1327',
  },
  one: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    width: '100%',
  },
  two: {
    flex: 2.5,
    width: '100%',
  },
  three: {
    flex: 1.5,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'green',
    width: '100%',
  },
  inp1: {
    color: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    backgroundColor: 'transparent',
    width: '95%',
    height: 60,
    fontSize: 18,
    padding: 20,
    margin: 10,
  },
  text: {
    textAlign: 'left',
    paddingLeft: 13,
    color: '#FFFFFF',
  },
  logbtn: {
    width: 100,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    color: 'red',
  },
});
export default styles;
