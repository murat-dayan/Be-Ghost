import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './Tags.style'
import GhostInput from '../../components/GhostInput/GhostInput'
import colors from '../../config/colors'
import database from '@react-native-firebase/database'

const Tags = () => {

  const inputRef= useRef(null)

  const [tag, setTag] = useState("")

  function handleSaveTags() {
    if (tag.length === 0) {
        console.log("bir şey yazınız")
    } else {
      const tagRef = database().ref('tags').push();
      const createdAt = database.ServerValue.TIMESTAMP;

      const tagData = {
        tag: tag,
        createdAt: createdAt
      };

      tagRef.set(tagData)
        .then(() => setTag(""))
        .catch((error) => console.log('Error adding tag:', error));
    }
  }

 

  return (
    <View style={styles.container}>
      <GhostInput
        placeholder='Etiket giriniz...'
        placeholderTextColor={colors.ghostWhite}
        value={tag}
        onChangeText={(v) => setTag(v)}
        onSubmitEditing={handleSaveTags} />
    </View>
  )
}

export default Tags