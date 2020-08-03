import React, { Component, ComponentState } from 'react'; 
import { Text, View, Button } from 'react-native';
import InputField from './InputField.component';
import { Typography, Spacing, Colors } from '../styles/index';
import { Config } from '../../config'; 
import axios from 'axios'; 

interface RegisterFormProps {
  handleLogin: Function
}

interface RegisterFormState { 
  firstName: string, 
  lastName: string, 
  email: string, 
  username: string, 
  password: string, 
  confirmPassword: string
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
      confirmPassword: ''
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
    console.log(this.state);
    axios.post(`${Config.API_URL}/user/register`, this.state)
    .then((res) => {
      if (res.status == 200) {
        this.props.handleLogin(this.state.username);
      }
    })
    .catch((err) => {
      console.log(err); 
    });
  }

  render() {
    return(
      <View style={Spacing.separate}>
        <Text style={[Typography.headingText, Typography.centerAlign]}>Sign Up</Text>
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
        <Button color={Colors.green} title="Register" onPress={this.handleSubmitForm}></Button>
      </View>
    );
  }
}