import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Pages from '../pages';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'; import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const NavStack = createBottomTabNavigator();
function StackNavBar() {
    return (
        <NavStack.Navigator>
            <NavStack.Screen
                name="Home"
                component={Pages.HomePages}
                options={{
                    headerTitle: 'Home',
                    tabBarIcon: ({ color }) => {
                        return <FontAwesomeIcon icon={faHome} size={20} color={color} />;
                    },
                }}
            />
            <NavStack.Screen
                name="Profile"
                component={Pages.ProfilePages}
                options={{
                    headerTitle: 'Search',
                    tabBarIcon: ({ color }) => {
                        return <FontAwesomeIcon icon={faUser} size={20} color={color} />;
                    },
                }}
            />
        </NavStack.Navigator>
    );
}
export default StackNavBar;
