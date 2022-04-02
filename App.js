import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    YellowBox,
    LogBox,
} from 'react-native';

import ContactListScreen from './src/screens/ContactListScreen';
import ContactDetailScreen from './src/screens/ContactDetailScreen';
import NewContactScreen from './src/screens/NewContactScreen';

const Stack = createStackNavigator();

YellowBox.ignoreWarnings(['ViewPageAndroid']);
LogBox.ignoreAllLogs();
console.disableYellowBox = true;

class App extends React.Component {
    // ...

    render() {
        return (
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen
                            name="ContactListScreen"
                            component={ContactListScreen}
                        />
                        <Stack.Screen
                            name="ContactDetailScreen"
                            component={ContactDetailScreen}
                        />
                        <Stack.Screen
                            name="NewContactScreen"
                            component={NewContactScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
        )
    }
}

export default App;