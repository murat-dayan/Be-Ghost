import { View, Text } from 'react-native'
import React,{useState} from 'react'
import styles from './LogIn.style'
import GhostButton from '../../../components/GhostButton/GhostButton'
import GhostInput from '../../../components/GhostInput/GhostInput'
import LottieView from 'lottie-react-native'
import GhostWhiteButton from '../../../components/GhostWhiteButton/GhostWhiteButton'
import GhostModal from '../../../components/GhostModal/GhostModal'
const LogIn = () => {



  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>Hayalet Ol</Text>
      </View>
      <View style={styles.body_container}>

        <LottieView source={require('../../../assets/122822-cute-spooky-ghost-animation.json')} autoPlay loop />
      </View>
      <View style={styles.verification_container}>
        <GhostWhiteButton bName='Google İle Devam Et'  />
      </View>
    </View>
  )
}

export default LogIn