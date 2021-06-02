import React from "react";
import { Text } from "react-native";

export const NormalText = (props) => {
  return (
    <Text {...props} style={[{ fontFamily: "Mulish-Regular" }, props.style]} />
  );
};

export const BoldText = (props) => {
  return (
    <NormalText
      {...props}
      style={[props.style, { fontWeight: "bold", fontFamily: "Mulish-Bold" }]}
    />
  );
};

export function TextLight(props) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "Montserrat-Light" }]}
    />
  );
}
