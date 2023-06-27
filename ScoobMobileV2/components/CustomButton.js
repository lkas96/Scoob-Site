import React from "react";
import { Icon, Pressable, Text, View } from "react-native";

import styles from "./CustomButton.style";

const CustomButton = ({ onPress, text, type }) => {
	return (
		<Pressable
			onPress={onPress}
			style={[styles.container, styles[`container_${type}`]]}
		>
			<Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
		</Pressable>
	);
};

export default CustomButton;
