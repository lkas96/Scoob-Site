import React, { useState } from "react";
import {
	Alert,
	FlatList,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";

import CustomButton from "../../components/CustomButton";
import { COLORS } from "../../constants";

import { HStack, Stack, VStack } from "react-native-flex-layout";

import { Text } from "@react-native-material/core";
import { Button } from "@rneui/themed";

const ChildInfoPage = ({ route, navigation }) => {
	const generateQR = () => {
		navigation.navigate("ThirdPartyQR", route.params);
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
			<View style={styles.studentDetails}>
				{/* <FlatList
					showsVerticalScrollIndicator={false}
					scrollEnabled={false}
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
								NRIC: {space}
								{item.id}
							</Text>
							<Text style={styles.details}>
								Class: {space}
								{item.class}
							</Text>
							<Text style={styles.details}>Address: {item.address}</Text>
						</View>
					)}
					numColumns={2}
				/> */}
				<VStack m={10} spacing={5}>
					<Text variant="h2" style={styles.studentName}>
						{route.params.fname} {route.params.lname}
					</Text>
					<Text variant="h6" style={styles.details}>
						{route.params.studentid}
					</Text>
					<Text variant="h6" style={styles.details}>
						{route.params.class}
					</Text>
				</VStack>
			</View>

			<View style={styles.buttonStack}>
				{/* <CustomButton
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
				<CustomButton text="Arrived" type="TERTIARY" onPress={arrivedHandler} /> */}

				<VStack>
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
						onPress={selfPickUpHandler}
						title="Change to Self Pickup"
						titleProps={{}}
						titleStyle={{ marginHorizontal: 5, color: COLORS.black }}
					/>
					<HStack>
						<Button
							buttonStyle={{
								width: 150,
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
							onPress={pickUpHandler}
							title="Self"
							titleProps={{}}
							titleStyle={{ marginHorizontal: 5, color: COLORS.black }}
						/>
						<Button
							buttonStyle={{
								width: 150,
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
							onPress={generateQR}
							title="Third Party"
							titleProps={{}}
							titleStyle={{ marginHorizontal: 5, color: COLORS.black }}
						/>
					</HStack>
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
						onPress={arrivedHandler}
						title="Arrived"
						titleProps={{}}
						titleStyle={{ marginHorizontal: 5, color: COLORS.black }}
					/>
				</VStack>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "center",
		justifyContent: "flex-start",
	},
	studentDetails: {
		alignItems: "flex-start",
		// backgroundColor: "pink",
		height: "30%",
	},
	buttonStack: {
		alignItems: "center",
		// paddingTop: 250,
	},
	text: {
		fontSize: 18,
	},
	studentName: {
		fontWeight: "bold",
	},
	details: {},
	row: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
	},
	scrollViewItem: {
		// backgroundColor: COLORS.primary,
		flex: 1,
	},
	buttonStyle: {
		backgroundColor: COLORS.primary,
		borderWidth: 0,
		color: COLORS.white,
		borderColor: COLORS.primary,
		alignItems: "center",
		borderRadius: 5,
		marginTop: 30,
		padding: 10,
	},
	buttonTextStyle: {
		color: COLORS.black,
		paddingVertical: 10,
		fontSize: 16,
	},
});

export default ChildInfoPage;
