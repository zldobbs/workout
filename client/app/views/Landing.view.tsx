import React, { Component } from 'react'; 
import { Button, View, Text } from 'react-native';
import { Colors, Typography, Base } from '../styles/index';
import RegisterForm from '../components/RegisterForm.component';
import LoginForm from '../components/LoginForm.component';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Config } from '../../config';

interface LandingProps {
  navigation: any
}

interface LandingState {
  showForm: string
}

// Display to users that need to login or register before accessing app
export default class Landing extends Component<LandingProps, LandingState> {
  constructor(props: LandingProps) {
    super(props);

    this.state = {
      showForm: "login",
    };
    
    this.handleLogin = this.handleLogin.bind(this); 
    this.handleFormSwitch = this.handleFormSwitch.bind(this); 
  }

  componentDidMount() {
    // Check if the user is already authenticated
    axios.get(`${Config.API_URL}/user/`)
    .then((res: AxiosResponse) => {
      if (res.status == 200) {
        this.props.navigation.navigate("Dashboard"); 
      }
    })
    .catch((err: AxiosError) => {
      console.log(err); 
    });
  }
  
  handleLogin() {
    this.props.navigation.navigate("Dashboard"); 
  }

  handleFormSwitch() {
    let { showForm } = this.state; 
    let newForm = showForm == "register" ? "login" : "register";
    this.setState({ showForm: newForm });
  }

  render() {
    return(
      <View style={Base.centeredContainer}>
        <Text style={[Typography.logoText, Typography.textShadow]}>beefhouse</Text>
        <Text style={Typography.text}>Register or sign in to collaborate and reach your fitness goals today!</Text>
        {
          this.state.showForm == "register" &&
          <RegisterForm handleLogin={this.handleLogin}></RegisterForm>
        }
        {
          this.state.showForm != "register" &&
          <LoginForm handleLogin={this.handleLogin}></LoginForm>
        }
        <Button color={Colors.foreground} title={this.state.showForm == "register" ? "Already have an account? Login Here" : "Need an account? Sign up today"} onPress={this.handleFormSwitch}></Button>
      </View>
    );
  }
}