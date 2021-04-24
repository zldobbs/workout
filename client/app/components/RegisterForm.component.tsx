import React, { Component, ComponentState } from 'react'; 
import { Text, View, Button } from 'react-native';
import { AxiosResponse, AxiosError } from 'axios'; 

import InputField from './InputField.component';
import { Typography, Spacing, Colors } from '../styles/index';

import WebAPI, { RegisterRequest, LoginRequest } from '../services/WebAPI.service';

interface RegisterFormProps {
  handleLogin: Function
}

interface RegisterFormState extends RegisterRequest {
  confirmPassword: string,
  errorMessage: string
}

// Display to users that need to login or register before accessing app 
export default class RegisterForm extends Component<RegisterFormProps, RegisterFormState> {
  constructor(props: any) {
    super(props); 

    this.state = {
      firstName: '',
      lastName: '', 
      email: '', 
      username: '', 
      password: '', 
      confirmPassword: '',
      errorMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this); 
  }

  // Handle form data update 
  handleChange(fieldName: string, text: string) {
    this.setState({ [fieldName]: text } as ComponentState);
  }

  // Handle submitting registration form
  handleSubmitForm() {
    if (this.state.password != this.state.confirmPassword) {
      this.setState({ errorMessage: "Passwords do not match" });
      return;
    }

    WebAPI.registrationService(this.state as RegisterRequest)
    .then((res: AxiosResponse) => {
      if (res.status == 200) {
        WebAPI.loginService(this.state as LoginRequest)
        .then((res: AxiosResponse) => {
          this.setState({ firstName: '', lastName: '', email: '', 
          username: '', password: '', confirmPassword: '', errorMessage: '' });
          this.props.handleLogin(res.data.token); 
        })
        .catch((err: AxiosError) => {
          if (err.response?.data.message) {
            this.setState({ errorMessage:  `Failed to login: ${err.response?.data.message}` });
          }
          else {
            this.setState({ errorMessage: `Failed to login: ${err.message}` });
          }
        });
      }
    })
    .catch((err: AxiosError) => {
      if (err.response?.data.message) {
        this.setState({ errorMessage: `Failed to register: ${err.response?.data.message}` });
      }
      else {
        this.setState({ errorMessage: `Failed to register: ${err.message}` });
      }
    });
  }

  render() {
    return(
      <View style={Spacing.separate}>
        <Text style={[Typography.headingText, Typography.centerAlign, Typography.textShadow]}>SIGN UP</Text>
        {
          this.state.errorMessage.length > 0 &&
          <Text style={Typography.errorText}>{this.state.errorMessage}</Text>
        }
        <InputField name="email" 
                    label="Email" 
                    value={this.state.email} 
                    changeHandler={this.handleChange}></InputField>
        <InputField name="firstName" 
                    label="First Name" 
                    value={this.state.firstName} 
                    changeHandler={this.handleChange}></InputField>
        <InputField name="lastName" 
                    label="Last Name" 
                    value={this.state.lastName} 
                    changeHandler={this.handleChange}></InputField>
        <InputField name="username" 
                    label="Username" 
                    value={this.state.username} 
                    changeHandler={this.handleChange}></InputField>
        <InputField name="password" 
                    label="Password" 
                    secure={true} 
                    value={this.state.password} 
                    changeHandler={this.handleChange}></InputField>
        <InputField name="confirmPassword" 
                    label="Confirm Password" 
                    secure={true} 
                    value={this.state.confirmPassword} 
                    changeHandler={this.handleChange}></InputField>
        <Button color={Colors.foreground} title="REGISTER" onPress={this.handleSubmitForm}></Button>
      </View>
    );
  }
}