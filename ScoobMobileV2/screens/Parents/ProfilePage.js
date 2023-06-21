import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const ProfilePage = ({ route }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require("../../assets/images/kemal.jpg")} />
			<View style={styles.details}>
				<Text style={styles.text}>Name: {route.params.parentInfo[0].name}</Text>
				<Text style={styles.text}>NRIC/FIN: {route.params.parentInfo[0].id}</Text>
				<Text style={styles.text}>Email: {route.params.parentInfo[0].email}</Text>
				<Text style={styles.text}>Phone Number: {route.params.parentInfo[0].phoneNo}</Text>
				<Text style={styles.text}>|lll|||l||ll|||||</Text>
				<Text style={styles.text}>{route.params.parentInfo[0].id}</Text>
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