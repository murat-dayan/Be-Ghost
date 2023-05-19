import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../config/colors'

const deviceSize= Dimensions.get('window')

export default StyleSheet.create({
    input_container:{
        marginVertical:5,
        alignSelf:'center',
        borderWidth:1.50,
        borderColor:'white',
        borderRadius:10,
        width: deviceSize.width*0.8,
        height: deviceSize.height/20,
        paddingHorizontal:5
    },
    input_text_input:{
        color:colors.ghostWhite,
        fontStyle: 'italic'
    }
})