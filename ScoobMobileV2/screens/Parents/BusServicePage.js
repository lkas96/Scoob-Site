import { View, Text, SafeAreaView, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";

import CustomButton from "../../components/CustomButton";

const BusServicePage = ({ navigation }) => {
	var subscribed = false;

	const okHandler = () => {
		subscribed = true;
		Alert.alert("Successfully subscribed");
		navigation.navigate("ParentsSubscribedPage", subscribed);
	};

	const subscriptionHandler = () => {
		Alert.alert("Subscription", "Do you want to subscribe to bus service?", [
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel",
			},
			{ text: "OK", onPress: () => okHandler() },
		]);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.header}>Subscribe to Bus Service</Text>

			<CustomButton
				onPress={subscriptionHandler}
				text="Subscribe"
				type="TERTIARY"
			/>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		fontWeight: "bold",
		fontSize: 35,
	},
});
export default BusServicePage;
