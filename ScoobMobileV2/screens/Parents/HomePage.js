import React, { useEffect, useState, useContext } from "react";
import {
	FlatList,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import axios from 'axios';
import UserContext from '../../context/UserContext';


const HomePage = ({ navigation }) => {

	const { userEmail } = "S9876543Z";
	const [childData, setChildData] = useState('');

	// Arshad's endpoint
	// const lambdaEndpoint = 'https://zmgz7zj1xa.execute-api.ap-southeast-1.amazonaws.com/prod';

	// Jaron's endpoint
	const lambdaEndpoint = 'https://kooz36ngo7.execute-api.ap-southeast-1.amazonaws.com/prod';

	// const [child, setChild] = useState([
	// 	{ name: "John Alexis", id: "1", class: "1A", address: "Jurong" },
	// 	{ name: "Random Man", id: "2", class: "2A", address: "Pasir Ris" },
	// 	{ name: "Eternal Blue", id: "3", class: "3A", address: "Tampines" },
	// 	{ name: "Long Gone Kid", id: "4", class: "4A", address: "Seng Kang" },
	// 	{ name: "Bareback Brother", id: "5", class: "5A", address: "Woodlands" },
	// 	{ name: "Toad Mushroom", id: "6", class: "6A", address: "Bishan" },
	// 	{ name: "Coder4Lyfe", id: "7", class: "2B", address: "Tiong Bahru" },
	// 	{ name: "Luigi Mario", id: "8", class: "4C", address: "Redhill" },
	// 	{ name: "Peach Bowser", id: "9", class: "1D", address: "Bukit Panjang" },
	// 	{ name: "Who Is This", id: "10", class: "6F", address: "Bukit Batok" },
	// ]);

	useEffect(() => {
		// Fetch data from the Lambda function when the component mounts
		//!!!!!!!!!!!!!!!!!!!!!!!!!!! get parentid using parameter
		axios
			.get(`${lambdaEndpoint}/student/S9876543Z`)
			.then((response) => {
				// Handle the response and set the profile data in the state
				setChildData(response.data);
			})
			.catch((error) => {
				console.error('Error fetching profile data:', error);
			});
	}, [userEmail]);
	console.log(childData);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Child(s)</Text>
			<View style={styles.scrollContainer}>
				<FlatList
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.scrollViewItem}
					// keyExtractor={(item) => item.id} //if you want to extract key value
					data={childData}
					renderItem={({ item }) => (
						<CustomButton
							text={`${item.fname} ${item.lname}`}
							type="SECONDARY"
							onPress={() =>
								navigation.navigate("ChildInfoStack", { childInfo: item })
							}
						/>
					)}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 0.4,
		paddingHorizontal: 10,
	},
	scrollContainer: {
		paddingHorizontal: 15,
		borderRadius: 8,
		backgroundColor: "lightgray",
		margin: 1,
	},
	scrollViewItem: {
		justifyContent: "center",
		alignSelf: "stretch",
	},
	image: {
		resizeMode: "contain",
		height: 20,
		width: 10,
	},
	title: {
		fontSize: 25,
		paddingTop: 10,
		paddingLeft: 10,
		fontFamily: "NunitoSans-Bold",
	},
	text: {
		fontWeight: "400",
		fontSize: 18,
	},
});

export default HomePage;
