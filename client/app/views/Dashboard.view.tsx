import React, { Component } from 'react'; 
import { Button, View } from 'react-native';
import { Colors, Base } from '../styles/index';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Config } from '../../config';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile.view';
import Feed from './Feed.view';
import Lift from './Lift.view';
// import Navbar, { NavbarSelections } from "../components/Navbar.component";

interface DashboardProps {
  navigation: any
}

interface DashboardState {
  // None... yet
}

export default class Dashboard extends Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props); 

    this.handleLogout = this.handleLogout.bind(this); 
  }

  componentDidMount() {
    axios.get(`${Config.API_URL}/user/`)
    .then((res: AxiosResponse) => {
      if (res.status !== 200) {
        this.props.navigation.navigate("Landing"); 
      }
    })
    .catch((err: AxiosError) => {
      console.log(err); 
    });
  }

  handleLogout() {
    axios.get(`${Config.API_URL}/user/logout`)
    .then((res: AxiosResponse) => {
      this.props.navigation.navigate("Landing");
    })
    .catch((err: AxiosError) => {
      console.log(err); 
    });
  }

  render() {
    const Tab = createBottomTabNavigator();

    return(
      <View style={Base.fluidContainer}>
        <Button color={Colors.foreground} title="Logout" onPress={this.handleLogout}></Button>
        <Tab.Navigator initialRouteName="Feed">
          <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
          <Tab.Screen name="Feed" component={Feed}></Tab.Screen>
          <Tab.Screen name="Lift" component={Lift}></Tab.Screen>
        </Tab.Navigator>
      </View>
    );

    // return(
    //   <View style={Base.fluidContainer}>
    //     {/* <Navbar selected={NavbarSelections.Feed}></Navbar> */}
    //     <Button color={Colors.foreground} title="Logout" onPress={this.handleLogout}></Button>
    //   </View>
    // );
  }
} 