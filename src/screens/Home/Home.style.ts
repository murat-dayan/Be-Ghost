import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../config/colors'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.ghostWhite,
        justifyContent: 'space-evenly'
    },
    slider_container:{
        marginHorizontal:15
    },
    slider_text:{
        borderWidth:1,
        borderColor: colors.ghostBlack,
        borderRadius:100,
        padding:28,
        alignSelf:'center',
        fontWeight: 'bold',
        color: colors.ghostBlack,
        fontSize:22
    }
})

