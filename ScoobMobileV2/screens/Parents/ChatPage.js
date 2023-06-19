import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const ChatPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Chat !</Text>
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

export default ChatPage