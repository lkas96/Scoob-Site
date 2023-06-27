import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";

function Settings({ navigation }) {
	const [parent, setParent] = useState([
		{
			name: "John Alexis",
			id: "S9876543A",
			email: "john@gg.com",
			phoneNo: "91234567",
		},
	]);

	const viewProfileHandler = () => {
		navigation.navigate("ParentsProfile", { parentInfo: parent });
	};

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
			<CustomButton
				onPress={viewProfileHandler}
				text="View Profile"
				type="TERTIARY"
			/>
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
