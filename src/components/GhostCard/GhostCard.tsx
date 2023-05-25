import { Text, TouchableWithoutFeedback, TouchableWithoutFeedbackProps, View } from 'react-native'
import React, { FC } from 'react'
import styles from './GhostCard.style'

interface GhostCardProps extends TouchableWithoutFeedbackProps {
    cardInfo: string
}

const GhostCard: FC<GhostCardProps> = ({ cardInfo, ...rest }) => {
    return (
        <TouchableWithoutFeedback {...rest}>
            <View style={styles.container}>
                <Text style={styles.card_text}>{cardInfo}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default GhostCard