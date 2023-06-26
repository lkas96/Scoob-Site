import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		padding: 15,
		alignItems: "center",
		borderRadius: 5,
	},

	text: {
		fontWeight: "bold",
		color: "white",
	},

	container_PRIMARY: {
		backgroundColor: "#3B71F3",
	},

	container_TERTIARY: {
		backgroundColor: COLORS.primary,
		width: "75%",
		padding: 15,
		margin: 10,
		alignItems: "center",
		borderRadius: 5,
	},

	text_TERTIARY: {
		color: "black",
	},

	container_HOME: {
		backgroundColor: COLORS.primary,
		width: "100%",
		marginBottom: 10,
		marginTop: 10,
		borderRadius: 10,
	},

	text_HOME: {
		color: "black",
		fontSize: 20,
		padding: 35,
	},

	container_INFO: {
		backgroundColor: COLORS.primary,
		width: "75%",
		marginBottom: 10,
		marginTop: 10,
		borderRadius: 10,
	},

	text_INFO: {
		color: "black",
		fontSize: 20,
		padding: 15,
	},
});

export default styles;
