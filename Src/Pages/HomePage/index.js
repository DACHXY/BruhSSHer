import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import CommandButton from '../../Components/Button/CommandButton'
import axios from 'axios';

const styles = StyleSheet.create({
    textButtonContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding:0,
        gap: 10,
        width: "98%"
    }
})

function HomePage() {

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
            console.log("POST BRUH")
            axios.post('http://danny10132024-alps.nord:7401/api/User/command', config)
            .then((res) => console.log("RES:\t", command, res.data))
            .catch((err) => console.log(err))
        } catch(err) {
            console.log(err)
        }
    }

    const commandsData = useSelector((state) => state.command)
    return (
        <View style={styles.textButtonContainer}>
            {commandsData.map(x => 
                <CommandButton 
                onPress={() => onButtonPress(x.Command)}
                key={x.id} 
                commandName={x.CommandName}
                buttonType={x.ButtonType}
                iconName={"Home"}
                >
                </CommandButton>)
            }
        </View>
    )
}

export default HomePage