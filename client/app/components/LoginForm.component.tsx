import React, { Component, ComponentState } from 'react'; 
import { Text, View, Button } from 'react-native';
import InputField from './InputField.component';
import { Typography, Spacing, Colors } from '../styles/index';
import { Config } from '../../config'; 
import axios, { AxiosResponse, AxiosError } from 'axios';

interface LoginRequest { 
  username: string, 
  password: string 
}

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
      username: '', 
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
    axios.post(`${Config.API_URL}/user/login`, this.state as LoginRequest)
    .then((res: AxiosResponse) => {
      if (res.status == 200) {
        this.setState({ username: '', password: '', errorMessage: '' });
        this.props.handleLogin(); 
      } 
    })
    .catch((err: AxiosError) => {
      console.log(err);
      this.setState({ errorMessage: err.message }); 
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
        <InputField name="username" 
                    label="Username" 
                    value={this.state.username} 
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