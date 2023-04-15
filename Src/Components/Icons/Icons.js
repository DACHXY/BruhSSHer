import FeatherIcon from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const size = 24

function Icon({iconName, style}) {
    switch (iconName) {
        case 'Home':
            return <FeatherIcon name='home' size={size} />;
        case 'Settings':
            return <Ionicons name='settings-outline' size={size} />;;
        case 'Add':
            return <Ionicons name='add-circle-outline' size={size}/>;
        case 'Server':
            return <FeatherIcon name="server" size={size}/>
        default:
            return null;
    }
}

export default Icon