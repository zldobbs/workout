import React, { Component } from 'react'; 
import { Text, View } from 'react-native';
import PortalButton from '../components/PortalButton.component';
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
        <PortalButton color={Colors.foreground} title="CREATE" subtext="Create a new workout plan"></PortalButton>
        <PortalButton color={Colors.foreground} title="BROWSE" subtext="Browse for new workout plans"></PortalButton>
      </View>
    );
  }
}