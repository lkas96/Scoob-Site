import axios from "axios";
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const ScannerPage = ({ route }) => {
	const allData = route.params;
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	const lambdaEndpoint =
		"https://2teci17879.execute-api.ap-southeast-1.amazonaws.com/dev";

	useEffect(() => {
		const getBarCodeScannerPermissions = async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === "granted");
		};

		getBarCodeScannerPermissions();
	}, []);
	// console.log(allData);

	const boardingBus = async (studentid) => {
		try {
			// Make the PUT request to update the pickupstatus of the student
			await axios.put(`${lambdaEndpoint}/student/${studentid}/onbus`, {
				pickupstatus: "Pickedup",
			});
			showPrompt("Bus Pick Up Successful");
		} catch (error) {
			console.error("Error updating pickupstatus:", error);
		}
	}

	const alightingBus = async (studentid) => {
		try {
			// Make the PUT request to update the pickupstatus of the student
			await axios.put(`${lambdaEndpoint}/student/${studentid}/pickedup`, {
				pickupstatus: "Pickedup",
			});
			showPrompt("Pickup Successful");
		} catch (error) {
			console.error("Error updating pickupstatus:", error);
		}
	}

	const handleBarCodeScanned = async ({ type, data }) => {
		setScanned(true);

		allData.childData.map((matched) =>
			// data === matched.studentid
			// 	? boardingBus(matched.studentid)
			// 	: data === matched.parentid ? alightingBus(matched.studentid) : showPrompt("Incorrect person")
			console.log("data: " + data + " studentid: " + matched.studentid)
		);

		// if (data === matched.studentid) {
		// 	// Students's barcode matches the database
		// 	try {
		// 		// Make the PUT request to update the pickupstatus of the student
		// 		await axios.put(`${lambdaEndpoint}/student/${matched.studentid}/onbus`, {
		// 			pickupstatus: "Pickedup",
		// 		});
		// 		showPrompt("Bus Pick Up Successful");
		// 	} catch (error) {
		// 		console.error("Error updating pickupstatus:", error);
		// 	}
		// } else if (data === matched.parentid) {
		// 	// Parent's barcode matches the student's parentid
		// 	try {
		// 		// Make the PUT request to update the pickupstatus of the student
		// 		await axios.put(`${lambdaEndpoint}/student/${matched.studentid}/pickedup`, {
		// 			pickupstatus: "Pickedup",
		// 		});
		// 		showPrompt("Pickup Successful");
		// 	} catch (error) {
		// 		console.error("Error updating pickupstatus:", error);
		// 	}
		// } else {
		// 	// Parent's barcode does not match the student's parentid
		// 	showPrompt("Incorrect Person");
		// }
	};
	const showPrompt = (message) => {
		// Implement your prompt display logic here (e.g., using Alert)
		alert(message);
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}


	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					paddingBottom: 20,
					justifyContent: "flex-start",
				}}
			>
				<Text style={styles.title}>Scan Code Below</Text>
			</View>
			<View>
				<BarCodeScanner
					onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
					style={{ height: 400, width: 400 }}
				/>
			</View>
			<View>
				{scanned && (
					<Button
						title={"Tap to scan again"}
						onPress={() => setScanned(false)}
					/>
				)}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	title: {
		fontFamily: "DMSerifDisplay-Regular",
		fontSize: 40,
	},
});

export default ScannerPage;
