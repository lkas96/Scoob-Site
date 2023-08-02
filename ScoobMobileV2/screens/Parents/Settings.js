import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { COLORS } from "../../constants";

import { Button } from "@rneui/themed";
import { HStack, Stack, VStack } from "react-native-flex-layout";

function Settings({ navigation }) {
	const viewProfileHandler = () => {
		navigation.navigate("ParentsProfile");
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
			{/* <CustomButton
				onPress={viewProfileHandler}
				text="View Profile"
				type="TERTIARY"
			/> */}
			{/* <CustomButton onPress={logOutHandler} text="Logout" type="TERTIARY" /> */}
			<VStack m={4} spacing={6}>
				<Button
					buttonStyle={{
						width: "100%",
						backgroundColor: COLORS.primary,
						borderRadius: 8,
						height: 50,
					}}
					containerStyle={{ margin: 5 }}
					disabledStyle={{
						borderWidth: 2,
						borderColor: "#00F",
					}}
					disabledTitleStyle={{ color: "#00F" }}
					linearGradientProps={null}
					iconContainerStyle={{ background: "#000" }}
					loadingProps={{ animating: true }}
					loadingStyle={{}}
					onPress={viewProfileHandler}
					title="View Profile"
					uppercase={true}
					titleProps={{}}
					titleStyle={{
						marginHorizontal: 5,
						color: COLORS.black,
					}}
				/>
				<Button
					buttonStyle={{
						width: "100%",
						backgroundColor: COLORS.primary,
						borderRadius: 8,
						height: 50,
					}}
					containerStyle={{ margin: 5 }}
					disabledStyle={{
						borderWidth: 2,
						borderColor: "#00F",
					}}
					disabledTitleStyle={{ color: "#00F" }}
					linearGradientProps={null}
					iconContainerStyle={{ background: "#000" }}
					loadingProps={{ animating: true }}
					loadingStyle={{}}
					onPress={logOutHandler}
					title="Logout"
					uppercase={true}
					titleProps={{}}
					titleStyle={{
						marginHorizontal: 5,
						color: COLORS.black,
					}}
				/>
			</VStack>
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
