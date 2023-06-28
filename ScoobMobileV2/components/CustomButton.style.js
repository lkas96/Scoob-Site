import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
	// -------------------------------
	// Default style
	container: {
		backgroundColor: COLORS.accent,
		width: "100%",
		padding: 15,
		alignItems: "center",
		borderRadius: 18,
	},
	text: {
		fontFamily: "Urbanist",
		color: COLORS.text,
	},
	// -------------------------------

	container_SECONDARY: {
		backgroundColor: COLORS.accent,
		marginBottom: 10,
		marginTop: 10,
		borderRadius: 18,
	},
	text_SECONDARY: {
		fontFamily: "Urbanist",
		color: COLORS.text,
		fontSize: 20,
		padding: 35,
	},

	container_TERTIARY: {
		backgroundColor: COLORS.accent,
		width: "75%",
		margin: 10,
	},
	text_TERTIARY: {
		fontFamily: "Urbanist",
		color: COLORS.text,
	},

	container_QUARTERNARY: {
		backgroundColor: COLORS.accent,
		width: "40%",
		padding: 0,
		marginVertical: 10,
		borderRadius: 18,
	},
	text_QUARTERNARY: {
		fontFamily: "Urbanist",
		color: COLORS.text,
		fontSize: 15,
		padding: 15,
	},
});

export default styles;
