
import { StyleSheet} from 'react-native';

const InvertirStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  parent: {
    flex: 5,
    backgroundColor: '#FFFFFF',
    width: '95%',
    margin: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  paren: {
    flex: 3,
    // backgroundColor: 'red',
    width: '90%',
  },
  topChild: {
    flex: 1.5,
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
  },
  mdlChild: {
    flex: 3.5,
    // backgroundColor: 'black',
    width: '100%',
  },
  mdl2Child: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'pink',
    width: '100%',

    borderBottomWidth: 1,
  },
  btmChild: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topChildL: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  topChildR: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  mdl2Childtxt: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
    fontSize: 18,
  },
  btmChildtxt:{
      flex: 1,
      justifyContent: "center",
      paddingLeft: 10,
      

  }
});


export default InvertirStyles;