import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import React from "react";
import {
	FlatList,
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TestAnimation from "../../components/TestAnimation";
import TestButton from "../../components/TestButton";

const ChatPage = () => {
	const tabBarHeight = useBottomTabBarHeight();

	return (
		<SafeAreaView style={[styles.container]}>
			<ScrollView style={{ flex: 1, width: "100%" }}>
				<View style={{ marginBottom: tabBarHeight }}>
					{/* <Text style={styles.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Text> */}
					{/* <Image
					style={{ resizeMode: "contain" }}
					source={require("../../assets/images/ScooB.png")}
				/>
					{/* <TestAnimation /> */}
					<TestButton style={styles.button} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontWeight: "400",
		fontSize: 43,
	},
	button: {
		flex: 1,
		width: "40",
	},
});

export default ChatPage;
