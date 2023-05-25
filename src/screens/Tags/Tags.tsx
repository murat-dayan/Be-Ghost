import { View, FlatList } from 'react-native'
import React, { useState, useEffect} from 'react'
import styles from './Tags.style'
import GhostInput from '../../components/GhostInput/GhostInput'
import colors from '../../config/colors'
import database from '@react-native-firebase/database'
import GhostCard from '../../components/GhostCard/GhostCard'

type TagType={
  tag:string;
  createdAt:number
}

const Tags = () => {

  const [tags, settags] = useState<TagType[]>([])

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



  function handleGetsAllTags(){
    const tagRef = database().ref('tags');
    const tagsArray: TagType[] = [];
  
    try {
      tagRef.on('child_added', (snapshot) => {
        const tagValue = snapshot.val();
        tagsArray.push(tagValue);
      });
    
      tagRef.on('value', () => {
        settags(tagsArray);
      });
      console.log(tags)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetsAllTags();
  }, []);

  const renderTagsItems=({ item }: { item: TagType })=>{
    return(
      <GhostCard cardInfo={item.tag} />
    )
  }
 

  return (
    <View style={styles.container}>
      <GhostInput
        placeholder='Etiket giriniz...'
        placeholderTextColor={colors.ghostWhite}
        value={tag}
        onChangeText={(v) => setTag(v)}
        onSubmitEditing={handleSaveTags} />

        <FlatList
          data={tags}
          renderItem={renderTagsItems}
        />
        
    </View>
  )
}

export default Tags