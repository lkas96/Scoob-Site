import { View, Text, Image, StyleSheet, Alert } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import Barcode from "@kichiyaki/react-native-barcode-generator";
import { COLORS } from "../../constants";

const ProfilePage = ({ route }) => {
	const editProfileHandler = () => {
		Alert.alert("Edit profile");
	};

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require("../../assets/images/kemal.jpg")}
			/>
			<View style={styles.details}>
				<Text style={styles.text}>Name: {route.params.parentInfo[0].name}</Text>
				<Text style={styles.text}>
					NRIC/FIN: {route.params.parentInfo[0].id}
				</Text>
				<Text style={styles.text}>
					Email: {route.params.parentInfo[0].email}
				</Text>
				<Text style={styles.text}>
					Phone Number: {route.params.parentInfo[0].phoneNo}
				</Text>
				{/* <Text style={styles.text}>|lll|||l||ll|||||</Text>
				<Text style={styles.text}>{route.params.parentInfo[0].id}</Text> */}
				<Barcode
					value={route.params.parentInfo[0].id}
					height={80}
					background={COLORS.white}
				/>
			</View>
			<CustomButton
				text="Edit Profile"
				type="INFO"
				onPress={editProfileHandler}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingTop: 30,
	},
	details: {},
	image: {
		resizeMode: "contain",
		height: 200,
		width: 150,
	},
	text: {
		alignSelf: "center",
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
	},
});
export default ProfilePage;
