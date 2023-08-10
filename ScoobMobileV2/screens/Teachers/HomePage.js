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

import { HStack, Text } from "@react-native-material/core";
import { Avatar, ListItem } from "@rneui/base";
import { Icon } from "react-native-elements";
import COLORS from "../../constants/colors";

const HomePage = ({ navigation }) => {
	const { userDetails } = useContext(UserContext);
	const [childData, setChildData] = useState("");
	const [studentData, setStudentData] = useState("");
	const lambdaEndpoint =
		"https://2teci17879.execute-api.ap-southeast-1.amazonaws.com/dev";

	console.log(userDetails);
	const fetchPUZStudentData = async () => {
		try {
			const response = await axios.get(
				`${lambdaEndpoint}/teacher/${userDetails.userClass}/pickupstatus/arrived`
			);
			const data = response.data;
			setChildData(data);
			console.log("Fetching...");
		} catch (error) {
			console.error(error);
		}
	};

	const fetchStudentData = async () => {
		try {
			const response = await axios.get(
				`${lambdaEndpoint}/teacher/${userDetails.userClass}`
			);
			const data = response.data;
			setStudentData(data);
			console.log("Fetching...");
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const focusHandler = navigation.addListener("focus", () => {
			fetchPUZStudentData();
			fetchStudentData();
			console.log("Refreshed!");
		});
		return focusHandler;
	}, [navigation]);

	return (
		<SafeAreaView style={styles.container}>
			<Text variant="h5" style={styles.title}>
				Student(s) in Pick Up Zone
			</Text>
			<View style={styles.scrollContainer}>
				<FlatList
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.scrollViewItem}
					// keyExtractor={(item) => item.id} //if you want to extract key value
					data={childData}
					renderItem={({ item }) => (
						<ListItem
							bottomDivider
							Component={TouchableHighlight}
							containerStyle={{
								// borderRadius: 8,
								height: 150,
							}}
							disabledStyle={{ opacity: 0.5 }}
							onLongPress={() => console.log("onLongPress()")}
							onPress={() =>
								navigation.navigate("TeacherPickUpStack", { childInfo: item })
							}
							pad={20}
						>
							<Avatar
								rounded
								title={`${item.fname[0]}`}
								containerStyle={{ backgroundColor: "grey" }}
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
			<Text variant="h5" style={styles.title}>
				Students in your class
			</Text>
			<View style={styles.scrollContainer}>
				<FlatList
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.scrollViewItem}
					// keyExtractor={(item) => item.id} //if you want to extract key value
					data={studentData}
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
								<ListItem.Subtitle>
									{/* // ! To change the naming */}
									{item.pickupstatus === "Picked Up" ? (
										<Text>Status: Picked Up</Text>
									) : item.pickupstatus === "Arriving" ? (
										<Text>Status: On the way</Text>
									) : (
										<Text>Status: Came</Text>
									)}
								</ListItem.Subtitle>
								<ListItem.Subtitle>
									{item.pickupmode === 1 ? (
										<Icon
											name="bus"
											type="ionicon" // Use the appropriate icon library/type
											color={COLORS.accent}
										/>
									) : (
										<Icon
											name="car-sport"
											type="ionicon" // Use the appropriate icon library/type
											color={COLORS.secondary}
										/>
									)}
								</ListItem.Subtitle>
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
		minHeight: 150,
		maxHeight: 350,
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
