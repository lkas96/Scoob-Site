import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
	Button,
	FlatList,
	Keyboard,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { setCustomText, setCustomTextInput } from "react-native-global-props";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./routes/AuthNavigator";

import COLORS from "./constants/colors";

// --------------AWS AMPLIFY ----------
import { Amplify, Auth } from "aws-amplify";
import aws_exports from "./src/aws-exports";
Amplify.configure(aws_exports);
//-------------------------------------

export default function App() {
	// ---------------- Load Fonts ----------------
	const [fontsLoaded] = useFonts({
		Urbanist: require("./assets/fonts/Urbanist.ttf"),
		"NunitoSans-Regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
		"NunitoSans-Bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
		"DMSerifDisplay-Regular": require("./assets/fonts/DMSerifDisplay-Regular.ttf"),
	});

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}
		prepare();
	}, []);

	if (!fontsLoaded) {
		return undefined;
	} else {
		SplashScreen.hideAsync();
	}
	// ----------------------------------------------

	// ---------------- Setting Global Styles ----------------
	const customTextProps = {
		style: {
			fontFamily: "NunitoSans-Regular",
			color: COLORS.text,
		},
	};
	setCustomText(customTextProps);

	const customTextInputProps = {
		style: {
			fontFamily: "NunitoSans-Regular",
			color: COLORS.text,
		},
	};
	setCustomTextInput(customTextInputProps);
	// --------------------------------------------------------

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				<AuthNavigator />
			</NavigationContainer>
		</GestureHandlerRootView>
	);
}
