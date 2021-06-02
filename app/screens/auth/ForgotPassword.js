import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/constants";
import AppButton from "../../shared/AppButton";
import Input from "./../../shared/Input";
import Popup from "./../../shared/Popup";
import { NormalText, TextLight } from "./../../shared/Texts";
import { MaterialIcons } from "@expo/vector-icons";
import { userFormValidation, useFormData } from "./Form";
import { requestPasswordReset } from "../../utils/http/user";

function ForgotPassword({ navigation }) {
  const [data, onChange] = useFormData({
    email: "",
  });
  const [visible, setVisisble] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, validate, setErrors] = userFormValidation({}, (Yup) => ({
    email: Yup.string().email().required().label("Email"),
  }));

  const Modal = (email) => {
    return (
      <Popup
        onHide={() => {
          setVisisble(false);
        }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ padding: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "rgba(0, 0, 0, 0.7)",
                fontSize: 20,
                fontWeight: "600",
              }}
            ></Text>
            <TouchableOpacity
              onPress={() => {
                setVisisble(false);
                navigation.navigate("ResetPassword", { email: email });
              }}
            >
              <MaterialIcons name="close" size={24} color="#FB0B0B" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.app1,
                  textAlign: "center",
                  paddingTop: 20,
                }}
              >
                Un code vous a été envoyé avec succès
              </Text>
            </View>
          </View>
        </ScrollView>
      </Popup>
    );
  };

  const onSubmit = React.useCallback(async () => {
    validate(data)
      .then(async () => {
        setLoading(true);
        try {
          const user = {
            email: data.email,
          };

          await requestPasswordReset(user);
          setVisisble(true);
        } catch (err) {
          const message = err.response?.data?.message;
          if (message) {
            setErrors({ email: message });
          } else {
            setErrors({ email: "user with this email was not found" });
          }
          console.log("error");
        }
        setLoading(false);
      })
      .catch((ex) => {
        console.log("errr", ex);
      });
  });

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#FFF" }}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    >
      {visible && <Modal email={data.email} />}
      <View style={{ marginTop: 58 }}>
        <TextLight
          style={{
            fontSize: 16,
            color: "rgba(0,0,0,.6)",
            marginVertical: 30,
            color: COLORS.app3,
          }}
        >
          Veuillez entrer votre email. Nous vous enverrons un lien pour modifier
          le mot de passe
        </TextLight>
      </View>

      <Input
        error={errors.email}
        label="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
        leftIcon={{ name: "email", color: "#5A5A5A", size: 18 }}
        value={data.email}
        onChange={(value) => {
          onChange("email", value);
        }}
      />
      <AppButton
        width={"100%"}
        onPress={onSubmit}
        titleColor="#FFF"
        loading={loading}
        disabled={loading}
        title="Soumettre"
        backgroundColor={COLORS.app1}
        containerStyle={{
          marginTop: 20,
        }}
      />
      <View style={{ alignItems: "center", paddingRight: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPassword", { email: "" })}
        >
          <NormalText
            style={{
              color: "#083451",
              opacity: 0.7,
              fontFamily: "Mulish-Bold",
              fontSize: 12,
              marginTop: 60,
            }}
          >
            J'ai déjà un code
          </NormalText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default ForgotPassword;
