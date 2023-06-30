import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function TestAnimation() {
	return (
		<SafeAreaView style={styles.container}>
			<Pressable
				onPress={() => {
					// alert("Pressed");
				}}
				style={({ pressed }) => [
					{
						backgroundColor: pressed ? "pink" : "grey",
					},
					styles.button,
				]}
			>
				<Text style={styles.text}>Im a button</Text>
			</Pressable>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		alignItems: "center",
		borderRadius: 18,
		padding: 6,
		height: 50,
	},
	text: {
		fontSize: 20,
	},
	ball: {
		flex: 1,
		width: 100,
		height: 100,
		borderRadius: 100 / 2,
	},
});
