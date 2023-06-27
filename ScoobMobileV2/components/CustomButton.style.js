import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.secondary,
		width: "100%",
		padding: 15,
		alignItems: "center",
		borderRadius: 5,
	},
	text: {
		fontFamily: "Montserrat-Bold",
		color: COLORS.white,
	},

	container_SECONDARY: {
		backgroundColor: COLORS.primary,
		marginBottom: 10,
		marginTop: 10,
		borderRadius: 10,
	},
	text_SECONDARY: {
		fontFamily: "Montserrat-Regular",
		color: COLORS.black,
		fontSize: 20,
		padding: 35,
	},

	container_TERTIARY: {
		backgroundColor: COLORS.primary,
		width: "75%",
		margin: 10,
	},
	text_TERTIARY: {
		fontFamily: "Montserrat-Regular",
		color: COLORS.black,
	},

	container_QUARTERNARY: {
		backgroundColor: COLORS.primary,
		width: "40%",
		padding: 0,
		marginVertical: 10,
		borderRadius: 10,
	},
	text_QUARTERNARY: {
		fontFamily: "Montserrat-Regular",
		color: COLORS.black,
		fontSize: 15,
		padding: 15,
	},
});

export default styles;
