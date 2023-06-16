import { View, Text, Pressable } from 'react-native'
import React from 'react'

import styles from './custombutton.style'

const CustomButton = ({ onPress, text, type="PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton;