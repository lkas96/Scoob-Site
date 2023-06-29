import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TestButton() {
	return (
		<Pressable>
			<Text>Im a button</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {},
	text: {},
});
