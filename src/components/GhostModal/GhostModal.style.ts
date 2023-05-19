import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../config/colors'

const deviceSize= Dimensions.get('window')
export default StyleSheet.create({
    
    modal:{
        justifyContent: 'flex-end',
        margin:0,
    },
    container:{
        borderTopLeftRadius:30,
        borderTopRightRadius: 30,
        backgroundColor: colors.ghostBlack,
        borderWidth:1,
        height: deviceSize.height/3,
        width: '100%',
        justifyContent: 'flex-end',
        padding:20
    }
})