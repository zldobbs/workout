import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';
import { Typography, Spacing } from '../styles/index';
import RegisterForm from '../components/RegisterForm.component';
import LoginForm from '../components/LoginForm.component';


// Display to users that need to login or register before accessing app 
export default function Landing() {
  return(
    <View style={styles.container}>
      <Text style={Typography.headingText}>WORKOUT</Text>
      <Text style={Typography.text}>Register or sign in to collaborate and reach your fitness goals today!</Text>
      <RegisterForm></RegisterForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Spacing.centered,
    padding: "10%",
  }
});