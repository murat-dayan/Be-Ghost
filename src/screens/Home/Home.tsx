import { View, Text } from 'react-native'
import React, { FC, useState } from 'react'
import styles from './Home.style'
import GhostButton from '../../components/GhostButton/GhostButton'
import { Slider } from '@miblanchard/react-native-slider'
import GhostModal from '../../components/GhostModal/GhostModal'
import colors from '../../config/colors'



const Home = ({ navigation }: any) => {

  const [sliderValue, setsliderValue] = useState<number[]>([10])
  const [visibleModal, setvisibleModal] = useState<boolean>(false)

  function openModal() {
    setvisibleModal(true)
  }

  function closeModal() {
    setvisibleModal(false)
  }

  return (
    <View style={styles.container}>

      <View style={styles.slider_container}>
        <Text style={styles.slider_text} >{sliderValue}:00 </Text>

        <Slider thumbTintColor={colors.ghostBlack}
          minimumTrackTintColor={colors.ghostBlack}
          minimumValue={10}
          value={sliderValue} maximumValue={100}
          onValueChange={(v) => setsliderValue(v)} step={5} />
      </View>


      <GhostButton bName='Be Ghost' onPress={() => navigation.navigate("GhostMode", { sliderValue })} />

      <GhostModal isVisible={visibleModal} onClose={closeModal} />


    </View>
  );
}

export default Home