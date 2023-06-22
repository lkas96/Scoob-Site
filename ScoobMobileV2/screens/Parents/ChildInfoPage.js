import { View, Text, StyleSheet, SafeAreaView, Alert} from 'react-native'
import React from 'react'

import CustomButton from '../../components/CustomButton'

const ChildInfoPage = ({route, navigation}) => {

	const generateQR = () => {
		navigation.navigate('ThirdPartyQR');
	}

  const selfPickUpHandler = () => {
    Alert.alert('Changed')
  }

  const pickUpHandler = () => {
    Alert.alert('Picking up')
  }

  const arrivedHandler = () => {
    Alert.alert('Arrived')
  }

	return (
		<SafeAreaView>
			<View>
				<Text style={styles.text}>Name: {route.params.name}</Text>
				<Text style={styles.text}>NRIC: {route.params.id}</Text>
				<Text style={styles.text}>Class: {route.params.class}</Text> 
				<Text style={styles.text}>Address: {route.params.address}</Text>
			</View>
			<View style={styles.button}>
				<CustomButton 
					text = "Change To Self Pick Up"
					type = "INFO"
          			onPress={selfPickUpHandler}
				/>
				<CustomButton 
					text = "Pick Up"
					type = "INFO"
          			onPress={pickUpHandler}
				/>
				<CustomButton onPress={generateQR}
					text = "Third Party Pick Up"
					type = "INFO"
				/>
				<CustomButton 
					text = "Arrived"
					type = "INFO"
          			onPress={arrivedHandler}
				/>
			</View>
		</SafeAreaView>
	)

}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    paddingTop: 40,
  },

  text: {
		fontSize:20,
		fontWeight: 'bold',
  },

})

export default ChildInfoPage