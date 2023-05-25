import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../config/colors'

const deviceSize= Dimensions.get('window')

export default StyleSheet.create({
    container:{
        borderTopWidth:2,
        borderBottomWidth:2,
        borderColor: colors.ghostGray,
        width: deviceSize.width*0.7,
        alignSelf: 'center',
        margin:8,
        padding:2.50,
        borderRadius:20
    },

    card_text:{
        fontWeight: 'bold',
        fontSize:15,
        color: colors.ghostWhite,
        alignSelf: 'center'
    }
})