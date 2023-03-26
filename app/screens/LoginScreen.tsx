import { Image, StyleSheet } from "react-native";
import Wrapper from "../components/Wrapper";

import * as Yup from "yup";
import {
  ErrorMessage,
  AppFormField,
  SubmitButton,
  AppForm,
} from "../components/forms";
import authApi from "../api/auth";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);
  const loginApi = useApi(authApi.login);

  const handleSubmit = async ({ email, password }: any) =>
    // { resetForm }: { resetForm: () => void }
    {
      const result = await loginApi.request(email, password);
      if (!result.ok) return setLoginFailed(true);
      setLoginFailed(false);
      const data = result.data as any;
      logIn(data);
    };

  return (
    <>
      <ActivityIndicator visible={loginApi.loading} />
      <Wrapper style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />

        <AppForm
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {loginFailed && (
            <ErrorMessage visible={loginFailed} error={loginApi.error} />
          )}
          <AppFormField
            icon="email"
            name="email"
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <AppFormField
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />
          <SubmitButton label="Login" />
        </AppForm>
      </Wrapper>
    </>
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
