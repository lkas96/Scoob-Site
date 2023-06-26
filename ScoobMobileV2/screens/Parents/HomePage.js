import { StyleSheet, SafeAreaView, FlatList, Text } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";

const HomePage = ({ navigation }) => {
	const [child, setChild] = useState([
		{ name: "John Alexis", id: "1", class: "1A", address: "Jurong" },
		{ name: "Random Man", id: "2", class: "2A", address: "Pasir Ris" },
		{ name: "Eternal Blue", id: "3", class: "3A", address: "Tampines" },
		{ name: "Long Gone Kid", id: "4", class: "4A", address: "Seng Kang" },
		{ name: "Bareback Brother", id: "5", class: "5A", address: "Woodlands" },
		{ name: "Toad Mushroom", id: "6", class: "6A", address: "Bishan" },
		{ name: "Coder4Lyfe", id: "7", class: "2B", address: "Tiong Bahru" },
		{ name: "Luigi Mario", id: "8", class: "4C", address: "Redhill" },
		{ name: "Peach Bowser", id: "9", class: "1D", address: "Bukit Panjang" },
		{ name: "Who Is This", id: "10", class: "6F", address: "Bukit Batok" },
	]);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Child(s)</Text>
			<SafeAreaView style={styles.scrollContainer}>
				<FlatList
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.scrollViewItem}
					// keyExtractor={(item) => item.id} //if you want to extract key value
					data={child}
					renderItem={({ item }) => (
						<CustomButton
							text={`${item.name}`}
							type="HOME"
							onPress={() =>
								navigation.navigate("ChildInfoStack", { childInfo: item })
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
