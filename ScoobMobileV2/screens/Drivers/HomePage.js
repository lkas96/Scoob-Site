import { View, StyleSheet} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';

const HomePage = ( { navigation }) => {
  const tripHandler = () => {
    navigation.navigate('DriversTripsPage')
  };

  const logOutHandler = () => {
    navigation.goBack()
  };
  
  return (
    <View style={styles.container}>
      <CustomButton 
        onPress={tripHandler}
        text="Trip"
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