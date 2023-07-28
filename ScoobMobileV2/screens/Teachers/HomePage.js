// import React, { useState } from "react";
// import { Alert, FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
// import CustomButton from "../../components/CustomButton";

// const HomePage = ({ navigation }) => {
// 	const [child, setChild] = useState([
// 		{ name: "John Alexis", id: "1", class: "1A", address: "Jurong" },
// 		{ name: "Random Man", id: "2", class: "2A", address: "Pasir Ris" },
// 		{ name: "Eternal Blue", id: "3", class: "3A", address: "tampines" },
// 		{ name: "Long Gone Kid", id: "4", class: "4A", address: "Seng Kang" },
// 		{ name: "Bareback Brother", id: "5", class: "5A", address: "Woodlands" },
// 		{ name: "Toad Mushroom", id: "6", class: "6A", address: "Bishan" },
// 		{ name: "Coder4Lyfe", id: "7", class: "2B", address: "Tiong Bahru" },
// 		{ name: "Luigi Mario", id: "8", class: "4C", address: "Redhill" },
// 		{ name: "Peach Bowser", id: "9", class: "1D", address: "Bukit Panjang" },
// 		{ name: "Who Is This", id: "10", class: "6F", address: "Bukit Batok" },
// 	]);

// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<Text style={styles.title}>Pick Up Zone</Text>
// 			<SafeAreaView style={styles.scrollContainer}>
// 				<FlatList
// 					showsVerticalScrollIndicator={false}
// 					contentContainerStyle={styles.scrollViewItem}
// 					// keyExtractor={(item) => item.id} //if you want to extract key value
// 					data={child}
// 					renderItem={({ item }) => (
// 						<CustomButton
// 							text={`${item.name}`}
// 							type="SECONDARY"
// 							onPress={() =>
// 								navigation.navigate("TeacherPickUpStack", { childInfo: item })
// 							}
// 						/>
// 					)}
// 				/>
// 			</SafeAreaView>
// 		</SafeAreaView>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 0.4,
// 		paddingHorizontal: 10,
// 	},
// 	scrollContainer: {
// 		paddingHorizontal: 15,
// 		borderRadius: 8,
// 		backgroundColor: "lightgray",
// 		margin: 1,
// 	},
// 	item: {
// 		marginTop: 24,
// 		backgroundColor: "yellow",
// 		fontSize: 24,
// 	},
// 	scrollViewItem: {
// 		justifyContent: "center",
// 		alignSelf: "stretch",
// 	},
// 	image: {
// 		resizeMode: "contain",
// 		height: 20,
// 		width: 10,
// 	},
// 	title: {
// 		fontWeight: "bold",
// 		fontSize: 25,
// 		paddingTop: 10,
// 		paddingLeft: 10,
// 	},
// });

// export default HomePage;

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
	Alert,
	FlatList,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	TouchableHighlight,
	View,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import UserContext from "../../context/UserContext";

import { Text } from "@react-native-material/core";
import { Avatar, ListItem } from "@rneui/base";
import { Icon } from "react-native-elements";
import COLORS from "../../constants/colors";

const HomePage = ({ navigation }) => {
	const { userDetails } = useContext(UserContext);
	const [childData, setChildData] = useState("");
	const lambdaEndpoint =
		"https://2teci17879.execute-api.ap-southeast-1.amazonaws.com/dev";

	// console.log(userDetails);
	const fetchStudentData = async () => {
		try {
			const response = await axios.get(
				`${lambdaEndpoint}/teacher/${userDetails.userClass}/pickupstatus/arrived`
			);
			const data = response.data;
			// console.log(data);
			setChildData(data);
			console.log("Fetching...");
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const focusHandler = navigation.addListener("focus", () => {
			fetchStudentData();
			console.log("Refreshed!");
		});
		return focusHandler;
	}, [navigation]);

	return (
		<SafeAreaView style={styles.container}>
			<Text variant="h4" style={styles.title}>
				Student(s)
			</Text>
			<View style={styles.scrollContainer}>
				<FlatList
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.scrollViewItem}
					// keyExtractor={(item) => item.id} //if you want to extract key value
					data={childData}
					renderItem={({ item }) => (
						// <CustomButton
						// 	text={`${item.fname} ${item.lname}`}
						// 	type="SECONDARY"
						// 	onPress={() =>
						// 		navigation.navigate("ChildInfoStack", { childInfo: item })
						// 	}
						// />
						<ListItem
							bottomDivider
							Component={TouchableHighlight}
							containerStyle={{
								// borderRadius: 8,
								height: 150,
							}}
							disabledStyle={{ opacity: 0.5 }}
							onLongPress={() => console.log("onLongPress()")}
							// onPress={() =>
							// 	navigation.navigate("ChildInfoStack", { childInfo: item })
							// }
							pad={20}
						>
							<Avatar
								rounded
								title={`${item.fname[0]}`}
								containerStyle={{ backgroundColor: "grey" }}
								// source={{
								// 	uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4",
								// }}
							/>
							<ListItem.Content>
								<ListItem.Title>
									<Text
										variant="h5"
										style={styles.text}
									>{`${item.fname} ${item.lname}`}</Text>
								</ListItem.Title>
								<ListItem.Subtitle>
									<Text>{`${item.studentid}, ${item.class}`}</Text>
								</ListItem.Subtitle>
								<ListItem.Subtitle></ListItem.Subtitle>
							</ListItem.Content>
							<ListItem.Chevron />
						</ListItem>
					)}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
	},
	scrollContainer: {
		// paddingHorizontal: 15,
		padding: 8,
		borderRadius: 8,
		backgroundColor: "lightgray",
		margin: 10,
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
		// paddingTop: 10,
		// paddingLeft: 10,
		padding: 15,
		fontWeight: "bold",
		// fontFamily: "NunitoSans-Bold",
	},
	text: {
		fontWeight: "bold",
	},
});

export default HomePage;
