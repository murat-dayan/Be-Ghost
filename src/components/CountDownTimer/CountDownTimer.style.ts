import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../config/colors'
const deviceSize= Dimensions.get('window')
export default StyleSheet.create({

    container:{
        borderWidth:1,
        borderColor: colors.ghostWhite,
        width: deviceSize.width*0.5,
        
        alignSelf: 'center',
        marginVertical: 10,
        padding:10,
        
        
    },
    counter_text:{
        color: colors.ghostWhite,
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center'
    }

})