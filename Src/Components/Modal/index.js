import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { Modal } from "react-native";
import CommandButton from "../Button/CommandButton";
import { Colors } from "../../Global/Colors";

const styles = StyleSheet.create({
	// Modal
	modalContainer: {
		flex:1,
		flexDirection: "column",
		alignContent: "center",
		alignItems: "center",
		justifyContent: "center",
		paddingBottom: 40
	},
	modalTitle: {
		padding: 40,
		fontSize: 36
	},
	modalContent: {
		flexGrow: 2,
		fontSize: 18,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: Colors.secondColor,
		margin: 20,
		padding: 20
	}
});

function PopUp ({showModal, title, msg, onCloseButtonPress, onRequestClose}) {
	return (
		<Modal visible={showModal} onRequestClose={onRequestClose}>
			<View style={styles.modalContainer}>
				<Text style={styles.modalTitle}>{title}</Text>
				<Text style={styles.modalContent}>{msg}</Text>
				<CommandButton 
					onPress={onCloseButtonPress} 
					commandName={"Close"} 
					buttonType={"Text"}
					iconName={"Close"}
				/>
			</View>
		</Modal>
	);
}

export default PopUp;