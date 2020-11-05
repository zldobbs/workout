import { StyleSheet } from "react-native"; 
import { Colors } from "./colors";
import { Spacing } from "./spacing"; 

// Styles regarding input forms  
export const Base = StyleSheet.create({
  container: {
    flex: 1, 
    padding: "10%",
    backgroundColor: Colors.background
  },
  centeredContainer: {
    ...Spacing.centered, 
    backgroundColor: Colors.background
  },
  fluidContainer: {
    flex: 1,
    backgroundColor: Colors.background
  },
  shadow: {
    shadowOffset: {
      width: 2, 
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 5
  }
});