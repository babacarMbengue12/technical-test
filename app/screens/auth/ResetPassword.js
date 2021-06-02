import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import APpButton from "../../shared/AppButton";
import { PasswordReset } from "../../utils/http/user";
import { COLORS } from "../../constants/constants";
import Input from "./../../shared/Input";
import Popup from "./../../shared/Popup";
import { TextLight } from "./../../shared/Texts";
import { MaterialIcons } from "@expo/vector-icons";
import { userFormValidation, useFormData } from "./Form";
import AppButton from "../../shared/AppButton";

function ResetPassword({ navigation, route }) {
  const [data, onChange] = useFormData({
    email: "",
    password_confirmation: "",
    code: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, validate, setErrors] = userFormValidation({}, (Yup) => ({
    email: Yup.string().email().required().label("Email"),
    code: Yup.string().required().label("Code"),
    password: Yup.string().required().label("Mot de passe"),
    password_confirmation: Yup.string()
      .required()
      .label("Confirmer Mot de passe")
      .test(
        "passwords-match",
        "Confirmer mot de passe must match Mot De Passe",
        function (value) {
          return this.parent.password === value;
        }
      ),
  }));

  const onSubmit = React.useCallback(async () => {
    validate(data)
      .then(async () => {
        setLoading(true);
        try {
          const user = {
            email: data.email,
            code: data.code,
            new_password: data.password,
            new_password_confirm: data.password_confirmation,
          };

          await PasswordReset(user);

          Alert.alert(
            "Félicitation",
            "Votre mot de passe a été modifier avec succes",
            [{ text: "OK", onPress: () => navigation.replace("Login") }]
          );
        } catch (err) {
          console.log(err);
          console.log(err.response);
          if (err?.response?.data?.message) {
            setErrors({ code: err?.response?.data?.message });
          }
          setLoading(false);
        }
        setLoading(false);
      })
      .catch((ex) => {});
  });

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#FFF" }}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    >
      <View style={styles.header}>
        <TextLight
          style={{
            fontSize: 16,
            color: "rgba(0,0,0,.6)",
            marginVertical: 30,
          }}
        >
          Veuillez entrer votre code puis modifier votre mot de passe
        </TextLight>
      </View>

      <Input
        error={errors.code}
        label="code"
        value={data.code}
        onChange={(value) => {
          onChange("code", value);
        }}
      />
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

      <Input
        error={errors.password}
        label="Mot de passe"
        secureTextEntry={true}
        leftIcon={{ name: "lock", color: "#A8A8A8", size: 18 }}
        enableShowPassword
        value={data.password}
        onChange={(value) => {
          onChange("password", value);
        }}
      />

      <Input
        error={errors.password_confirmation}
        label="Confirmer Mot de passe"
        secureTextEntry={true}
        leftIcon={{ name: "lock", color: "#A8A8A8", size: 18 }}
        enableShowPassword
        value={data.password_confirmation}
        onChange={(value) => {
          onChange("password_confirmation", value);
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
    </ScrollView>
  );
}

export default ResetPassword;
class ResetPasswor extends React.Component {
  state = {
    errors: {},
    email: "",
    password: "",
    password_confirmation: "",
    code: "",
  };
  Schema = Validator.object().shape({
    email: Validator.string().email().required().label("Adresse Mail"),
  });

  async submit() {
    const { password, password_confirmation, email, code } = this.state;

    if (email) {
      try {
        const user = {
          email: email,
          code: code,
          new_password: password,
          new_password_confirm: password_confirmation,
        };

        await PasswordReset(user);
        Alert.alert(
          "Félicitations",
          "Vous avez changé votre mot de passe",
          [
            {
              text: "OK",
              onPress: () => this.props.navigation.replace("Login"),
            },
          ],
          { cancelable: false }
        );
      } catch (error) {
        console.log("error LOGIN", error.response);
        /* if (error.response.status == 400) {
          this.setState({
            errors: { email: "Vos identifiants sonts incorrectes" },
          });
        } else if (error.response.status == 401) {
          this.setState({
            errors: { email: "Non autorisée" },
          });
        } else if (error.response.status == 500) {
          this.setState({
            errors: {
              email: "La requête n'arrive pas accéder au serveur distant",
            },
          });
        } else if (error.response.status == 502) {
          this.setState({
            errors: {
              email: "Le serveur est indisponible",
            },
          });
        } */
      }
    } else {
      this.setState({
        errors: { email: "Vos identifiants sonts incorrectes" },
      });
    }
    this.setState({ loading: false });
  }
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: "#FFF" }}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <View style={styles.header}>
          <TextLight
            style={{
              fontSize: 16,
              color: "rgba(0,0,0,.6)",
              marginVertical: 30,
            }}
          >
            Veuillez entrer votre code puis modifier votre mot de passe
          </TextLight>
        </View>

        {this.renderInput("code", "Code", {
          autoCapitalize: "none",
          //leftIcon: this.renderIcon("email"),
        })}
        {this.renderInput("email", "Adresse mail", {
          autoCapitalize: "none",
          // leftIcon: this.renderIcon("email"),
        })}
        {this.renderInput("password", "Nouveau mot de passe", {
          secureTextEntry: true,
        })}
        {this.renderInput("password_confirmation", "Confirmer Mot de passee", {
          secureTextEntry: true,
        })}
        {this.renderButton("SOUMETTRE")}
        {/* <View style={styles.footer}>
          <APpButton
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
            title="SOUMETTRE"
          />
        </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    margin: 10,
  },

  header: {
    marginTop: 58,
  },

  andutitle: {
    top: 0,
    width: 156,
    height: 84,
    position: "absolute",
    marginLeft: 100,
    marginTop: -55,
  },

  footer: {
    justifyContent: "center",
    marginTop: 38,
    paddingHorizontal: 20,
  },
  inputView: {
    marginTop: 20,
    marginStart: 20,
    marginEnd: 20,
  },
});
