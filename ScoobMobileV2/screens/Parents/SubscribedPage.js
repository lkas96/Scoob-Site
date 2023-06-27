import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";

const SubscribedPage = () => {
	return (
		<SafeAreaView style={styles.container}>
			{/* <Text>SubscribedPage</Text> */}
			<View>
				<Button title="BUtton0" />
				<Button title="BUtton0.5" />
			</View>
			<View style={styles.parent}>
				{/* <CustomButton text="Button1" type="QUARTERNARY" />
				<CustomButton text="Button2" type="QUARTERNARY" /> */}
				<Button title="BUtton1" />
				<Button title="BUtton2" />
			</View>
			<View>
				<Button title="BUtton3" />
				<Button title="BUtton4" />
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
});

export default SubscribedPage;
