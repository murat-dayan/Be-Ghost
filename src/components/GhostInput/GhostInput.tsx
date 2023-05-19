import { View, Text, TextInput, TextInputProps } from 'react-native'
import React,{FC} from 'react'
import styles from './GhostInput.style'

interface GhostInputProps extends TextInputProps{

}


const GhostInput: FC<GhostInputProps> = ({...rest}) => {
  return (
    <View style={styles.input_container}>
      <TextInput {...rest} style={styles.input_text_input} />
    </View>
  )
}

export default GhostInput