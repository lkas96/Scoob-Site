import React, { useState } from "react";
import {
	Alert,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";

import CustomButton from "../../components/CustomButton";

const ChildInfoPage = ({ route, navigation }) => {
	const generateQR = () => {
		navigation.navigate("ThirdPartyQR");
	};

	const selfPickUpHandler = () => {
		Alert.alert("Changed");
	};

	const pickUpHandler = () => {
		Alert.alert("Picking up");
	};

	const arrivedHandler = () => {
		Alert.alert("Arrived");
	};
	const space = "     ";
	return (
		<SafeAreaView style={styles.container}>
			<View style={{ alignItems: "center" }}>
				<FlatList
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.scrollViewItem}
					// keyExtractor={(item) => item.id} //if you want to extract key value
					data={[
						{
							fname: route.params.fname,
							lname: route.params.lname,
							id: route.params.studentid,
							class: route.params.class,
							address: route.params.address,
						},
					]}
					renderItem={({ item }) => (
						<View>
							<Text style={styles.details}>
								Name:{space}
								{item.fname} {item.lname}
							</Text>
							<Text style={styles.details}>
								NRIC: {space}{item.id}
							</Text>
							<Text style={styles.details}>
								Class: {space}
								{item.class}
							</Text>
							<Text style={styles.details}>Address: {item.address}</Text>
						</View>
					)}
					numColumns={2}
				/>
			</View>
			<View style={styles.button}>
				<CustomButton
					text="Change To Self Pick Up"
					type="TERTIARY"
					onPress={selfPickUpHandler}
				/>
				<View style={styles.row}>
					<CustomButton
						text="Pick Up"
						type="QUARTERNARY"
						onPress={pickUpHandler}
					/>
					<CustomButton
						text="Third Party Pick Up"
						type="QUARTERNARY"
						onPress={generateQR}
					/>
				</View>
				<CustomButton text="Arrived" type="TERTIARY" onPress={arrivedHandler} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		alignItems: "center",
		paddingTop: 250,
	},
	text: {
		fontSize: 18,
	},
	details: {
		fontSize: 20,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
	},
});

export default ChildInfoPage;
