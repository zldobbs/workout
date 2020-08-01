import React, { Component, ComponentState } from 'react'; 
import { Text, View, Button } from 'react-native';
import InputField from './InputField.component';
import { Typography, Spacing, Colors } from '../styles/index';
import { API_URL } from '../../App'; 

interface LoginFormProps {
  // None 
}

interface LoginFormState { 
  username: string, 
  password: string
}

// Display to users that need to login or register before accessing app 
export default class LoginForm extends Component<LoginFormProps, LoginFormState> {
  constructor(props: any) {
    super(props); 

    this.state = {
      username: '', 
      password: ''
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
    // TODO Convert this to use axios when I can npm install it... 
  }

  render() {
    return(
      <View style={Spacing.separate}>
        <Text style={[Typography.headingText, Typography.centerAlign]}>Sign In</Text>
        <InputField name="username" 
                    label="Username" 
                    value={this.state.username} 
                    changeHandler={this.handleChange}></InputField>
        <InputField name="password" 
                    label="Password" 
                    secure={true} 
                    value={this.state.password} 
                    changeHandler={this.handleChange}></InputField>
        <Button color={Colors.green} title="Login" onPress={this.handleSubmitForm}></Button>
      </View>
    );
  }
}