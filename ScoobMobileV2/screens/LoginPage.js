import { useNavigation } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useContext } from "react";
import {
	Alert,
	FlatList,
	Image,
	Keyboard,
	KeyboardAvoidingView,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/Ionicons";
import CustomButton from "../components/CustomButton";
import { COLORS } from "../constants";
import axios from 'axios';
import UserContext from "../context/UserContext";

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
NEED TO CHANGE LAMBDA QUERY IF WANT TO USE "Parents/Guardians"
NOW CAN ONLY USE "Parent" IF NOT CANNOT GET FROM DB
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
function LoginPage() {
	const navigation = useNavigation();

	const users = ["Parent", "Teacher", "Driver"];

	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});
	const { setUserEmail } = useContext(UserContext);

	const onLoginPressed = async () => {
		try {
			// Make a POST request to the login route in the Lambda function
			const response = await axios.post('https://zmgz7zj1xa.execute-api.ap-southeast-1.amazonaws.com/prod/login', {
				email: credentials.username,
				password: credentials.password,
				userType: selectedUser.toLowerCase(),
			});

			// Check the response data for the login status
			if (response.data.message === 'Login successful') {
				const userType = response.data.userType;

				// Set the user's email using the setUserEmail function from the UserContext
				setUserEmail(credentials.username);

				switch (userType) {
					case 'teacher':
						//alert('Switch statement case teacher');
						navigation.navigate('TeacherBottomTab');
						break;
					case 'driver':
						//alert('Switch statement case driver');
						navigation.navigate('DriverBottomTab');
						break;
					case 'parent':
						//alert('Switch statement case parent');
						navigation.navigate('ParentBottomTab');
						break;
					default:
						//alert('Switch statement case none');

						// Handle other user types (if applicable)
						break;
				}
			} else {
				// Incorrect details, display an error message
				alert('Incorrect details');
			}
		} catch (err) {
			// Handle any errors that occur during the login process
			console.error('Error logging in:', err);
			alert('Failed to perform login');
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			{/* RN statusbar */}
			<StatusBar
				barStyle={"dark-content"}
				backgroundColor={COLORS.background}
			/>
			{/* Expo statusbar
			<StatusBar style="auto"/> */}

			<TouchableWithoutFeedback
				onPress={() => {
					Keyboard.dismiss();
				}}
			>
				<SafeAreaView style={styles.inner}>
					<Image
						style={styles.logo}
						source={require("../assets/images/ScooB.png")}
					/>
					<View style={styles.interactive}>
						<TextInput
							style={styles.input}
							placeholder="Username"
							onChangeText={(val) =>
								setCredentials({ ...credentials, username: val })
							}
						/>

						<TextInput
							style={styles.input}
							placeholder="Password"
							onChangeText={(val) =>
								setCredentials({ ...credentials, password: val })
							}
							secureTextEntry={true}
						/>

						<SelectDropdown
							statlog
							data={users}
							defaultButtonText="Select user"
							onSelect={(selectedItem, index) => {
								console.log(selectedItem, index);
							}}
							buttonStyle={styles.dropdown2BtnStyle}
							buttonTextStyle={styles.dropdown2BtnTxtStyle}
							dropdownStyle={styles.dropdown2DropdownStyle}
							rowStyle={styles.dropdown2RowStyle}
							rowTextStyle={styles.dropdown2RowTxtStyle}
							selectedRowStyle={styles.dropdown2SelectedRowStyle}
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
								return item;
							}}
						/>

						<View style={styles.buttonContainer}>
							<CustomButton
								text="Login"
								data={credentials}
								onPress={onLoginPressed}
							/>
						</View>
					</View>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
	},
	inner: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around",
	},
	logo: {
		resizeMode: "contain",
		height: 200,
		width: 300,
		marginTop: 20,
		marginBottom: 40,
	},
	interactive: {
		alignItems: "center",
		width: "100%",
	},
	input: {
		backgroundColor: COLORS.white,
		borderWidth: 2,
		borderColor: COLORS.secondary,
		borderRadius: 18,
		padding: 8,
		margin: 5,
		width: "80%",
		height: 50,
	},
	buttonContainer: {
		marginTop: 20,
		width: "80%",
	},
	dropdown2BtnStyle: {
		width: "80%",
		height: 50,
		backgroundColor: COLORS.white,
		borderWidth: 2,
		borderColor: COLORS.secondary,
		borderRadius: 18,
		marginTop: 5,
	},
	dropdown2BtnTxtStyle: {
		color: COLORS.black,
		textAlign: "center",
		fontSize: 14,
	},
	dropdown2DropdownStyle: {
		backgroundColor: COLORS.white,
		borderRadius: 18,
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

export default LoginPage;