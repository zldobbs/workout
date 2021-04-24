import React, { Component, ComponentState } from 'react'; 
import { Text, View, Button } from 'react-native';
import { AxiosResponse, AxiosError } from 'axios';

import InputField from './InputField.component';
import { Typography, Spacing, Colors } from '../styles/index';

import WebAPI, { LoginRequest } from '../services/WebAPI.service';

interface LoginFormProps {
  handleLogin: Function 
}

interface LoginFormState extends LoginRequest { 
  errorMessage: string
}

// Display to users that need to login or register before accessing app 
export default class LoginForm extends Component<LoginFormProps, LoginFormState> {
  constructor(props: any) {
    super(props); 

    this.state = {
      email: '', 
      password: '',
      errorMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this); 
  }

  // Handle form data update 
  handleChange(fieldName: string, text: string) {
    this.setState({ [fieldName]: text } as ComponentState);
  }

  // Handle submitting login form
  handleSubmitForm() {
    WebAPI.loginService(this.state as LoginRequest)
    .then((res: AxiosResponse) => {
      this.setState({ email: '', password: '', errorMessage: '' });
      this.props.handleLogin(res.data.token); 
    })
    .catch((err: AxiosError) => {
      if (err.response?.data.message) {
        this.setState({ errorMessage: `Failed to login: ${err.response?.data.message}` });
      }
      else {
        this.setState({ errorMessage: `Failed to login: ${err.message}` });
      }
    }); 
  }

  render() {
    return(
      <View style={Spacing.separate}>
        <Text style={[Typography.headingText, Typography.centerAlign, Typography.textShadow]}>SIGN IN</Text>
        {
          this.state.errorMessage.length > 0 &&
          <Text style={Typography.errorText}>{this.state.errorMessage}</Text>
        }
        <InputField name="email" 
                    label="Email" 
                    value={this.state.email} 
                    changeHandler={this.handleChange}></InputField>
        <InputField name="password" 
                    label="Password" 
                    secure={true} 
                    value={this.state.password} 
                    changeHandler={this.handleChange}></InputField>
        <Button color={Colors.foreground} title="LOGIN" onPress={this.handleSubmitForm}></Button>
      </View>
    );
  }
}