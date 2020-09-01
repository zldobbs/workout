import React, { Component } from 'react'; 
import { Text, View } from 'react-native';
import { Colors, Base, Typography } from '../styles/index';
// import Navbar, { NavbarSelections } from '../components/Navbar.component';

interface LiftProps {
}

interface LiftState {
}

// Display to users that need to login or register before accessing app
export default class Lift extends Component<LiftProps, LiftState> {
  constructor(props: LiftProps) {
    super(props);

    this.state = {
    };
  }

  render() {
    return(
      <View style={Base.centeredContainer}>
        <Text style={Typography.headingText}>LIFT</Text>
      </View>
    );
  }
}