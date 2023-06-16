import { View, Text, TextInput} from 'react-native'
import React from 'react'

import styles from './custominput.style'

const CustomInput = ({value, setValue, placeholder, secureTextEntry, type}) => {
  return (
    <View style= {[styles.container, styles[`container_${type}`]]}>
      <TextInput
        value = {value}
        onChangeText={setValue} 
        placeholder={placeholder} 
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default CustomInput;