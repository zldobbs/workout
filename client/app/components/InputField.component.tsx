import React from 'react'; 
import { Text, TextInput } from 'react-native';
import { Input, Typography } from "../styles/index"; 

interface InputFieldProps {
  name: string, 
  label: string,
  changeHandler: Function
  value?: string,
  secure?: boolean 
}

export default function InputField(props: InputFieldProps) {
  return(
    <>
      <Text style={Typography.smallText}>{props.label}</Text>
      <TextInput style={Input.textInput} secureTextEntry={props.secure ? props.secure : false} onChangeText={text => props.changeHandler(props.name, text)} value={props.value}></TextInput>
    </>
  );
}