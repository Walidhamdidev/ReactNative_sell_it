import Wrapper from "../components/Wrapper";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import * as Yup from "yup";

import apiAuth from "../api/auth";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object({
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("ُEmail"),
  password: Yup.string().required().min(8).label("Password"),
});

const RegisterScreen = () => {
  const { signUp } = useAuth();
  const [registerFailed, setRegisterFailed] = useState(false);
  const registeredApi = useApi(apiAuth.register);

  const handleSubmit = async ({ username, email, password }: any) =>
    // { resetForm }: { resetForm: () => void }
    {
      const result = await registeredApi.request(username, email, password);
      if (!result.ok) return setRegisterFailed(true);
      setRegisterFailed(false);
      const data = result.data as any;
      signUp(data);
    };

  return (
    <>
      <ActivityIndicator visible={registeredApi.loading} />
      <Wrapper style={{ padding: 20 }}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {registerFailed && (
            <ErrorMessage
              visible={registerFailed}
              error={registeredApi.error}
            />
          )}

          <AppFormField name="name" icon="account" placeholder="Name" />
          <AppFormField
            name="email"
            icon="email"
            placeholder="Email"
            autoCapitalize="none"
          />
          <AppFormField
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />

          <SubmitButton label="Register" />
        </AppForm>
      </Wrapper>
    </>
  );
};

export default RegisterScreen;
