import React, { Component } from 'react'; 
import { Text, View } from 'react-native';
import axios, { AxiosError, AxiosResponse } from 'axios'; 
import { Colors, Base, Typography } from '../styles/index';
import { Config } from '../../config';

interface ProfileProps {
}

interface ProfileState {
}

// Display to users that need to login or register before accessing app
export default class Profile extends Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    console.log("Fetching");
    axios.get(`${Config.API_URL}/user/`, { withCredentials: true })
    .then((res: AxiosResponse) => {
      console.log("Success");
      console.log(res);
    })
    .catch((err: AxiosError) => {
      console.log("Failed");
      console.log(err); 
    });
  }

  render() {
    return(
      <View style={Base.centeredContainer}>
        <Text style={Typography.headingText}>PROFILE</Text>
      </View>
    );
  }
}