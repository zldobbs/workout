import { StyleSheet } from "react-native"; 
import { Colors } from "./colors";
import { Spacing } from "./spacing"; 

// Styles regarding input forms  
export const Base = StyleSheet.create({
  container: {
    ...Spacing.centered,
    padding: "10%",
    backgroundColor: Colors.black
  }
});