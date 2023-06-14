import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, icons, images, SIZES } from '../../constants';

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
      backgroundColor: COLORS.white,
      width: '100%',
      height: 50,
      borderColor: COLORS.white,
      borderRadius: 10,
    },
    container_FP: {
      width: '75%',
    },
    input: {
      height: 50,
      width: '100%',
      borderColor: COLORS.white,
      borderWidth: 1,
      borderRadius: 10,
      textAlign: "center",
    },
})

export default CustomInput