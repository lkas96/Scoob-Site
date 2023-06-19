import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const BusServicePage = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <Text>Bus Service !</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
});
export default BusServicePage