import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'; import { createStackNavigator } from '@react-navigation/stack'; import StackNavBar from './stackNavBar.navigations';
import Pages from '../pages';
const Stack = createStackNavigator();
class Navigator extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Nav"
                        component={StackNavBar}
                        options={{
                            headerStyle: {
                                shadowOpacity: 0,
                                elevation: 0,
                            },
                            headerTitle: null,
                            headerShown: null,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default Navigator;
