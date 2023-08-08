import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
	Alert,
	FlatList,
	SafeAreaView,
	StyleSheet,
	TouchableHighlight,
	View,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import UserContext from "../../context/UserContext";

import { HStack, Text } from "@react-native-material/core";
import { Avatar, ListItem } from "@rneui/base";
import { Button, Icon } from "@rneui/themed";
import COLORS from "../../constants/colors";

const HomePage = ({ navigation }) => {
	const { userDetails } = useContext(UserContext);
	const [childData, setChildData] = useState("");
	const [trip, setTrip] = useState(false);
	const lambdaEndpoint =
		"https://2teci17879.execute-api.ap-southeast-1.amazonaws.com/dev";

	/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		do dynamic busid*/
	const fetchStudentData = async () => {
		try {
			const response = await axios.get(
				`${lambdaEndpoint}/student/B006/takingbus`
			);
			const data = response.data;
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

	const startHandler = () => {
		console.log(userDetails.userId);
		axios
			.put(`${lambdaEndpoint}/bus_driver/${userDetails.userId}/start`)
			.then((response) => {
				// On the way to school
				Alert.alert("Success", "Trip has started!");
			})
			.catch((error) => {
				console.error("Error updating trip status:", error);
				// Show an error message to the user
				Alert.alert("Error", "Failed to update trip status. Please try again.");
			});
	};

	const endHandler = () => {
		axios
			.put(`${lambdaEndpoint}/bus_driver/${userDetails.userId}/end`)
			.then((response) => {
				// On the way to school
				Alert.alert("Success", "Trip has ended!");
			})
			.catch((error) => {
				console.error("Error updating pickup status:", error);
				// Show an error message to the user
				Alert.alert(
					"Error",
					"Failed to update pickup status. Please try again."
				);
			});
	};

	const scannerHandler = () => {
		navigation.navigate("DriversScannerPage");
	};

	return (
		<SafeAreaView style={styles.container}>
			<HStack justify={"space-between"} align={"center"} m={10}>
				<Text variant="h4" style={styles.title}>
					Trip
				</Text>
				<Icon
					raised
					name="barcode-scan"
					type="material-community"
					color={COLORS.secondary}
					// ! To change onPress to navigate to scanner
					// onPress={() => console.log("onPress()")}
					onPress={scannerHandler}
				/>
			</HStack>
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
								navigation.navigate("DriversTripsPage", { childInfo: item })
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
										// style={styles.text}
									>{`${item.fname} ${item.lname}`}</Text>
								</ListItem.Title>
								<ListItem.Subtitle>
									<Text>{`${item.studentid}, ${item.class}`}</Text>
								</ListItem.Subtitle>
								<ListItem.Subtitle>
									<Text>S'{`${item.pcode}`}</Text>
								</ListItem.Subtitle>
							</ListItem.Content>
							<ListItem.Chevron />
						</ListItem>
					)}
				/>
			</View>
			<View style={styles.buttonStack}>
				<HStack>
					<Button
						buttonStyle={{
							width: 150,
							backgroundColor: COLORS.primary,
							borderRadius: 8,
							height: 50,
						}}
						containerStyle={{ margin: 5 }}
						// disabled={pickUpMode === true ? true : false}
						disabledStyle={{}}
						disabledTitleStyle={{}}
						linearGradientProps={null}
						iconContainerStyle={{ background: "#000" }}
						loadingProps={{ animating: true }}
						loadingStyle={{}}
						onPress={startHandler}
						title="Start Trip"
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
						// disabled={pickUpMode === true ? true : false}
						disabledStyle={{}}
						disabledTitleStyle={{}}
						linearGradientProps={null}
						iconContainerStyle={{ background: "#000" }}
						loadingProps={{ animating: true }}
						loadingStyle={{}}
						onPress={endHandler}
						title="End trip"
						titleProps={{}}
						titleStyle={{ marginHorizontal: 5, color: COLORS.black }}
					/>
				</HStack>
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
	buttonStack: {
		alignItems: "center",
		// paddingTop: 250,
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

export default HomePage;
