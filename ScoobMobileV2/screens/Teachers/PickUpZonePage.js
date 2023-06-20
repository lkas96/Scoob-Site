import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const PickUpZonePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>TeachersPickUpPage</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
export default PickUpZonePage