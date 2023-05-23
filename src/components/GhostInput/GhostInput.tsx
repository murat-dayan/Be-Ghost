import { View, Text, TextInput, TextInputProps } from 'react-native'
import React,{FC, RefObject} from 'react'
import styles from './GhostInput.style'

interface GhostInputProps extends TextInputProps{
  inputReferance? : RefObject<TextInput>;
}


const GhostInput: FC<GhostInputProps> = ({inputReferance,...rest}) => {
  return (
    <View style={styles.input_container}>
      <TextInput ref={inputReferance} {...rest} style={styles.input_text_input} />
    </View>
  )
}

export default GhostInput