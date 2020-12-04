
import * as React from 'react';
//import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//import splash from './splash';
import home from './home'
import settings from './settings'


const Tab = createMaterialTopTabNavigator();



function app() {
  	return (


		<NavigationContainer>
			<Tab.Navigator
				tabBarPosition = "bottom"
				tabBarOptions = {{
					activeTintColor: 'tomato',
					inactiveTintColor: 'gray',
					pressColor: 'transparent',
				  }}
			>
				<Tab.Screen name="Home" component={home} />
				<Tab.Screen name="Settings" component={settings} />
			</Tab.Navigator>
		</NavigationContainer>


  	);
}

export default app;