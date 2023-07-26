import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/Ionicons";
import CustomButton from "../../components/CustomButton";
import { COLORS } from "../../constants";
import UserContext from "../../context/UserContext";

const BusServicePage = ({ navigation }) => {
	const [count, setCount] = useState("");
	const { userDetails } = useContext(UserContext);
	const [childData, setChildData] = useState("");
	const [childName, setChildName] = useState([]);
	const [updatedAt, setUpdatedAt] = useState("");
	const [subscriptionStatus, setSubscriptionStatus] = useState("");

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

	const subscriptionHandler = () => {
		Alert.alert("Subscription", "Do you want to subscribe to bus service?", [
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel",
			},
			{ text: "OK", onPress: () => okHandler() },
		]);
	};
	const checkHandler = () => {
		console.log("studentid: " + childData[count].studentid);
		axios
			.get(
				`${lambdaEndpoint}/student/${childData[count].studentid}/subscriptionStatus`
			)
			.then((response) => {
				// Handle the response and set the profile data in the state
				console.log(response.data[0].subscription);
				setSubscriptionStatus(response.data[0].subscription);
				setTest(response.data[0].subscription);
			})
			.catch((error) => {
				console.error("Error fetching subscription data:", error);
			});
		console.log("subscriptionStatus: " + subscriptionStatus);
		console.log("testStatus: " + testRef.current);
		// if (subscriptionStatus === "No") {
		// 	navigation.navigate("ParentsSubscribePage");
		// } else if (subscriptionStatus === "Yes") {
		// 	navigation.navigate("ParentsSubscribedPage");
		// }
	};
	const checkNum = () => {
		// console.log(subscriptionStatus[0].subscription);
		console.log("count: " + count);
		console.log("studentid: " + childData[count].studentid);
		console.log("subscriptionStatusCheckNum: " + subscriptionStatus);
	};

	const okHandler = () => {
		// Fetch data from the Lambda function when the component mounts
		axios
			.put(`${lambdaEndpoint}/student/12345/notSubscribed`)
			.then((response) => {
				// Handle the response and set the profile data in the state
				(response) => setUpdatedAt(response.data.updatedAt);
			})
			.catch((error) => {
				console.error("Error updating profile data:", error);
			});
		Alert.alert("Subscribed");
		navigation.navigate("ParentsSubscribedPage", subscribed);
	};

	if (childData.length !== 0 && childName.length < childData.length) {
		childData.map((child) => {
			return childName.push(child.fname + " " + child.lname);
		});
		console.log(childData);
	}
	return (
		<SafeAreaView style={styles.container}>
			{/* <Text style={styles.header}>Subscribe to Bus Service</Text> */}
			<SelectDropdown
				statlog
				data={childName}
				defaultButtonText="Select child"
				onSelect={(selectedItem, index) => {
					console.log(selectedItem, index);
					setCount(index);
				}}
				buttonStyle={styles.dropdown2BtnStyle}
				buttonTextStyle={styles.dropdown2BtnTxtStyle}
				dropdownStyle={styles.dropdown2DropdownStyle}
				rowStyle={styles.dropdown2RowStyle}
				rowTextStyle={styles.dropdown2RowTxtStyle}
				selectedRowStyle={styles.dropdown2SelectedRowStyle}
				statusBarTranslucent={true}
				renderDropdownIcon={(isOpened) => {
					return (
						<Icon
							name={isOpened ? "caret-up" : "caret-down"}
							color={"#444"}
							size={20}
						/>
					);
				}}
				buttonTextAfterSelection={(selectedItem, index) => {
					// text represented after item is selected
					// if data array is an array of objects then return selectedItem.property to render after item is selected
					selectedUser = selectedItem;
					return selectedItem;
				}}
				rowTextForSelection={(item, index) => {
					// text represented for each item in dropdown
					// if data array is an array of objects then return item.property to represent item in dropdown
					console.log(item);
					return item;
				}}
			/>

			<CustomButton
				onPress={subscriptionHandler}
				text="Subscribe"
				type="TERTIARY"
			/>
			<CustomButton onPress={checkHandler} text="Check" type="TERTIARY" />
			<CustomButton onPress={checkNum} text="CheckNum" type="TERTIARY" />
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		fontSize: 35,
		fontFamily: "DMSerifDisplay-Regular",
	},
	dropdown2BtnStyle: {
		width: "90%",
		height: 50,
		backgroundColor: COLORS.white,
		// borderWidth: 2,
		// borderColor: COLORS.secondary,
		// borderRadius: 18,
		marginTop: 5,
	},
	dropdown2BtnTxtStyle: {
		color: COLORS.black,
		textAlign: "center",
		fontSize: 14,
	},
	dropdown2DropdownStyle: {
		backgroundColor: COLORS.white,
		borderRadius: 8,
	},
	dropdown2RowStyle: {
		backgroundColor: COLORS.white,
	},
	dropdown2RowTxtStyle: {
		color: COLORS.black,
		textAlign: "center",
		fontSize: 14,
	},
	dropdown2SelectedRowStyle: {
		backgroundColor: "rgba(255,255,255,0.2)",
	},
});
export default BusServicePage;
