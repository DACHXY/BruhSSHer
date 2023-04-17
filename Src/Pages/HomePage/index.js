import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import CommandButton from '../../Components/Button/CommandButton'

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
    async function onButtonPress(command) {
        const config = {
            host: "danny10132024-alps.nord",
            user: "danny",
            password: "danny2024",
            port: 22
        };  
        try {
            console.log(SSH)
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