import React, { Component } from 'react'; 
import { Text, View } from 'react-native';
import { Colors, Base, Typography } from '../styles/index';
// import Navbar, { NavbarSelections } from '../components/Navbar.component';

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

  render() {
    return(
      <View style={Base.centeredContainer}>
        <Text style={Typography.headingText}>PROFILE</Text>
      </View>
    );
  }
}