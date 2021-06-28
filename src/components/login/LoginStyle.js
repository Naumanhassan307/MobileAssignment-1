
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
    alignItems: 'center',
    // backgroundColor: 'green',
    width: '100%',
  },
  inp1: {
    color: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 50,
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
    width: '95%',
    height: 60,
    backgroundColor: '#EB2657',
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 5,
    // justifyContent: "center",
    // alignItems: "center",
    textAlign: "center",
  },
});
export default styles;
