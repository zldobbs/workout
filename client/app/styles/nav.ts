import { StyleSheet } from "react-native"; 
import { Colors } from "./colors";
import { Spacing } from "./spacing";

// Styles regarding input forms  
export const Nav = StyleSheet.create({
  navBar: {
    width: "100%",
    height: "12.5%", 
    paddingTop: "10%", 
    backgroundColor: Colors.foreground,
    flexDirection: "row"
  },
  navCell: {
    width: "33.333%",
    justifyContent: "center"
  },
  selected: {
    backgroundColor: Colors.foreground2
  },
  dormant: {
    backgroundColor: Colors.foreground
  }
});