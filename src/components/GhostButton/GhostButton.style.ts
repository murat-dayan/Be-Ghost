import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../config/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  button_container: {
    backgroundColor: colors.ghostBlack,
    width: deviceSize.width * 0.5,
    height: deviceSize.height / 17,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop:10,
    borderWidth:1,
    borderColor:colors.ghostWhite,
    
  },
  button_title_text: {
    color: colors.ghostWhite,
    fontWeight: 'bold',
    fontSize: 20,
    
  },
})
