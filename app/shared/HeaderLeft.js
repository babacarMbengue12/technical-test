import React from "react";
import { BackHandler, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const HeaderLeft = ({ color, icon }) => {
  const navigation = useNavigation();
  const onPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      Alert.alert("", "Voulez-vous quitter l'application ?", [
        { text: "Oui", onPress: () => BackHandler.exitApp() },
        { text: "Non", style: "cancel" },
      ]);
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ position: "relative", paddingLeft: 0 }}
    >
      <MaterialIcons
        name={icon ? icon : "keyboard-arrow-left"}
        size={35}
        color={color || "#FFF"}
      />
    </TouchableOpacity>
  );
};

export default HeaderLeft;

export const HeaderArrowLeft = ({ color }) => {
  const navigation = useNavigation();
  const onPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      Alert.alert("", "Exit app ?", [
        { text: "Oui", onPress: () => BackHandler.exitApp() },
        { text: "Non", style: "cancel" },
      ]);
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ position: "relative", paddingVertical: 10, paddingLeft: 10 }}
    >
      <SimpleLineIcons name="arrow-left" color={color || "#FFF"} size={20} />
    </TouchableOpacity>
  );
};
