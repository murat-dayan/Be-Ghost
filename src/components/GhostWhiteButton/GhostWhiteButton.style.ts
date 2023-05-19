import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../config/colors'

const deviceSize= Dimensions.get('window')

export default StyleSheet.create({
    button_container: {
      backgroundColor: colors.ghostWhite,
      width: deviceSize.width * 0.5,
      height: deviceSize.height / 17,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      marginTop:10,
      borderWidth:1,
      borderColor: colors.ghostBlack,
      
    },
    button_title_text: {
      color: colors.ghostBlack,
      fontWeight: 'bold',
      fontSize: 20,
      
    },
  })