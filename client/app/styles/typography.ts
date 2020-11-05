import { StyleSheet } from "react-native"; 
import { Colors } from "./colors";

// Styles regarding input forms  
export const Typography = StyleSheet.create({
  logoText: {
    fontSize: 72, 
    fontStyle: "italic",
    color: Colors.foreground
  },
  headingText: {
    fontSize: 28, 
    color: Colors.foreground,
    fontWeight: "900"
  },
  text: {
    fontSize: 18, 
    color: Colors.text
  },
  smallText: {
    fontSize: 12, 
    color: Colors.text
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
  },
  textShadow: {
    textShadowOffset: {
      width: 0.5, 
      height: 0.5
    },
    textShadowRadius: 2.5,
    textShadowColor: Colors.black
  }
});