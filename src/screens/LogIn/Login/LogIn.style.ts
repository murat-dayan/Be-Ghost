import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../config/colors';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ghostBlack,
    justifyContent: 'space-evenly',
  },
  header_container:{
    margin:10
  },
  header_text:{
    color: colors.ghostWhite,
    fontWeight:'bold',
    alignSelf: 'center',
    fontSize:33
  },
  body_container: {
    width: '100%',
    height: deviceSize.height /3,
    alignSelf:'center'
  },
  verification_container: {},
});
