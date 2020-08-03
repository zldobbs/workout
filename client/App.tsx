import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';

// Views
import Landing from './app/views/Landing.view';
import Dashboard from './app/views/Dashboard.view';

// Styles 
import { Colors } from './app/styles/index';

// TODO... 
// - Figure out efficient router/navigation
// - Implement some tests 
// - Error messages for Login/Register forms 
// - Implement redux 
export default function App() {
  return (
    <View style={styles.container}>
      <Landing></Landing>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Colors.black,
  }
});