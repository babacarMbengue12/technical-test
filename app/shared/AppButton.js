import React from "react";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
const AppButton = ({
  width,
  backgroundColor,
  titleStyle,
  small = false,
  titleColor,
  containerStyle,
  ...rest
}) => {
  if (!rest.disabled) {
    rest.disabled = rest.loading;
  }
  return (
    <Button
      {...rest}
      buttonStyle={{
        backgroundColor,
        paddingHorizontal: 10,
        borderRadius: 10,
        height: small ? 40 : 57,
      }}
      containerStyle={{
        alignSelf: "center",
        backgroundColor,
        borderRadius: 10,
        width,
        ...containerStyle,
      }}
      TouchableComponent={TouchableOpacity}
      titleStyle={{
        color: titleColor,
        fontSize: small ? 13 : 16,
        fontWeight: "600",
        backgroundColor: "transparent",
        fontFamily: "Mulish-Bold",
        letterSpacing: 1.5,
        ...titleStyle,
      }}
    />
  );
};
export const AppButtonOutline = ({
  width,
  titleStyle,
  titleColor,
  backgroundColor,
  ...rest
}) => {
  if (!rest.disabled) {
    rest.disabled = rest.loading;
  }
  return (
    <Button
      {...rest}
      buttonStyle={{
        backgroundColor: "transparent",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: backgroundColor,
      }}
      containerStyle={{
        alignSelf: "center",
        backgroundColor: "transparent",
        width,
      }}
      TouchableComponent={TouchableOpacity}
      titleStyle={{
        color: backgroundColor,
        textTransform: "uppercase",
        fontSize: 18,
        fontWeight: "bold",
        backgroundColor: "transparent",
        letterSpacing: 1.5,
        ...titleStyle,
      }}
    />
  );
};
export const OppButtonOutline = ({
  width,
  backgroundColor,
  titleStyle,
  titleColor,
  ...rest
}) => {
  if (!rest.disabled) {
    rest.disabled = rest.loading;
  }
  return (
    <Button
      {...rest}
      buttonStyle={{
        backgroundColor: "transparent",
        paddingVertical: 12,
        paddingHorizontal: 5,
      }}
      containerStyle={{
        alignSelf: "center",
        backgroundColor: "transparent",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: backgroundColor,
        width,
      }}
      TouchableComponent={TouchableOpacity}
      titleStyle={{
        color: backgroundColor,
        textTransform: "uppercase",
        fontSize: 12,
        fontWeight: "600",
        marginLeft: 3,
        backgroundColor: "transparent",
        letterSpacing: 2,
        ...titleStyle,
      }}
    />
  );
};
export const OppButton = ({
  width,
  backgroundColor,
  titleStyle,
  titleColor,
  small = false,
  ...rest
}) => {
  if (!rest.disabled) {
    rest.disabled = rest.loading;
  }
  return (
    <Button
      {...rest}
      buttonStyle={{
        backgroundColor,
        paddingVertical: small ? 4 : 12,
        paddingHorizontal: 5,
      }}
      containerStyle={{
        alignSelf: "center",
        backgroundColor,
        borderRadius: small ? 4 : 10,
        width,
      }}
      TouchableComponent={TouchableOpacity}
      titleStyle={{
        color: "#FFF",
        textTransform: "uppercase",
        fontSize: small ? 10 : 12,
        fontWeight: "bold",
        marginLeft: 3,
        backgroundColor: "transparent",
        letterSpacing: 2,
        ...titleStyle,
      }}
    />
  );
};
export const RoundedButton = ({ width, backgroundColor, ...rest }) => {
  if (!rest.disabled) {
    rest.disabled = rest.loading;
  }
  return (
    <Button
      {...rest}
      buttonStyle={{
        backgroundColor,
        paddingVertical: 12,
        paddingHorizontal: 5,
        height: width,
        borderRadius: width,
        width,
      }}
      TouchableComponent={TouchableOpacity}
      containerStyle={{
        backgroundColor,
        alignItems: "center",
        borderRadius: width,
        justifyContent: "center",
      }}
    />
  );
};
export const RoundedButtonOutline = ({ width, backgroundColor, ...rest }) => {
  if (!rest.disabled) {
    rest.disabled = rest.loading;
  }
  return (
    <Button
      buttonStyle={{
        backgroundColor: "transparent",
        paddingVertical: 12,
        paddingHorizontal: 5,
        height: width,
        borderRadius: width,
        borderWidth: 1,
        borderColor: backgroundColor,
        width,
      }}
      TouchableComponent={TouchableOpacity}
      titleStyle={{ color: backgroundColor }}
      containerStyle={{
        backgroundColor: "transparent",
        alignItems: "center",
        borderRadius: width,
        justifyContent: "center",
      }}
      {...rest}
    />
  );
};

export default AppButton;

export function TransparentButton({ titleStyle, ...rest }) {
  return (
    <Button
      {...rest}
      buttonStyle={{
        backgroundColor: "transparent",
        paddingVertical: 12,
        paddingHorizontal: 10,
      }}
      TouchableComponent={TouchableOpacity}
      containerStyle={{
        backgroundColor: "trnasparent",
      }}
      titleStyle={{
        fontSize: 18,
        fontWeight: "bold",
        backgroundColor: "transparent",
        letterSpacing: 3,
        ...titleStyle,
      }}
    />
  );
}
