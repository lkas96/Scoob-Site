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

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./routes/AuthNavigator";

// --------------AWS AMPLIFY ----------
import { Amplify, Auth } from "aws-amplify";
import aws_exports from "./src/aws-exports";
Amplify.configure(aws_exports);
//-------------------------------------

export default function App() {
	const [fontsLoaded] = useFonts({
		"Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
		"Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
		"Montserrat-Italic": require("./assets/fonts/Montserrat-Italic.ttf"),
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

	return (
		<NavigationContainer>
			<AuthNavigator />
		</NavigationContainer>
	);
}
