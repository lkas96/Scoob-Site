import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'

const HomePage = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Text>Home (display pickupzone info)</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage