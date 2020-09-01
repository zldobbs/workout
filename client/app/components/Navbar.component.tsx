import React from 'react'; 
import { View, Button } from 'react-native';
import { Colors, Nav } from "../styles/index"; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../views/Profile.view';
import Lift from '../views/Lift.view';
import Dashboard from '../views/Dashboard.view';

export enum NavbarSelections {
  Profile, 
  Feed, 
  Lift
}

interface InputFieldProps {
  selected: NavbarSelections
}

export default function Navbar(props: InputFieldProps) {
  const Tab = createBottomTabNavigator();

  return(
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
      <Tab.Screen name="Feed" component={Dashboard}></Tab.Screen>
      <Tab.Screen name="Lift" component={Lift}></Tab.Screen>
    </Tab.Navigator>
  );

  /*

  Navbar without using bottom tabs

  return(
    <View style={Nav.navBar}>
      <View style={[Nav.navCell, props.selected == NavbarSelections.Profile ? Nav.selected : Nav.dormant]}>
        <Button title="Profile" onPress={() => navigation.navigate('Profile')} color={Colors.black}/>
      </View>
      <View style={[Nav.navCell, props.selected == NavbarSelections.Feed ? Nav.selected : Nav.dormant]}>
        <Button title="Feed" onPress={() => navigation.navigate('Dashboard')} color={Colors.black}/>
      </View>
      <View style={[Nav.navCell, props.selected == NavbarSelections.Lift ? Nav.selected : Nav.dormant]}>
        <Button title="Lift" onPress={() => navigation.navigate('Lift')} color={Colors.black}/>
      </View>
    </View>
  );
  */
}