import React, { Component } from 'react'; 
import { Button, View } from 'react-native';
import { Colors, Base } from '../styles/index';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Config } from '../../config';
import Navbar from '../components/Navbar.component';

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
    return(
      <View style={Base.fluidContainer}>
        <Button color={Colors.foreground} title="Logout" onPress={this.handleLogout}></Button>
        <Navbar></Navbar>
      </View>
    );
  }
} 