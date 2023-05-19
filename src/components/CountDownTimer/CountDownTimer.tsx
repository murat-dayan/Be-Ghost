import { View, Text } from 'react-native'
import React, { useState, useEffect, FC } from 'react'
import moment from 'moment'
import GhostWhiteButton from '../GhostWhiteButton/GhostWhiteButton'
import styles from './CountDownTimer.style'

interface CountDownTimerProps{
  countSecond: number;
  handleCountDownComplete?: Function
}


const CountDownTimer: FC<CountDownTimerProps> = ({countSecond, handleCountDownComplete}) => {

  const [secondsLeft, setSecondsLeft] = useState(countSecond);
  const [passedTime, setpassedTime] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (secondsLeft > 0) {
        setSecondsLeft(secondsLeft - 1);
        setpassedTime((countSecond-secondsLeft)+1)
      }
      if (secondsLeft === 0 && handleCountDownComplete) {
        handleCountDownComplete();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsLeft, handleCountDownComplete]);

  

  return (
    <View style={styles.container}>
      <Text style={styles.counter_text}>{moment.duration(secondsLeft, 'seconds').hours()}:{moment.duration(secondsLeft, 'seconds').minutes()}:{moment.duration(secondsLeft, 'seconds').seconds()}</Text>
      <Text style={styles.counter_text}>{passedTime}</Text>
    </View>
  );
}

export default CountDownTimer