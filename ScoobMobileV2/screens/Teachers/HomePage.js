import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'

const HomePage = ( { navigation }) => {
  
  const chatHandler = () => {
    navigation.navigate('TeachersChatPage')
  };

  const pickUpZoneHandler = () => {
    navigation.navigate('TeachersPickUpZonePage')
  };

  const logOutHandler = () => {
      navigation.goBack()
  };
  
  return (
    <View style={styles.container}>
      <CustomButton 
        onPress={chatHandler}
        text="Chat"
        type='TERTIARY'
      />

      <CustomButton 
        onPress={pickUpZoneHandler}
        text="Pick Up Zone"
        type='TERTIARY'
      />

      <CustomButton
        onPress={logOutHandler}
        text="Logout"
        type='TERTIARY'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomePage