import React, { Component, ComponentState } from 'react'; 
import { Text, View, Button } from 'react-native';
import InputField from './InputField.component';
import { Typography, Spacing, Colors } from '../styles/index';
import { API_URL } from '../../App'; 

interface RegisterFormProps {
  // None 
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
    // TODO Convert this to use axios when I can npm install it... 
  }

  render() {
    return(
      <View style={Spacing.separate}>
        <Text style={[Typography.headingText, Typography.centerAlign]}>Sign Up</Text>
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