import React from "react";
import { View } from "react-native";

const Separator = ({ backgroundColor = "#EEE" }) => {
  return <View style={{ height: 0.8, backgroundColor, width: "100%" }} />;
};

export default Separator;
