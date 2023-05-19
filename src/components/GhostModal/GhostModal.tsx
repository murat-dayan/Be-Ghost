import { View, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './GhostModal.style'
import Modal from 'react-native-modal'
import GhostButton from '../GhostButton/GhostButton'
import GhostWhiteButton from '../GhostWhiteButton/GhostWhiteButton'

interface GhostModalProps {
  isVisible: boolean;
  onClose: () => void;
}


const GhostModal: FC<GhostModalProps> = ({ isVisible, onClose }) => {
  return (
    <Modal style={styles.modal} 
            isVisible={isVisible} 
            swipeDirection='down' 
            onSwipeComplete={onClose} 
            onBackButtonPress={onClose} 
            onBackdropPress={onClose} >
      <View style={styles.container}>
      </View>
    </Modal>
  )
}

export default GhostModal