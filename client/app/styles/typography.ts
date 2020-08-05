import { StyleSheet } from "react-native"; 
import { Colors } from "./colors";

// Styles regarding input forms  
export const Typography = StyleSheet.create({
  logoText: {
    fontSize: 72, 
    color: Colors.green
  },
  headingText: {
    fontSize: 28, 
    color: Colors.green
  },
  text: {
    fontSize: 18, 
    color: Colors.white
  },
  smallText: {
    fontSize: 12, 
    color: Colors.white
  },
  centerAlign: {
    textAlign: "center"
  },
  leftAlign: {
    textAlign: "left"
  },
  errorText: {
    fontSize: 12,
    margin: "2.5%", 
    padding: "2.5%",  
    color: Colors.white, 
    backgroundColor: Colors.red
  }
});