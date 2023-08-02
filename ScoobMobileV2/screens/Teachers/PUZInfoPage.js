// import React from "react";
// import { SafeAreaView, StyleSheet, Text, View } from "react-native";

// import CustomButton from "../../components/CustomButton";
// const PUZInfoPage = ({ navigation, route }) => {
//   // Access the childInfo prop from the route object
//   const {
// 	fname,
// 	lname,
// } = route.params;

// console.log(route.params)

// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<View style={styles.text}>
// 				<Text style={styles.details}>Parent: </Text>
// 				<Text style={styles.details}>Child: {fname} {lname}</Text>
// 			</View>
// 			<View style={styles.button}>
// 				<CustomButton
// 					text="Scan ID"
// 					type="QUARTERNARY"
// 					onPress={() => navigation.navigate("ScanID")}
// 				/>
// 			</View>
// 		</SafeAreaView>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},
// 	button: {
// 		alignItems: "center",
// 		justifyContent: "center",
// 		flex: 0.5,
// 		paddingTop: 50,
// 	},
// 	text: {
// 		alignItems: "center",
// 		fontSize: 18,
// 		flex: 0.5,
// 		justifyContent: "flex-end",
// 	},
// 	details: {
// 		fontSize: 20,
// 		fontWeight: "bold",
// 		margin: 10,
// 	},
// });

// export default PUZInfoPage;

import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import CustomButton from "../../components/CustomButton";
const PUZInfoPage = ({ navigation, route }) => {
	const { fname, lname, parentFname, parentLname } = route.params;

	console.log(route.params);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.text}>
				<Text style={styles.details}>
					Parent: {parentFname} {parentLname}
				</Text>
				<Text style={styles.details}>
					Child: {fname} {lname}
				</Text>
			</View>
			<View style={styles.button}>
				<CustomButton
					text="Scan ID"
					type="QUARTERNARY"
					onPress={() =>
						navigation.navigate("ScanID", {
							parentid: route.params.parentid,
							studentid: route.params.studentid,
						})
					}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		flex: 0.5,
		paddingTop: 50,
	},
	text: {
		alignItems: "center",
		fontSize: 18,
		flex: 0.5,
		justifyContent: "flex-end",
	},
	details: {
		fontSize: 20,
		fontWeight: "bold",
		margin: 10,
	},
});

export default PUZInfoPage;
