import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Colors } from "../../../Global/Colors";
import Icon from "../../Icons/Icons";
import { fontStyle } from "../../../Global/Fonts";

const styles = StyleSheet.create({
	buttonFrame: {
		width: 140,
		height: 40,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		gap: 4,

		elevation: 10, // 添加阴影效果,
		shadowOffset: {
			width: 0,
			height:2
		},

		borderRadius: 8,
		backgroundColor: Colors.mainColor,
	},
	IconFrame:{
		height: 40,
		width: 40,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		gap: 4,

		elevation: 10, // 添加阴影效果,
		shadowOffset: {
			width: 0,
			height:2
		},

		borderRadius: 8,
		backgroundColor: Colors.mainColor,
	},
	font: {
		...fontStyle
	}
});

function CommandButton({onPress, key, commandName, iconName, buttonType}) {
	return (
		<TouchableOpacity onPress={onPress} key={key} style={buttonType == "Icon"? styles.IconFrame : styles.buttonFrame}>
			<Icon iconName={iconName} />
			{buttonType == "Text" ? <Text style={styles.font}>{commandName}</Text> : null}
		</TouchableOpacity>
	);
}

export default CommandButton;