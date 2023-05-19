import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React,{FC} from 'react'
import styles from './GhostWhiteButton.style'

interface   GhostButtonProps extends TouchableOpacityProps {
  bName: string,
  
}

const GhostWhiteButton: FC<GhostButtonProps> = ({bName, ...rest}) => {
  return (
    <TouchableOpacity {...rest} style={styles.button_container}>
      <Text style={styles.button_title_text}>{bName}</Text>
    </TouchableOpacity>
  )
}

export default GhostWhiteButton