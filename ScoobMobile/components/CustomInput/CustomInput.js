import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

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

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: '100%',

      borderColor: '#e8e8e8',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    container_FP: {
      width: '75%',
    },
    input: {
      height: 45,
      width: '100%',

      borderColor: '#e8e8e8',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginVertical: 10,
    },
})

export default CustomInput