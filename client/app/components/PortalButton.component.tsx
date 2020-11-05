import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';
import { Base, Typography, Colors, Spacing } from "../styles/index"; 

interface PortalButtonProps {
  color: string,
  title: string, 
  subtext: string
}

export default function PortalButton(props: PortalButtonProps) {
  const portalStyles = StyleSheet.create({
    portal: {
      width: "90%",
      backgroundColor: props.color,
      borderWidth: 1,
      borderColor: Colors.black,
      borderRadius: 10,
      ...Base.shadow,
      ...Spacing.separate
    },
    portalText: {
      color: Colors.white,
      fontWeight: "900",
      ...Typography.textShadow
    }
  })

  return(
    <View style={portalStyles.portal}>
      <Text style={[Typography.text, Typography.centerAlign, portalStyles.portalText]}>{props.title}</Text>
      <Text style={[Typography.text, Typography.centerAlign]}>{props.subtext}</Text>
    </View>
  );
}