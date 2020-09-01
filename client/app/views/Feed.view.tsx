import React, { Component } from 'react'; 
import { Text, View } from 'react-native';
import { Colors, Base, Typography } from '../styles/index';
// import Navbar, { NavbarSelections } from '../components/Navbar.component';

interface FeedProps {
}

interface FeedState {
}

// Display to users that need to login or register before accessing app
export default class Feed extends Component<FeedProps, FeedState> {
  constructor(props: FeedProps) {
    super(props);

    this.state = {
    };
  }

  render() {
    return(
      <View style={Base.centeredContainer}>
        <Text style={Typography.headingText}>FEED</Text>
      </View>
    );
  }
}