import { Auth } from "aws-amplify";
import React from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";

function Settings({ navigation }) {
	const logOutHandler = async (data) => {
		try {
			await Auth.signOut();
			navigation.navigate("LoginPage");
			console.log("Successfully logged out");
		} catch (error) {
			console.log("error signing out: ", error);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<CustomButton onPress={logOutHandler} text="Logout" type="TERTIARY" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Settings;
