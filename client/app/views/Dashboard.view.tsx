import React, { Component } from 'react'; 
import { Text, View } from 'react-native';
import { Spacing, Typography } from '../styles/index';
import axios from 'axios';
import { Config } from '../../config';

interface DashboardProps {
  username: string
}

interface DashboardState {
  username: string, 
  email: string 
}

export default class Dashboard extends Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props); 

    this.state = {
      username: "undefined",
      email: "undefined"
    };
  }

  componentDidMount() {
    axios.post(`${Config.API_URL}/user/`, this.props)
    .then((res: any) => {
      console.log(res); 
      this.setState({
        username: res.data.user.username,
        email: res.data.user.email 
      });
    })
    .catch((err) => {
      console.log(err); 
    });
  }

  render() {
    return(
      <View style={Spacing.centered}>
        <Text style={Typography.text}>You are on the dashboard. Congrats.</Text>
        <Text style={Typography.text}>You are {this.state.username}. Your email is {this.state.email}</Text>
      </View>
    );
  }
} 