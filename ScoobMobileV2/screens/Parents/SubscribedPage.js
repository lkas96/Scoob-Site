import React from "react";
import {
	Button,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import { COLORS } from "../../constants";

const SubscribedPage = () => {
	function something() {}

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<TouchableOpacity
					style={styles.buttonStyle}
					onPress={() => something()}
				>
					<Text style={styles.buttonTextStyle}>Generate QR Code</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	parent: {
		flexDirection: "row",
		justifyContent: "space-evenly",
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

export default SubscribedPage;
