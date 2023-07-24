import Barcode from "@kichiyaki/react-native-barcode-generator";
import React, { useEffect, useState, useContext } from "react";
import { Alert, Image, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import CustomButton from "../../components/CustomButton";
import { COLORS } from "../../constants";
import axios from 'axios';
import UserContext from '../../context/UserContext';


const ProfilePage = ({ route }) => {
	const editProfileHandler = () => {
		Alert.alert("Edit profile");
	};

	const { userEmail } = useContext(UserContext);
	const [profileData, setProfileData] = useState(null);

	const lambdaEndpoint = "https://2teci17879.execute-api.ap-southeast-1.amazonaws.com/dev/";
	useEffect(() => {
		// Fetch data from the Lambda function when the component mounts
		axios
			.get(`${lambdaEndpoint}/parent/${userEmail}`)
			.then((response) => {
				// Handle the response and set the profile data in the state
				setProfileData(response.data);
			})
			.catch((error) => {
				console.error('Error fetching profile data:', error);
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
						<Text style={styles.text}>Name: {profileData.fname} {profileData.lname}</Text>
						<Text style={styles.text}>NRIC/FIN: {profileData.nric}</Text>
						<Text style={styles.text}>Email: {profileData.email}</Text>
						<Text style={styles.text}>Phone Number: {profileData.phone}</Text>
						{/* Add more profile details as needed */}
					</>
				) : (
					<View style={styles.loading}>
						<ActivityIndicator size="large" color="#fd7e14" />
						<Text>Loading...</Text>
					</View>
				)}
				<Barcode
					value={route.params.parentInfo[0].id}
					height={80}
					background={COLORS.white}
				/>
			</View>
			<CustomButton
				text="Edit Profile"
				type="QUARTERNARY"
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
		fontSize: 24,
		margin: 8,
	},
});
export default ProfilePage;