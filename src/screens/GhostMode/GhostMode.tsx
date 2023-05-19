import { View, Text, BackHandler } from 'react-native'
import React,{useEffect, useState} from 'react'
import styles from './GhostMode.style'
import GhostWhiteButton from '../../components/GhostWhiteButton/GhostWhiteButton';
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer'

interface GhostModeProps{
  navigation:any;
  route: {params : { sliderValue : number[]}};
}

const GhostMode = ({navigation,route}:GhostModeProps) => {

  useEffect(() => {

    
    const onBackButtonPress = () => {
      // Geri tuşuna basıldığında hiçbir şey yapma
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackButtonPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackButtonPress);
    };
  }, []);


  function handleCountDownComplete(){
    navigation.goBack()
  }



  return (
    <View style={styles.container}>
      
      <CountDownTimer countSecond={(route.params.sliderValue[0])*60} handleCountDownComplete={handleCountDownComplete} />


      <GhostWhiteButton bName='Give Up' onPress={() =>  navigation.goBack()} />
    </View>
  )
}

export default GhostMode