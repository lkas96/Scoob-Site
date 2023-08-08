import Barcode from "@kichiyaki/react-native-barcode-generator";
import { ActivityIndicator } from "@react-native-material/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import { COLORS } from "../../constants";
import UserContext from "../../context/UserContext";

import { Button } from "@rneui/themed";
import { HStack, Stack, VStack } from "react-native-flex-layout";

const ProfilePage = ({ route }) => {
	const editProfileHandler = () => {
		Alert.alert("Edit profile");
	};

	const { userEmail } = useContext(UserContext);
	const [profileData, setProfileData] = useState("");
	const lambdaEndpoint =
		"https://2teci17879.execute-api.ap-southeast-1.amazonaws.com/dev/";

	useEffect(() => {
		// Fetch data from the Lambda function when the component mounts
		axios
			.get(`${lambdaEndpoint}/parent/${userEmail}`)
			.then((response) => {
				// Handle the response and set the profile data in the state
				setProfileData(response.data);
				// console.log(profileData.parentid);
			})
			.catch((error) => {
				console.error("Error fetching profile data:", error);
			});
	}, [userEmail]);

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require("../../assets/images/kemal.jpg")}
			/>
			<View style={styles.details}>
				{profileData ? (
					<>
						<Text style={styles.text}>
							Name: {profileData.fname} {profileData.lname}
						</Text>
						<Text style={styles.text}>NRIC/FIN: {profileData.parentid}</Text>
						<Text style={styles.text}>Email: {profileData.email}</Text>
						<Text style={styles.text}>Phone Number: {profileData.phone}</Text>
						{/* Add more profile details as needed */}
						<Barcode
							value={profileData.parentid}
							height={80}
							background={COLORS.white}
						/>
					</>
				) : (
					<View style={styles.loading}>
						<ActivityIndicator size="large" color={COLORS.primary} />
						<Text>Loading...</Text>
					</View>
				)}
			</View>
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
					onPress={editProfileHandler}
					title="Edit Profile"
					uppercase={true}
					titleProps={{}}
					titleStyle={{
						marginHorizontal: 5,
						color: COLORS.black,
					}}
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
		fontSize: 24,
		margin: 8,
	},
});
export default ProfilePage;
