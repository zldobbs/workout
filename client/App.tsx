import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';

// Views
import Landing from './app/views/Landing.view';

// Styles 
import { Colors } from './app/styles/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Landing></Landing>
      <StatusBar style="auto" />
    </View>
  );
}

// Define endpoint of the server for sending requests
// TODO Could find a better way to store this. config file? app.json? 
// TODO Will this server URL work for Apple? 
export const API_URL = "http://localhost:4000/api"

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Colors.black,
  }
});