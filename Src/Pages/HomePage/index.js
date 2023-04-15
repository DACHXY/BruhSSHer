import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

function HomePage() {
    const commandsData = useSelector((state) => state.command)
    return (
        <View>
            {commandsData.map(x => <View key={x.id}><Text key={x.id}>{x.id}</Text></View>)}
        </View>
    )
}

export default HomePage