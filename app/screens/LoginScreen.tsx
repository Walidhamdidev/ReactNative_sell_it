import { Image, StyleSheet } from "react-native";
import Wrapper from "../components/Wrapper";

import * as Yup from "yup";
import {
  ErrorMessage,
  AppFormField,
  SubmitButton,
  AppForm,
} from "../components/forms";
import apiAuth from "../api/auth";
import { useContext, useState } from "react";
import AuthContext from "../auth/context";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }: any) => {
    const response = await apiAuth.login(email, password);
    if (!response.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const { user } = response.data as any;
    authContext.setUser(user);
  };

  return (
    <Wrapper style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {loginFailed && (
          <ErrorMessage
            visible={loginFailed}
            error="Incorrect email and/or password."
          />
        )}
        <AppFormField
          icon="email"
          name="email"
          placeholder="Email"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          autoCorrect={false}
        />
        <SubmitButton label="Login" />
      </AppForm>
    </Wrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    alignSelf: "center",
    marginVertical: 24,
    width: 70,
    height: 70,
  },
});
