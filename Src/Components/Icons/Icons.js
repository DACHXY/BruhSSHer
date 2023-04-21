import React from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Colors } from "../../Global/Colors";

const size = 20;

function Icon({iconName}) {
	switch (iconName) {
	case "Home":
		return <FeatherIcon name='home' size={size} color={Colors.contractColor}/>;
	case "Settings":
		return <Ionicons name='settings-outline' size={size} color={Colors.contractColor}/>;
	case "Add":
		return <Ionicons name='add-circle-outline' size={size} color={Colors.contractColor}/>;
	case "Server":
		return <FeatherIcon name="server" size={size} color={Colors.contractColor}/>;
	case "Close":
		return <AntDesign name="closecircleo" size={size} color={Colors.contractColor}/>;
	default:
		return null;
	}
}

export default Icon;