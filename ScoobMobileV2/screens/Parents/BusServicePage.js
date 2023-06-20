import { View, Text, SafeAreaView, StyleSheet, Alert } from 'react-native'
import React from 'react'

import CustomButton from '../../components/CustomButton';

const BusServicePage = () => {

  const subscriptionHandler = () => {
    Alert.alert("Successfully subscribed!");
};

  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.header}>Subscribe to Bus Service</Text>

      <CustomButton 
        onPress={subscriptionHandler}
        text="Subscribe"
        type='TERTIARY'
      /> 
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  header: {
    fontWeight:'bold',
    fontSize: 35,
  }
});
export default BusServicePage