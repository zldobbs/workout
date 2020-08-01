import { StyleSheet } from 'react-native'; 
import { Colors } from './colors';

// Styles regarding input forms  
export const Input = StyleSheet.create({
  textInput: {
    height: 40,
    width: 250,  
    backgroundColor: Colors.white, 
    borderColor: Colors.black, 
    borderRadius: 5,
    borderWidth: 1,
    padding: 5
  }
});