import { View, Text, TouchableOpacity } from 'react-native'
import Icon from '../Icons/Icons';
import { Colors } from '../../Global/Colors';

function NavigationBar ({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: Colors.mainColor, height: 60 }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}
            >
              <Icon iconName={label}/>
              <Text style={{ color: isFocused ? Colors.contractColor : Colors.secondColor }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    )   
}

export default NavigationBar