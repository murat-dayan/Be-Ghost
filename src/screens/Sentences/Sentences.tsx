import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './Sentences.style'
import GhostInput from '../../components/GhostInput/GhostInput'
import colors from '../../config/colors'
import database from '@react-native-firebase/database'

const Sentences = () => {

  const [sentence, setSentence] = useState("")

  function handleSaveSentence() {

    if (sentence.length === 0) {
      console.log("bir şey yazınız")
    } else {
      const sentenceRef = database().ref('sentences').push();
      const createdAt = database.ServerValue.TIMESTAMP;

      const sentenceData = {
        sentence: sentence,
        createdAt: createdAt
      };

      sentenceRef.set(sentenceData)
        .then(() => setSentence(""))
        .catch((error) => console.log('Error adding sentence:', error));
    }
  }

  function handleGetAllTags() {
    
  }

  return (
    <View style={styles.container}>
      <GhostInput placeholder='Sizi ne motive eder?'
        placeholderTextColor={colors.ghostWhite}
        value={sentence}
        onChangeText={(v) => setSentence(v)}
        onSubmitEditing={handleSaveSentence}
      />
    </View>
  )
}

export default Sentences