import { View, Text, Image, StyleSheet, TextInput, FlatList } from 'react-native'
import React from 'react'

const ProfilePage = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require("../../assets/images/kemal.jpg")} />
			<View style={styles.details}>
				<Text style={styles.text}>Name: I Cant Code</Text>
				<Text style={styles.text}>NRIC/FIN: S1234567A</Text>
				<Text style={styles.text}>Email: soHard@gg.com</Text>
				<Text style={styles.text}>Phone Number: 91234567</Text>
				<Text style={styles.text}>|lll|||l||ll|||||</Text>
				<Text style={styles.text}>S1234567A</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 100
	},
	details: {

	},
	image: {
		resizeMode: 'contain',
		height: 200,
		width: 150,
	},
	text: {
		alignSelf: 'center',
		fontWeight: 'bold',
		fontSize: 24,
		margin: 10,
	}
})
export default ProfilePage