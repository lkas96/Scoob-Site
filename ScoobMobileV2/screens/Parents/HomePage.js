import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
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
import COLORS from "../../constants/colors";

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
			<Text variant="h4" style={styles.title}>
				Child(s)
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
							onPress={() =>
								navigation.navigate("ChildInfoStack", { childInfo: item })
							}
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
							</ListItem.Content>
						</ListItem>
					)}
				/>

				{/* <ListItem
					bottomDivider
					Component={TouchableHighlight}
					containerStyle={{}}
					disabledStyle={{ opacity: 0.5 }}
					onLongPress={() => console.log("onLongPress()")}
					onPress={() => console.log("onPress()")}
					pad={20}
				>
					<Avatar
						source={{
							uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4",
						}}
					/>
					<ListItem.Content>
						<ListItem.Title>
							<Text>Pranshu Chittora</Text>
						</ListItem.Title>
						<ListItem.Subtitle>
							<Text>React Native Elements</Text>
						</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem> */}
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
