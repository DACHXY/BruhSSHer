import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CommandButton from "../../Components/Button/CommandButton";
import axios from "axios";
import { useState } from "react";
import PopUp from "../../Components/Modal";

const styles = StyleSheet.create({
	textButtonContainer: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		padding:0,
		gap: 10,
		width: "98%"
	}
});

function HomePage() {
	const [showModal, setShowModal] = useState(false);
	const [resMsg, setResMsg] = useState("");

	// 按下 SSH 按鈕事件
	function onButtonPress(command) {
		const config = {
			host: "danny10132024-alps.nord",
			username: "danny",
			password: "danny2024",
			port: 22,
			command: command
		};  
		try {
			console.log(command);
			axios.post("http://danny10132024-alps.nord:7400/api/User/command", config)
				.then((res) => {
					setResMsg(res.data);
					setShowModal(true);
				})
				.catch((err) => console.log(err.data));
		} catch(err) {
			console.log(err);
		}
	}

	// 按下關閉懸浮視窗
	function handleCloseModal(){
		setShowModal(false);
	}

	const commandsData = useSelector((state) => state.command);
	return (
		<View style={styles.textButtonContainer}>
			<PopUp 
				showModal={showModal} 
				onCloseButtonPress={handleCloseModal} 
				onRequestClose={handleCloseModal} 
				title={"RESPONSE"}
				msg={resMsg}
			/>
			{commandsData.map(x => 
				<CommandButton 
					onPress={() => onButtonPress(x.Command)}
					key={x.id} 
					commandName={x.CommandName}
					buttonType={x.ButtonType}
					iconName={"Home"}
				/>
			)
			}
		</View>
	);
}

export default HomePage;