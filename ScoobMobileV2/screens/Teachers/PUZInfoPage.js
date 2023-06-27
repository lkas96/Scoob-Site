import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import CustomButton from "../../components/CustomButton";
const PUZInfoPage = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.text}>
				<Text style={styles.details}>Parent : Parent1</Text>
				<Text style={styles.details}>Child : Child1</Text>
			</View>
			<View style={styles.button}>
				<CustomButton
					text="Scan ID"
					type="QUARTERNARY"
					onPress={() => navigation.navigate("ScanID")}
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
