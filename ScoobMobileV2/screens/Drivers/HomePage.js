import { View, StyleSheet} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';

const HomePage = ( { navigation }) => {
  const tripHandler = () => {
    navigation.navigate('Trips')
  };
  
  return (
    <View style={styles.container}>
      <CustomButton 
        onPress={tripHandler}
        text="Trip 1"
        type='TERTIARY'
      />
      <CustomButton 
        onPress={tripHandler}
        text="Trip 2"
        type='TERTIARY'
      />
      <CustomButton 
        onPress={tripHandler}
        text="Trip 3"
        type='TERTIARY'
      />
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