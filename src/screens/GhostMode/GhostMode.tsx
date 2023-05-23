import { View, Text, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './GhostMode.style'
import GhostWhiteButton from '../../components/GhostWhiteButton/GhostWhiteButton';
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer'

import database from '@react-native-firebase/database'
import GhostButton from '../../components/GhostButton/GhostButton';

interface GhostModeProps {
  navigation: any;
  route: { params: { sliderValue: number[] } };
}

const GhostMode = ({ navigation, route }: GhostModeProps) => {

  const [time, setTime] = useState(route.params.sliderValue[0]);
  
  


  
  function handleCountDownComplete() {
    navigation.goBack()
  }



  return (
    <View style={styles.container}>

      <CountDownTimer countSecond={time * 60} handleCountDownComplete={handleCountDownComplete} />


      <GhostWhiteButton bName='Give Up' onPress={() => navigation.goBack()} />
    </View>
  )
}

export default GhostMode