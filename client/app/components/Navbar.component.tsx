import React from 'react'; 
import { Colors, Nav } from "../styles/index"; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../views/Profile.view';
import Lift from '../views/Lift.view';
import Feed from '../views/Feed.view';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export enum NavbarSelections {
  Profile, 
  Feed, 
  Lift
}

interface NavbarProps {
  // None
}

export default function Navbar(props: NavbarProps) {
  const Tab = createBottomTabNavigator();
  const iconColor = "black"

  return(
    <Tab.Navigator 
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: Colors.black, 
        style: {
          backgroundColor: Colors.foreground,
          shadowOffset: {
            width: 0, 
            height: -1
          },
          shadowOpacity: 0.25, 
          shadowRadius: 5
        }
      }}
    >
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: () => 
            <MaterialCommunityIcons name="account" size={32} color={iconColor}>
            </MaterialCommunityIcons>
        }}
      ></Tab.Screen>
      <Tab.Screen 
        name="Lift" 
        component={Lift}
        options={{
          tabBarIcon: () => 
            <MaterialCommunityIcons name="dumbbell" size={32} color={iconColor}>
            </MaterialCommunityIcons>
        }}
      ></Tab.Screen>
      <Tab.Screen 
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: () => 
            <MaterialCommunityIcons name="text-subject" size={32} color={iconColor}>
            </MaterialCommunityIcons>
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}