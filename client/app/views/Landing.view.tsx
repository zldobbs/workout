import React, { Component } from 'react'; 
import { Button, View, Text, StyleSheet } from 'react-native';
import { Typography, Spacing } from '../styles/index';
import RegisterForm from '../components/RegisterForm.component';
import LoginForm from '../components/LoginForm.component';
import Dashboard from './Dashboard.view';

interface LandingProps {
  // None
}

interface LandingState {
  showForm: string, 
  loggedIn: boolean,
  username: string
}

// Display to users that need to login or register before accessing app
export default class Landing extends Component<LandingProps, LandingState> {
  constructor(props: LandingProps) {
    super(props);

    this.state = {
      showForm: "login", 
      loggedIn: false,
      username: ""
    };
    
    this.handleLogin = this.handleLogin.bind(this); 
    this.handleFormSwitch = this.handleFormSwitch.bind(this); 
  }
  
  handleLogin(username: string) {
    this.setState({ 
      loggedIn: true,
      username: username
    });
  }

  handleFormSwitch() {
    let { showForm } = this.state; 
    let newForm = showForm == "register" ? "login" : "register";
    this.setState({ showForm: newForm });
  }

  render() {
    if (!this.state.loggedIn) {
      return(
        <View style={styles.container}>
          <Text style={Typography.headingText}>WORKOUT</Text>
          <Text style={Typography.text}>Register or sign in to collaborate and reach your fitness goals today!</Text>
          {
            this.state.showForm == "register" &&
            <RegisterForm handleLogin={this.handleLogin}></RegisterForm>
          }
          {
            this.state.showForm != "register" &&
            <LoginForm handleLogin={this.handleLogin}></LoginForm>
          }
          <Button title={this.state.showForm == "register" ? "Already have an account? Login Here" : "Need an account? Sign up today"} onPress={this.handleFormSwitch}></Button>
        </View>
      );
    }
    else {
      return(
        <Dashboard username={this.state.username}></Dashboard>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    ...Spacing.centered,
    padding: "10%",
  }
});