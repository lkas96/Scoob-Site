import { Text, StyleSheet, SafeAreaView, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";

const HomePage = ({ navigation }) => {
	const [trips, setTrip] = useState([
		{ name: "Trip 1", id: "1", address: "Jurong" },
		{ name: "Trip 2", id: "2", address: "Pasir Ris" },
		{ name: "Trip 3", id: "3", address: "Tampines" },
		{ name: "Trip 4", id: "4", address: "Seng Kang" },
		{ name: "Trip 5", id: "5", address: "Woodlands" },
	]);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Trip(s)</Text>
			<SafeAreaView style={styles.scrollContainer}>
				<FlatList
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.scrollViewItem}
					// keyExtractor={(item) => item.id} //if you want to extract key value
					data={trips}
					renderItem={({ item }) => (
						<CustomButton
							text={`${item.name}`}
							type="HOME"
							onPress={() =>
								// navigation.navigate('ChildInfoStack',{childInfo: item})}
								Alert.alert(item.name, "Trip info")
							}
						/>
					)}
				/>
			</SafeAreaView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 0.4,
		paddingHorizontal: 10,
	},
	scrollContainer: {
		paddingHorizontal: 15,
		borderRadius: 8,
		backgroundColor: "lightgray",
		margin: 1,
	},
	item: {
		marginTop: 24,
		backgroundColor: "yellow",
		fontSize: 24,
	},
	scrollViewItem: {
		justifyContent: "center",
		alignSelf: "stretch",
	},
	image: {
		resizeMode: "contain",
		height: 20,
		width: 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: 25,
		paddingTop: 10,
		paddingLeft: 10,
	},
});

export default HomePage;
