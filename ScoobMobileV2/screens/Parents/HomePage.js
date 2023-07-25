import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
	FlatList,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import UserContext from "../../context/UserContext";

const HomePage = ({ navigation }) => {
	const { userDetails } = useContext(UserContext);
	const [childData, setChildData] = useState("");

	const lambdaEndpoint =
		"https://2teci17879.execute-api.ap-southeast-1.amazonaws.com/dev";

	useEffect(() => {
		// Fetch data from the Lambda function when the component mounts
		axios
			.get(`${lambdaEndpoint}/student/${userDetails.userId}`)
			.then((response) => {
				// Handle the response and set the profile data in the state
				setChildData(response.data);
			})
			.catch((error) => {
				console.error("Error fetching profile data:", error);
			});
	}, [userDetails]);

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
// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import {
// 	FlatList,
// 	SafeAreaView,
// 	ScrollView,
// 	StyleSheet,
// 	Text,
// 	View,
// } from "react-native";
// import CustomButton from "../../components/CustomButton";
// import UserContext from "../../context/UserContext";

// const HomePage = ({ navigation }) => {
// 	const { userDetails } = useContext(UserContext);
// 	const [childData, setChildData] = useState("");

// 	const lambdaEndpoint =
// 		"https://2teci17879.execute-api.ap-southeast-1.amazonaws.com/dev";

// 	useEffect(() => {
// 		// Fetch data from the Lambda function when the component mounts
// 		//!!!!!!!!!!!!!!!!!!!!!!!!!!! get parentid using parameter
// 		axios
// 			.get(`${lambdaEndpoint}/student/${userDetails.parentid}`)
// 			.then((response) => {
// 				// Handle the response and set the profile data in the state
// 				setChildData(response.data);
// 			})
// 			.catch((error) => {
// 				console.error("Error fetching profile data:", error);
// 			});
// 	}, [userDetails]);

// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<Text style={styles.title}>Child(s)</Text>
// 			<View style={styles.scrollContainer}>
// 				<FlatList
// 					showsVerticalScrollIndicator={false}
// 					contentContainerStyle={styles.scrollViewItem}
// 					// keyExtractor={(item) => item.id} //if you want to extract key value
// 					data={childData}
// 					renderItem={({ item }) => (
// 						<CustomButton
// 							text={`${item.fname} ${item.lname}`}
// 							type="SECONDARY"
// 							onPress={() =>
// 								navigation.navigate("ChildInfoStack", { childInfo: item })
// 							}
// 						/>
// 					)}
// 				/>
// 			</View>
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
// 		fontSize: 25,
// 		paddingTop: 10,
// 		paddingLeft: 10,
// 		fontFamily: "NunitoSans-Bold",
// 	},
// 	text: {
// 		fontWeight: "400",
// 		fontSize: 18,
// 	},
// });

// export default HomePage;
